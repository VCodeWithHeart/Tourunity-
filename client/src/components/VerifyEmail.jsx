import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlaneIcon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useApi from "@/hooks/useApi";
import { notify } from "./toast/notify";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(
    location.state?.email || localStorage.getItem("verificationEmail") || ""
  );
  const [isEditingEmail, setIsEditingEmail] = useState(!email);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const [errorMessage, setErrorMessage] = useState("");
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);

  const { post, isLoading } = useApi();

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleChange = (index, value) => {
    const val = value.slice(-1);
    if (val && !/^\d$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    const digits = pastedData.replace(/\D/g, "").slice(0, 6).split("");
    if (digits.length > 0) {
      const newOtp = [...otp];
      digits.forEach((digit, idx) => {
        if (idx < 6) newOtp[idx] = digit;
      });
      setOtp(newOtp);
      const nextFocusIdx = Math.min(digits.length, 5);
      inputRefs.current[nextFocusIdx]?.focus();
    }
  };

  const handleVerify = async (e) => {
    e?.preventDefault();
    setErrorMessage("");
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setErrorMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    const response = await post("/verify-otp", {
      email: email.trim(),
      enteredOtp,
    });
    if (response?.success) {
      notify?.success(response?.message || "Email verified successfully");
      localStorage.removeItem("verificationEmail");
      navigate("/login");
    } else {
      const errText =
        response?.message || "Verification failed. Please try again.";
      setErrorMessage(errText);
      notify?.error(errText);
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0 || isResending || isLoading) return;
    setErrorMessage("");
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    setIsResending(true);
    const response = await post("/resend-otp", { email: email.trim() });
    setIsResending(false);

    if (response?.success) {
      notify?.success(
        response?.message || "Verification code resent successfully"
      );
      setResendTimer(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } else {
      const errText = response?.message || "Failed to resend code.";
      setErrorMessage(errText);
      notify?.error(errText);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(/images/IslandsAndShips.png)" }}
    >
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-xl">
        <CardHeader className="text-center space-y-2">
          <PlaneIcon className="h-12 w-12 mx-auto text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Verify Your Email</h1>
          <p className="text-sm text-gray-500">
            We've sent a verification code to your email address.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleVerify} className="space-y-6">
            {!isEditingEmail ? (
              <div className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 rounded-lg border border-gray-200/60">
                <span className="text-sm font-medium text-gray-700 truncate max-w-[240px]">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditingEmail(true)}
                  className="text-xs font-semibold text-green-600 hover:text-green-700 hover:underline cursor-pointer ml-1 shrink-0"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600">
                  Email Address
                </label>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-gray-50 border-gray-200 text-sm"
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      if (email.trim()) {
                        setIsEditingEmail(false);
                        localStorage.setItem(
                          "verificationEmail",
                          email.trim()
                        );
                      }
                    }}
                    className="bg-green-600 text-white hover:bg-green-700 shrink-0 cursor-pointer"
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}

            <div
              className="flex justify-between gap-1.5 sm:gap-2 my-4"
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-11 sm:w-12 h-11 sm:h-12 text-center text-xl font-bold bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-gray-800 transition-all shadow-sm"
                />
              ))}
            </div>

            {errorMessage ? (
              <div className="p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm text-center font-medium">
                {errorMessage}
              </div>
            ) : null}

            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                disabled={isLoading || isResending}
                className="w-full bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600 text-white hover:text-green-600 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={resendTimer > 0 || isResending || isLoading}
                onClick={handleResend}
                className="w-full border-green-600 text-green-600 hover:bg-green-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resendTimer > 0
                  ? `Resend OTP (${resendTimer}s)`
                  : isResending
                  ? "Resending..."
                  : "Resend OTP"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500 text-center">
            Back to{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

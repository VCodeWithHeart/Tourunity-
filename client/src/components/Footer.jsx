import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Plane } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { notify } from "@/components/toast/notify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { isAuthenticated, logout } = useAuth();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    notify.success("Thank you for subscribing to Tourunity!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white group"
            >
              <Plane className="h-6 w-6 text-green-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Tourunity</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Discover breathtaking destinations, join group tours, and create
              unforgettable travel memories together.
            </p>
            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-gray-900/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-gray-900/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-gray-900/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-gray-900/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/tour-groups"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Tour Groups
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Account
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/wishlist"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/bookings"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    className="hover:text-green-400 transition-colors duration-200 text-left cursor-pointer"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="hover:text-green-400 transition-colors duration-200"
                  >
                    Login / Signup
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to get curated destination guides and special group tour updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus-visible:ring-green-500 focus-visible:border-green-500 h-10 text-sm"
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium h-10 px-5 cursor-pointer transition-colors duration-200 shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Tourunity. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
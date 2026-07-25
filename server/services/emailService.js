const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const { getOtpEmailTemplate } = require("../templates/otpEmailTemplate");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER_EMAIL,
        pass: process.env.SMTP_USER_PASS,
    }
});

async function testConnection() {
    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
    } catch (err) {
        console.error("Verification failed:", err);
    }
}

testConnection();

async function sendOtp(email, otp) {
    try {
        const info = await transporter.sendMail({
            from: `"Tourunity" <${process.env.SMTP_USER_EMAIL}>`,
            to: email,
            subject: `${otp} is your Tourunity verification code`,
            text: `Your Tourunity verification code is: ${otp}. It will expire in 10 minutes.`,
            html: getOtpEmailTemplate(otp)
        });

        console.log('Message Id', info?.messageId)
    } catch (err) {
        console.error("Failed to send OTP:", err);
    }
}

module.exports = {
    transporter,
    sendOtp
};
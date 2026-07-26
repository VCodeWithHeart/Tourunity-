const crypto = require("crypto");
const bcrypt = require("bcrypt");

/**
 * Generates a 6-digit random OTP, hashes it with bcrypt, and calculates expiry timestamp.
 * @param {number} expiryMinutes - Expiry duration in minutes (defaults to 10)
 * @returns {Promise<{otp: string, hashedOtp: string, otpExpiresAt: Date}>}
 */
const generateOtp = async (expiryMinutes = 10) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  const hashedOtp = await bcrypt.hash(otp, 10);
  const otpExpiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

  return { otp, hashedOtp, otpExpiresAt };
};

module.exports = {
  generateOtp,
};

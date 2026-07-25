/**
 * Generates responsive, modern HTML for OTP verification emails.
 * Uses Tourunity's trademark green theme (#16a34a / #059669).
 * 
 * @param {string|number} otp - The one-time passcode to display
 * @returns {string} HTML string
 */
function getOtpEmailTemplate(otp) {
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tourunity OTP Verification</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f7f5; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(22, 163, 74, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03); border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header Banner (Tourunity Trademark Green Gradient) -->
          <tr>
            <td style="background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #059669 100%); padding: 32px 24px; text-align: center;">
              <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); border-radius: 50%; padding: 12px; margin-bottom: 12px; backdrop-filter: blur(4px);">
                <span style="font-size: 28px; line-height: 1;">✈️</span>
              </div>
              <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">Tourunity</h1>
              <p style="color: #dcfce7; font-size: 12px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 1.8px; font-weight: 700;">Account Verification</p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 36px 32px; text-align: center;">
              <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin: 0 0 12px 0;">Verification Code</h2>
              <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 28px 0;">
                Please use the One-Time Password (OTP) below to verify your account. This code is valid for <strong style="color: #16a34a;">10 minutes</strong>.
              </p>

              <!-- OTP Code Display (Tourunity Green Theme) -->
              <div style="background: #f0fdf4; border: 2px dashed #86efac; border-radius: 12px; padding: 18px 24px; margin: 0 auto 28px auto; max-width: 260px;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #16a34a; display: block; padding-left: 8px;">${otp}</span>
              </div>

              <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin: 0;">
                If you didn't request this code, you can safely ignore this email. Someone might have entered your address by mistake.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #f1f5f9; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                &copy; ${currentYear} Tourunity. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

module.exports = { getOtpEmailTemplate };

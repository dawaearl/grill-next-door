require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const QRCode = require('qrcode');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ==========================================================================
// Table Assignment Logic
// ==========================================================================

function assignTable(guests, location) {
    const count = parseInt(guests, 10);
    if (location === 'The Hidden Alley') {
        if (count <= 2) return `Table ${Math.floor(Math.random() * 5) + 1}`;  // Tables 1-5 (intimate booths)
        if (count <= 4) return `Table ${Math.floor(Math.random() * 5) + 6}`;  // Tables 6-10 (mid-size)
        return `Table ${Math.floor(Math.random() * 5) + 11}`;                  // Tables 11-15 (group)
    } else {
        // The Downtown Loft — Westlands
        if (count <= 2) return `Loft Table ${Math.floor(Math.random() * 4) + 1}`;  // Loft Tables 1-4
        if (count <= 4) return `Loft Table ${Math.floor(Math.random() * 4) + 5}`;  // Loft Tables 5-8
        return `Loft Table ${Math.floor(Math.random() * 4) + 9}`;                   // Loft Tables 9-12
    }
}

// ==========================================================================
// Booking Reference Generator
// ==========================================================================

function generateBookingRef() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let ref = 'GND-';
    for (let i = 0; i < 4; i++) ref += chars[Math.floor(Math.random() * chars.length)];
    ref += '-';
    for (let i = 0; i < 4; i++) ref += chars[Math.floor(Math.random() * chars.length)];
    return ref;
}

// ==========================================================================
// Email HTML Builder
// ==========================================================================

function buildEmailHTML(data, qrCodeBase64) {
    const { bookingRef, name, location, date, time, guests, table, notes } = data;

    const locationAddress = location === 'The Hidden Alley'
        ? 'Kilmarnock Road, Kilimani, Nairobi'
        : '8th Floor, Westlands Heights, Westlands, Nairobi';

    const locationPhone = location === 'The Hidden Alley'
        ? '+254 712 345 678'
        : '+254 789 012 345';

    const notesRow = notes
        ? `<tr>
            <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; width: 40%;">Special Notes</td>
            <td style="padding: 10px 16px; color: #222; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f0f0f0;">${notes}</td>
           </tr>`
        : '';

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reservation Confirmed — Grill next Door</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Georgia, 'Times New Roman', serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.10);">

          <!-- AMBER HEADER BAR -->
          <tr>
            <td style="background: linear-gradient(135deg, #b87333 0%, #d4a843 50%, #b87333 100%); padding: 32px 40px; text-align: center;">
              <p style="margin:0 0 6px 0; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,0.8);">Your Neighborhood's Best Kept Secret</p>
              <h1 style="margin:0; font-size: 32px; color: #ffffff; font-weight: 400; letter-spacing: 2px;">Grill next Door</h1>
            </td>
          </tr>

          <!-- THANK YOU SECTION -->
          <tr>
            <td style="padding: 36px 40px 20px; text-align: center; border-bottom: 1px solid #f0f0f0;">
              <div style="display:inline-block; background:#fff8ee; border: 1px solid #e8c87a; border-radius: 50%; width: 56px; height: 56px; line-height: 56px; font-size: 28px; margin-bottom: 16px;">✓</div>
              <h2 style="margin: 0 0 10px; font-size: 26px; color: #1a1a1a; font-weight: 600;">Reservation Confirmed</h2>
              <p style="margin: 0; font-size: 15px; color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
                Thank you, <strong>${name}</strong>. We are delighted to welcome you to <em>Grill next Door</em>.<br>
                Your table has been reserved and we look forward to an exceptional evening together.
              </p>
            </td>
          </tr>

          <!-- BOOKING REFERENCE BADGE -->
          <tr>
            <td style="padding: 20px 40px; text-align: center; background: #fffdf7;">
              <p style="margin: 0 0 6px; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #999;">Booking Reference</p>
              <p style="margin: 0; font-family: 'Courier New', monospace; font-size: 22px; font-weight: 700; color: #b87333; letter-spacing: 3px;">${bookingRef}</p>
            </td>
          </tr>

          <!-- RESERVATION DETAILS TABLE -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #f0f0f0; border-radius: 8px; overflow: hidden;">
                <tr style="background: #fafafa;">
                  <td colspan="2" style="padding: 12px 16px; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; border-bottom: 1px solid #f0f0f0;">Reservation Details</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif; width: 40%;">Guest Name</td>
                  <td style="padding: 10px 16px; color: #222; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">${name}</td>
                </tr>
                <tr style="background: #fafafa;">
                  <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">Location</td>
                  <td style="padding: 10px 16px; color: #222; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">${location}<br><span style="font-weight:400; color:#888; font-size:12px;">${locationAddress}</span></td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">Date &amp; Time</td>
                  <td style="padding: 10px 16px; color: #222; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">${date} at ${time}</td>
                </tr>
                <tr style="background: #fafafa;">
                  <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">Table Assigned</td>
                  <td style="padding: 10px 16px; color: #b87333; font-size: 14px; font-weight: 700; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">${table}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">Guests</td>
                  <td style="padding: 10px 16px; color: #222; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f0f0f0; font-family: Arial, sans-serif;">${guests} ${parseInt(guests) === 1 ? 'Guest' : 'Guests'}</td>
                </tr>
                ${notesRow}
              </table>
            </td>
          </tr>

          <!-- QR CODE SECTION -->
          <tr>
            <td style="padding: 24px 40px; text-align: center; background: #fafafa; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0;">
              <p style="margin: 0 0 6px; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999;">Show this to your host upon arrival</p>
              <p style="margin: 0 0 16px; font-family: Arial, sans-serif; font-size: 13px; color: #666;">Your waiter/waitress will scan this to pull up your booking instantly.</p>
              <img src="cid:qrcode" alt="Reservation QR Code" width="180" height="180" style="border: 6px solid #ffffff; box-shadow: 0 2px 12px rgba(0,0,0,0.12); border-radius: 8px;" />
              <p style="margin: 12px 0 0; font-family: 'Courier New', monospace; font-size: 13px; color: #b87333; font-weight: 700;">${bookingRef}</p>
            </td>
          </tr>

          <!-- DRESS CODE NOTE -->
          <tr>
            <td style="padding: 20px 40px; text-align: center;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; color: #888; line-height: 1.6;">
                🎩 <strong>Dress Code:</strong> Smart Casual / Elegant &nbsp;|&nbsp; 📞 ${locationPhone}
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background: #1a1a1a; padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 6px; font-size: 16px; color: #d4a843; font-weight: 600; letter-spacing: 1px;">Grill next Door</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #888; line-height: 1.6;">
                ${locationAddress}<br>
                © 2026 Grill next Door. Crafted with care for couples &amp; gastronomes.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ==========================================================================
// POST /api/reserve — Main Reservation Endpoint
// ==========================================================================

app.post('/api/reserve', async (req, res) => {
    try {
        const { name, email, phone, location, date, time, guests, notes } = req.body;

        // Validate required fields
        if (!name || !email || !location || !date || !time || !guests) {
            return res.status(400).json({ success: false, error: 'Missing required fields.' });
        }

        // Generate booking reference and assign table
        const bookingRef = generateBookingRef();
        const table = assignTable(guests, location);

        // Build QR code URL (encodes all booking params for staff scan page)
        const staffScanParams = new URLSearchParams({
            ref: bookingRef,
            name,
            email,
            phone: phone || '',
            location,
            date,
            time,
            table,
            guests,
            notes: notes || ''
        });
        const qrUrl = `${BASE_URL}/staff-scan.html?${staffScanParams.toString()}`;

        // Generate QR code as base64 PNG
        const qrCodeBase64 = await QRCode.toDataURL(qrUrl, {
            width: 300,
            margin: 2,
            color: { dark: '#1a1a1a', light: '#ffffff' }
        });
        // Strip the data:image/png;base64, prefix for nodemailer inline attachment
        const qrCodeBuffer = Buffer.from(qrCodeBase64.split(',')[1], 'base64');

        // Build email data object
        const emailData = { bookingRef, name, location, date, time, guests, table, notes };

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Send email
        await transporter.sendMail({
            from: `"Grill next Door Reservations" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `✅ Reservation Confirmed — ${bookingRef} | Grill next Door`,
            html: buildEmailHTML(emailData, qrCodeBase64),
            attachments: [
                {
                    filename: 'reservation-qr.png',
                    content: qrCodeBuffer,
                    cid: 'qrcode'  // Referenced in the email HTML as cid:qrcode
                }
            ]
        });

        res.json({ success: true, bookingRef, table });

    } catch (err) {
        console.error('Reservation error:', err);
        res.status(500).json({ success: false, error: 'Failed to process reservation. Please try again.' });
    }
});

// ==========================================================================
// Start Server
// ==========================================================================

app.listen(PORT, () => {
    console.log(`\n🔥 Grill next Door Backend running on http://localhost:${PORT}`);
    console.log(`📧 Email sender: ${process.env.GMAIL_USER || '(not configured — set GMAIL_USER in .env)'}`);
    console.log(`🌐 QR codes link to: ${BASE_URL}/staff-scan.html\n`);
});

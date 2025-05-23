const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text, html  }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, 
    },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent to", to);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

module.exports = sendEmail;

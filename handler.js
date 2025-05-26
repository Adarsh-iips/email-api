const nodemailer = require("nodemailer");

module.exports.sendEmail = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { receiver_email, subject, body_text } = data;

    if (!receiver_email || !subject || !body_text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: '"Serverless API" <no-reply@example.com>',
      to: receiver_email,
      subject,
      text: body_text,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        previewUrl: nodemailer.getTestMessageUrl(info),
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};

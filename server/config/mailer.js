// import dotenv from "dotenv";
// dotenv.config();

// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, // App Password
//   },
// });


// const testSMTP = async () => {
//   try {
//     await transporter.verify();
//     console.log("SMTP Ready ✅");
//   } catch (error) {
//     console.error("SMTP Error ❌", error);
//   }
// };

// testSMTP();
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: "rahulgupta97668@gmail.com",
  subject: "New Contact Message",
  html: `
    <h3>New message</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
});

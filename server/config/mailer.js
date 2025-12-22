import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
});


const testSMTP = async () => {
  try {
    await transporter.verify();
    console.log("SMTP Ready ✅");
  } catch (error) {
    console.error("SMTP Error ❌", error);
  }
};

testSMTP();

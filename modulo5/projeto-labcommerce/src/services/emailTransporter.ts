import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config()

export const transporter = nodemailer.createTransport({
 host: "smtp.bol.com.br",
 port: 587,
 secure: false,
 auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
 },
 tls: { ciphers: "SSLv3" }
})

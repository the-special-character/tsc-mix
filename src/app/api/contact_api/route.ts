import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    // console.log({ formData1111111111111111: formData });

    // const attachments: any[] = [];

    // // Get all files from formData
    // const files = formData.getAll("attachment");
    // for (const entry of files) {
    //   if (entry instanceof Blob) {
    //     const buffer = Buffer.from(await entry.arrayBuffer());
    //     attachments.push({
    //       filename: (entry as File).name || "attachment", // Cast to File to access `name` or provide a default
    //       content: buffer,
    //       contentType: entry.type,
    //     });
    //   }
    // }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    let emailContent = `<p>Dear ${formData.name || "Customer"},</p>
    <p>Thank you for reaching out to TSC IT-services. We have received your project inquiry and appreciate your interest in our services.</p>
    <p>Our team is reviewing the information you provided, and we will get back to you shortly to discuss your project in more detail.</p>
    <p>Here's a summary of the information you submitted:</p>
    <ul>`;

    // Append only the fields that are filled
    if (formData.name)
      emailContent += `<li><strong>Name:</strong> ${formData.name}</li>`;
    if (formData.email)
      emailContent += `<li><strong>Email:</strong> ${formData.email}</li>`;
    if (formData.phone)
      emailContent += `<li><strong>Phone:</strong> ${formData.phone}</li>`;
    if (formData.project_info)
      emailContent += `<li><strong>Project Information:</strong> ${formData.project_info}</li>`;
    // if (attachments.length > 0)
    //   emailContent += `<li><strong>Attachment(s):</strong> Attached below.</li>`;

    emailContent += `</ul>
    <p>If you have any immediate questions or additional information to share, please don't hesitate to reply to this email.</p>
    <p>We look forward to the opportunity to work with you and bring your project to life.</p>
    <p>Best regards,<br>Yagnesh Modh<br>CEO<br>TSC IT-services</p>`;

    // await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.DEFAULT_FROM,
      to: formData.email,
      cc: process.env.BCC_EMAIL,
      subject: "Thank you for your inquiry - TSC IT-services",
      html: emailContent,
      // attachments,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      {
        status: 500,
      }
    );
  }
}

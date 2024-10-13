import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const project_info = formData.get("project_info") as string;
    const attachments: any[] = [];

    // Get all files from formData
    const files = formData.getAll("attachment");
    for (const entry of files) {
      if (entry instanceof Blob) {
        const buffer = Buffer.from(await entry.arrayBuffer());
        attachments.push({
          filename: (entry as File).name || "attachment", // Cast to File to access `name` or provide a default
          content: buffer,
          contentType: entry.type,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    // const mailOptions = {
    //   from: process.env.DEFAULT_FROM,
    //   to: process.env.COMPANY_EMAIL,
    //   bcc: process.env.BCC_EMAIL,
    //   replyTo: email,
    //   subject: "New Project Inquiry",
    //   html: `
    //     <h2>New Project Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <h3>Project Information:</h3>
    //     <p>${project_info}</p>
    //   `,
    //   attachments: attachment
    //     ? [
    //         {
    //           filename: attachment.name,
    //           content: await attachment.arrayBuffer(),
    //         },
    //       ]
    //     : [],
    // };

    // let attachments = [];
    // if (attachment) {
    //   attachments.push({
    //     filename: attachment.name,
    //     content: Buffer.from(await attachment.arrayBuffer()),
    //     contentType: attachment.type,
    //   });
    // }

    let emailContent = `<p>Dear ${name || "Customer"},</p>
    <p>Thank you for reaching out to TSC IT-services. We have received your project inquiry and appreciate your interest in our services.</p>
    <p>Our team is reviewing the information you provided, and we will get back to you shortly to discuss your project in more detail.</p>
    <p>Here's a summary of the information you submitted:</p>
    <ul>`;

    // Append only the fields that are filled
    if (name) emailContent += `<li><strong>Name:</strong> ${name}</li>`;
    if (email) emailContent += `<li><strong>Email:</strong> ${email}</li>`;
    if (phone) emailContent += `<li><strong>Phone:</strong> ${phone}</li>`;
    if (project_info)
      emailContent += `<li><strong>Project Information:</strong> ${project_info}</li>`;
    if (attachments.length > 0)
      emailContent += `<li><strong>Attachment(s):</strong> Attached below.</li>`;

    emailContent += `</ul>
    <p>If you have any immediate questions or additional information to share, please don't hesitate to reply to this email.</p>
    <p>We look forward to the opportunity to work with you and bring your project to life.</p>
    <p>Best regards,<br>Yagnesh Modh<br>CEO<br>TSC IT-services</p>`;

    // await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.DEFAULT_FROM,
      to: email,
      bcc: process.env.BCC_EMAIL,
      subject: "Thank you for your inquiry - TSC IT-services",
      html: emailContent,
      attachments,
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

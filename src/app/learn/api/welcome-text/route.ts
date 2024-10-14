import { NextResponse } from "next/server";
import { Twilio } from "twilio";

export async function POST(req: Request) {
  const { phone, name } = await req.json();
  const body = `hello  ${name}`;
  const twilio = new Twilio(
    process.env.TWILIO_USERNAME,
    process.env.TWILIO_PASSWORD
  );

  try {
    await twilio.messages.create({
      to: phone,
      from: "+18605305726",
      body,
    });

    return NextResponse.json({
      success: true,
      message: "SMS sent successfully",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

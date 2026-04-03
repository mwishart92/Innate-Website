import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const brevo = require("@getbrevo/brevo");
let apiInstance = new brevo.TransactionalEmailsApi();
let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = process.env.BREVO_API_KEY;

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data = await req.json();
    // console.log(">>>", JSON.stringify(data, null, 2));

    if (!process.env.BREVO_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error - missing API key" },
        { status: 500 }
      );
    }

    const email = "michael@innate-aec.com";
    const michaelEmail = "michael@innate-aec.com";
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.to = [
      { email },
      { email: process.env.BREVO_TO_EMAIL },
      { email: michaelEmail },
    ];

    sendSmtpEmail.templateId = 4; // Use the correct template ID
    sendSmtpEmail.params = {
      projectType: data.projectType || "",
      projectAddress: data.projectAddress || "",
      phone: data.phone || "",
      email: data.email || "",
      name: data.name || "",
      date: new Date().toLocaleDateString() || "",
    };

    try {
      const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log("Email sent via Brevo.", response);
      return NextResponse.json({
        success: true,
        message: "Data received and email sent successfully",
      });
    } catch (error: any) {
      console.error("Brevo email error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Error processing request",
          error: error,
        },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    // Cast error as `unknown`
    if (error instanceof Error) {
      // Check if error is an instance of Error
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Error processing request", error: error.message },
        { status: 400 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { message: "Unexpected error", error: "Unknown error occurred" },
        { status: 400 }
      );
    }
  }
}

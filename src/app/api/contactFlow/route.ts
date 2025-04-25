import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const brevo = require("@getbrevo/brevo");
let apiInstance = new brevo.TransactionalEmailsApi();
let apiKey = apiInstance.authentications["apiKey"];
console.log(
  "Using Brevo API Key:",
  process.env.BREVO_API_KEY ? "Exists" : "MISSING",
  process.env.BREVO_API_KEY
);

apiKey.apiKey = process.env.BREVO_API_KEY;

export async function POST(req: NextRequest) {
  // Debugging output
  console.log("Environment:", process.env.NODE_ENV);
  console.log("API Key Present:", !!process.env.BREVO_API_KEY);

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error - missing API key" },
      { status: 500 }
    );
  }

  try {
    // Parse the request body
    const data = await req.json();
    // console.log(JSON.stringify(data, null, 2));

    // Configure the email transport using SMTP (for example, using Gmail)
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.titan.email",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "info@innate-nw.com",
    //     pass: "Innate@123",
    //   },
    // });
    // const email = 'info@innate-nw.com'
    const email = "hasnainshafqatmlt@gmail.com";
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.templateId = 1; // Use the correct template ID
    sendSmtpEmail.params = {
      step1: data.step1.selectedOptions.join(", "),
      step1comment: data.step1.comment,
      step2: data.step2.selectedOptions.join(", "),
      step4: Array.isArray(data.step4.selectedOptions)
        ? data.step4.selectedOptions.join(", ")
        : ``,
      step4title: !Array.isArray(data.step4.selectedOptions)
        ? `Title: ${data.step4.selectedOptions.title}`
        : ``,
      step4description: !Array.isArray(data.step4.selectedOptions)
        ? `Description: ${data.step4.selectedOptions.description}`
        : ``,
      step5title: data.step5.selectedStyle.title,
      step5description: data.step5.selectedStyle.description,
      step6: data.step6.address,
      step8name: data.step8.name,
      step8email: data.step8.email,
      step8phone: data.step8.phone,
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
          error: error.message,
        },
        { status: 400 }
      );
    }

    // Set up email options
    // const mailOptions = {
    //   from: "info@innate-nw.com",
    //   to: "hasnainshafqatmlt@gmail.com",
    //   subject: "Consultation",
    //   html: emailTemplate,
    // };

    // Send the email
    // await transporter.sendMail(mailOptions);

    // Return success response
    // return NextResponse.json({
    //   success: true,
    //   message: "Data received and email sent successfully",
    // });
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

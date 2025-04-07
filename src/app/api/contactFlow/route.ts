import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data = await req.json();
    console.log(JSON.stringify(data, null, 2))

    // Configure the email transport using SMTP (for example, using Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "info@innate-nw.com",
        pass: "Innate@123",
      },
    });

    // Create a dynamic HTML email template
    const emailTemplate = `
    <div
      style="
        
        padding-left: 20px;
        max-width: 900px;
        color: black;
       
      "
    >
      <!-- Logo at the top -->
     
  
     
      <p style="font-size: 38.59px; font-weight: 600; margin-top: 40px;">Consultation Details</p>
      <div
        style="
          background-color: #ffffff33;
          height: 1px;
          width: 100%;
          margin-top: 20px;
          
        "
      ></div>
  
      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Selected Options (Step 1):
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step1.selectedOptions.join(
      ", "
    )}</p>
      </div>
  
      ${data.step1.comment ? `
  <div>
    <p
      style="
        font-size: 22px;
        min-width: 300px;
        font-weight: 500;
        color: black;
      "
    >
      Comment:
    </p>
    <p style="font-size: 22px; font-weight: 100;">
      ${data.step1.comment}
    </p>
  </div>
` : ''}

  
      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Selected Options (Step 2):
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step2.selectedOptions.join(
      ", "
    )}</p>
      </div>
  
      <div >
  <p
    style="
      font-size: 22px;
      min-width: 300px;
      font-weight: 500;
      color: black;
    "
  >
    Selected Range (Step 4):
  </p>
  <p style="font-size: 22px; font-weight: 100;">
    ${Array.isArray(data.step4.selectedOptions)
        ? data.step4.selectedOptions.join(", ")
        : `
          Title: ${data.step4.selectedOptions.title}<br>
          Description: ${data.step4.selectedOptions.description}<br>
         
        `
      }
  </p>
</div>

  
      <div style="">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Selected Style (Step 5):
        </p>
        <p style="font-size: 22px; font-weight: 100;">Title: ${data.step5.selectedStyle.title
      }</p>
        <p style="font-size: 22px; font-weight: 100;">Description: ${data.step5.selectedStyle.description
      }</p>
        
      </div>
  
      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Address (Step 6):
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step6.address}</p>
      </div>
  
      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Name (Step 8):
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step8.name}</p>
      </div>

      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Email:
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step8.email}</p>
        
      </div>
  
      <div >
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: black;
          "
        >
          Phone:
        </p>
        <p style="font-size: 22px; font-weight: 100;">${data.step8.phone}</p>
        
      </div>
  
      <div
        style="
          background-color: #ffffff33;
          height: 1px;
          width: 100%;
          margin-top: 20px;
          
        "
      ></div>
  
      
</div>


    </div>
  `;

    // Set up email options
    const mailOptions = {
      from: "info@innate-nw.com",
      to: "info@innate-nw.com",
      subject: "Consultation",
      html: emailTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Data received and email sent successfully",
    });
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

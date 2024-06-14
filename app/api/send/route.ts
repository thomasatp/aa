import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { company, jobposition, firstname, lastname, email, telephone, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message de ${firstname} ${lastname} (${email})`,
    text: message,
    html: `
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 32px;">🚀 Nouveau message de ${
        firstname
      } ${lastname}</div>
    <div style="font-size: 16px; padding-bottom: 32px; margin-bottom: 32px; line-height: 1.5; border-bottom: 1px solid #E5E5E5;">${
      message
    }</div>
    <p style="font-size: 14px;"><b>Expéditeur :</b> ${firstname} ${
        lastname
      }</p>
    <p style="font-size: 14px;"><b>Société :</b> ${company}</p>
    ${
      jobposition &&
      `<p style="font-size: 14px;"><b>Fonction :</b> ${jobposition}</p>`
    }
    <p style="font-size: 14px;"><b>Téléphone :</b> ${telephone}</p>
    <p style="font-size: 14px;"><b>Email :</b> ${email}</p>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Votre email a bien été envoyé');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Votre email a bien été envoyé' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
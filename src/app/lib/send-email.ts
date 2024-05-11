import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { CONTACT_EMAIL, CONTACT_PASSWORD } from '@/app/config';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: CONTACT_EMAIL,
    pass: CONTACT_PASSWORD,
  },
});

export function sendMailPromise(mailOptions: Mail.Options) {
  return new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, (error) => {
      console.error('error => ', JSON.stringify(error, null, 2));

      !error ? resolve('Email sent successful') : reject(new Error(error.message));
    });
  });
}

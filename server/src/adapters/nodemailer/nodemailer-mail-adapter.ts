import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "940bdb59528a43",
      pass: "4b020c142edbed"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Challenge NLW <gui@nlw.com>",
      to: "Guilherme <gui@nlw.com.br>",
      subject,
      html: body,
    });
  }
}

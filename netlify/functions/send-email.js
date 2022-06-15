const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const body = JSON.parse(event.body);

  const output = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Cancel booking Hair planet</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style type="text/css">
          a[x-apple-data-detectors] {color: inherit !important;}
      </style>
  </head>
  <body style="margin: 0; padding: 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td style="padding: 20px 0 30px 0;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
      <tr>
          <td align="center" bgcolor="#393939" style="padding: 0px 0 0px 0;">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-628b9.appspot.com/o/Email-small-header.jpg?alt=media&token=48fd932a-0341-4dbd-922b-cb65ca582b4a" alt="Creating Email Magic." width="600" maxHeight="230" style="display: block;" />
          </td>
      </tr>
      <tr>
          <td bgcolor="#ffffff" style="padding: 0px 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                  <tr>
                      <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 10px 0;">
                          <h3 style="font-size: 18px; margin: 0;">Contact details:</h3>
                          <p style="margin: 0;">${body.name}</p>
                          <p style="margin: 0;">${body.email}</p>
                      </td>
                  </tr>
                  <tr>
              </tr>
                  <tr>
                      <td>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                              <tr>
                              <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                              <h3 style="font-size: 18px; margin: 0;">Message:</h3>
                              <p style="margin: 0;">${body.message}</p>
                      </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
          <td bgcolor="#393939" style="padding: 30px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                  <tr>
                      <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                          <p style="margin: 0;">&reg;Jurek Ledziński, All rights reserved &copy; ${new Date().getFullYear()}<br/></p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>`;

  let transporter = nodemailer.createTransport({
    host: `${process.env.REACT_APP_HOST_NAME}`,
    port: `${process.env.REACT_APP_PORT_EMAIL}`,
    secure: true,
    auth: {
      user: `${process.env.REACT_APP_EMAIL_USER}`,
      pass: `${process.env.REACT_APP_EMAIL_PASSWORD}`,
    },
  });

  let info = await transporter.sendMail({
    from: `"Message from portfolio" <${process.env.REACT_APP_EMAIL_USER}>`,
    to: `${process.env.REACT_APP_EMAIL_SEND_TO}`,
    subject: 'Portfolio message',
    text: 'Message',
    html: output,
  });

  if (info.response.includes('250')) {
    return {
      statusCode: 200,
      body: { message: 'Email has been sent' },
    };
  }

  return {
    statusCode: 400,
    body: { message: 'Something went wrong, please try later!' },
  };
};

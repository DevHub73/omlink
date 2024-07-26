
// import emailjs from '@emailjs/browser'

// export const sendVerificationEmail = async (email, token) => {
//   console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL)
//   const confirmLink = `${process.env.NEXTAUTH_URL}/auth/new-verification?token=${token}`
//   try {
//     const data = await emailjs
//       .send(
//         process.env.EMAILJS_SERVICE_ID,
//         process.env.EMAILJS_TEMPLATE_ID,
//         {
//           from_name: 'OM Link',
//           from_email: 'omlink770@gmail.com',
//           to_email: email,
//           confirm_link: confirmLink,
//         },
//         process.env.EMAILJS_PUBLIC_KEY
//       )

//     console.log(data)
//   } catch (err) {
//     console.error(err)
//   }
// }


import nodemailer from 'nodemailer'

export const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const confirmLink = `${process.env.NEXTAUTH_URL}/auth/new-verification?token=${token}`

  const mailOptions = {
    from: 'omlink770@gmail.com',
    to: email,
    subject: 'Verify Your Email',
    html: `<p>Please verify your email by clicking on the link: <a href="${confirmLink}">${confirmLink}</a></p>`,
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

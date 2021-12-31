const sqMail = require('@sendgrid/mail')

sqMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sqMail.send({
        to: email,
        from: 'anukontyvikas@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeleteEmail = (email, name) => {
    sqMail.send({
        to: email,
        from: 'anukontyvikas@gmail.com',
        subject: 'Thanks for using our service',
        text: `Goodbye, ${name}. Is there anything we could have done to kept to onboard`
    })
}
module.exports = {
    sendWelcomeEmail, sendDeleteEmail
}
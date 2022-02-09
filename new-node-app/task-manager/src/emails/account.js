const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tranthanhlongita@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the application` 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tranthanhlongita@gmail.com',
        subject: 'Bye bye',
        text: `Thanks for your trying, ${name}. If there is anything to keep you on board please let us know.` 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

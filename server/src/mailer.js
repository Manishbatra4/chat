const nodemailer = require("nodemailer");

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'sundayai.ttf@gmail.com',
        pass: 'Sunday@004'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

function sendEmail(user, message) {
    let mailOptions = {
        from: "sundayai.ttf@gmail.com",
        to: "manishbatra004@gmail.com",
        subject: "Testing",
        html: `<b>${user}</b> : ${message}`
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("mailing error",err)
        } else {
            console.log("Email sent")
        }
    })
}

module.exports = sendEmail;
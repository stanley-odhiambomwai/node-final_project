const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your email.com",
        pass: "your password"
    }
});
    
const mailOptions = {
    from: "email.com",
    to: "email.com",
    subject: "Node.js Email",
    text: "Hello, this is a test email sent from Node.js!!"
};
    
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
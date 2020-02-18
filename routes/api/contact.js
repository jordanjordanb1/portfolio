const express = require('express'),
    router = express.Router(),
    nodemailer = require('nodemailer')


// NODEMAILER CONFIG (TODO: REPLACE WITH SOMETHING OTHER THAN ETHEREAL)
const main = async ({ name, email, message }, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'mathew37@ethereal.email',
            pass: '2X1fsptwMqYG1zV6SS'
        }
    })


    return await transporter.sendMail({
        from: 'mathew37@ethereal.email',
        to: 'mathew37@ethereal.email',
        replyTo: email,
        subject: `Test email from ${name}`,
        text: message
    }, (err, info) => {
        if (err) {
            console.log(err)
            return res.json({ success: false })
        }
        else {
            return res.json({ success: true })
        }
    })
}

router.post('/', (req, res) => {
    const { body } = req

    main(body, res).catch(e => console.error(e))
})

module.exports = router;
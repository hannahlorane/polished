var nodemailer = require('nodemailer');
var router = require('express').Router();

router.post('/contact', function(req, res, next) {
  console.log(req.body);
  var transporter = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
      user: "ghapolished",
      pass: "polished"
    }
});

  var mailOptions = {
    to: 'ghapolished@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

  transporter.close();
})

module.exports = router;

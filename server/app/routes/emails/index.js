var nodemailer = require('nodemailer');
var router = require('express').Router();

router.post('/contact', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ghapolished",
      pass: "polished"
    }
});

  var mailOptions = {
    to: 'ghapolished@gmail.com', // list of receivers
    subject: 'Polished Contact ✔', // Subject line
    text: `Name: ${req.body.name}\n Email: ${req.body.email}\n Message: ${req.body.text}`, // plaintext body
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.text}</p>`
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

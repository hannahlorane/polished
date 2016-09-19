var nodemailer = require('nodemailer');
var router = require('express').Router(); // eslint-disable-line new-cap
var secret = require('../../../../secret.json');

router.post('/contact', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: secret.user,
      pass: secret.password
    }
});

  var mailOptions = {
    to: 'ghapolished@gmail.com', // list of receivers
    subject: 'Polished Contact ✔', // Subject line
    text: `Name: ${req.body.name}\n Email: ${req.body.email}\n Message: ${req.body.text}`, // plaintext body
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.text}</p>`
};

  transporter.sendMail(mailOptions, function(error, info){
      if (error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

  transporter.close();
  res.sendStatus(200);
})

router.post('/order', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: secret.user,
      pass: secret.password
    }
  });

  var mailOptions = {
    to: req.body.email, // list of receivers
    subject: 'Your Polished Order Has Been Submitted', // Subject line
    text: `Thank you for your order, ${req.body.name}. Your order number is ${req.body.id}.\n`, // plaintext body
    html: `<p>Thank you for your order, ${req.body.name}.</p><p>Your order number is ${req.body.id}.</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error){
          return console.log(error);
      }
      console.log('Order submitted: ' + info.response);
  });

  transporter.close();
  res.sendStatus(200);
})

router.post('/ship', function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: secret.user,
        pass: secret.password
      }
    });

    var mailOptions = {
      to: req.body.email, // list of receivers
      subject: 'Your Polished Order Has Been Shipped', // Subject line
      text: `Hello. Order number ${req.body.id} has shipped.\n`, // plaintext body
      html: `<p>Hello.</p><p>Order number ${req.body.id} has shipped!</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            return console.log(error);
        }
        console.log('Order shipped: ' + info.response);
    });

    transporter.close();
    res.sendStatus(200);
})

router.post('/cancel', function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: secret.user,
        pass: secret.password
      }
    });

    var mailOptions = {
      to: req.body.email, // list of receivers
      subject: 'Your Polished Order Has Been Cancelled', // Subject line
      text: `Hello. Order number ${req.body.id} has been cancelled.\n`, // plaintext body
      html: `<p>Hello.</p><p>Order number ${req.body.id} has been cancelled!</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            return console.log(error);
        }
        console.log('Order cancelled: ' + info.response);
    });

    transporter.close();
    res.sendStatus(200);
})

router.post('/deliver', function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: secret.user,
        pass: secret.password
      }
    });

    var mailOptions = {
      to: req.body.email, // list of receivers
      subject: 'Your Polished Order Has Been Cancelled', // Subject line
      text: `Hello. Order number ${req.body.id} has been delivered!\n`, // plaintext body
      html: `<p>Hello.</p><p>Order number ${req.body.id} has been delivered!</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            return console.log(error);
        }
        console.log('Order cancelled: ' + info.response);
    });

    transporter.close();
    res.sendStatus(200);
})

module.exports = router;

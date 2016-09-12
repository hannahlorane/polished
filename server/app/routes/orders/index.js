//assuming: /whatever/orders as the path
var router = require('express').Router();

//GETS all orders
app.get('/');

//GETS a single user's order history
app.get('/history/:userId');

//GETS a single order by ID
app.get('/:id');

module.exports = router;

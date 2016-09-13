/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Product = require('./server/db/models/product');
var Review = require('./server/db/models/review');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'vergil@rome.imp',
            password: 'vates'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedProducts = function () {
    var products = [
        {
            name: 'sunset orange',
            rgbValue: [253, 94, 83],
            description: 'orange',
            price: 5
        },
        {
            name: 'dandelion',
            rgbValue: [253, 219, 109],
            description: 'yellow',
            price: 4
        },
        {
            name: 'caribbean green',
            rgbValue: [28, 211, 162],
            description: 'green',
            price: 5
        },
        {
            name: 'wisteria',
            rgbValue: [205, 164, 222],
            description: 'purple',
            price: 6
        }
    ];

    var creatingProducts = products.map(function (productObj) {
        return Product.create(productObj);
    })

    return Promise.all(creatingProducts);
}

var seedReviews = function () {
    var reviews = [
        {
            text: 'Beautiful!',
            stars: 5,
            userId: 1,
            ProductId: 4
        },
        {
            text: 'Not what I expected',
            stars: 2,
            userId: 1,
            ProductId: 2
        },
        {
            text: 'I feel like a mermaid',
            stars: 4,
            userId: 2,
            ProductId: 3
        },
        {
            text: 'My fav',
            stars: 5,
            userId: 2,
            ProductId: 2
        },
        {
            text: 'Just Okay',
            stars: 3,
            userId: 1,
            ProductId: 1
        },
        {
            text: 'Pretty',
            stars: 5,
            userId: 1,
            ProductId: 4
        }
    ];

    var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    })

    return Promise.all(creatingReviews);
}

db.sync()
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedProducts();
    })
    .then(function () {
        return seedReviews();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });

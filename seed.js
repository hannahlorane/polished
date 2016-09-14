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
var Order = require('./server/db/models/order');
var OrderProducts = db.model('OrderProducts');

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
            price: 5,
            collection: 'Oranges and Reds'
        },
        {
            name: 'dandelion',
            rgbValue: [253, 219, 109],
            description: 'yellow',
            price: 4,
            collection: 'Yellows and Creams'
        },
        {
            name: 'caribbean green',
            rgbValue: [28, 211, 162],
            description: 'green',
            price: 5,
            collection: 'Seasonal Seaside Shine'
        },
        {
            name: 'wisteria',
            rgbValue: [205, 164, 222],
            description: 'purple',
            price: 6,
            collection: 'Purples and Pinks'
        },
        {
            name: 'seagull grey',
            rgbValue: [28, 211, 162],
            description: 'greyish!',
            price: 5,
            collection: 'Seasonal Seaside Shine'
        },
        {
            name: 'palm-frond',
            rgbValue: [28, 211, 162],
            description: 'green',
            price: 5,
            collection: 'Seasonal Seaside Shine'
        },
        {
            name: 'sand',
            rgbValue: [28, 211, 162],
            description: 'sort of like being covered in gritty grossness',
            price: 5,
            collection: 'Seasonal Seaside Shine'
        },
        {
            name: 'sky blue',
            rgbValue: [281, 211, 300],
            description: 'high quality product',
            price: 5,
            collection: 'Seasonal Seaside Shine'
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
            productId: 7
        },
        {
            text: 'Beautiful!',
            stars: 5,
            userId: 1,
            productId: 4
        },
        {
            text: 'Not what I expected',
            stars: 2,
            userId: 1,
            productId: 2
        },
        {
            text: 'I feel like a mermaid',
            stars: 4,
            userId: 2,
            productId: 3
        },
        {
            text: 'My fav',
            stars: 5,
            userId: 2,
            productId: 2
        },
        {
            text: 'Just Okay',
            stars: 3,
            userId: 1,
            productId: 1
        },
        {
            text: 'Pretty',
            stars: 5,
            userId: 1,
            productId: 4
        }
    ];

    var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    })

    return Promise.all(creatingReviews);
}

var seedOrders = function () {
    var orders = [
        {
            userId: 1
        },
        {
            userId: 2
        }
    ]

    var creatingOrders = orders.map(function (orderObj) {
        return Order.create(orderObj);
    })

    return Promise.all(creatingOrders);
}

var seedOrderProducts = function () {
    var orderProducts = [
        {
            quantity: 5,
            orderId: 1,
            productId: 2
        },
        {
            quantity: 2,
            orderId: 1,
            productId: 4
        },
        {
            quantity: 10,
            orderId: 2,
            productId: 1
        },
        {
            quantity: 3,
            orderId: 2,
            productId: 3
        }
    ]

    var creatingOrderProducts = orderProducts.map(function (orderProductsObj) {
        return OrderProducts.create(orderProductsObj);
    })

    return Promise.all(creatingOrderProducts);
}

db.sync({force: true})
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
        return seedOrders();
    })
    .then(function () {
        return seedOrderProducts();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });

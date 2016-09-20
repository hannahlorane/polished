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
            password: 'password',
            isAdmin: true
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
          name: 'After Midnight',
          rgbValue: [25, 25, 112],
          description: 'full coverage midnight indigo creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Beauty School Dropout',
          rgbValue: [238, 99, 99],
          description: 'bubblegum pink creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'My Boyfriends Back',
          rgbValue: [102, 139, 139],
          description: 'deep cerulean creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Splish Splash',
          rgbValue: [102, 205, 170],
          description: 'aqua green creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Afternoon Delight',
          rgbValue: [147, 112, 219],
          description: 'dusty lavender creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Peaches & Cream',
          rgbValue: [255, 140, 105],
          description: 'peach creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Smoke Gets In Your Eyes',
          rgbValue: [30, 64, 139],
          description: 'full coverage smokey blue creme',
          price: 20,
          collection: 'Lippwoman'
        },
        {
          name: 'Blanc',
          rgbValue: [255, 255, 255],
          description: 'a snowy white, perfect for French manicures',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Golden Nuggets',
          rgbValue: [255, 215, 0],
          description: 'a glittery bold gold',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Watermelon',
          rgbValue: [255, 62, 150],
          description: 'a creamy and refreshing juicy red',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'The Fuschia Of Art',
          rgbValue: [205, 0, 205],
          description: 'rich, vivid magenta',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Sheer Bliss',
          rgbValue: [255, 182, 193],
          description: 'A sheer and silky pink',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'St. Lucia Lilac',
          rgbValue: [216, 191, 216],
          description: 'a creamy pale lilac',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Jelly Apple',
          rgbValue: [176, 23, 31],
          description: 'a sweet and delicious candied red',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Playing Koi',
          rgbValue: [205, 79, 57],
          description: 'flirtatious orange rust',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Stencil Me In',
          rgbValue: [127, 255, 0],
          description: 'edgy citrus lime',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Mezmerised',
          rgbValue: [65, 105, 225],
          description: 'a royal va-va blue',
          price: 9,
          collection: 'bessie'
        },
        {
          name: 'Luxedo',
          rgbValue: [0, 0, 0],
          description: 'suit up and boldly go where no man has gone before',
          price: 9,
          collection: 'bessie'
        },
        {
          name: '5 Apples Tall',
          rgbValue: [255, 0, 0],
          description: 'this apple red really measures up',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'A Great Opera-Tunity',
          rgbValue: [255, 99, 71],
          description: '"aria" ya ready to wear this gorgeous melon?',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Act Your Beige',
          rgbValue: [242, 221, 220],
          description: 'age is just a number, but this light beige is #1',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'AmazON...AmazOFF',
          rgbValue: [29, 72, 78],
          description: 'I"m making the switch to this deep jungle green',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Blue My Mind',
          rgbValue: [37, 37, 91],
          description: 'sizzling sapphire',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Can"t Find My Czechbook',
          rgbValue: [118, 165, 181],
          description: 'I hope you take credit, because I must have this aqua!',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'California Raspberry',
          rgbValue: [192, 34, 68],
          description: 'It"s like a totally cool shade of pink-red',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Chromatic Orange',
          rgbValue: [243, 91, 35],
          description: 'This freshly squeezed orange is awash with color',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Gelato on My Mind',
          rgbValue: [216, 238, 242],
          description: 'Deliciously sweet and icy-cool pastel blue',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Hawaiian Orchid',
          rgbValue: [228, 173, 192],
          description: 'Tropical pink with hints of light purple',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Koala Bear-y',
          rgbValue: [203, 37, 111],
          description: 'Berry irresistible, berry beautiful',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'You Don"t Know Jacques',
          rgbValue: [92, 68, 68],
          description: 'If you don"t know how trendy this taupe is',
          price: 9,
          collection: 'UPI'
        },
        {
          name: 'Addison',
          rgbValue: [255, 255, 0],
          description: 'Tart lemon crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Adrian',
          rgbValue: [238, 238, 0],
          description: 'Daffodil crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Catrina',
          rgbValue: [238, 201, 0],
          description: 'Marigold yellow crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Brandis',
          rgbValue: [102, 205, 170],
          description: 'Tart turquoise crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Anya',
          rgbValue: [0, 100, 0],
          description: 'Climbing ivy crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Amy',
          rgbValue: [60, 179, 113],
          description: 'Smoky Turqoise crème',
          price: 9,
          collection: 'Mint'
        },
        {
          name: 'Acacia',
          rgbValue: [3, 168, 158],
          description: 'Blue fjord crème',
          price: 9,
          collection: 'Mint'
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
        },
        {
          text: "I give three stars",
          stars: 3,
          userId: 1,
          productId: 7
        }
    ];

    var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    })

    return Promise.all(creatingReviews);
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
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });

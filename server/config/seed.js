/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Campaign = require('../api/campaign/campaign.model');
var Product = require('../api/campaign/product.model');
var User = require('../api/user/user.model');
var Store = require('../api/store/store.model');
var Coupon = require('../api/coupon/coupon.model');


var newUser,
    newCampaign,
    newStore;

Store.find({}).remove(function() {
  Store.create({
    name: 'Banana Republic',
    description: 'a fashion store',
    image_url: 'assets/images/br.JPG'
  }, function() {
      Store.findOne({
        name: 'Banana Republic'
      }, function(err, this_store) {
        if (err) {

        }
        newStore = this_store;
        generateUser(newStore, function () {
          generateCampaign(function () {
            Coupon.find({}).remove(function() {
              Coupon.create({
                code: 'yhd7iw',
                is_active: false,
                discount_percent: 23, //Discount can only be %
                title_primary: 'This is primary title', //Corresponds to first title on the generated coupon
                title_secondary: 'This is secondary title', //Corresponds to second title on the generated coupon
                campaign_id: newCampaign._id,
                campaign_budget: newCampaign.budget, //Ugly normalization. Might be useful on the iPhone side
                store_id: newStore._id,
                product_skus: []
              });
            });
          });
        });
      });
    }
  );
});

var generateUser = function (store, cb) {
  User.find({}).remove(function() {
    User.create({
      provider: 'local',
      username: 'breaton',
      email: 'test@test.com',
      password: 'bananarepublic',
      store_id: store._id
    }, {
      provider: 'local',
      role: 'admin',
      username: 'Admin',
      email: 'admin@admin.com',
      password: 'admin',
      store_id: store._id
    }, function() {
        User.findOne({
          username: 'breaton'
        }, function (err, thisUser) {
          if (err) {

          }
          newUser = thisUser;
          return cb();
        });
        console.log('finished populating users');
      }
    );
  });
}



var today = new Date();

var generateCampaign = function (cb) {
  Campaign.find({}).remove(function() {
    Campaign.create({
      name: 'July Campaign',
      is_active: false,
      budget: 300,
      collections: [],
      type: 'Discrete',
      discount_lb: 20, //Discount can only be %
      discount_ub: 50, //Discount can only be %
      created_by: newUser._id,
      campaign_start: today,
      campaign_end: today,
      campaign_next: today, //To handle repeat frequency
      store_id: newStore._id,
      d:{
        c: today
      }
    }, function () {
      Campaign.findOne({
        name: 'July Campaign'
      }, function(err, this_campaign) {
        if(err) {

        }
        newCampaign = this_campaign;
        //generateProducts(cb());
        return cb();
      })
    });
});
}

//Where should I call this?
var generateProducts = function (cb) {
  Product.find({}).remove(function() {
    Product.create(
      {name:"Slim-Fit Non-Iron Dark Chambray Shirt",price:74.97,code:"257240",image_url:"assets/images/257240.jpg",qty:0,store_id:newStore._id},
      {name:"Slim-Fit Custom 078 Wash Dot Shirt",price:61.99,code:"722313",image_url:"assets/images/722313.jpg",qty:24,store_id:newStore._id},
      {name:"Tailored Slim-Fit Non-Iron Micro-Check Shirt",price:87.99,code:"675134",image_url:"assets/images/675134.jpg",qty:22,store_id:newStore._id},
      {name:"Slim-Fit Custom 078 Wash Heathered Shirt (M)",price:61.99,code:"722300",image_url:"assets/images/722300.jpg",qty:13,store_id:newStore._id},
      {name:"Vintage Straight Indigo Jean",price:93.99,code:"266016",image_url:"assets/images/266016.jpg",qty:12,store_id:newStore._id},
      {name:"Modern Slim Textured Gray Suit Trouser (M)",price:141.99,code:"186127",image_url:"assets/images/186127.jpg",qty:13,store_id:newStore._id},
      {name:"Modern Slim Navy Linen Suit Trouser",price:117.99,code:"402029",image_url:"assets/images/402029.jpg",qty:23,store_id:newStore._id},
      {name:"Aiden Slim Pinstripe Linen Short",price:54.99,code:"404572",image_url:"assets/images/404572.jpg",qty:11,store_id:newStore._id},
      {name:"Aiden Slim Garment-Dye Utility Short",price:58.99,code:"402087",image_url:"assets/images/402087.jpg",qty:7,store_id:newStore._id},
      {name:"Aiden Slim Textured Cotton Short",price:66.99,code:"289069",image_url:"assets/images/289069.jpg",qty:5,store_id:newStore._id},
      {name:"NYC/SF",price:87.99,code:"674187",image_url:"assets/images/674187.jpg",qty:4,store_id:newStore._id},
      {name:"Military Vee Pullover",price:67.99,code:"674084",image_url:"assets/images/674084.jpg",qty:2,store_id:newStore._id},
      {name:"Chest-Pocket Crew Pullover",price:85.99,code:"673222",image_url:"assets/images/673222.jpg",qty:2,store_id:newStore._id},
      {name:"Modern Slim Navy Linen Suit Jacket",price:277.99,code:"402028",image_url:"assets/images/402028.jpg",qty:0,store_id:newStore._id},
      {name:"Monogram Blue Micro-Check Italian Wool Suit Jacket (M)",price:439.99,code:"186118",image_url:"assets/images/186118.jpg",qty:3,store_id:newStore._id},
      {name:"Tailored-Fit Grey Micro-Dot Wool Suit Jacket (M)",price:303.99,code:"969653",image_url:"assets/images/969653.jpg",qty:4,store_id:newStore._id},
      {name:"Four-Pocket Shirt Jacket",price:137.99,code:"404250",image_url:"assets/images/404250.jpg",qty:5,store_id:newStore._id},
      {name:"Modern Slim Blue Linen Blazer",price:171.97,code:"257234",image_url:"assets/images/257234.jpg",qty:0,store_id:newStore._id},
      {name:"Micro-Stripe Silk Tie",price:58.99,code:"403634",image_url:"assets/images/403634.jpg",qty:8,store_id:newStore._id},
      {name:"Micro-Print Silk Tie",price:62.99,code:"403635",image_url:"assets/images/403635.jpg",qty:0,store_id:newStore._id},
      {name:"Sloan-Fit Faux-Leather Trim Ankle Pant",price:124.00,code:"673130",image_url:"assets/images/673130.jpg",qty:2,store_id:newStore._id},
      {name:"Silk Banded V-Neck Blouse",price:77.00,code:"676053",image_url:"assets/images/676053.jpg",qty:4,store_id:newStore._id}, function () {
        Product.findOne({
        code:"257240"
      }, function(err) {
        if(err) {

        }
        return cb();
      })
    });
  });
}

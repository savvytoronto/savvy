/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Campaign = require('../api/campaign/campaign.model');
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
            Campaign.find({}).remove(function() {
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
        return cb();
      })
    });
});
}

'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CouponSchema = new Schema({
  code: {type: String, required: true, unique: true},
  is_active: {type: Boolean},
  discount_percent: {type: Number, min: 1, max: 100}, //Discount can only be %
  title_primary: {type: String}, //Corresponds to first title on the generated coupon
  title_secondary: {type: String}, //Corresponds to second title on the generated coupon
  campaign_id: {type: Schema.Types.ObjectId, ref: 'Campaign'},
  campaign_budget: {type: Number}, //Ugly normalization. Might be useful on the iPhone side
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  product_skus: [{type: String}]
});

module.exports = mongoose.model('Coupon', CouponSchema);
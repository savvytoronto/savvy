'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CollectionSchema = new Schema({
  name: {type: String, required: true, unique: true}, //Corresponds to coupon.title_primary
  coupon_title_secondary: {type: String}, //Corresponds to coupon.title_secondary
  is_enabled: {type: Boolean}, //Determines if the collection is available to be added to a campaign
  product_ids: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  updated_at: {type: Date}
});

CollectionSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  next();
});

module.exports = mongoose.model('Collection', CollectionSchema);
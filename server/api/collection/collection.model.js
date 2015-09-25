'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CollectionSchema = new Schema({
  name: {type: String, required: true, unique: true}, //Corresponds to coupon.title_primary
  sec_title: {type: String}, //Corresponds to coupon.title_secondary
  is_enabled: Boolean, //Determines if the collection is available to be added to a campaign
  products: [Schema.Types.Mixed],
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  d:{
    c: Date,
    m: Date
  }
});

CollectionSchema.pre('save', function(next) {
  this.d = {
    c: timeNow
  };
  next();
});

module.exports = mongoose.model('Collection', CollectionSchema);
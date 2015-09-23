'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var ProductSchema = new Schema({
  name: {type: String},
  code: {type: String},
  qty: {type: Number},
  price: {type: Number},
  image_url: {type: String},
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  updated_at: {type: Date}
});

ProductSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
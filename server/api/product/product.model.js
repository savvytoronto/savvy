'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var ProductSchema = new Schema({
  name: {type: String},
  code: {type: String},
  qty: {type: Number},
  price: {type: Number},
  imageUrl: {type :String},
  created_at: {type: Date},
  updated_at: {type: Date}
});

ProductSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  if(!this.created_at) {
    this.created_at = timeNow;
  }
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
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
  d:{
    c: Date,  //created
    m: Date    // modified (updated)
  }
});

ProductSchema.pre('save', function(next) {
  this.d = {
    c: timeNow
  };
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
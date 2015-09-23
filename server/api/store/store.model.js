'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var StoreSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String},
  image_url: {type: String}
});

module.exports = mongoose.model('Store', StoreSchema);
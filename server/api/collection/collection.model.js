'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CollectionSchema = new Schema({
  name: {type: String, required: true, unique: true},
  is_enabled: {type: Boolean},
  products: [{type: mongoose.Schema.Types.ObjectId, ref:'Product'}],
  created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created_at: {type: Date},
  updated_at: {type: Date}
});

CollectionSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  if(!this.created_at) {
      this.created_at = timeNow;
  }
  next();
});

module.exports = mongoose.model('Collection', CollectionSchema);
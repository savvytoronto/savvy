'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CampaignSchema = new Schema({
  name: {type: String, required: true, unique: true},
  is_active: {type: Boolean},
  collections: [{type: mongoose.Schema.Types.ObjectId, ref:'Collection'}],
  discount_lower_bound: {type: Number, min: 1, max: 100},
  discount_upper_bound: {type: Number, min: 1, max: 100},
  created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created_at: {type: Date},
  updated_at: {type: Date}
});

CampaignSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  if(!this.created_at) {
      this.created_at = timeNow;
  }
  next();
});

module.exports = mongoose.model('Collection', CampaignSchema);
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CampaignSchema = new Schema({
  name: {type: String, required: true, unique: true},
  is_active: {type: Boolean},
  budget: {type: Number},
  collection_ids: [{type: Schema.Types.ObjectId, ref: 'Collection'}],
  type: {type: String, enum: ['Discrete', 'Continuous', 'Staggered']},
  discount_lower_bound: {type: Number, min: 1, max: 100}, //Discount can only be %
  discount_upper_bound: {type: Number, min: 1, max: 100}, //Discount can only be %
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
  campaign_start_date: {type: Date},
  campaign_end_date: {type: Date},
  campaign_start_date_next: {type: Date}, //To handle repeat frequency
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  updated_at: {type: Date}
});

CampaignSchema.pre('save', function(next) {
  this.updated_at = timeNow;
  next();
});

module.exports = mongoose.model('Campaign', CampaignSchema);
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var timeNow = new Date();

var CampaignSchema = new Schema({
  name: {type: String, required: true, unique: true},
  is_active: {type: Boolean},
  budget: {type: Number},
  collections: [Schema.Types.Mixed],
  type: {type: String, enum: ['Discrete', 'Continuous', 'Staggered']},
  discount_lb: {type: Number, min: 1, max: 100}, //Discount can only be %
  discount_ub: {type: Number, min: 1, max: 100}, //Discount can only be %
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
  campaign_start: Date,
  campaign_end: Date,
  campaign_next: Date, //To handle repeat frequency
  store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
  d:{
    c: Date,
    m: Date,
    deploy: Date
  }
});

CampaignSchema.pre('save', function(next) {
  this.d = {
    c: timeNow
  };
  next();
});


module.exports = mongoose.model('Campaign', CampaignSchema);
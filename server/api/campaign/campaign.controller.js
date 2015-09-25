/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /campaigns              ->  index
 * POST    /campaigns              ->  create
 * GET     /campaigns/:id          ->  show
 * PUT     /campaigns/:id          ->  update
 * DELETE  /campaigns/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Campaign = require('./campaign.model');

// Get list of campaigns
exports.index = function(req, res) {
  Campaign.find(function (err, campaigns) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(campaigns);
  });
};

exports.turnOnOff = function (req, res) {
  if (!req.body || !req.body.is_active) {
    handleError(res, 'Bad request');
  }

  var campaignId = req.body._id;
  delete req.body._id;

  Campaign.findOneAndUpdate({
    _id: req.body._id
  }, req.body, function(err, campaign) {
    if (err) {
      handleError(res, err);
    }
    if(!campaign) { return res.status(404).send('Not Found'); }
    return res.status(200).json(campaign);
  })
};

// Get a single campaign
exports.show = function(req, res) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    return res.json(campaign);
  });
};

// Creates a new campaign in the DB.
exports.create = function(req, res) {
  Campaign.create(req.body, function(err, campaign) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(campaign);
  });
};

// Updates an existing campaign in the DB.
exports.update = function(req, res) {
  Campaign.findById(req.body._id, function (err, old_campaign) {
    if (err) { 
      return handleError(res, err); 
    }
    if (!old_campaign) { 
      return res.status(404).send('Not Found'); 
    }
    
    
    var updated = _.extend(old_campaign, req.body);
    updated.save(function (err) {

      if (err) { 
        return handleError(res, err); 
      }
      if (updated.is_active && updated.is_active !== old_campaign.is_active) {
          // signal new campaign activity
          return res.status(200).json(updated);
      }
      return res.status(200).json(updated);
    });
  });
};

// Deletes a campaign from the DB.
exports.destroy = function(req, res) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    campaign.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
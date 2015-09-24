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
  Campaign.find(function (err, campaign) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(campaign);
  });
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
  if(req.body._id) { delete req.body._id; }
  Campaign.findById(req.params.id, function (err, campaign) {
    if (err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    var updated = _.merge(campaign, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(campaign);
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
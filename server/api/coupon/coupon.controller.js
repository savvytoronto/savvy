/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /coupons              ->  index
 * POST    /coupons              ->  create
 * GET     /coupons/:id          ->  show
 * PUT     /coupons/:id          ->  update
 * DELETE  /coupons/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Coupon = require('./coupon.model');

// Get list of coupons
exports.index = function(req, res) {
  Coupon.find(function (err, coupon) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(coupon);
  });
};

exports.getCouponForApp = function (req, res) {
  if (!req.body || !req.body.clienCouponCode) {
    handleError(res, 'bad request');
  }

  Coupon.findOne({
    code: req.body.clienCouponCode
  }, function (err, this_coupon) {
    if (err) {
      handleError(res, err);
    }
    if (!this_coupon) {
      return res.status(404).json('no coupon found');
    }
    return res.status(200).json(this_coupon);
  });
};

// Get a single coupon
exports.show = function(req, res) {
  Coupon.findById(req.params.id, function (err, coupon) {
    if(err) { return handleError(res, err); }
    if(!coupon) { return res.status(404).send('Not Found'); }
    return res.json(coupon);
  });
};

// Creates a new coupon in the DB.
exports.create = function(req, res) {
  Coupon.create(req.body, function(err, coupon) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(coupon);
  });
};

// Updates an existing coupon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Coupon.findById(req.params.id, function (err, coupon) {
    if (err) { return handleError(res, err); }
    if(!coupon) { return res.status(404).send('Not Found'); }
    var updated = _.extend(coupon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(coupon);
    });
  });
};

// Deletes a coupon from the DB.
exports.destroy = function(req, res) {
  Coupon.findById(req.params.id, function (err, coupon) {
    if(err) { return handleError(res, err); }
    if(!coupon) { return res.status(404).send('Not Found'); }
    coupon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).json(err);
}
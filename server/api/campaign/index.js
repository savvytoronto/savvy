'use strict';

var express = require('express');
var controller = require('./campaign.controller');

var router = express.Router();

router.post('/update', controller.update);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
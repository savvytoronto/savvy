'use strict';

var util = require("util"),
    EventEmitter = process.EventEmitter,
    instance;

function CampaignEvent() {
    EventEmitter.call(this);
}

util.inherits(CampaignEvent, EventEmitter);


CampaignEvent.prototype.emitCampaignStarted= function () {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('campaignStarted');
    this.emit.apply(this, args);
};

CampaignEvent.prototype.onCampaignClosed = function (callback) {
    this.on('campaignClosed', callback);
};

var exportMe = {
    getInstance: function() {
        return instance || (instance = new CampaignEvent());
    }
};

module.exports = exportMe.getInstance();

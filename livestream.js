'use strict';

/* jshint node:true */

var request = Npm.require('request'),
	querystring = Npm.require('querystring'),
	fs = Npm.require('fs'),
	path = Npm.require('path');

Livestream;

/**
 * Livestream API Interface
 * @constructor
 * @param {string} accountId Livestream Account Id
 */
Livestream = function Livestream(accountId) {
	this.accountId = accountId
	this.baseUrl = 'https://api.new.livestream.com';
};

/**
 * Obtains list of public events for an account
 * @param  {Function} callback  function(error, events)
 */
Livestream.prototype.getEvents = function getEvents(callback) {
	this.api('/events', {}, callback);
};

/**
 * Obtains a event
 * @param  {String}   eventId   Livestream event id
 * @param  {Function} callback  function(error, event)
 */
Livestream.prototype.getEvent = function getEvent(eventId, callback) {
  console.log('getEvent', eventId, callback);
	this.api('/events', {id: eventId}, callback);
};

Livestream.prototype.api = function api(endpoint, options, callback) {
  var url = this.baseUrl + '/accounts/' + this.accountId;

  if (options.id) {
    url += endpoint + '/' + options.id;
  } else {
    url += endpoint;
  }

	var opts = _.extend({
		method: 'GET',
		url: url,
    json: true
	}, options);

	request(opts, function(err, response, result) {
		if (_.isFunction(callback)) {
			callback(err, result);
		}
	});
};

'use strict';

/**
 * Main Controller
 *
 * This module expose API's for default route
 */

var httpStatus = require('http-status');

var mainService = require('../services/MainService');

/**
 * Return a description of the API
 * Route handler for GET '/'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.main = function(req, res, next) {
  mainService.getApiDescription(function(err, description) {
    if(err) {
      return next(err);
    }
    req.data = {
      statusCode: httpStatus.OK,
      content: description
    };
    next();
  });
};
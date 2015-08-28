'use strict';

/**
 * Router logic, this class will implement all the API routes
 * i.e, mapping the routes to controller
 *
 * @author      ritesh
 * @version     1.0
 */

var express = require('express');

var mainController = require('./controllers/MainController');

module.exports = function() {
  var options = {
    caseSensitive: true
  };

  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  // main route
  router.get('/', mainController.main);
  return router;
};
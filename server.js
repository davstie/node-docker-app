'use strict';

/**
 * Application start up script
 *
 * @author      ritesh
 * @version     1.0
 */

/* Globals */
var express = require('express'),
  logger = require('./logger').getLogger(),
  router = require('./router'),
  responser = require('./middlewares/Responser'),
  errorHandler = require('./middlewares/ErrorHandler'),
  app = express();

var port = process.env.PORT || 4040;

// init application routes
app.use(router());

// use responser
app.use(responser());
// use global error handler
app.use(errorHandler());

app.listen(port, function() {
  logger.info('App started on port', port);
});
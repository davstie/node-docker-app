'use strict';

/**
 * This module provides common services
 *
 * @author      ritesh
 * @version     1.0
 */

/**
 * Returns API description
 *
 * @param  {Function}     callback      callback function
 */
exports.getApiDescription = function(callback) {
  var description = {
    name: 'node-docker-app',
    description: 'Sample node2.js Application deployed in a docker container drugi test',
    port: 4040,
    author: 'ritesh',
    version: '1.0',
    health: 'running',
    uptime: '100%'
  };
  callback(null, description);
};

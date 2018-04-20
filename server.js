'use strict';

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
const appInsights = require("applicationinsights")
appInsights.setup("2fc0b169-09f3-4ee4-b7d2-05039a7fbe93")
var server = app.start();

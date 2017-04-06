"use strict";

var needle       = require('needle'),
    os_functions = require('./' + process.platform);

exports.get_routes = os_functions.get_routes;

"use strict";

var node_wmi = require('node-wmi');

exports.get_routes = function(callback) {
  node_wmi.Query().class('win32_IP4RouteTable').exec(function(err, routes) {
    if (err) return callback(err);
    node_wmi.Query().class('Win32_NetworkAdapterConfiguration').where('IPEnabled=True').exec(function(err, configs) {
      if (err) return callback(err);
      for(let route of routes) {
        route.Config = configs.find(cfg => parseInt(cfg.InterfaceIndex + '') === parseInt(route.InterfaceIndex + ''));
      }
      callback(null, routes);
    });
  })
}

(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  if(process.env.DOMAIN) {
    domain = process.env.DOMAIN;
    console.log("Setting domain to:", domain);
  }

  module.exports = {
    catalogueUrl:  util.format("http://catalogue%s", domain),
    tagsUrl:       util.format("http://catalogue%s/tags", domain),
    cartsUrl:      util.format("http://carts%s/carts", domain),
    ordersUrl:     util.format("http://orders%s", domain),
    customersUrl:  util.format("http://user%s/customers", domain),
    addressUrl:    util.format("http://user%s/addresses", domain),
    cardsUrl:      util.format("http://user%s/cards", domain),
    loginUrl:      util.format("http://user%s/login", domain),
    registerUrl:   util.format("http://user%s/register", domain),
  };
}());

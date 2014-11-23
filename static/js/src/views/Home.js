define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
  var AppHome = Backbone.View.extend({
    el: "Home",

    initialize: function(){
      console.log("init");
    }
  });
  return AppHome;
});

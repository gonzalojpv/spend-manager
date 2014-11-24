define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
  var AppHome = Backbone.View.extend({
    
    el:$("body"),
    
    events: {
      "click #btn-filters": "showFilters"
    },
    initialize: function(){
      console.log("init");
    },
    showFilters: function(e){
      console.log(e.currentTarget);
    }    
  });

  return AppHome;
});

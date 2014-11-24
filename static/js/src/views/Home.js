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
      
    },
    showFilters: function(e){
     this.$el.find("#filters").toggleClass("none");
    }    
  });

  return AppHome;
});

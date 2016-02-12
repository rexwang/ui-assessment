(function() {
  window.App = Ember.Application.create();

  App.Router = Ember.Router.extend({
    location: 'auto'
  });

  App.Router.map(function() {
    this.route('home', { path: '/' });
    this.route('devices');
  });

  App.Device = DS.Model.extend({
   identifier: DS.attr('string'),
   lastUpdated: DS.attr('string'),
   userName: DS.attr('string'),
   serialNumber: DS.attr('string'),
   deviceName: DS.attr('string'),
   make: DS.attr('string'),
   model: DS.attr('string'),
   os: DS.attr('string')
  });

  App.HomeRoute = Ember.Route.extend({
    model: function() {
      return $.getJSON('public/MOCK_DATA.json');
    }
  });

  App.HomeController = Ember.Controller.extend({
    actions: {
      add: function() {

      },
      remove: function() {
        this.get('model').shift();

        this.set('model', this.get('model'));
      }
    }
  });
})();
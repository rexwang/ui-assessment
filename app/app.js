(function() {
  window.App = Ember.Application.create();

  App.Router = Ember.Router.extend({
    location: 'auto'
  });

  App.Router.map(function() {
    this.route('devices', {path: '/'});
  });

  App.Device = DS.Model.extend({
    id: DS.attr(),
    identifier: DS.attr(),
    lastUpdated: DS.attr(),
    userName: DS.attr(),
    serialNumber: DS.attr(),
    deviceName: DS.attr(),
    make: DS.attr(),
    model: DS.attr(),
    os: DS.attr()
  });

  App.DevicesRoute = Ember.Route.extend({
    model: function() {
      return Ember.$.getJSON('public/MOCK_DATA.json');
    },
    actions: {
      refreshModel: function() {
        this.refresh();
      }
    }
  });

  App.DevicesController = Ember.ArrayController.extend({
    actions: {
      add: function() {
        var identifier = this.get('newIdentifier');
        if (!identifier.trim()) { return; }

        this.set('newIdentifier', '');
        this.send('refreshModel');
      },
      remove: function() {

      }
    }
  });
})();
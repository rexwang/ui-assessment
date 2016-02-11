(function() {
  window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource('devices', { path: '/' });
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

  //$.getJSON('public/MOCK_DATA.json', function(data) {
  //  console.log(data);
  //});
})();
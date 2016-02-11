(function() {
  window.App = Ember.Application.create();

  App.Router = Ember.Router.extend({
    location: 'auto'
  });

  App.Router.map(function() {
    this.route('devices', { path: '/' });
  });

  var devices = [
    {"id":1,"identifier":"2BB2KC7GLDAA00110007","lastUpdated":"2015-09-01T12:25:23Z","userName":"Cherry","serialNumber":"6297520","deviceName":"Rio","make":"Dell Inc.","model":"Latitude E7440","os":"Windows 8.1 (64 bit)"},
    {"id":2,"identifier":"2BB2KC7GLDAA00110009","lastUpdated":"2015-08-31T23:43:10Z","userName":"Absolute-QA","serialNumber":"ABC3030149","deviceName":"ABS-HP-FP06047","make":"HEWLETT-PACKARD","model":"HP RPOBOOK 455 G1 NOTEBOOK","os":"Windows 8 (32 bit)"},
    {"id":3,"identifier":"2BB2KC7GLDAA00110012","lastUpdated":"2015-10-22T20:39:04Z","userName":"RUSTY-Win7-VM","serialNumber":"VMWARE 56 4D 8","deviceName":"RUSTY-WIN7-VM","make":"VMWARE, Inc.","model":"VMware Virtual Platform","os":"Microsoft Windows"},
    {"id":4,"identifier":"2BB2KC7GLDAA00110013","lastUpdated":"2015-10-21T03:04:37Z","userName":"C4H200138TEST","serialNumber":"CND41010BW","deviceName":"C4H200138TEST","make":"Hewlett-Packard","model":"HP ProBook 455 G2","os":"Microsoft Windows"}
  ];

  //App.Device = DS.Model.extend({
  //  identifier: DS.attr('string'),
  //  lastUpdated: DS.attr('string'),
  //  userName: DS.attr('string'),
  //  serialNumber: DS.attr('string'),
  //  deviceName: DS.attr('string'),
  //  make: DS.attr('string'),
  //  model: DS.attr('string'),
  //  os: DS.attr('string')
  //});

  App.DevicesRoute = Ember.Route.extend({
    model: function() {
      return devices;
    }
  });

  //$.getJSON('public/MOCK_DATA.json', function(data) {
  //  console.log(data);
  //});
})();
require.config({
  // alias libraries paths
  paths: {
    'domReady': 'libs/domReady.min',
    'jquery': 'libs/jquery.min',
    'ember': 'libs/ember.min',
    'ember-data': 'libs/ember-data.min',
    'ember-template-compiler': 'libs/ember-template-compiler',
    'bootstrap': 'libs/bootstrap.min'
  },

  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  },

  // kick start application
  deps: ['./bootstrap']
});
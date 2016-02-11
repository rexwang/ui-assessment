define([
  'require',
  'ember',
  'ember-data',
  'ember-template-compiler',
  'routes'
], function (require) {
  'use strict';

  require(['domReady!'], function (document) {
    console.log('hi');
  });
});
'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-test',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
        EMBER_METAL_TRACKED_PROPERTIES: true,
        EMBER_GLIMMER_ANGLE_BRACKET_NESTED_LOOKUP: true,
        EMBER_GLIMMER_ANGLE_BRACKET_BUILT_INS: true,
      },
      EXTEND_PROTOTYPES: {
        Date: false,
      },
    },

    APP: {
      apiHost: '',
    },

    'ember-cli-mirage': {
      enabled: false,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    ENV.APP.apiHost = '';
  }

  // if (environment === 'production') {
  // }

  return ENV;
};

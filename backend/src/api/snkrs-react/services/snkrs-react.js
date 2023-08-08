'use strict';

/**
 * snkrs-react service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::snkrs-react.snkrs-react');

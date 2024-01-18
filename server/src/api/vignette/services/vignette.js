'use strict';

/**
 * vignette service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vignette.vignette');

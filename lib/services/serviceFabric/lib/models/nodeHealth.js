/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NodeHealth class.
 * @constructor
 * The health of the node
 * @member {array} [healthEvents]
 * 
 * @member {string} [aggregatedHealthState] Possible values include:
 * 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
 * 
 * @member {string} [name]
 * 
 */
function NodeHealth() {
}

/**
 * Defines the metadata of NodeHealth
 *
 * @returns {object} metadata of NodeHealth
 *
 */
NodeHealth.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NodeHealth',
    type: {
      name: 'Composite',
      className: 'NodeHealth',
      modelProperties: {
        healthEvents: {
          required: false,
          serializedName: 'HealthEvents',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'HealthEventElementType',
                type: {
                  name: 'Composite',
                  className: 'HealthEvent'
                }
            }
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'Name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NodeHealth;
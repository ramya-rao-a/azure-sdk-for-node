/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * ASR error model
 *
 */
class ServiceError {
  /**
   * Create a ServiceError.
   * @member {string} [code] Error code.
   * @member {string} [message] Error message.
   * @member {string} [possibleCauses] Possible causes of error.
   * @member {string} [recommendedAction] Recommended action to resolve error.
   * @member {string} [activityId] Activity Id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceError
   *
   * @returns {object} metadata of ServiceError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceError',
      type: {
        name: 'Composite',
        className: 'ServiceError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          possibleCauses: {
            required: false,
            serializedName: 'possibleCauses',
            type: {
              name: 'String'
            }
          },
          recommendedAction: {
            required: false,
            serializedName: 'recommendedAction',
            type: {
              name: 'String'
            }
          },
          activityId: {
            required: false,
            serializedName: 'activityId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceError;

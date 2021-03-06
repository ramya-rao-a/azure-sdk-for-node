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

const models = require('./index');

/**
 * The StorSimple Manager
 *
 * @extends models['Resource']
 */
class Manager extends models['Resource'] {
  /**
   * Create a Manager.
   * @member {object} [cisIntrinsicSettings] Specifies if the Manager is Garda
   * or Helsinki
   * @member {string} [cisIntrinsicSettings.type] Refers to the type of the
   * StorSimple Manager. Possible values include: 'GardaV1', 'HelsinkiV1'
   * @member {string} [provisioningState] Specifies the state of the resource
   * as it is getting provisioned. Value of "Succeeded" means the Manager was
   * successfully created
   * @member {string} [etag] ETag of the Manager
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Manager
   *
   * @returns {object} metadata of Manager
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Manager',
      type: {
        name: 'Composite',
        className: 'Manager',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          cisIntrinsicSettings: {
            required: false,
            serializedName: 'properties.cisIntrinsicSettings',
            type: {
              name: 'Composite',
              className: 'ManagerIntrinsicSettings'
            }
          },
          sku: {
            required: false,
            isConstant: true,
            serializedName: 'properties.sku',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'ManagerSku'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Manager;

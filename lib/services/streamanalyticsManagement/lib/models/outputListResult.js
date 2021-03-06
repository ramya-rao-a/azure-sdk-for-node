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
 * Object containing a list of outputs under a streaming job.
 */
class OutputListResult extends Array {
  /**
   * Create a OutputListResult.
   * @member {string} [nextLink] The link (url) to the next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OutputListResult
   *
   * @returns {object} metadata of OutputListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OutputListResult',
      type: {
        name: 'Composite',
        className: 'OutputListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'Output'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OutputListResult;

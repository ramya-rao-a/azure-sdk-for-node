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
 * The retention details of the MT.
 *
 */
class RetentionVolume {
  /**
   * Create a RetentionVolume.
   * @member {string} [volumeName] The volume name.
   * @member {number} [capacityInBytes] The volume capacity.
   * @member {number} [freeSpaceInBytes] The free space available in this
   * volume.
   * @member {number} [thresholdPercentage] The threshold percentage.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RetentionVolume
   *
   * @returns {object} metadata of RetentionVolume
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RetentionVolume',
      type: {
        name: 'Composite',
        className: 'RetentionVolume',
        modelProperties: {
          volumeName: {
            required: false,
            serializedName: 'volumeName',
            type: {
              name: 'String'
            }
          },
          capacityInBytes: {
            required: false,
            serializedName: 'capacityInBytes',
            type: {
              name: 'Number'
            }
          },
          freeSpaceInBytes: {
            required: false,
            serializedName: 'freeSpaceInBytes',
            type: {
              name: 'Number'
            }
          },
          thresholdPercentage: {
            required: false,
            serializedName: 'thresholdPercentage',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = RetentionVolume;
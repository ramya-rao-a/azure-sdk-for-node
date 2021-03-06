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
 * Server Endpoint sync status
 *
 */
class ServerEndpointSyncStatus {
  /**
   * Create a ServerEndpointSyncStatus.
   * @property {string} [downloadHealth] Download Health Status. Possible
   * values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [uploadHealth] Upload Health Status. Possible values
   * include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [combinedHealth] Combined Health Status. Possible
   * values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [syncActivity] Sync activity. Possible values include:
   * 'Upload', 'Download', 'UploadAndDownload'
   * @property {number} [totalPersistentFilesNotSyncingCount] Total count of
   * persistent files not syncing (combined upload + download). Reserved for
   * future use.
   * @property {date} [lastUpdatedTimestamp] Last Updated Timestamp
   * @property {object} [uploadStatus] Upload Status
   * @property {number} [uploadStatus.lastSyncResult] Last sync result
   * (HResult)
   * @property {date} [uploadStatus.lastSyncTimestamp] Last sync timestamp
   * @property {date} [uploadStatus.lastSyncSuccessTimestamp] Last sync success
   * timestamp
   * @property {number} [uploadStatus.lastSyncPerItemErrorCount] Last sync per
   * item error count.
   * @property {number} [uploadStatus.persistentFilesNotSyncingCount] Count of
   * persistent files not syncing. Reserved for future use.
   * @property {number} [uploadStatus.transientFilesNotSyncingCount] Count of
   * transient files not syncing. Reserved for future use.
   * @property {array} [uploadStatus.filesNotSyncingErrors] Array of per-item
   * errors coming from the last sync session. Reserved for future use.
   * @property {object} [downloadStatus] Download Status
   * @property {number} [downloadStatus.lastSyncResult] Last sync result
   * (HResult)
   * @property {date} [downloadStatus.lastSyncTimestamp] Last sync timestamp
   * @property {date} [downloadStatus.lastSyncSuccessTimestamp] Last sync
   * success timestamp
   * @property {number} [downloadStatus.lastSyncPerItemErrorCount] Last sync
   * per item error count.
   * @property {number} [downloadStatus.persistentFilesNotSyncingCount] Count
   * of persistent files not syncing. Reserved for future use.
   * @property {number} [downloadStatus.transientFilesNotSyncingCount] Count of
   * transient files not syncing. Reserved for future use.
   * @property {array} [downloadStatus.filesNotSyncingErrors] Array of per-item
   * errors coming from the last sync session. Reserved for future use.
   * @property {object} [uploadActivity] Upload sync activity
   * @property {date} [uploadActivity.timestamp] Timestamp when properties were
   * updated
   * @property {number} [uploadActivity.perItemErrorCount] Per item error count
   * @property {number} [uploadActivity.appliedItemCount] Applied item count.
   * @property {number} [uploadActivity.totalItemCount] Total item count (if
   * available)
   * @property {number} [uploadActivity.appliedBytes] Applied bytes
   * @property {number} [uploadActivity.totalBytes] Total bytes (if available)
   * @property {object} [downloadActivity] Download sync activity
   * @property {date} [downloadActivity.timestamp] Timestamp when properties
   * were updated
   * @property {number} [downloadActivity.perItemErrorCount] Per item error
   * count
   * @property {number} [downloadActivity.appliedItemCount] Applied item count.
   * @property {number} [downloadActivity.totalItemCount] Total item count (if
   * available)
   * @property {number} [downloadActivity.appliedBytes] Applied bytes
   * @property {number} [downloadActivity.totalBytes] Total bytes (if
   * available)
   * @property {string} [offlineDataTransferStatus] Offline Data Transfer
   * State. Possible values include: 'InProgress', 'Stopping', 'NotRunning',
   * 'Complete'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServerEndpointSyncStatus
   *
   * @returns {object} metadata of ServerEndpointSyncStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServerEndpointSyncStatus',
      type: {
        name: 'Composite',
        className: 'ServerEndpointSyncStatus',
        modelProperties: {
          downloadHealth: {
            required: false,
            readOnly: true,
            serializedName: 'downloadHealth',
            type: {
              name: 'String'
            }
          },
          uploadHealth: {
            required: false,
            readOnly: true,
            serializedName: 'uploadHealth',
            type: {
              name: 'String'
            }
          },
          combinedHealth: {
            required: false,
            readOnly: true,
            serializedName: 'combinedHealth',
            type: {
              name: 'String'
            }
          },
          syncActivity: {
            required: false,
            readOnly: true,
            serializedName: 'syncActivity',
            type: {
              name: 'String'
            }
          },
          totalPersistentFilesNotSyncingCount: {
            required: false,
            readOnly: true,
            serializedName: 'totalPersistentFilesNotSyncingCount',
            type: {
              name: 'Number'
            }
          },
          lastUpdatedTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'lastUpdatedTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          uploadStatus: {
            required: false,
            readOnly: true,
            serializedName: 'uploadStatus',
            type: {
              name: 'Composite',
              className: 'SyncSessionStatus'
            }
          },
          downloadStatus: {
            required: false,
            readOnly: true,
            serializedName: 'downloadStatus',
            type: {
              name: 'Composite',
              className: 'SyncSessionStatus'
            }
          },
          uploadActivity: {
            required: false,
            readOnly: true,
            serializedName: 'uploadActivity',
            type: {
              name: 'Composite',
              className: 'SyncActivityStatus'
            }
          },
          downloadActivity: {
            required: false,
            readOnly: true,
            serializedName: 'downloadActivity',
            type: {
              name: 'Composite',
              className: 'SyncActivityStatus'
            }
          },
          offlineDataTransferStatus: {
            required: false,
            readOnly: true,
            serializedName: 'offlineDataTransferStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServerEndpointSyncStatus;

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the StorageBlobCreatedEventData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for an
 * Microsoft.Storage.BlobCreated event.
 *
 * @member {string} [api] The name of the API/operation that triggered this
 * event.
 * @member {string} [clientRequestId] A request id provided by the client of
 * the storage API operation that triggered this event.
 * @member {string} [requestId] The request id generated by the Storage service
 * for the storage API operation that triggered this event.
 * @member {string} [eTag] The etag of the object at the time this event was
 * triggered.
 * @member {string} [contentType] The content type of the blob. This is the
 * same as what would be returned in the Content-Type header from the blob.
 * @member {number} [contentLength] The size of the blob in bytes. This is the
 * same as what would be returned in the Content-Length header from the blob.
 * @member {string} [blobType] The type of blob.
 * @member {string} [url] The path to the blob.
 * @member {string} [sequencer] An opaque string value representing the logical
 * sequence of events for any particular blob name. Users can use standard
 * string comparison to understand the relative sequence of two events on the
 * same blob name.
 * @member {object} [storageDiagnostics] For service use only. Diagnostic data
 * occasionally included by the Azure Storage service. This property should be
 * ignored by event consumers.
 */
export interface StorageBlobCreatedEventData {
  api?: string;
  clientRequestId?: string;
  requestId?: string;
  eTag?: string;
  contentType?: string;
  contentLength?: number;
  blobType?: string;
  url?: string;
  sequencer?: string;
  storageDiagnostics?: any;
}

/**
 * @class
 * Initializes a new instance of the StorageBlobDeletedEventData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for an
 * Microsoft.Storage.BlobDeleted event.
 *
 * @member {string} [api] The name of the API/operation that triggered this
 * event.
 * @member {string} [clientRequestId] A request id provided by the client of
 * the storage API operation that triggered this event.
 * @member {string} [requestId] The request id generated by the Storage service
 * for the storage API operation that triggered this event.
 * @member {string} [contentType] The content type of the blob. This is the
 * same as what would be returned in the Content-Type header from the blob.
 * @member {string} [blobType] The type of blob.
 * @member {string} [url] The path to the blob.
 * @member {string} [sequencer] An opaque string value representing the logical
 * sequence of events for any particular blob name. Users can use standard
 * string comparison to understand the relative sequence of two events on the
 * same blob name.
 * @member {object} [storageDiagnostics] For service use only. Diagnostic data
 * occasionally included by the Azure Storage service. This property should be
 * ignored by event consumers.
 */
export interface StorageBlobDeletedEventData {
  api?: string;
  clientRequestId?: string;
  requestId?: string;
  contentType?: string;
  blobType?: string;
  url?: string;
  sequencer?: string;
  storageDiagnostics?: any;
}

/**
 * @class
 * Initializes a new instance of the EventHubCaptureFileCreatedEventData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for an
 * Microsoft.EventHub.CaptureFileCreated event.
 *
 * @member {string} [fileurl] The path to the capture file.
 * @member {string} [fileType] The file type of the capture file.
 * @member {string} [partitionId] The shard ID.
 * @member {number} [sizeInBytes] The file size.
 * @member {number} [eventCount] The number of events in the file.
 * @member {number} [firstSequenceNumber] The smallest sequence number from the
 * queue.
 * @member {number} [lastSequenceNumber] The last sequence number from the
 * queue.
 * @member {date} [firstEnqueueTime] The first time from the queue.
 * @member {date} [lastEnqueueTime] The last time from the queue.
 */
export interface EventHubCaptureFileCreatedEventData {
  fileurl?: string;
  fileType?: string;
  partitionId?: string;
  sizeInBytes?: number;
  eventCount?: number;
  firstSequenceNumber?: number;
  lastSequenceNumber?: number;
  firstEnqueueTime?: Date;
  lastEnqueueTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the ResourceWriteSuccessData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.Resources.ResourceWriteSuccess event. This is raised when a
 * resource create or update operation succeeds.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceWriteSuccessData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceWriteFailureData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.Resources.ResourceWriteFailure event. This is raised when a
 * resource create or update operation fails.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceWriteFailureData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceWriteCancelData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.Resources.ResourceWriteCancel event. This is raised when a
 * resource create or update operation is canceled.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceWriteCancelData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceDeleteSuccessData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.Resources.ResourceDeleteSuccess event. This is raised when a
 * resource delete operation succeeds.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceDeleteSuccessData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceDeleteFailureData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.Resources.ResourceDeleteFailure event. This is raised when a
 * resource delete operation fails.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceDeleteFailureData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceDeleteCancelData class.
 * @constructor
 * Schema of the Data property of an EventGridEvent for an
 * Microsoft.Resources.ResourceDeleteCancel event. This is raised when a
 * resource delete operation is canceled.
 *
 * @member {string} [tenantId] The tenant ID of the resource.
 * @member {string} [subscriptionId] The subscription ID of the resource.
 * @member {string} [resourceGroup] The resource group of the resource.
 * @member {string} [resourceProvider] The resource provider performing the
 * operation.
 * @member {string} [resourceUri] The URI of the resource in the operation.
 * @member {string} [operationName] The operation that was performed.
 * @member {string} [status] The status of the operation.
 * @member {string} [authorization] The requested authorization for the
 * operation.
 * @member {string} [claims] The properties of the claims.
 * @member {string} [correlationId] An operation ID used for troubleshooting.
 * @member {string} [httpRequest] The details of the operation.
 */
export interface ResourceDeleteCancelData {
  tenantId?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  resourceProvider?: string;
  resourceUri?: string;
  operationName?: string;
  status?: string;
  authorization?: string;
  claims?: string;
  correlationId?: string;
  httpRequest?: string;
}

/**
 * @class
 * Initializes a new instance of the EventGridEvent class.
 * @constructor
 * Properties of an event published to an Event Grid topic.
 *
 * @member {string} id An unique identifier for the event.
 * @member {string} [topic] The resource path of the event source.
 * @member {string} subject A resource path relative to the topic path.
 * @member {object} data Event data specific to the event type.
 * @member {string} eventType The type of the event that occurred.
 * @member {date} eventTime The time (in UTC) the event was generated.
 * @member {string} [metadataVersion] The schema version of the event metadata.
 * @member {string} dataVersion The schema version of the data object.
 */
export interface EventGridEvent {
  id: string;
  topic?: string;
  subject: string;
  data: any;
  eventType: string;
  eventTime: Date;
  readonly metadataVersion?: string;
  dataVersion: string;
}

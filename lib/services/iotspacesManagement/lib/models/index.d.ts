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
 * Initializes a new instance of the StorageContainerProperties class.
 * @constructor
 * The properties of the Azure Storage Container for file archive.
 *
 * @member {string} [connectionString] The connection string of the storage
 * account.
 * @member {string} [subscriptionId] The subscription identifier of the storage
 * account.
 * @member {string} [resourceGroup] The name of the resource group of the
 * storage account.
 * @member {string} [containerName] The name of storage container in the
 * storage account.
 */
export interface StorageContainerProperties {
  connectionString?: string;
  subscriptionId?: string;
  resourceGroup?: string;
  containerName?: string;
}

/**
 * @class
 * Initializes a new instance of the IoTSpacesProperties class.
 * @constructor
 * The properties of an IoTSpaces instance.
 *
 * @member {string} [provisioningState] The provisioning state. Possible values
 * include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @member {string} [managementApiUrl] The management Api endpoint.
 * @member {string} [webPortalUrl] The management UI endpoint.
 * @member {object} [storageContainer] The properties of the designated storage
 * container.
 * @member {string} [storageContainer.connectionString] The connection string
 * of the storage account.
 * @member {string} [storageContainer.subscriptionId] The subscription
 * identifier of the storage account.
 * @member {string} [storageContainer.resourceGroup] The name of the resource
 * group of the storage account.
 * @member {string} [storageContainer.containerName] The name of storage
 * container in the storage account.
 */
export interface IoTSpacesProperties {
  readonly provisioningState?: string;
  readonly managementApiUrl?: string;
  readonly webPortalUrl?: string;
  storageContainer?: StorageContainerProperties;
}

/**
 * @class
 * Initializes a new instance of the IoTSpacesSkuInfo class.
 * @constructor
 * Information about the SKU of the IoTSpaces instance.
 *
 * @member {string} name The name of the SKU. Possible values include: 'F1',
 * 'S1', 'S2', 'S3'
 */
export interface IoTSpacesSkuInfo {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The common properties of an IoTSpaces service.
 *
 * @member {string} [id] The resource identifier.
 * @member {string} [name] The resource name.
 * @member {string} [type] The resource type.
 * @member {string} location The resource location.
 * @member {object} [tags] The resource tags.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the IoTSpacesDescription class.
 * @constructor
 * The description of the IoTSpaces service.
 *
 * @member {object} [properties] The common properties of a IoTSpaces service.
 * @member {string} [properties.provisioningState] The provisioning state.
 * Possible values include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * @member {string} [properties.managementApiUrl] The management Api endpoint.
 * @member {string} [properties.webPortalUrl] The management UI endpoint.
 * @member {object} [properties.storageContainer] The properties of the
 * designated storage container.
 * @member {string} [properties.storageContainer.connectionString] The
 * connection string of the storage account.
 * @member {string} [properties.storageContainer.subscriptionId] The
 * subscription identifier of the storage account.
 * @member {string} [properties.storageContainer.resourceGroup] The name of the
 * resource group of the storage account.
 * @member {string} [properties.storageContainer.containerName] The name of
 * storage container in the storage account.
 * @member {object} sku A valid instance SKU.
 * @member {string} [sku.name] The name of the SKU. Possible values include:
 * 'F1', 'S1', 'S2', 'S3'
 */
export interface IoTSpacesDescription extends Resource {
  properties?: IoTSpacesProperties;
  sku: IoTSpacesSkuInfo;
}

/**
 * @class
 * Initializes a new instance of the IoTSpacesPatchDescription class.
 * @constructor
 * The description of the IoTSpaces service.
 *
 * @member {object} [tags] Instance tags
 * @member {object} [properties] The common properties of an IoTSpaces service.
 * @member {string} [properties.provisioningState] The provisioning state.
 * Possible values include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * @member {string} [properties.managementApiUrl] The management Api endpoint.
 * @member {string} [properties.webPortalUrl] The management UI endpoint.
 * @member {object} [properties.storageContainer] The properties of the
 * designated storage container.
 * @member {string} [properties.storageContainer.connectionString] The
 * connection string of the storage account.
 * @member {string} [properties.storageContainer.subscriptionId] The
 * subscription identifier of the storage account.
 * @member {string} [properties.storageContainer.resourceGroup] The name of the
 * resource group of the storage account.
 * @member {string} [properties.storageContainer.containerName] The name of
 * storage container in the storage account.
 */
export interface IoTSpacesPatchDescription {
  tags?: { [propertyName: string]: string };
  properties?: IoTSpacesProperties;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * Error details.
 *
 * @member {string} [code] The error code.
 * @member {string} [message] The error message.
 * @member {string} [target] The target of the particular error.
 */
export interface ErrorDetails {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft IoTSpaces
 * @member {string} [resource] Resource Type: IoTSpaces
 * @member {string} [operation] Name of the operation
 * @member {string} [description] Friendly description for the operation,
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * IoTSpaces service REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{read | write
 * | action | delete}
 * @member {object} [display]
 * @member {string} [display.provider] Service provider: Microsoft IoTSpaces
 * @member {string} [display.resource] Resource Type: IoTSpaces
 * @member {string} [display.operation] Name of the operation
 * @member {string} [display.description] Friendly description for the
 * operation,
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the OperationInputs class.
 * @constructor
 * Input values.
 *
 * @member {string} name The name of the IoTSpaces service instance to check.
 */
export interface OperationInputs {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the IoTSpacesNameAvailabilityInfo class.
 * @constructor
 * The properties indicating whether a given IoTSpaces service name is
 * available.
 *
 * @member {boolean} [nameAvailable] The value which indicates whether the
 * provided name is available.
 * @member {string} [reason] The reason for unavailability. Possible values
 * include: 'Invalid', 'AlreadyExists'
 * @member {string} [message] The detailed reason message.
 */
export interface IoTSpacesNameAvailabilityInfo {
  readonly nameAvailable?: boolean;
  readonly reason?: string;
  message?: string;
}


/**
 * @class
 * Initializes a new instance of the IoTSpacesDescriptionListResult class.
 * @constructor
 * A list of IoTSpaces description objects with a next link.
 *
 * @member {string} [nextLink] The link used to get the next page of IoTSpaces
 * description objects.
 */
export interface IoTSpacesDescriptionListResult extends Array<IoTSpacesDescription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * A list of IoTSpaces service operations. It contains a list of operations and
 * a URL link to get the next set of results.
 *
 * @member {string} [nextLink] The link used to get the next page of IoTSpaces
 * description objects.
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}
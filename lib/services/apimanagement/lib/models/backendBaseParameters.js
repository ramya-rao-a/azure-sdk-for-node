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
 * Backend entity base Parameter set.
 *
 */
class BackendBaseParameters {
  /**
   * Create a BackendBaseParameters.
   * @member {string} [title] Backend Title.
   * @member {string} [description] Backend Description.
   * @member {string} [resourceId] Management Uri of the Resource in External
   * System. This url can be the Arm Resource Id of Logic Apps, Function Apps
   * or Api Apps.
   * @member {object} [properties] Backend Properties contract
   * @member {object} [properties.serviceFabricCluster] Backend Service Fabric
   * Cluster Properties
   * @member {string}
   * [properties.serviceFabricCluster.clientCertificatethumbprint] The client
   * certificate thumbprint for the management endpoint.
   * @member {number}
   * [properties.serviceFabricCluster.maxPartitionResolutionRetries] Maximum
   * number of retries while attempting resolve the parition.
   * @member {array} [properties.serviceFabricCluster.managementEndpoints] The
   * cluster management endpoint.
   * @member {array}
   * [properties.serviceFabricCluster.serverCertificateThumbprints] Thumbprints
   * of certificates cluster management service uses for tls communication
   * @member {array} [properties.serviceFabricCluster.serverX509Names] Server
   * X509 Certificate Names Collection
   * @member {object} [credentials] Backend Credentials Contract Properties
   * @member {array} [credentials.certificate] List of Client Certificate
   * Thumbprint.
   * @member {object} [credentials.query] Query Parameter description.
   * @member {object} [credentials.header] Header Parameter description.
   * @member {object} [credentials.authorization] Authorization header
   * authentication
   * @member {string} [credentials.authorization.scheme] Authentication Scheme
   * name.
   * @member {string} [credentials.authorization.parameter] Authentication
   * Parameter value.
   * @member {object} [proxy] Backend Proxy Contract Properties
   * @member {string} [proxy.url] WebProxy Server AbsoluteUri property which
   * includes the entire URI stored in the Uri instance, including all
   * fragments and query strings.
   * @member {string} [proxy.username] Username to connect to the WebProxy
   * server
   * @member {string} [proxy.password] Password to connect to the WebProxy
   * Server
   * @member {object} [tls] Backend TLS Properties
   * @member {boolean} [tls.validateCertificateChain] Flag indicating whether
   * SSL certificate chain validation should be done when using self-signed
   * certificates for this backend host.
   * @member {boolean} [tls.validateCertificateName] Flag indicating whether
   * SSL certificate name validation should be done when using self-signed
   * certificates for this backend host.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackendBaseParameters
   *
   * @returns {object} metadata of BackendBaseParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackendBaseParameters',
      type: {
        name: 'Composite',
        className: 'BackendBaseParameters',
        modelProperties: {
          title: {
            required: false,
            serializedName: 'title',
            constraints: {
              MaxLength: 300,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'BackendProperties'
            }
          },
          credentials: {
            required: false,
            serializedName: 'credentials',
            type: {
              name: 'Composite',
              className: 'BackendCredentialsContract'
            }
          },
          proxy: {
            required: false,
            serializedName: 'proxy',
            type: {
              name: 'Composite',
              className: 'BackendProxyContract'
            }
          },
          tls: {
            required: false,
            serializedName: 'tls',
            type: {
              name: 'Composite',
              className: 'BackendTlsProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = BackendBaseParameters;
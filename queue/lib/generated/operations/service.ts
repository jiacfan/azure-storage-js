/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: StorageClientContext;

  /**
   * Create a Service.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Sets properties for a storage account's Queue service endpoint, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules
   *
   * @param {StorageServiceProperties} storageServiceProperties The StorageService properties.
   *
   * @param {ServiceSetPropertiesOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  setProperties(storageServiceProperties: Models.StorageServiceProperties): Promise<Models.ServiceSetPropertiesResponse>;
  setProperties(storageServiceProperties: Models.StorageServiceProperties, options: Models.ServiceSetPropertiesOptionalParams): Promise<Models.ServiceSetPropertiesResponse>;
  setProperties(storageServiceProperties: Models.StorageServiceProperties, callback: msRest.ServiceCallback<void>): void;
  setProperties(storageServiceProperties: Models.StorageServiceProperties, options: Models.ServiceSetPropertiesOptionalParams, callback: msRest.ServiceCallback<void>): void;
  setProperties(storageServiceProperties: Models.StorageServiceProperties, options?: Models.ServiceSetPropertiesOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<Models.ServiceSetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        storageServiceProperties,
        options
      },
      setPropertiesOperationSpec,
      callback) as Promise<Models.ServiceSetPropertiesResponse>;
  }

  /**
   * gets the properties of a storage account's Queue service, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules.
   *
   * @param {ServiceGetPropertiesOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getProperties(): Promise<Models.ServiceGetPropertiesResponse>;
  getProperties(options: Models.ServiceGetPropertiesOptionalParams): Promise<Models.ServiceGetPropertiesResponse>;
  getProperties(callback: msRest.ServiceCallback<Models.StorageServiceProperties>): void;
  getProperties(options: Models.ServiceGetPropertiesOptionalParams, callback: msRest.ServiceCallback<Models.StorageServiceProperties>): void;
  getProperties(options?: Models.ServiceGetPropertiesOptionalParams, callback?: msRest.ServiceCallback<Models.StorageServiceProperties>): Promise<Models.ServiceGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.ServiceGetPropertiesResponse>;
  }

  /**
   * Retrieves statistics related to replication for the Queue service. It is only available on the
   * secondary location endpoint when read-access geo-redundant replication is enabled for the
   * storage account.
   *
   * @param {ServiceGetStatisticsOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getStatistics(): Promise<Models.ServiceGetStatisticsResponse>;
  getStatistics(options: Models.ServiceGetStatisticsOptionalParams): Promise<Models.ServiceGetStatisticsResponse>;
  getStatistics(callback: msRest.ServiceCallback<Models.StorageServiceStats>): void;
  getStatistics(options: Models.ServiceGetStatisticsOptionalParams, callback: msRest.ServiceCallback<Models.StorageServiceStats>): void;
  getStatistics(options?: Models.ServiceGetStatisticsOptionalParams, callback?: msRest.ServiceCallback<Models.StorageServiceStats>): Promise<Models.ServiceGetStatisticsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getStatisticsOperationSpec,
      callback) as Promise<Models.ServiceGetStatisticsResponse>;
  }

  /**
   * The List Queues Segment operation returns a list of the queues under the specified account
   *
   * @param {ServiceListQueuesSegmentOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listQueuesSegment(): Promise<Models.ServiceListQueuesSegmentResponse>;
  listQueuesSegment(options: Models.ServiceListQueuesSegmentOptionalParams): Promise<Models.ServiceListQueuesSegmentResponse>;
  listQueuesSegment(callback: msRest.ServiceCallback<Models.ListQueuesSegmentResponse>): void;
  listQueuesSegment(options: Models.ServiceListQueuesSegmentOptionalParams, callback: msRest.ServiceCallback<Models.ListQueuesSegmentResponse>): void;
  listQueuesSegment(options?: Models.ServiceListQueuesSegmentOptionalParams, callback?: msRest.ServiceCallback<Models.ListQueuesSegmentResponse>): Promise<Models.ServiceListQueuesSegmentResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listQueuesSegmentOperationSpec,
      callback) as Promise<Models.ServiceListQueuesSegmentResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers, true);
const setPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "storageServiceProperties",
    mapper: {
      ...Mappers.StorageServiceProperties,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getStatisticsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp1
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceStats,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const listQueuesSegmentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxresults,
    Parameters.include,
    Parameters.timeout,
    Parameters.comp2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListQueuesSegmentResponse,
      headersMapper: Mappers.ServiceListQueuesSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

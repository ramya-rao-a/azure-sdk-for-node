// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'd6de6c77-affa-4d3c-adec-b44cedba395e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '7ab36255-1d0c-46f9-b1e1-ca4bf873481d',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190816Z:7ab36255-1d0c-46f9-b1e1-ca4bf873481d',
  date: 'Mon, 05 Aug 2019 19:08:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'e5d438e8-3c2b-4f48-9f85-c291a2142054',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'ca028094-6360-4913-ba89-4a86f69b00c8',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190846Z:ca028094-6360-4913-ba89-4a86f69b00c8',
  date: 'Mon, 05 Aug 2019 19:08:46 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': '61db3c93-dd4f-4151-ae40-71a455051731',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '8ffdb8a2-3310-4003-8de6-82864170c39c',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190917Z:8ffdb8a2-3310-4003-8de6-82864170c39c',
  date: 'Mon, 05 Aug 2019 19:09:17 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': '5023e082-c164-4f19-b380-aee740be9c27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'e9b2edc5-47b0-40fb-a16d-3d1a97cb76e3',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190948Z:e9b2edc5-47b0-40fb-a16d-3d1a97cb76e3',
  date: 'Mon, 05 Aug 2019 19:09:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'fcbe7bea-55c1-4490-a723-dd1ffd2006a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '03aba71f-4b77-4d3d-9202-5cfcf388fd42',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191018Z:03aba71f-4b77-4d3d-9202-5cfcf388fd42',
  date: 'Mon, 05 Aug 2019 19:10:17 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'c93c1d5f-353e-4d71-9d88-b57307943a8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'c882695c-ab62-4bdc-aa04-cab2dc6f5b07',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191049Z:c882695c-ab62-4bdc-aa04-cab2dc6f5b07',
  date: 'Mon, 05 Aug 2019 19:10:48 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': '26a4ca02-fa9b-4a5d-963b-c91350c6cbf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2a58f079-9aed-48d5-bbdc-6505866e5a17',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191120Z:2a58f079-9aed-48d5-bbdc-6505866e5a17',
  date: 'Mon, 05 Aug 2019 19:11:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': '79ff76ae-1829-4bfb-9f82-63d53f55db58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'dcffc1af-5c2e-4d7d-a6eb-7f2c250766f2',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191150Z:dcffc1af-5c2e-4d7d-a6eb-7f2c250766f2',
  date: 'Mon, 05 Aug 2019 19:11:50 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': '3bb70db5-2ec6-44bd-a15b-4c928dce1c56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '404cd2c8-6bf5-468a-8a7b-3e151d646771',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191221Z:404cd2c8-6bf5-468a-8a7b-3e151d646771',
  date: 'Mon, 05 Aug 2019 19:12:21 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'b33643fc-fe56-4bbc-87c3-7b4aee0ae7e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'ac8f199e-3bcf-49f3-b766-e0e557436c76',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191251Z:ac8f199e-3bcf-49f3-b766-e0e557436c76',
  date: 'Mon, 05 Aug 2019 19:12:51 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'f0c07c9e-7cd5-437a-9abf-8f1d0caebedb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '03364225-2488-4a41-aef2-a9cc06382712',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191322Z:03364225-2488-4a41-aef2-a9cc06382712',
  date: 'Mon, 05 Aug 2019 19:13:21 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-d6de6c77-affa-4d3c-adec-b44cedba395e?api-version=2019-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '33a3b191-0a4f-41aa-8b93-41394627d08a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '811e3a4c-e600-480a-a78e-cfcc1935e525',
  'x-ms-routing-request-id':
   'WESTUS:20190805T191353Z:811e3a4c-e600-480a-a78e-cfcc1935e525',
  date: 'Mon, 05 Aug 2019 19:13:52 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6593.azuredatalakeanalytics.net\",\"accountId\":\"cd646649-2b4f-4a37-9b6c-f9877d0b9320\",\"creationTime\":\"2017-01-22T06:48:50.3298174Z\",\"lastModifiedTime\":\"2017-01-22T06:48:50.3298174Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6593\",\"name\":\"xplattestadla6593\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6970.azuredatalakeanalytics.net\",\"accountId\":\"352a99ba-3fea-4987-a11c-43c1b8cafc4c\",\"creationTime\":\"2017-01-22T06:42:20.2128811Z\",\"lastModifiedTime\":\"2017-01-22T06:42:20.2128811Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6970\",\"name\":\"xplattestadla6970\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1658',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '91ab3230-9214-4305-a35f-5a398bfbbdc3',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14868',
  'x-ms-correlation-request-id': '940971b2-a3d5-4459-9f53-ceeff3fb571d',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064929Z:940971b2-a3d5-4459-9f53-ceeff3fb571d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6593.azuredatalakeanalytics.net\",\"accountId\":\"cd646649-2b4f-4a37-9b6c-f9877d0b9320\",\"creationTime\":\"2017-01-22T06:48:50.3298174Z\",\"lastModifiedTime\":\"2017-01-22T06:48:50.3298174Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6593\",\"name\":\"xplattestadla6593\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6970.azuredatalakeanalytics.net\",\"accountId\":\"352a99ba-3fea-4987-a11c-43c1b8cafc4c\",\"creationTime\":\"2017-01-22T06:42:20.2128811Z\",\"lastModifiedTime\":\"2017-01-22T06:42:20.2128811Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6970\",\"name\":\"xplattestadla6970\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1658',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '91ab3230-9214-4305-a35f-5a398bfbbdc3',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14868',
  'x-ms-correlation-request-id': '940971b2-a3d5-4459-9f53-ceeff3fb571d',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064929Z:940971b2-a3d5-4459-9f53-ceeff3fb571d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6593.azuredatalakeanalytics.net\",\"accountId\":\"cd646649-2b4f-4a37-9b6c-f9877d0b9320\",\"creationTime\":\"2017-01-22T06:48:50.3298174Z\",\"lastModifiedTime\":\"2017-01-22T06:48:50.3298174Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6593\",\"name\":\"xplattestadla6593\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6970.azuredatalakeanalytics.net\",\"accountId\":\"352a99ba-3fea-4987-a11c-43c1b8cafc4c\",\"creationTime\":\"2017-01-22T06:42:20.2128811Z\",\"lastModifiedTime\":\"2017-01-22T06:42:20.2128811Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6970\",\"name\":\"xplattestadla6970\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1658',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b1c0f27-64da-4a14-bd0a-841f6b034d1d',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '049be5d4-592d-4df1-9913-f5e99e117f13',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064931Z:049be5d4-592d-4df1-9913-f5e99e117f13',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6593.azuredatalakeanalytics.net\",\"accountId\":\"cd646649-2b4f-4a37-9b6c-f9877d0b9320\",\"creationTime\":\"2017-01-22T06:48:50.3298174Z\",\"lastModifiedTime\":\"2017-01-22T06:48:50.3298174Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6593\",\"name\":\"xplattestadla6593\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6970.azuredatalakeanalytics.net\",\"accountId\":\"352a99ba-3fea-4987-a11c-43c1b8cafc4c\",\"creationTime\":\"2017-01-22T06:42:20.2128811Z\",\"lastModifiedTime\":\"2017-01-22T06:42:20.2128811Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6970\",\"name\":\"xplattestadla6970\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1658',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b1c0f27-64da-4a14-bd0a-841f6b034d1d',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '049be5d4-592d-4df1-9913-f5e99e117f13',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064931Z:049be5d4-592d-4df1-9913-f5e99e117f13',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:30 GMT',
  connection: 'close' });
 return result; }]];
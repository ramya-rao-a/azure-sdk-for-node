// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/terminate?api-version=2016-07-01.3.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:51:56 GMT',
  etag: '0x8D3B7D0A671D3EE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '41670deb-18f8-4433-afdf-6a7f330669d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobschedules/NodeSDKTestSchedule/terminate',
  date: 'Fri, 29 Jul 2016 16:51:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/terminate?api-version=2016-07-01.3.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:51:56 GMT',
  etag: '0x8D3B7D0A671D3EE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '41670deb-18f8-4433-afdf-6a7f330669d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobschedules/NodeSDKTestSchedule/terminate',
  date: 'Fri, 29 Jul 2016 16:51:55 GMT',
  connection: 'close' });
 return result; }]];
/**
 * Auto-generated action file for "DoubleClick Search" API.
 *
 * Generated at: 2019-05-23T09:13:21.450Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-doubleclicksearch-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'doubleclicksearch.reports.request'
 * Endpoint Path: '/reports'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "alt",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "alt": "alt",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "columns": "columns",
    "downloadFormat": "downloadFormat",
    "filters": "filters",
    "includeDeletedEntities": "includeDeletedEntities",
    "includeRemovedEntities": "includeRemovedEntities",
    "maxRowsPerFile": "maxRowsPerFile",
    "orderBy": "orderBy",
    "adGroupId": "adGroupId",
    "adId": "adId",
    "advertiserId": "advertiserId",
    "agencyId": "agencyId",
    "campaignId": "campaignId",
    "engineAccountId": "engineAccountId",
    "keywordId": "keywordId",
    "reportScope": "reportScope",
    "reportType": "reportType",
    "rowCount": "rowCount",
    "startRow": "startRow",
    "statisticsCurrency": "statisticsCurrency",
    "changedAttributesSinceTimestamp": "changedAttributesSinceTimestamp",
    "changedMetricsSinceTimestamp": "changedMetricsSinceTimestamp",
    "endDate": "endDate",
    "startDate": "startDate",
    "timeRange": "timeRange",
    "verifySingleTimeZone": "verifySingleTimeZone",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'doubleclicksearch.reports.request',
        pathName: '/reports',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}
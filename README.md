# ![LOGO](logo.png) DoubleClick Search **flow**ground Connector

## Description

A generated **flow**ground connector for the DoubleClick Search API (version v2).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/doubleclicksearch/v2/swagger.json<br/>
Generated at: 2019-05-23T12:13:21+03:00

## API Description

Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieves a list of conversions from a DoubleClick Search engine account.

*Tags:* `conversion`

#### Input Parameters
* `adGroupId` - _optional_ - Numeric ID of the ad group.
* `adId` - _optional_ - Numeric ID of the ad.
* `advertiserId` - _required_ - Numeric ID of the advertiser.
* `agencyId` - _required_ - Numeric ID of the agency.
* `campaignId` - _optional_ - Numeric ID of the campaign.
* `criterionId` - _optional_ - Numeric ID of the criterion.
* `endDate` - _required_ - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* `engineAccountId` - _required_ - Numeric ID of the engine account.
* `rowCount` - _required_ - The number of conversions to return per call.
* `startDate` - _required_ - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* `startRow` - _required_ - The 0-based starting index for retrieving conversions results.

### Retrieve the list of saved columns for a specified advertiser.

*Tags:* `savedColumns`

#### Input Parameters
* `advertiserId` - _required_ - DS ID of the advertiser.
* `agencyId` - _required_ - DS ID of the agency.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.

*Tags:* `conversion`

#### Input Parameters
* `advertiserId` - _required_ - Numeric ID of the advertiser.
* `agencyId` - _required_ - Numeric ID of the agency.
* `endDate` - _required_ - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* `engineAccountId` - _required_ - Numeric ID of the engine account.
* `rowCount` - _required_ - The number of conversions to return per call.
* `startDate` - _required_ - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* `startRow` - _required_ - The 0-based starting index for retrieving conversions results.

### Inserts a batch of new conversions into DoubleClick Search.

*Tags:* `conversion`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a batch of conversions in DoubleClick Search.

*Tags:* `conversion`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

*Tags:* `conversion`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a report request into the reporting system.

*Tags:* `reports`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Generates and returns a report immediately.

*Tags:* `reports`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Polls for the status of a report request.

*Tags:* `reports`

#### Input Parameters
* `reportId` - _required_ - ID of the report request being polled.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Downloads a report file encoded in UTF-8.

*Tags:* `reports`

#### Input Parameters
* `reportFragment` - _required_ - The index of the report fragment to download.
* `reportId` - _required_ - ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-doubleclicksearch-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.

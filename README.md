# Serverless API Management

Simple API management implementation with Amazon API Gateway and Serverless Framework.

## API Management
- Design usage plan for your clients (e.g: freemium, paid, enterprise)
- Manage quota (e.g: free users can send 5 requests per day)
- Manage throttling with rate and burst limits

## Features
- Endpoint to list available usage plans from AWS API Gateway
- Endpoint to get usage report of your API key
- Endpoint to create API key for new users and associate his/her key to an existing usage plan

## Request samples

### List available usage plans

```
curl --request GET \
  --url https://api-gateway-base-url.your-default-region.amazonaws.com/dev/getUsagePlans \
  --header 'x-api-key: your-super-secret-api-key'
```

### Get usage report of API key

Send the date range your want to analyze, the customer's API key ID and the Usage Plan ID this key belongs to (available on the previous request).

```
curl --request GET \
  --url 'https://api-gateway-base-url.your-default-region.amazonaws.com/dev/getUsage?from=YYYY-MM-DD&to=YYYY-MM-DD&usagePlanId=usage-plan-id&keyId=customer-api-key-id' \
  --header 'x-api-key: your-super-secret-api-key'
```

### Generate API key and add it to Usage Plan

In the sample below, you'll add the customer <b>johndoe@mail.com</b> on a specific usage plan (e.g: free). It'll return the API key's token and ID.

```
curl --request POST \
  --url 'https://api-gateway-base-url.your-default-region.amazonaws.com/dev/addKey?name=johndoe%40mail.com&usagePlanId=usage-plan-id' \
  --header 'x-api-key: your-super-secret-api-key'
```

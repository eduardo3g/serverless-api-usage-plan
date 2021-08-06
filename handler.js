"use strict";
const AWS = require("aws-sdk");
const apiGateway = new AWS.APIGateway();
const moment = require("moment");

const hello = async (event) => {
  return {
    statusCode: 200,
    body: "Hello world",
  };
};

const usagePlans = async (event) => {
  const result = await apiGateway.getUsagePlans().promise();
  console.log("Usage plans", result);

  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };
};

const usage = async (event) => {
  const { from, to, usagePlanId, keyId } = event.queryStringParameters;

  const usage = await apiGateway
    .getUsage({
      startDate: moment(from).format("YYY-MM-DD"),
      endDate: moment(to).format("YYY-MM-DD"),
      usagePlanId,
      keyId,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(usage, null, 2),
  };
};

module.exports = {
  hello,
  usagePlans,
  usage,
};

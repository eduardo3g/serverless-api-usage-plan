HOST=http://aws-apigateway-url:3000
APIKEY="your-api-key"
echo "Press <CRTL + C> to exit"
while :
do
    curl --silent \
        -H "x-api-key: $APIKEY"
        $HOST/dev/hello
done

curl --silent \
    $HOST/dev/getUsagePlans | tee getUsagePlans.log

# from getUsagePlans.log
USAGE_PLAN_ID="your-usage-plan-id"
KEYID="key-id"
APIKEY="api-key-id"
FROM="2021-08-06"
TO="2021-08-07"

curl --silent \
    "$HOST/dev/getUsage?keyId=$KEYID&usagePlanId=$USAGE_PLAN_ID&from=$FROM&to$TO" \
    | tee usage.log
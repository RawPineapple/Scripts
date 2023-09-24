/***********************************

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/RawPineapple/Scripts/main/revenuecat.js

[mitm]

hostname=api.revenuecat.com

***********************************/

var body = JSON.parse($response.body)

body['subscriber']['subscriptions']['grow_1y_128']['expires_date']="2099-10-01T09:22:47Z";
body['subscriber']['entitlements']['grow.pro']['expires_date']="2099-10-01T09:22:47Z";

$done({body:JSON.stringify(body)})

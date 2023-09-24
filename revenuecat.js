/***********************************

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/RawPineapple/Scripts/main/revenuecat.js

[mitm]

hostname=api.revenuecat.com

***********************************/

var obj = {
  "request_date_ms" : 1695555312858,
  "request_date" : "2023-09-24T11:35:12Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-09-24T08:51:38Z",
    "original_application_version" : "250",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "grow_1y_128" : {
        "original_purchase_date" : "2023-09-24T09:22:48Z",
        "expires_date" : "2099-10-01T09:22:47Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-24T09:22:47Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "grow.pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-24T09:22:47Z",
        "product_identifier" : "grow_1y_128",
        "expires_date" : "2099-10-01T09:22:47Z"
      }
    },
    "original_purchase_date" : "2023-09-24T08:13:13Z",
    "original_app_user_id" : "$RCAnonymousID:9d16cc33535c408a9cb2604d9080e736",
    "last_seen" : "2023-09-24T08:51:38Z"
  }
}

$done({body:JSON.stringify(obj)});

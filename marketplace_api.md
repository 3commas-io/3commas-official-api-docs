# Marketplace Api 
#### _Please read General API Information first_
### All marketplace items (Permission: NONE, Security: NONE)
```
GET /ver1/marketplace/items
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (50) | Limit records. Max: 1_000
offset | integer | NO |   | Offset records
scope | string | NO | all, paid, free (all) | paid - show only paid signal providers. free - show only free signal providers
order | string | NO | subscribers, name, newest (newest) | 
locale | string | NO | en, ru, zh, zh-CN, cn, es, pt (en) | 
### Marketplace Item Signals (Permission: NONE, Security: NONE)
```
GET /ver1/marketplace/{item_id}/signals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (50) | Limit records. Max: 1_000
offset | integer | NO |   | Offset records
order | string | NO | pair, exchange, signal_type, date (date) | 
order_direction | string | NO | asc, desc (desc) | 
locale | string | NO | en, ru, zh, zh-CN, cn, es, pt (en) | 
item_id | integer | YES |   | 
# Response Entities 

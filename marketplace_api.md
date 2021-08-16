# Marketplace Api 
#### _Please read General API Information first_
### Marketplace presets (Permission: NONE, Security: SIGNED)
```
GET /ver1/marketplace/presets
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
profit_per_day_from | number | NO |   | 
profit_per_day_to | number | NO |   | 
profit_per_month_from | number | NO |   | 
profit_per_month_to | number | NO |   | 
account_types | array[string] | NO |   | 
markets | array[string] | NO |   | 
with_all_market_pairs | boolean | NO |   | 
pairs | array[string] | NO |   | 
days_running_from | integer | NO |   | 
days_running_to | integer | NO |   | 
deal_start_conditions | array[string] | NO |   | 
bot_type | string | NO |   | 
bot_strategy | string | NO |   | 
cmc | string | NO |   | 
sort_by | string | NO |   | 
sort_direction | string | NO | asc, desc  | 
page | integer | NO |  (1) | 
per_page | integer | NO |   | 
### IndexEntity
 ``` 
 {
bots: array 
  total: integer 
  page: integer 
  } 
 ``` 
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
locale | string | NO | en, ru, zh, zh-CN, es, pt, ko, fr, cs (en) | 
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
locale | string | NO | en, ru, zh, zh-CN, es, pt, ko, fr, cs (en) | 
item_id | integer | YES |   | 
# Response Entities 
### IndexEntity
 ``` 
 {
bots:                                     
total:                                    
page:                                     
} 
 ``` 
### MarketplaceBotEntity
 ``` 
 {
id:                                       
type:                                     
name:                                     
strategy:                                 
secret:                                   
marketplace_item: MarketplaceItem    
profit: Profit    
currencies:                               
copies:                                  Bot's copies count 
is_favorite:                              
} 
 ``` 

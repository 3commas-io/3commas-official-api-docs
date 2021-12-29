# GridBots Api 
#### _Please read General API Information first_
### Create AI Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/ai
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |  (GridBot) | Grid Bot's name
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
total_quantity | number | YES |   | 
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Leverage type for futures accounts
leverage_custom_value | number | NO |   | Required if leverage_type = 'isolated'
### Create Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/manual
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |  (GridBot) | Grid Bot's name
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
upper_price | number | YES |   | 
lower_price | number | YES |   | 
quantity_per_grid | number | YES |   | 
grids_quantity | number | YES |   | 
upper_stop_loss_price | number | NO |   | 
upper_stop_loss_enabled | boolean | NO |   | 
upper_stop_loss_action | string | NO | stop_bot, stop_bot_and_buy, stop_bot_and_sell, stop_bot_and_close_position (stop_bot) | 
lower_stop_loss_price | number | NO |   | 
lower_stop_loss_enabled | boolean | NO |   | 
lower_stop_loss_action | string | NO | stop_bot, stop_bot_and_buy, stop_bot_and_sell, stop_bot_and_close_position (stop_bot) | 
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Leverage type for futures accounts
leverage_custom_value | number | NO |   | Required if leverage_type = 'isolated'
is_enabled | boolean | NO |  (true) | Turn on or off grid_bot after creation
### Get AI settings (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/ai_settings
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pair | string | YES |   | 
market_code | string | YES |   | Market code from /accounts/market_list
### Grid bots list (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_ids | array[integer] | NO |   | Filter by account id
account_types | array[string] | NO |   | Filter by account type
state | string | NO | enabled, disabled  | Filter by bot state
sort_by | string | NO | current_profit, profit, bot_id, pair, created_at, updated_at  | Sort column
sort_direction | string | NO | desc, asc  | Sort direction
limit | integer | NO |  (10) | 
offset | integer | NO |  (0) | 
from | string | NO |   | Param for a filter by created date
base | string | NO |   | Base currency
quote | string | NO |   | Quote currency
### Grid Bot Market Orders (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}/market_orders
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Grid Bot Profits (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}/profits
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### GridBotProfitsEntity
 ``` 
 {
grid_line_id: integer 
  profit: string 
  usd_profit: string 
  created_at: string 
  } 
 ``` 
### Edit Grid Bot (AI) (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/grid_bots/{id}/ai
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |  (GridBot) | Grid Bot's name
pair | string | YES |   | 
total_quantity | number | YES |   | 
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Leverage type for futures accounts
leverage_custom_value | number | NO |   | Required if leverage_type = 'isolated'
id | integer | YES |   | 
### Edit Grid Bot (Manual) (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/grid_bots/{id}/manual
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |  (GridBot) | Grid Bot's name
pair | string | YES |   | 
upper_price | number | YES |   | 
lower_price | number | YES |   | 
quantity_per_grid | number | YES |   | 
grids_quantity | number | YES |   | 
upper_stop_loss_price | number | NO |   | 
upper_stop_loss_enabled | boolean | NO |   | 
upper_stop_loss_action | string | NO | stop_bot, stop_bot_and_buy, stop_bot_and_sell, stop_bot_and_close_position  | 
lower_stop_loss_price | number | NO |   | 
lower_stop_loss_enabled | boolean | NO |   | 
lower_stop_loss_action | string | NO | stop_bot, stop_bot_and_buy, stop_bot_and_sell, stop_bot_and_close_position  | 
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Leverage type for futures accounts
leverage_custom_value | number | NO |   | Required if leverage_type = 'isolated'
id | integer | YES |   | 
### Show Grid Bot (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Delete Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
DELETE /ver1/grid_bots/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Disable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/{id}/disable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Enable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/{id}/enable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Get required balances to start bot(Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}/required_balances
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
# Response Entities 
### GridBotProfitsEntity
 ``` 
 {
grid_line_id: '8000'                      
profit: '0.01'                            
usd_profit: '100'                         
created_at: 2018-08-08 08:08:08           
} 
 ``` 
### GridBotEntity
 ``` 
 {
id: 5                                     
account_id: 10                            
account_name: 'My account'                
is_enabled: true                          
grids_quantity: '20'                      
created_at: 2018-08-08 08:08:08           
updated_at: 2018-08-10 10:10:10           
strategy_type: 'manual'                   
upper_stop_loss_enabled: true             
lower_stop_loss_enabled: true             
lower_price: '8000'                       
lower_stop_loss_price: '7500'             
lower_stop_loss_action: 'stop_bot'        
upper_price: '10000'                      
upper_stop_loss_price: '12000'            
upper_stop_loss_action: 'stop_bot'        
quantity_per_grid: '100'                  
leverage_type: 'isolated'                 
leverage_custom_value: '20.1'             
name: 'GridBot1'                          
pair: 'BTC_ETH'                           
start_price: '9000'                       
grid_price_step: '100'                    
current_profit: 100                       
current_profit_usd: 1000                  
total_profits_count: 10                   
bought_volume: 1000                       
sold_volume: 1000                         
profit_percentage: 0.1                    
current_price: 100.1                      
investment_base_currency: 100             
investment_quote_currency: 100            
grid_lines: GridLineEntity    
} 
 ``` 

# GridBots Api 
#### _Please read General API Information first_
### Create Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/manual
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |   | Grid Bot's name
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
note | string | NO |   | 
max_active_buy_lines | integer | NO |   | 
max_active_sell_lines | integer | NO |   | 
order_currency_type | string | NO | base, quote (base) | Order currency type
profit_currency_type | string | NO | base, quote (quote) | Profit currency type
ignore_warnings | boolean | NO |   | Ignore any warnings and create grid bot
trailing_up_enabled | boolean | NO |   | Trailing up enabled. Works only with order currency type = quote
grid_type | string | NO | geometric, arithmetic (arithmetic) | Grid Type
expansion_down_enabled | boolean | NO |   | Trailing down enabled
expansion_down_stop_price | number | YES |   | Trailing down stop price (mandatory if trailing down enabled)
### Grid bots list (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_ids | string | NO |   | Filter by account id
account_types | string | NO |   | Filter by account type
state | string | NO | enabled, disabled  | Filter by bot state
sort_by | string | NO | current_profit, profit, bot_id, pair, created_at, updated_at, name  | Sort column
sort_direction | string | NO | desc, asc  | Sort direction
limit | integer | NO |  (10) | 
offset | integer | NO |  (0) | 
from | string | NO |   | Param for a filter by created date
base | string | NO |   | Base currency
quote | string | NO |   | Quote currency
### Grid Bot Note (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/grid_bots/{id}/note
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
note | string | NO |   | 
id | integer | YES |   | 
### Grid Bot Events (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}/events
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
page | integer | YES |  (1) | 
per_page | integer | YES |  (100) | 
id | integer | YES |   | 
### Grid Bot Market Orders (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/grid_bots/{id}/market_orders
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (100) | 
offset | integer | NO |  (0) | 
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
from | string | NO |   | Param for a filter by created date
to | string | NO |   | Param for a filter by created date
id | integer | YES |   | 
### GridBotProfitsEntity
 ``` 
 {
grid_line_id: integer 
  profit: string 
  usd_profit: string 
  created_at: string 
  grid_line: GridLineEntity 
  } 
 ```
### Edit Grid Bot (Manual) (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/grid_bots/{id}/manual
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |   | Grid Bot's name
pair | string | NO |   | Deprecated
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
note | string | NO |   | 
max_active_buy_lines | integer | NO |   | 
max_active_sell_lines | integer | NO |   | 
ignore_warnings | boolean | NO |   | Ignore any warnings and create grid bot
trailing_up_enabled | boolean | NO |   | Trailing up enabled
grid_type | string | NO | geometric, arithmetic  | Grid Type
expansion_down_enabled | boolean | NO |   | Trailing down enabled
expansion_down_stop_price | number | YES |   | Trailing down stop price (mandatory if trailing down enabled)
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
note: Best pair                           
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
max_active_buy_lines: 10                  
max_active_sell_lines: 10                 
order_currency_type: base                 
profit_currency_type: quote               
trailing_up_enabled: true                 
grid_type: arithmetic                     
investment_base_currency: 100             
investment_quote_currency: 100            
unrealized_profit_loss: 2500.0            
current_profit_loss: 0.2284               
current_profit_loss_percent: 2.007        
orderbook_price_currency: USDT            
expansion_down_enabled:                   
expansion_down_stop_price: 10500.0        
grid_lines: GridLineEntity    
} 
 ``` 
### GridLineEntity
 ``` 
 {
id: 21                                   Uniq id 
price: '8000'                             
side: 'SELL'                              
order_placed: true                        
} 
 ``` 
### GridBotProfitsEntity
 ``` 
 {
grid_line_id: '8000'                      
profit: '0.01'                            
usd_profit: '100'                         
created_at: 2018-08-08 08:08:08           
grid_line: GridLineEntity    
} 
 ``` 
### GridBotEvent
 ``` 
 {
message: Bot Message                      
created_at: 2021-07-08 08:08:08           
} 
 ``` 

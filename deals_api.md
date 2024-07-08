# Deals Api 
#### _Please read General API Information first_
### User deals (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (50) | Limit records. Max: 1_000
offset | integer | NO |   | Offset records
from | string | NO |   | Param for a filter by created date
to | string | NO |   | Param for a filter by created date
account_id | integer | NO |   | Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
bot_id | integer | NO |   | Bot show deals on. Return all if not specified
scope | string | NO |   | active - active deals, finished - finished deals, completed - successfully completed, cancelled - cancelled deals, failed - failed deals, any other value or null (default) - all deals
order | string | NO | created_at, updated_at, closed_at, profit, profit_percentage (created_at) | 
order_direction | string | NO | asc, desc (desc) | 
base | string | NO |   | Base currency
quote | string | NO |   | Quote currency
note | string | NO |   | Note
### Convert to smart trade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/convert_to_smart_trade
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
stop_bot | boolean | NO |   | 
deal_id | integer | YES |   | 
### Update max safety orders (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/update_max_safety_orders
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
max_safety_orders | integer | YES |   | New maximum safety orders value
deal_id | integer | YES |   |
### Panic sell one step in deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/panic_sell_step
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
trade_id | integer | YES |   | ID of the trade that should be sold. Gather this from GET /ver1/deals/:id/show
deal_id | integer | YES |   |
### Panic sell deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Cancel deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/cancel
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Update deal (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/deals/{deal_id}/update_deal
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
take_profit | number | NO |   | New take profit value
take_profit_steps | array[json] | NO |   | Take profit steps <br>[{"id": 1, "amount_percentage": 10, "profit_percentage": 10}, <br>{"id": 2, "amount_percentage": 20, "profit_percentage": 15}, <br>{"id": 3, "amount_percentage": 30, "profit_percentage": 20}, <br>{"id": 4, "amount_percentage": 40, "profit_percentage": 23}]
profit_currency | string | NO | quote_currency, base_currency  | 
take_profit_type | string | NO |   | base – from base order, total – from total volume
trailing_enabled | boolean | NO |   | 
trailing_deviation | number | NO |   | New trailing deviation value
stop_loss_percentage | number | NO |   | New stop loss percentage value
sl_to_breakeven_enabled | boolean | NO |   | Enable/Disable Stop Loss to break even function
sl_to_breakeven_data | json | NO |   | Upper limit for Stop Loss to break evenThe upper limit to which the stop loss will move(0 - bouthg average price, 1 - TP1, 2 - TP2)Example:{upper_breakeven_limit: 1}
max_safety_orders | integer | NO |   | New max safety orders value
active_safety_orders_count | integer | NO |   | New active safety orders count value
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_in_seconds | integer | NO |   | StopLoss timeout in seconds if StopLoss timeout enabled
tsl_enabled | boolean | NO |   | Trailing stop loss enabled
stop_loss_type | string | NO | stop_loss, stop_loss_and_disable_bot  | 
close_timeout | integer | NO |   | Close deal after given number of seconds. Must be greater than 60.
note | string | NO |   | Note
min_profit_percentage | number | NO |   | Minimum profit percentage
deal_id | integer | YES |   | 
### DEPRECATED, Update take profit condition. Deal status should be bought (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/update_tp
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
new_take_profit_percentage | number | YES |   | New take profit value
deal_id | integer | YES |   | 
### Info about specific deal (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals/{deal_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Cancel manual safety orders (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/cancel_order
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
order_id | string | YES |   | manual safety order id
deal_id | integer | YES |   | 
### Deal safety orders (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals/{deal_id}/market_orders
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Adding manual safety order (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/add_funds
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
quantity | number | YES |   | safety order quantity
is_market | boolean | YES |   | true - use MARKET order, false - use LIMIT order
response_type | string | NO | empty, deal, market_order (empty) | 
rate | number | YES |   | safety order rate. Required if LIMIT order used
deal_id | integer | YES |   | 
### Info required to add funds correctly: available amounts, exchange limitations etc (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals/{deal_id}/data_for_adding_funds
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
# Response Entities 
### DealEntity
 ``` 
 {
id: 1                                     
type: Deal::ShortDeal                     
bot_id: 111                               
max_safety_orders: 2                      
deal_has_error: true                      
from_currency_id: 5                      DEPRECATED 
to_currency_id: 10                       DEPRECATED 
account_id: 121                           
active_safety_orders_count: 1             
created_at: 2018-08-08 08:08:08           
updated_at: 2018-09-09 09:09:09           
closed_at: 2018-10-10 10:10:10            
finished?:                                
current_active_safety_orders_count: 1     
current_active_safety_orders: 1          DEPRECATED 
completed_safety_orders_count: 2         completed safeties (not including manual) 
completed_manual_safety_orders_count: 2  completed manual safeties 
cancellable?:                             
panic_sellable?:                          
trailing_enabled: true                    
tsl_enabled: true                         
stop_loss_timeout_enabled: true           
stop_loss_timeout_in_seconds: 2           
active_manual_safety_orders: 2            
pair: 'BTC_ADA'                          Format: QUOTE_BASE 
status: 'failed'                         Values: created, base_order_placed, bought, cancelled, completed, failed, panic_sell_pending, panic_sell_order_placed, panic_sold, cancel_pending, stop_loss_pending, stop_loss_finished, stop_loss_order_placed, switched, switched_take_profit, ttp_activated, ttp_order_placed, liquidated, bought_safety_pending, bought_take_profit_pending, settled, close_strategy_activated 
localized_status:                         
take_profit: '1.23'                      Percentage 
base_order_volume: '0.001'                
safety_order_volume: '0.0015'             
safety_order_step_percentage: '1.11'      
leverage_type: 'isolated'                 
leverage_custom_value: '20.1'             
bought_amount: '1.5'                      
bought_volume: '150'                      
bought_average_price: '100'               
base_order_average_price: '100'           
sold_amount: '1.5'                        
sold_volume: '150'                        
sold_average_price: '100'                 
take_profit_type: 'base'                 Values: base, total 
final_profit: '-0.00051'                  
martingale_coefficient: '1.2'            Percentage 
martingale_volume_coefficient: '1.0'     Percentage 
martingale_step_coefficient: '1.0'       Percentage 
stop_loss_percentage: '3.6'               
error_message: 'Error placing base order' 
profit_currency: 'quote_currency'        Values: quote_currency, base_currency 
stop_loss_type: 'stop_loss'              Values: stop_loss, stop_loss_and_disable_bot 
safety_order_volume_type: 'quote_currency'Values: quote_currency, base_currency, percent, xbt 
base_order_volume_type: 'base_currency,' Values: quote_currency, base_currency, percent, xbt 
from_currency: 'BTC'                      
to_currency: 'ADA'                        
current_price: '102'                      
take_profit_price: '105'                  
stop_loss_price: '95.3'                   
final_profit_percentage: '4.2'            
actual_profit_percentage: '3.4'           
bot_name: My bot                          
account_name: My Account                  
usd_final_profit: '3.3523452'             
actual_profit: '0.0023'                   
actual_usd_profit: '0.0023'               
failed_message: Failed                    
reserved_base_coin: 1.3423523             
reserved_second_coin: 0.1412454           
trailing_deviation: 0.14                  
trailing_max_price: 0.1412454            Highest price met in case of long deal, lowest price otherwise 
tsl_max_price: 0.1412454                 Highest price met in TSL in case of long deal, lowest price otherwise 
strategy: 'short'                        short or long 
reserved_quote_funds: 11.2342            Sum of reserved in active deals funds in QUOTE 
reserved_base_funds: 13.6382             Sum of reserved in active deals funds in BASE 
} 
 ``` 

# Bots Api 
#### _Please read General API Information first_
### Smart Sell Account Table Info (Permission: NONE, Security: SIGNED)
```
GET /ver1/bots/account_trade_info_smart_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Account Trade Info (Permission: NONE, Security: SIGNED)
```
GET /ver1/bots/account_trade_info
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Available strategy list for bot (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/strategy_list
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | NO |   | id from GET /ver1/accounts
type | string | NO | simple, composite  | 
strategy | string | NO | long, short  | 
### Black List for bot pairs (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/pairs_black_list
```
**Weight:**
1

**Parameters:**
NONE
### Create or Update pairs BlackList for bots (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/update_pairs_black_list
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pairs | string | YES |   | 
### Create bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/create_bot
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
account_id | integer | YES |   | id from GET /ver1/accounts
pairs | string | YES |   | Pass single pair to create SingleBot or any other number of pairs to create MultiBot
max_active_deals | integer | NO |  (1) | 
base_order_volume | number | YES |   | Base order size
base_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | base order volume currency
take_profit | number | YES |   | Target profit(percentage)
take_profit_steps | array[json] | NO |   | Take profit steps <br>[{"amount_percentage": 10, "profit_percentage": 10}, <br>{"amount_percentage": 20, "profit_percentage": 15}, <br>{"amount_percentage": 30, "profit_percentage": 20}, <br>{"amount_percentage": 40, "profit_percentage": 23}]
safety_order_volume | number | YES |   | Safety trade size
safety_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | safety order volume currency
martingale_volume_coefficient | number | YES |  (1) | 
martingale_step_coefficient | number | YES |  (1) | 
max_safety_orders | integer | YES |   | Max safety trades count
active_safety_orders_count | integer | YES |   | Max active safety trades count
stop_loss_percentage | number | NO |   |
sl_to_breakeven_enabled | boolean | NO |   | Enable/Disable Stop Loss to break even function
sl_to_breakeven_data | json | NO |   | Upper limit for Stop Loss to break evenThe upper limit to which the stop loss will move(0 - bouthg average price, 1 - TP1, 2 - TP2)Example:{upper_breakeven_limit: 1}
cooldown | number | NO |   |
trailing_enabled | boolean | NO |   | Enable trailing take profit. Binance only.
trailing_deviation | number | NO |   | required if trailing_enabled
btc_price_limit | number | NO |   | 
strategy | string | NO | short, long (long) | 
safety_order_step_percentage | number | YES |   | Price deviation to open safety trades(percentage)
take_profit_type | string | YES | base, total (base) | Percentage: base – from base order, total – from total volume
strategy_list | array[json] | YES |   | For manual signals: [{"strategy":"manual"}] or []<br>For non-stop(1 pair only): [{"strategy":"nonstop", "options": {}]<br>QFL: [{"options": {"type": "original"}, {"percent": 3}, "strategy": "qfl"}] <br>TradingView: [{"options": {"time": "5m", "type": "buy_or_strong_buy"}, "strategy": "trading_view"}] <br>RSI: [{"options": {"time": "5m", "points": 30, "trigger_condition": "less", "time_period": 7}, "strategy": "rsi"}]
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Used for Bitmex bots only
leverage_custom_value | number | NO |   | required if leverage_type is isolated
min_price | number | NO |   | minimum price to open deal
max_price | number | NO |   | maximum price to open deal
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_in_seconds | integer | NO |   | StopLoss timeout in seconds if StopLoss timeout enabled
min_volume_btc_24h | number | NO |   | 
tsl_enabled | boolean | NO |   | Enable trailing stop loss. Bitmex only.
deal_start_delay_seconds | integer | NO |   | Deal start delay in seconds
profit_currency | string | NO | quote_currency, base_currency  | Take profit currency
start_order_type | string | NO | limit, market  | 
stop_loss_type | string | NO | stop_loss, stop_loss_and_disable_bot  | 
disable_after_deals_count | integer | NO |   | Bot will be disabled after opening this number of deals
allowed_deals_on_same_pair | integer | NO |   | Allow specific number of deals on the same pair. Multibot only.
close_deals_timeout | integer | NO |   | Close bot deals after given number of seconds. Must be greater than 60.
min_profit_percentage | number | NO |   | Min profit to activate close strategy
min_profit_type | string | NO | base_order_volume, total_bought_volume  | Percentage: base_order_volume  – from base order, total_bought_volume – from total volume
close_strategy_list | array[json] | NO |   | For manual signals: [{"strategy":"manual"}] or []<br>For non-stop(1 pair only): [{"strategy":"nonstop", "options": {}]<br>QFL: [{"options": {"type": "original"}, {"percent": 3}, "strategy": "qfl"}] <br>TradingView: [{"options": {"time": "5m", "type": "buy_or_strong_buy"}, "strategy": "trading_view"}] <br>RSI: [{"options": {"time": "5m", "points": 30, "trigger_condition": "less", "time_period": 7}, "strategy": "rsi"}]
risk_reduction_percentage | number | NO |   | Risk reduction percentage
reinvesting_percentage | number | NO |   | Reinvesting percentage
min_price_percentage | number | NO |   | Min price percent. Must be greater then -95 and lower then 1000
max_price_percentage | number | NO |   | Max price percent. Must be greater then -95 and lower then 1000
### User bots (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (50) | Limit records. Max: 100
offset | integer | NO |   | Offset records
from | string | NO |   | Param for a filter by created date
account_id | integer | NO |   | Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
scope | string | NO | enabled, disabled  | 
strategy | string | NO | long, short  | 
sort_by | string | NO | profit, created_at, updated_at (created_at) | 
sort_direction | string | NO | asc, desc (desc) | 
quote | string | NO |   | Quote currency
form_type | string | NO | gordon, advanced  | Param for a filter by bot form type (gordon/advanced)
### Get bot stats by date (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/stats_by_date
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
date | string | YES |   | 
account_id | integer | NO |   | 
bot_id | integer | NO |   | 
### Get bot stats (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/stats
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | NO |   | Account to show on. Null - show for all. Gather this from GET /ver1/accounts
bot_id | integer | NO |   | Bots to show on. Null - show for all
### Get bot profits grouped by day (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/{id}/profit_by_day
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
days | integer | NO |  (30) |
id | integer | YES |   |
### POST /bots/:id/copy_and_create. Permission: BOTS_WRITE, Security: SIGNED
```
POST /ver1/bots/{bot_id}/copy_and_create
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
secret | string | YES |   | 
amount | number | NO |   | Max amount for bot usage (Based on current rate)
bot_id | integer | YES |   | 
### Edit bot (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/bots/{bot_id}/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
pairs | string | YES |   | 
max_active_deals | integer | NO |  (1) | 
base_order_volume | number | YES |   | Base order size
base_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | base order volume currency
take_profit | number | YES |   | Target profit(percentage)
take_profit_steps | array[json] | NO |   | Take profit steps <br>[{"amount_percentage": 10, "profit_percentage": 10}, <br>{"amount_percentage": 20, "profit_percentage": 15}, <br>{"amount_percentage": 30, "profit_percentage": 20}, <br>{"amount_percentage": 40, "profit_percentage": 23}]
safety_order_volume | number | YES |   | Safety trade size
safety_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | safety order volume currency
martingale_volume_coefficient | number | YES |  (1) | 
martingale_step_coefficient | number | YES |  (1) | 
max_safety_orders | integer | YES |   | Max safety trades count
active_safety_orders_count | integer | YES |   | Max active safety trades count
stop_loss_percentage | number | NO |   |
sl_to_breakeven_enabled | boolean | NO |   | Enable/Disable Stop Loss to break even function
sl_to_breakeven_data | json | NO |   | Upper limit for Stop Loss to break evenThe upper limit to which the stop loss will move(0 - bouthg average price, 1 - TP1, 2 - TP2)Example:{upper_breakeven_limit: 1}
cooldown | number | NO |   |
trailing_enabled | boolean | NO |   | Enable trailing take profit. Binance only.
trailing_deviation | number | NO |   | required if trailing_enabled
btc_price_limit | number | NO |   | 
safety_order_step_percentage | number | YES |   | Price deviation to open safety trades(percentage)
take_profit_type | string | YES | total, base (total) | Percentage: base – from base order, total – from total volume
strategy_list | array[json] | YES |   | For manual signals: [{"strategy":"manual"}] or []<br>For non-stop(1 pair only): [{"strategy":"nonstop", "options": {}}]<br>QFL: [{"options": {"type": "original"}, {"percent": 3}, "strategy": "qfl"}] <br>TradingView: [{"options": {"time": "5m", "type": "buy_or_strong_buy"}, "strategy": "trading_view"}] <br>RSI: [{"options": {"time": "5m", "points": 30, "trigger_condition": "less", "time_period": 7}, "strategy": "rsi"}]
leverage_type | string | NO | custom, cross, not_specified, isolated (not_specified) | Used for Bitmex bots only
leverage_custom_value | number | NO |   | required if leverage_type is isolated
min_price | number | NO |   | minimum price to open deal
max_price | number | NO |   | maximum price to open deal
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_in_seconds | integer | NO |   | StopLoss timeout in seconds if StopLoss timeout enabled
min_volume_btc_24h | number | NO |   | 
tsl_enabled | boolean | NO |   | Enable trailing stop loss. Bitmex only.
deal_start_delay_seconds | integer | NO |   | Deal start delay in seconds
profit_currency | string | NO | quote_currency, base_currency  | Take profit currency
start_order_type | string | NO | limit, market  | 
stop_loss_type | string | NO | stop_loss, stop_loss_and_disable_bot  | 
disable_after_deals_count | integer | NO |   | Bot will be disabled after opening this number of deals
allowed_deals_on_same_pair | integer | NO |   | Allow specific number of deals on the same pair. Multibot only.
close_deals_timeout | integer | NO |   | Close bot deals after given number of seconds. Must be greater than 60.
min_profit_percentage | integer | NO |   | Min profit to activate close strategy
min_profit_type | string | NO | base_order_volume, total_bought_volume  | Percentage: base_order_volume  – from base order, total_bought_volume – from total volume
close_strategy_list | array[json] | NO |   | For manual signals: [{"strategy":"manual"}] or []<br>For non-stop(1 pair only): [{"strategy":"nonstop", "options": {}}]<br>QFL: [{"options": {"type": "original"}, {"percent": 3}, "strategy": "qfl"}] <br>TradingView: [{"options": {"time": "5m", "type": "buy_or_strong_buy"}, "strategy": "trading_view"}] <br>RSI: [{"options": {"time": "5m", "points": 30, "trigger_condition": "less", "time_period": 7}, "strategy": "rsi"}]
risk_reduction_percentage | number | NO |   | Risk reduction percentage
reinvesting_percentage | number | NO |   | Reinvesting percentage
bot_id | integer | YES |   | 
### Disable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/disable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Enable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/enable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Start new deal asap (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/start_new_deal
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pair | string | NO |   | Can be omited for simple bot
skip_signal_checks | boolean | NO |   | If false or not specified then all paramaters like signals or volume filters will be checked. If true - those checks will be skipped
skip_open_deals_checks | boolean | NO |   | If true then you will be allowed to open more then one deal per pair in composite bot
only_for_enabled | boolean | NO |   | If set true and bot disabled will return error(422 code), if false and bot disabled then enable it
bot_id | integer | YES |   | 
### Delete bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/delete
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Panic sell all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/panic_sell_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Cancel all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/cancel_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Bot deals stats (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/{bot_id}/deals_stats
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Bot info (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/{bot_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
include_events | boolean | NO |   | 
bot_id | integer | YES |   | 
# Response Entities 
### BotEntity
 ``` 
 {
id: 5                                     
account_id: 10                            
is_enabled: true                          
max_safety_orders: 5                      
active_safety_orders_count: 2             
pairs: ['BTC_LTC', 'BTC_ETH', 'BTC_ADA'] Format: [QUOTE_BASE, ...] 
strategy_list: [{'options'=>{'time'=>'5m', 'type'=>'buy_or_strong_buy'}, 'strategy'=>'trading_view'}, ...] 
close_strategy_list: [{'options'=>{'time'=>'5m', 'type'=>'buy_or_strong_buy'}, 'strategy'=>'trading_view'}, ...] 
max_active_deals: 2                       
active_deals_count: 2                     
deletable?: true                          
created_at: 2018-08-08 08:08:08           
updated_at: 2018-08-10 10:10:10           
trailing_enabled: true                    
tsl_enabled: true                         
deal_start_delay_seconds: 60             Deal start delay in seconds 
stop_loss_timeout_enabled: true           
stop_loss_timeout_in_seconds: 2           
disable_after_deals_count: 2              
deals_counter: 2                          
allowed_deals_on_same_pair: 2             
easy_form_supported: true                 
close_deals_timeout: 70                  Close bot deals after given number of seconds 
url_secret:                               
take_profit_steps:                        
name: 'Test Bot'                          
take_profit: '1.5'                       'Percentage' 
min_profit_percentage: '1.5'             'Min Profit Percentage' 
base_order_volume: '0.002'                
safety_order_volume: '0.0015'             
safety_order_step_percentage: '1.1'       
take_profit_type: 'base'                 Values: base, total 
min_profit_type: 'total_bought_volume'   Values: base_order_volume, total_bought_volume 
type: 'Bot::SingleBot'                   Values: ["Bot::MultiBot", "Bot::SingleBot", "Bot::SwitchBot"] 
martingale_volume_coefficient: '1.3'      
martingale_step_coefficient: '0.9'        
stop_loss_percentage: '5.5'               
cooldown: '200'                           
btc_price_limit: '30.15'                  
strategy: 'long'                         Values: long, short 
min_volume_btc_24h: '500.5'               
profit_currency: 'quote_currency'        Values: quote_currency, base_currency 
min_price: '0.0245'                       
max_price: '0.0123'                       
stop_loss_type: 'stop_loss'              Values: stop_loss, stop_loss_and_disable_bot 
safety_order_volume_type: 'base_currency'Values: quote_currency, base_currency, percent, xbt 
base_order_volume_type: 'percent'        Values: quote_currency, base_currency, percent, xbt 
account_name: 'My account'                
trailing_deviation: 0.14                  
finished_deals_profit_usd: 12.14          
finished_deals_count: 252.1               
leverage_type: 'not_specified'           Values: cross, not_specified, isolated 
leverage_custom_value: '1'                
start_order_type: 'limit'                Values: limit, market 
active_deals_usd_profit: 200.21          Sum of active deals profits 
reinvesting_percentage: 40.6             Percent of reinvesting 
risk_reduction_percentage: 40.6          Percent of risk reduction 
reinvested_volume_usd:                    
min_price_percentage:                     
max_price_percentage:                     
} 
 ``` 

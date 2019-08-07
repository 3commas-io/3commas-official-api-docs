# SmartTrades Api
#### _Please read General API Information first_
### Create SimpleSell (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_simple_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Amount of units to buy
buy_price | number | YES |   | 
conditional_limit_price | number | NO |   | Order price for conditional SimpleSell with limit order
buy_method | string | YES | limit, market, conditional (limit) | 
### Create SimpleBuy (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_simple_buy
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Amount of units to buy
buy_price | number | YES |   | 
conditional_limit_price | number | NO |   | Order price for conditional SimpleBuy with limit order
buy_method | string | YES | limit, market, conditional (limit) | 
### Create SmartSale (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_smart_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Bought amount
average_buy_price | number | YES |   | Bought price
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | Required if take_profit_enabled. classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | NO |   | Required if take_profit_type = classic
take_profit_percentage_condition | number | NO |   | Required if take_profit_type = classic AND trailing_buy_enabled. Must be positive
take_profit_step_orders[{<br>percent => number <br>price => number <br>price_method => string <br>price_percentage => number <br>},<br> ...] | array[json] | YES |   | Required if take_profit_type = step_sell. 4 steps max. Format: [{percent: 50, price: 100(or price_percentage = 20), price_method: bid,ask,last}, ...]
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit(bid,asl,last)
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | NO |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | NO |   | Required if stop_loss_enabled
stop_loss_percentage_condition | number | NO |   | Required if stop_loss_enabled AND trailing_buy_enabled. Must be negative
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | NO |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | Timeout in seconds
note | string | NO |   | 
### Create SmartCover (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_smart_cover
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Amount of units to buy
buy_price | number | YES |   | 
conditional_limit_price | number | NO |   | Order price for conditional SmartCover with limit order
buy_method | string | NO | limit, market, conditional (limit) | 
trailing_buy_enabled | boolean | NO |   | 
trailing_buy_step | number | NO |  (5.0) | Required if trailing_buy_enabled
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | Required if take_profit_enabled. classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | NO |   | Required if take_profit_type = classic
take_profit_percentage_condition | number | NO |   | Required if take_profit_type = classic AND trailing_buy_enabled. Must be negative
take_profit_step_orders[{<br>percent => number <br>price => number <br>price_method => string <br>price_percentage => number <br>},<br> ...] | array[json] | YES |   | Required if take_profit_type = step_sell. 4 steps max. Format: [{percent: 50, price: 100(or price_percentage = 20), price_method: bid,ask,last}, ...]
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | NO |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | NO |   | Required if stop_loss_enabled
stop_loss_percentage_condition | number | NO |   | Required if stop_loss_enabled AND trailing_buy_enabled. Must Be positive
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | NO |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | timeout in seconds
note | string | NO |   | 
### Create SmartTrade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_smart_trade
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Amount of units to buy
buy_price | number | YES |   | 
conditional_limit_price | number | NO |   | Order price for conditional SmartTrade with limit order
buy_method | string | NO | limit, market, conditional (limit) | 
trailing_buy_enabled | boolean | NO |   | 
trailing_buy_step | number | NO |  (5.0) | Required if trailing_buy_enabled
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | Required if take_profit_enabled. classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | NO |   | Required if take_profit_type = classic
take_profit_percentage_condition | number | NO |   | Required if take_profit_type = classic AND trailing_buy_enabled. Must be positive
take_profit_step_orders[{<br>percent => number <br>price => number <br>price_method => string <br>price_percentage => number <br>},<br> ...] | array[json] | YES |   | Required if take_profit_type = step_sell. 4 steps max. Format: [{percent: 50, price: 100(or price_percentage = 20), price_method: bid,ask,last}, ...]
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | NO |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | NO |   | Required if stop_loss_enabled
stop_loss_percentage_condition | number | NO |   | Required if stop_loss_enabled AND trailing_buy_enabled. Must be negative
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | NO |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | timeout in seconds
note | string | NO |   | 
### Get SmartTrade history (Permission: SMART_TRADE_READ, Security: SIGNED)
```
GET /ver1/smart_trades
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |   | Limit records
offset | integer | NO |   | Offset records
account_id | integer | NO |   | Account to show smart_trades on. Pass null (default) - show all
scope | string | NO |   | active - show only active trades, finished - history of closed trades, cancelled - cancelled trades, failed - failed trades, any other value or null (default) - all trades
type | string | NO |   | SmartTrade::SmartSale , SmartTrade::Classic , SmartTrade::ConditionalBuy
order | string | NO | created_at, closed_at (created_at) | 
### Manual cancel order (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/cancel_order
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
step_id | string | YES |   | SmartTrade step id to cancel
smart_trade_id | integer | YES |   | 
### Smart Trade add funds (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/add_funds
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
quantity | number | YES |   | buy order quantity
is_market | boolean | YES |   | true - use MARKET order, false - use LIMIT order
response_type | string | NO | smart_trade, empty, order, step (empty) | 
rate | number | YES |   | buy order rate. Required if LIMIT order used
smart_trade_id | integer | YES |   | 
### Step panic sell (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/step_panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
step_id | integer | YES |   | 
smart_trade_id | integer | YES |   | 
### Edit SmartTrade/SmartSale/SmartCover (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
PATCH /ver1/smart_trades/{smart_trade_id}/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
buy_price | number | NO |   | Available if Conditional SmartTrade
conditional_limit_price | number | NO |   | 
average_buy_price | number | NO |   | Available if SmartSale
trailing_buy_enabled | boolean | NO |   | Available if Conditional SmartTrade
trailing_buy_step | number | NO |   | Available if trailing_buy_enabled
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | Required if take_profit_enabled. classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | NO |   | Required if take_profit_type = classic
take_profit_percentage_condition | number | NO |   | Required if take_profit_type = classic AND trailing_buy_enabled
take_profit_step_orders[{<br>percent => number <br>price => number <br>position => integer <br>price_method => string <br>price_percentage => number <br>},<br> ...] | array[json] | YES |   | Available if take_profit_type = step_sell. If null - steps won't be changed.                                                    In order to apply changes - send a new set of steps, which contains new and previous steps that were not edited.                                                    Position must be unique(for new and previous steps in SmartTrade scope) and greater then 0
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit(bid,asl,last)
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | NO |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | NO |   | Required if stop_loss_enabled
stop_loss_percentage_condition | number | NO |   | Required if stop_loss_enabled AND trailing_buy_enabled
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | NO |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | Timeout in seconds
note | string | NO |   | 
smart_trade_id | integer | YES |   | 
### Cancel SmartTrade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/cancel
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Sell currency immediately (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Refresh SmartTrade state (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/force_process
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
# Response Entities 
### SmartTradeEntity
 ``` 
 {
id: 1                                     
account_id: 68                            
trailing_stop_loss: true                  
from_currency_id: 10                      
trailing_stop_loss_condition_percentage: 2 
trailing_take_profit: true                
stop_loss_enabled: true                   
panic_sell_market_order_id: 756           
take_profit_enabled: true                 
trailing_buy_enabled: true                
stop_loss_timeout_seconds: 300            
stop_loss_timeout_enabled: true           
panic_sellable: false                     
editable: true                            
finished: false                           
cancellable: false                        
created_at: 2018-08-08 08:08:08           
updated_at: 2018-09-09 09:09:09           
trailing_stop_loss_last_price_updated_at: 2018-09-09 09:09:09 
trailing_take_profit_last_price_updated_at: 2018-09-09 09:09:09 
closed_at: 2018-10-10 10:10:10            
status: 'bought'                         Values: buy_order_placed, bought, stop_loss_order_placed, take_profit_order_placed, stop_loss_finished, take_profit_finished, cancelled, failed, panic_sell_order_placed, panic_sell_finished, trailing_take_profit_activated, conditional_order_waiting_price, trailing_buy_activated, simple_trade_finished 
take_profit_price_condition: '105.125'    
take_profit_price_order: '106.01'         
stop_loss_price_condition: '95.84'        
stop_loss_price_order: '94.88'            
units_to_buy: '1.0525'                    
buy_price: '101.12'                       
total: '106.4288'                         
average_buy_price: '100.3'                
average_sell_price: '105.5'               
error_message: 'order cancelled'          
trailing_take_profit_step: '2.3'         Percentage 
type: 'SmartTrade::Classic'              Values: SmartTrade::Classic, SmartTrade::ConditionalBuy, SmartTrade::SmartSale, SmartTrade::SellBuyBack, SmartTrade::ConditionalSell, SmartTrade::SimpleBuy, SmartTrade::ConditionalSimpleBuy, SmartTrade::ConditionalSimpleSell, SmartTrade::SimpleSell 
stop_loss_price_method: 'bid'            Values: bid, ask, last 
take_profit_price_method: 'ask'          Values: bid, ask, last 
trailing_stop_loss_last_price: '94.545'   
trailing_take_profit_last_price: '106.242' 
note: 'Best pair'                         
buy_method: 'market'                     Values: ["limit", "market", "conditional"] 
take_profit_type: 'step_sell'            Values: classic, step_sell 
stop_loss_type: 'classic'                Values: classic, step_sell 
stop_loss_sell_method: 'limit'           Values: market, limit 
take_profit_sell_method: 'market'        Values: market, limit 
take_profit_sell_order_price: '105.12'    
stop_loss_sell_order_price: '96.12'       
trailing_buy_step: '1.5'                  
profit_percentage: '15.26'                
current_price: '103.26'                   
account_market: 'BinanceMarket'           
account_name: 'my acc'                    
from_currency_code: 'ETH'                 
from_currency_name: 'Ethereum'            
from_currency_display_name: 'Ethereum (ETH)' 
to_currency_code: 'BTC'                   
to_currency_name: 'Bitcoin'               
to_currency_display_name: 'Bitcoin (BTC)' 
usd_profit: '-0.5'                        
smart_trade_steps: SmartTradeStepEntity    
take_profit_steps: SmartTradeStepEntity    
stop_loss_steps: SmartTradeStepEntity    
buy_steps: SmartTradeStepEntity    
} 
 ``` 
### SmartTradeStepEntity
 ``` 
 {
id: 1                                     
editable: true                            
position: 1                              For TP type = step_sell 
order_id: 128                             
smart_trade_id: 505                       
is_panic_sell: false                      
created_at: 2018-09-09 09:09:09           
updated_at: 2018-10-10 10:11:12           
trailing_last_pirce_updated_at: 2018-10-10 10:12:12DEPRECATED 
trailing_last_price_updated_at: 2018-10-10 10:12:12 
type: 'SmartTradeStep::TakeProfitStep'   SmartTradeStep::TrailingStopLossStep, SmartTradeStep::StopLossStep, SmartTradeStep::TrailingStopLossBuyStep, SmartTradeStep::StopLossBuyStep, SmartTradeStep::TakeProfitStep, SmartTradeStep::TrailingTakeProfitStep, SmartTradeStep::TakeProfitBuyStep, SmartTradeStep::TrailingTakeProfitBuyStep 
price: '102.15'                           
average_result_price: '103.1'             
deviation_condition: '1.4'                
price_method: 'bid'                      bid, ask ,last 
trailing_last_pirce: '103.4'             DEPRECATED 
trailing_last_price: '103.4'              
sell_method: 'market'                    Values: market, limit 
sell_order_price: '103.5'                 
percent: '25.6'                           
pair: 'BTC_LTC'                          QUOTE_BASE 
initial_amount: '50'                      
initial_total: '5107.5'                   
actual_amount: '48'                       
actual_total: '4903.2'                    
status: 'enqueued'                       Values: idle, enqueued, need_check, processed, skipped, failed, cancelled, panic_sold 
market_order_id: 606                      
market_class: 'BinanceMarket'             
price_percentage: '10.2'                  
} 
 ``` 

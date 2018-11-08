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
account_id | integer | NO |   | Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
bot_id | integer | NO |   | Bot show deals on. Return all if not specified
scope | string | NO |   | active - active deals, finished - finished deals, completed - successfully completed, any other value or null (default) - all deals
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
### Update take profit condition. Deal status should be bought (Permission: BOTS_WRITE, Security: SIGNED)
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
# Response Entities 
### DealEntity
 ``` 
 {
id: 1                                     
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
completed_safety_orders_count: 2          
cancellable?:                             
panic_sellable?:                          
pair: 'BTC_ADA'                          Format: QUOTE_BASE 
status: 'failed'                         Values: created, base_order_placed, bought, cancelled, completed, failed, panic_sell_pending, panic_sell_order_placed, panic_sold, cancel_pending, stop_loss_pending, stop_loss_finished, stop_loss_order_placed, switched, switched_take_profit 
take_profit: '1.23'                      Percentage 
base_order_volume: '0.001'                
safety_order_volume: '0.0015'             
safety_order_step_percentage: '1.11'      
bought_amount: '1.5'                      
bought_volume: '150'                      
bought_average_price: '100'               
sold_amount: '1.5'                        
sold_volume: '150'                        
sold_average_price: '100'                 
take_profit_type: 'base_order_volume'    Values: base_order_volume, total_bought_volume 
final_profit: '-0.00051'                  
martingale_coefficient: '1.2'            Percentage 
error_message: 'Error placing base order' 
safety_order_volume_type: 'quote_currency'Values: quote_currency, base_currency, percent, xbt 
base_order_volume_type: 'base_currency,' Values: quote_currency, base_currency, percent, xbt 
from_currency: 'BTC'                      
to_currency: 'ADA'                        
current_price: '102'                      
take_profit_price: '105'                  
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
} 
 ``` 

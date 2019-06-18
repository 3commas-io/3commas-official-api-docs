# Accounts Api
#### _Please read General API Information first_
### Add exchange account  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/new
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
type | string | YES |   | check market_code in market_list method
name | string | YES |   | Account name (any string)
api_key | string | YES |   | 
secret | string | YES |   | 
customer_id | string | NO |   | For Bitstamp
passphrase | string | NO |   | For Coinbase Pro (GDAX)
### Edit exchange account
```
POST /ver1/accounts/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
name | string | NO |   | Account name (any string)
api_key | string | NO |   | 
secret | string | NO |   | 
customer_id | string | NO |   | For Bitstamp
passphrase | string | NO |   | For Coinbase Pro (GDAX)
### User connected exchanges(and EthereumWallet) list (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts
```
**Weight:**
1

**Parameters:**
NONE
### Supported markets list (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/market_list
```
**Weight:**
1

**Parameters:**
NONE
### Currency rates and limits (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/currency_rates
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pretty_display_type | string | YES |   | pretty_display_type from account model
pair | string | YES |   | Pair
### Sell all to USD  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/sell_all_to_usd
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Sell all to BTC  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/sell_all_to_btc
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Load balances for specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/load_balances
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Rename exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/rename
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
name | string | YES |   | 
### Information aboutl all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/pie_chart_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Information about all user balances on specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/account_table_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/remove
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
# Response Entities 
### AccountEntity
 ``` 
 {
id: 12                                    
auto_balance_period: 12                   
auto_balance_portfolio_id: 452            
auto_balance_currency_change_limit: 5     
autobalance_enabled: true                 
is_locked: true                           
smart_trading_supported: true             
smart_selling_supported: true            DEPRECATED. use smart_trading_supported instead 
available_for_trading: true               
stats_supported: true                     
trading_supported: true                   
market_buy_supported: true                
market_sell_supported: true               
conditional_buy_supported: true           
bots_allowed: false                       
bots_ttp_allowed: false                   
bots_tsl_allowed: false                   
multi_bots_allowed: false                 
created_at: 2018-08-08 08:08:08           
updated_at: 2018-08-22 02:25:08           
last_auto_balance: 2018-08-21 08:08:08    
api_key: ''                               
name: 'Binance 2 '                        
auto_balance_method: 'time'              Values: time, currency_change 
auto_balance_error: 'Failed to autobalance' 
lock_reason: 'API key is invalid'         
btc_amount: '0.01134219'                  
usd_amount: '70.93146245'                 
day_profit_btc: '-0.00006'                
day_profit_usd: '-0.02147'                
day_profit_btc_percentage: '-0.26'        
day_profit_usd_percentage: '-1.23'        
btc_profit: '0.0001625'                  Month period 
usd_profit: '5.05764787'                 Month period 
usd_profit_percentage: '6.25'            Month period 
btc_profit_percentage: '2.36'            Month period 
total_btc_profit: '0.0012456'             
total_usd_profit: '6.123181'              
pretty_display_type: 'BittresxAccount'    
address: '0xe00000dded00bbb08725d77777777ff070aa7aa7' 
} 
 ``` 

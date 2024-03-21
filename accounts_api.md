# Accounts Api 
#### _Please read General API Information first_
### Available market subtypes to connect
```
GET /ver1/accounts/types_to_connect
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
type | string | YES |   | check market_code in market_list method
name | string | YES |   | Account name (any string)
api_key | string | NO |   | API key for binance/ftx/bybit/gateio account
secret | string | NO |   | Secret for binance/ftx/bybit/gateio account
### Transfer coins between accounts (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/transfer
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
currency | string | YES |   | Currency code(example: USDT)
amount | number | YES |   | 
to_account_id | integer | YES |   | Recipient account ID (possible values in /transfer_data)
from_account_id | integer | YES |   | Sender account ID (possible values in /transfer_data)
### Transfers history (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/transfer_history
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Sender or Recipient account ID (possible values in /transfer_data)
currency | string | YES |   | Currency code(example: USDT)
start_time | integer | NO |   | Start time timestamp (example: 1665560898)
page | integer | NO |  (1) | Page number
per_page | integer | NO |  (10) | Elements per page
### Data for transfer between accounts (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/transfer_data
```
**Weight:**
1

**Parameters:**
NONE
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
api_key | string | NO |   | 
secret | string | NO |   | 
address | string | NO |   | Requires if type = ethereumwallet
customer_id | string | NO |   | For Bitstamp
passphrase | string | NO |   | For Coinbase Pro (GDAX)
subaccount_name | string | NO |   | For FTX
types_to_create | array[string] | NO |   | Array of related account types to be created. For example ['binance_margin']
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
subaccount_name | string | NO |   | For FTX
address | string | NO |   | For accounts with type = ethereumwallet
include_in_summary | boolean | NO |   | Should the account be included in the summary statistics?
### User connected exchanges(and EthereumWallet) list (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
api_key | string | NO |   | Filter by api key
page | integer | NO |   | 
per_page | integer | NO |   | Page size, from 1 to 100
### Supported markets list (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/market_list
```
**Weight:**
1

**Parameters:**
NONE
### All market pairs (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/market_pairs
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pretty_display_type | string | NO |   | deprecated. mandatory use market_code instead
market_code | string | NO |   | market_code from account model
### Currency rates and limits with leverage data (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/currency_rates_with_leverage_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
market_code | string | YES |   | market_code from account model
pair | string | YES |   | Pair
### Currency rates and limits (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/currency_rates
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit_type | string | NO |   | Type of limits - bot or smart_trade
pretty_display_type | string | NO |   | deprecated. use market_code instead
market_code | string | NO |   | market_code from account model. If you are retrieving data for pairs, you must also include market_code
pair | string | YES |   | Pair
### User Deposit Data (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/{account_id}/deposit_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
currency | string | YES |   | 
network | string | YES |   | 
account_id | integer | YES |   | 
### Deposit/withdraw networks info (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/{account_id}/networks_info
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
purpose | string | NO | deposit, withdraw  | Filter currencies with deposit/withdraw enabled
account_id | integer | YES |   | 
### Convert dust coins to BNB (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/convert_dust_to_bnb
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
codes | array[string] | NO |   | Array of currency codes
account_id | integer | YES |   | 
### Active trade entities (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/{account_id}/active_trading_entities
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Sell all to USD  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/sell_all_to_usd
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Sell all to BTC  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/sell_all_to_btc
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### balance history data (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/{account_id}/balance_chart_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
date_from | string | YES |   | 
date_to | string | NO |   | 
account_id | integer | YES |   | 
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
name | string | YES |   | 
account_id | integer | YES |   | 
### Information about all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/pie_chart_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Information about all user balances on specified exchange (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/account_table_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/remove
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Information about account leverage (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts/{account_id}/leverage_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pair | string | YES |   | 
account_id | integer | YES |   | 
### Single Account Info (Permission: ACCOUNTS_READ, Security: SIGNED)
You can send 'summary' instead of {account_id} to get summary account info
```
GET /ver1/accounts/{account_id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### All market pairs (Permission: NONE, Security: NONE)
```
GET /v2/accounts/market_pairs
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
market_code | string | NO |   | market_code from account model
# Response Entities 
### AccountEntity
 ``` 
 {
id: 12                                    
auto_balance_period: 12                   
auto_balance_portfolio_id: 452            
auto_balance_portfolio: PortfolioEntity    
auto_balance_currency_change_limit: 5     
autobalance_enabled: true                 
hedge_mode_available: false               
hedge_mode_enabled: false                 
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
gordon_bots_available: false              
multi_bots_allowed: false                 
created_at: 2018-08-08 08:08:08           
updated_at: 2018-08-22 02:25:08           
last_auto_balance: 2018-08-21 08:08:08    
fast_convert_available: true             Sell all to USD/BTC possibility 
grid_bots_allowed: true                   
api_key_invalid: true                     
deposit_enabled: false                    
include_in_summary: false                Include the account in summary or not 
supported_market_types:                   
primary_display_currency_profit_percentage:  
primary_display_currency_profit:          
day_profit_primary_display_currency_percentage:  
day_profit_primary_display_currency:      
primary_display_currency_amount:          
total_primary_display_currency_profit:    
available_include_in_summary: false       
api_key: ''                               
name: 'Binance 2 '                        
auto_balance_method: 'time'              Values: time, currency_change 
auto_balance_error: 'Failed to autobalance' 
customer_id:                              
subaccount_name:                          
lock_reason: 'invalid_api_key'            
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
pretty_display_type: 'BittrexAccount'     
exchange_name: 'Binance Futures'          
market_code: 'deribit_testnet'            
address: '0xe00000dded00bbb08725d77777777ff070aa7aa7' 
api_keys_state: 'expired'                Values: ok, expired, expire_soon 
} 
 ``` 

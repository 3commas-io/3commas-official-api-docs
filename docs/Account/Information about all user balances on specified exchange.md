## Information about all user balances on specified exchange<br>

**Description:** Shows information about currency balances of a specific account using its ID<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **ver1/accounts/{account_id}/account_table_data**

----------
<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

### Parameters response<br>

| Name | Type | Description|
|------|------|------------|
|**currency_code**| `string` |  |
|**currency_name**| `string`|  |
|**currency_icon**| `string`|  |
|**currency_slug**| `string`|  |
|**percentage**| `string`|  |
|**position**| `string`|  |
|**position_available**| `string`|  |
|**position_type**| `string`|  |
|**borrowed**| `string`|  |
|**on_orders**| `string`|  |
|**on_orders_with_leverage**| `string`|  |
|**on_orders_long**| `string`|  |
|**on_orders_short**| `string`|  |
|**equity**| `string`|  |
|**current_price**| `string`|  |
|**current_price_usd**| `string`|  |
|**day_change_percent**| `string`|  |
|**day_change_percent_btc**| `string`|  |
|**day_change_percent_usd**| `string`|  |
|**btc_value**| `string`|  |
|**usd_value**| `string`|  |
|**available_long**| `string`|  |
|**available_short**| `string`|  |
|**available_with_leverage_long**| `string`|  |
|**available_with_leverage_short**| `string`|  |
|**account_id**| `integer`| Unique 3Commas ID of the exchange account entity |
|**is_wallet**| `boolean`| Indicates whether this account is as a wallet |

### Example request<br>

```json
POST /ver1/accounts/32402783/account_table_data

```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
[
    {
        "currency_code": "ETH",
        "currency_name": "Ethereum",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnNRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f7e20d2abb9f03965b29c091e5ca77a8fc4ade51/1027.png",
        "currency_slug": "ethereum",
        "percentage": 0.7908972825805544,
        "position": 9.52e-05,
        "position_available": 9.52e-05,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 9.52e-05,
        "current_price": 0.04085,
        "current_price_usd": 2611.4959735,
        "day_change_percent": 1.036,
        "day_change_percent_btc": 1.036,
        "day_change_percent_usd": -1.418,
        "btc_value": 3.88892e-06,
        "usd_value": 0.2486144166772,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "RENDER",
        "currency_name": "Render",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzVXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c210942a3c22449a5767d0cb4de718728877bd75/render.png",
        "currency_slug": "render",
        "percentage": 0.003785976366688913,
        "position": 0.00018,
        "position_available": 0.00018,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 0.00018,
        "current_price": 0.0001034223303934839,
        "current_price_usd": 6.611676851715298,
        "day_change_percent": 4.24245328,
        "day_change_percent_btc": 4.24245328,
        "day_change_percent_usd": 1.584,
        "btc_value": 1.861601947082711e-08,
        "usd_value": 0.001190101833308754,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "USDT",
        "currency_name": "Tether USDt",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--67088a0415ab287b87c48530de1f1fe11983b009/data",
        "currency_slug": "tether",
        "percentage": 0.9067457973580001,
        "position": 0.28478606,
        "position_available": 0.28478606,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 0.28478606,
        "current_price": 1.565581749825673e-05,
        "current_price_usd": 1,
        "day_change_percent": 2.617,
        "day_change_percent_btc": 2.617,
        "day_change_percent_usd": 0,
        "btc_value": 4.458558581407589e-06,
        "usd_value": 0.28478606,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "BTC",
        "currency_name": "Bitcoin",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmdRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dca5b3192f3407eddb72f263c986bb0f64a1b960/1.png",
        "currency_slug": "bitcoin",
        "percentage": 64.81871108278757,
        "position": 0.00031872,
        "position_available": 0.00031872,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 0.00031872,
        "current_price": 1.0,
        "current_price_usd": 63928.91,
        "day_change_percent": 0,
        "day_change_percent_btc": 0,
        "day_change_percent_usd": -2.617,
        "btc_value": 0.00031872,
        "usd_value": 20.3754221952,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "ADA",
        "currency_name": "Cardano",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb01RIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b1099a59b48b1bbbbb7220f7c75b6e46b194dd99/2010.png",
        "currency_slug": "cardano",
        "percentage": 0.04848387525770757,
        "position": 0.04,
        "position_available": 0.04,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 0.04,
        "current_price": 5.96e-06,
        "current_price_usd": 0.3810163036,
        "day_change_percent": -1.964,
        "day_change_percent_btc": -1.964,
        "day_change_percent_usd": -4.041,
        "btc_value": 2.384e-07,
        "usd_value": 0.015240652144,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "1INCH",
        "currency_name": "1inch Network",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaWdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--db0fd618062fe669506490dd27027a8eae7f996c/8104.png",
        "currency_slug": "1inch",
        "percentage": 23.08997359331163,
        "position": 25.3832,
        "position_available": 25.3832,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 25.3832,
        "current_price": 4.472867059251947e-06,
        "current_price_usd": 0.2859455156728823,
        "day_change_percent": -0.65135145,
        "day_change_percent_btc": -0.65135145,
        "day_change_percent_usd": -3.185,
        "btc_value": 0.000113535679138404,
        "usd_value": 7.258212213427907,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "FIL",
        "currency_name": "Filecoin",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXdHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b90a4e821ead340a972eb574c02b69bc2186bbb5/data",
        "currency_slug": "filecoin",
        "percentage": 0.0993139022015008,
        "position": 0.008,
        "position_available": 0.008,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 0.008,
        "current_price": 6.104203242570297e-05,
        "current_price_usd": 3.902350597159847,
        "day_change_percent": -2.46048916,
        "day_change_percent_btc": -2.46048916,
        "day_change_percent_usd": -4.948,
        "btc_value": 4.883362594056237e-07,
        "usd_value": 0.03121880477727878,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    },
    {
        "currency_code": "DOGE",
        "currency_name": "Dogecoin",
        "currency_icon": "https://app.3commas.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNW5KQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d8f3102172a7531aa8e21cc8687e40bc07073889/74.png",
        "currency_slug": "dogecoin",
        "percentage": 10.24208849013634,
        "position": 27.076,
        "position_available": 27.076,
        "position_type": 0.0,
        "borrowed": 0.0,
        "on_orders": 0.0,
        "on_orders_with_leverage": 0.0,
        "on_orders_long": 0.0,
        "on_orders_short": 0.0,
        "equity": 27.076,
        "current_price": 1.86e-06,
        "current_price_usd": 0.1189077726,
        "day_change_percent": -2.094,
        "day_change_percent_btc": -2.094,
        "day_change_percent_usd": -4.886,
        "btc_value": 5.036136e-05,
        "usd_value": 3.2195468509176,
        "available_long": 0.0,
        "available_short": 0.0,
        "available_with_leverage_long": 0.0,
        "available_with_leverage_short": 0.0,
        "account_id": 32402783,
        "is_wallet": false
    }
]
```
</details>
 
## Information about all user balances on specified exchange<br>
<br>

**Description:** Shows information about currency balances of a specific account using its ID<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>ver1/accounts/{account_id}/account_table_data</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p>
<br>

### Response Parameters<br>
<p>
   <strong>currency_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Code symbol for the cryptocurrency
</p>
<p>
   <strong>currency_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Full name of the cryptocurrency
</p>
<p>
   <strong>currency_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   URL link to the icon image of the cryptocurrency
</p>
<p>
   <strong>currency_slug</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Slug or identifier used for the cryptocurrency in URLs
</p>
<p>
   <strong>percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The percentage share of this cryptocurrency in the account
</p>
<p>
   <strong>position</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total position (amount) of this cryptocurrency held in the account 
</p>
<p>
   <strong>position_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The available position (amount) of this cryptocurrency that is not on orders or borrowed
</p>
<p>
   <strong>position_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   [TBD]
</p>
<p>
   <strong>borrowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount of this cryptocurrency that is borrowed
</p>
<p>
   <strong>on_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount of this cryptocurrency currently placed on orders
</p>
<p>
   <strong>on_orders_with_leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount on orders with leverage applied
</p>
<p>
   <strong>on_orders_long</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The amount of this cryptocurrency placed on orders with a long strategy
</p>
<p>
   <strong>equity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total equity of this cryptocurrency in the account
</p>
<p>
   <strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Current price of this cryptocurrency in BTC
</p>
<p>
   <strong>day_change_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Daily price change percentage of this cryptocurrency in the primary display currency
</p>
<p>
   <strong>day_change_percent_btc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Daily price change percentage of this cryptocurrency in BTC
</p>
<p>
   <strong>day_change_percent_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Daily price change percentage of this cryptocurrency in USD
</p>
<p>
   <strong>btc_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total equivalent value of this cryptocurrency in BTC
</p>
<p>
   <strong>usd_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total equivalent value of this cryptocurrency in USD
</p>
<p>
   <strong>available_long</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount available for long positions
</p>
<p>
   <strong>available_short</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount available for short positions
</p>
<p>
   <strong>available_with_leverage_long</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Amount available for short positions with leverage included
</p>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique 3Commas ID of the exchange account entity
</p>
<p>
   <strong>is_wallet</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Indicates whether this account is as a wallet
</p>
<br>

### Example request<br>

```json
POST /ver1/accounts/12345678/account_table_data

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
    ...
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
    }
]
```
</details>
 
## Information about all user balances on specified exchange in pretty for pie chart formats<br>
<br>

**Description:** Shows information about currency balances of a specific account using its ID<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>ver1/accounts/{account_id}/pie_chart_data</code>

</blockquote>

<br>

### Path Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p>
<br>

### Response Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   ID of the exchange account entity
</p>
<p>
   <strong>code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The cryptocurrency code symbol
</p>
<p>
   <strong>coinmarketcapid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique identifier of the cryptocurrency on CoinMarketCap
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Full name of the cryptocurrency
</p>
<p>
   <strong>y</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   [TBD]
</p>
<p>
   <strong>percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The percentage of the total portfolio value represented by this cryptocurrency
</p>
<p>
   <strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The amount of cryptocurrency held in this account
</p>
<p>
   <strong>btc_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The equivalent value of this cryptocurrency in BTC
</p>
<p>
   <strong>usd_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The equivalent value of this cryptocurrency in USD
</p>
<p>
   <strong>primary_display_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Contains information about the currency used for displaying the value of this cryptocurrency in the preferred display currency
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The currency code used to display values for this cryptocurrency
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The value of this cryptocurrency, converted to the primary display currency using the current market rate
</p>



### Example request<br>

```json
POST /ver1/accounts/32402783/pie_chart_data
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
[
    {
        "code": "BTC",
        "coinmarketcapid": "1",
        "name": "Bitcoin (BTC)",
        "y": 65.1,
        "percentage": 65.1,
        "amount": 0.00031872,
        "btc_value": "0.00031872",
        "usd_value": "20.31",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "20.3146900992"
        },
        "account_id": 32402783
    },
   ...
    {
        "code": "USDT",
        "coinmarketcapid": "825",
        "name": "Tether USDt (USDT)",
        "y": 0.91,
        "percentage": 0.91,
        "amount": 0.28478606,
        "btc_value": "0.00000447",
        "usd_value": "0.28",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "0.28478606"
        },
        "account_id": 32402783
    },
    {
        "code": "ETH",
        "coinmarketcapid": "1027",
        "name": "Ethereum (ETH)",
        "y": 0.79,
        "percentage": 0.79,
        "amount": 9.52e-05,
        "btc_value": "0.00000388",
        "usd_value": "0.25",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "0.247266593784"
        },
        "account_id": 32402783
    }
]
```
</details>
 
## Currency rates and limits with leverage data<br>

**Description:** Returns the current trading rules and ticket information with data about leverages on the futures exchange<br>

{% hint style="success" %}
This is an endpoint that does not need authentication
{% endhint %}
<br>

-------- 

<mark style="color:blue"> <strong>GET</strong>

<mark style="color:blue"> <storng>/ver1/accounts/currency_rates_with_leverage_data</strong>

-------- 


### Query Parameters<br>
<p>
   <strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique exchange code in the 3Commas system
</p>
<p>
   <strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Trading pair in 3Commas format
</p>
<br>

{% hint style="info" %}
The market and trading pair codes are used in 3Commas format. Use endpoints [Supported Markets List](/docs/Market%20data/Supported%20markets%20list.md) to get value for parameter <code>market_code</code> and [All Market Pairs](/docs/Market%20data/All%20market%20pairs.md) to get value for parameter <code>pair</code> in 3Commas format.
{% endhint %}

<br>
<br>

### Response Parameters<br>

<p>
   <strong>last</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Last price
</p>
<p>
   <strong>bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Bid price
</p>
<p>
   <strong>ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Ask price
</p>
<p>
   <strong>orderbook_ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Ask price of ticker
</p>
<p>
   <strong>orderbook_bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Bid price of ticker
</p>
<p>
   <strong>orderbook_last</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Last price of ticker
</p>
<p>
   <strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Currency price of ticker
</p>
<p>
   <strong>strategy_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   [Description needed]
</p>
<p>
   <strong>leverage_data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code><br>
   Represents a leverage data for this pair
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of leverage available
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of the leverage option available for this contract
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>can_set_leverage_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether a custom leverage value can be set
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>available_leverage_values</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available leverage values for settings for this pair and exchange
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>max_leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The maximum leverage value allowed for this contract
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contains minimum and maximum leverage value that can be applied for this pair
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>min</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The minimum leverage value that can be applied to this contract
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>max</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The maximum leverage value that can be applied to this contract
</p>
<p>
   <strong>contract_strategy_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The strategy by which the contract price is calculated
</p>
<p>
   <strong>instrumentKind</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of exchange instrument
</p>
<p>
   <strong>minPrice</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Minimum price order
</p>
<p>
   <strong>maxPrice</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Maximum price order
</p>
<p>
   <strong>priceStep</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The minimum step for changing the price
</p>
<p>
   <strong>minLotSize</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The minimum lot size for order in Base currency
</p>
<p>
   <strong>lotStep</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Order of changing the size in Base currency
</p>
<p>
   <strong>maxMarketBuyAmount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Maximum order size in Base currency for buy
</p>
<p>
   <strong>maxMarketSellAmount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Maximum order size in Base currency for sell
</p>
<p>
   <strong>bidMultiplierDown</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   A multiplier applied to decrease the bid price
</p>
<p>
   <strong>bidMultiplierUp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   A multiplier applied to increase the bid price
</p>
<p>
   <strong>askMultiplierUp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   A multiplier applied to increase the ask price
</p>
<p>
   <strong>askMultiplierDown</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   A multiplier applied to decrease the ask price
</p>
<p>
   <strong>minTotal</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Minimum order size in Quote
</p>
<p>
   <strong>minMarketTotal</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Minimum order size in Quote for market order
</p>
<p>
   <strong>maxTotal</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Maximum order size in Quote
</p>
<p>
   <strong>maxLotSize</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Maximum order size in Base
</p>
<br>
<br>

### Example request<br>

```json
GET /ver1/accounts/currency_rates_with_leverage_data?market_code=binance_futures_eea&pair=BNFCR_1INCHUSDT
```
<br>

### Example response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```JSON
{
  "last": "0.3039",
  "bid": "0.3039",
  "ask": "0.304",
  "orderbook_ask": "0.304",
  "orderbook_bid": "0.3039",
  "orderbook_last": "0.3039",
  "orderbook_price_currency": "BNFCR",
  "strategy_name": "orderbook_price",
  "contract_strategy_name": "orderbook_price",
  "leverage_data": [
    {
      "code": "cross",
      "name": "Cross",
      "can_set_leverage_value": true,
      "available_leverage_values": [
        
      ],
      "max_leverage": "25.0",
      "valid": {
        "min": 1,
        "max": "25.0"
      }
    }
  ],
  "instrumentKind": "linear_futures",
  "priceStep": "0.0001",
  "minLotSize": "1.0",
  "maxLotSize": "5000000.0",
  "lotStep": "1.0",
  "maxMarketBuyAmount": "500000.0",
  "maxMarketSellAmount": "500000.0",
  "minMarketBuyAmount": "1.0",
  "minMarketSellAmount": "1.0",
  "minTotal": "5.0",
  "bidMultiplierUp": "1.1",
  "askMultiplierDown": "0.9",
  "minPrice": "0.0613",
  "maxPrice": "100000.0"
}
```
</details>

<details><br>
<summary>Status: 400 Bad Request</summary><br>

```JSON
{
  "error": "Unknown pair"
}
```
</details>

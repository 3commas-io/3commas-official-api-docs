## Currency rates and limits with leverage data

**Description:** Returns the current trading rules and ticket information with data about leverages on the futures exchange

:::tip
This is an endpoint that does not need authentication
:::

<blockquote>
<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>/ver1/accounts/currency_rates_with_leverage_data</code>
</blockquote>

### Query Parameters

   market_code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique exchange code in the 3Commas system

   pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Trading pair in 3Commas format

:::info
The market and trading pair codes are used in 3Commas format. Use endpoints [Supported Markets List](/docs/Market%20data/Supported%20markets%20list.md) to get value for parameter <code>market_code</code> and [All Market Pairs](/docs/Market%20data/All%20market%20pairs.md) to get value for parameter <code>pair</code> in 3Commas format.
:::

### Response Parameters

   last&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Last price

   bid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Bid price

   ask&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Ask price

   orderbook_ask&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Ask price of ticker

   orderbook_bid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Bid price of ticker

   orderbook_last&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Last price of ticker

   orderbook_price_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Currency price of ticker

   strategy_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   [Description needed]

   leverage_data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code>
   Represents a leverage data for this pair

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of leverage available

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of the leverage option available for this contract

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;can_set_leverage_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether a custom leverage value can be set

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;available_leverage_values&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available leverage values for settings for this pair and exchange

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_leverage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The maximum leverage value allowed for this contract

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contains minimum and maximum leverage value that can be applied for this pair

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The minimum leverage value that can be applied to this contract

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The maximum leverage value that can be applied to this contract

   contract_strategy_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The strategy by which the contract price is calculated

   instrumentKind&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The type of exchange instrument

   minPrice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Minimum price order

   maxPrice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Maximum price order

   priceStep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The minimum step for changing the price

   minLotSize&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The minimum lot size for order in Base currency

   lotStep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Order of changing the size in Base currency

   maxMarketBuyAmount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Maximum order size in Base currency for buy

   maxMarketSellAmount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Maximum order size in Base currency for sell

   bidMultiplierDown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   A multiplier applied to decrease the bid price

   bidMultiplierUp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   A multiplier applied to increase the bid price

   askMultiplierUp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   A multiplier applied to increase the ask price

   askMultiplierDown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   A multiplier applied to decrease the ask price

   minTotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Minimum order size in Quote

   minMarketTotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Minimum order size in Quote for market order

   maxTotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Maximum order size in Quote

   maxLotSize&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Maximum order size in Base

### Example request

```json
GET /ver1/accounts/currency_rates_with_leverage_data?market_code=binance_futures_eea&pair=BNFCR_1INCHUSDT
```

### Example response and errors

<details>
<summary>Status: 200 OK</summary>

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

<details>
<summary>Status: 400 Bad Request</summary>

```JSON
{
  "error": "Unknown pair"
}
```

</details>

## Currency rates and limits

**Description:** Retuns the current trading rules and ticker information on exchange

:::tip
This is an endpoint that does not need authentication
:::

<blockquote>
<code><mark style={{color: "blue"}}> GET </mark></code>

<code>/ver1/accounts/currency_rates</code>
</blockquote>

### Query Parameters

   market_code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique exchange code in the 3Commas system

   pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color:"orange"}}>required</mark>
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
   The name of trading strategy

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
GET /ver1/accounts/currency_rates_with_leverage_data?market_code=binance&pair=BTC_ETH
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
  "last": "63802.44",
  "bid": "63802.44",
  "ask": "63802.45",
  "orderbook_ask": "63802.45",
  "orderbook_bid": "63802.44",
  "orderbook_last": "63802.44",
  "orderbook_price_currency": "USDT",
  "strategy_name": "orderbook_price",
  "contract_strategy_name": "orderbook_price",
  "instrumentKind": "spot",
  "minPrice": "0.01",
  "maxPrice": "1000000.0",
  "priceStep": "0.01",
  "minLotSize": "0.00001",
  "lotStep": "0.00001",
  "maxMarketBuyAmount": "121.22278732",
  "maxMarketSellAmount": "121.22278732",
  "bidMultiplierDown": "0.2",
  "bidMultiplierUp": "5.0",
  "askMultiplierUp": "5.0",
  "askMultiplierDown": "0.2",
  "minTotal": "5.0",
  "minMarketTotal": "5.0",
  "maxTotal": "9000000.0",
  "maxLotSize": "9000.0"
}
```

</details>

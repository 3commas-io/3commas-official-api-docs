## Currency rates and limits<br>

**Description:** Retuns the current trading rules and ticker information on exchange<br>

{% hint style="success" %}
This is an endpoint that does not need authentication
{% endhint %}
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/accounts/currency_rates**

-------- 
<br>

{% hint style="info" %}
The market and trading pair code is used in 3Commas format. Use endpoints [Supported markets list](Market%20data/1.Supported%20markets%20list.md) to get value for parameter `market_code` and [All market pairs](Market%20data/2.All%20market%20pairs.md) to get value for parameter `pair` in 3Commas format.
{% endhint %}

<br>
<br>

### Request Parameters <br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
| **market_code** | `integer`	| Yes |	 | Name of the exchange in the 3Commas system |
| **pair** | `integer`	| Yes |	| Trading pair in 3Commas format |

<br>
<br>

### Response Parameters<br>

| Name | Type |	 Description|
|------|------|-----------|
|**last**  | `string`	| Last price|
|**bid**  | `string`	| Bid price |
|**ask**  | `string`	| Ask price |
|**orderbook_ask**  | `string`	| Ask price of ticker|
|**orderbook_bid**  | `string`	| Bid price of ticker|
|**orderbook_last**  | `string`	| Last price of ticker|
|**orderbook_price_currency**  | `string`	| Currency price of ticker |
|**strategy_name**  | `string`	| [?] |
|**contract_strategy_name**| `string` | The strategy by which the contract price is calculated |
| **instrumentKind**  | `string`	| The type of exchange instrumen |
| **minPrice**  | `string`	| Minimum price order |
| **maxPrice**  | `string`	| Maximum price order |
| **priceStep**  | `string`	| The minimum step for changing the price  |
| **minLotSize**  | `string`	| The minimum lot size for order in Base currency |
| **lotStep**  | `string`	| Order of changing the size in Base currency  |
| **maxMarketBuyAmount**  | `string`	| Maximum order size in Base currency for buy |
| **maxMarketSellAmount**  |`string`| Maximum order size in Base currency for sell |
| **bidMultiplierDown**  | `string` | A multiplier applied to decrease the bid price |
| **bidMultiplierUp**  | `string` | A multiplier applied to increase the bid price | 
| **askMultiplierUp**  | `string` | A multiplier applied to increase the ask price |
| **askMultiplierDown**  | `string` | A multiplier applied to decrease the ask price|
| **minTotal**  | `string`	| Minimum order size in Quote |
| **minMarketTotal**  | `string`	| Minimum order size in Quote for market order |
| **maxTotal**  | 	`string` | Maximum order size in Quote |
|**maxLotSize**  | `string`	| Maximum order size in Base|

<br>
<br>

### Example request<br>

```json
/ver1/accounts/currency_rates_with_leverage_data?market_code=binance&pair=BTC_ETH

```
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

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
<details>
## Currency rates and limits with leverage data<br>

**Description:** Returns the current trading rules and ticket information with data about leverages on the futures exchange<br>

**Permission:** NONE<br>
**Security:** NONE<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/accounts/currency_rates_with_leverage_data**

-------- 
<br>
<br>

{% hint style="info" %}
{% hint style="info" %}
The market and trading pair code is used in 3Commas format. Use endpoints [Supported Markets List](Market%20data/1.Supported%20markets%20list.md) to get value for parameter `market_code` and [All Market Pairs](Market%20data/2.All%20market%20pairs.md) to get value for parameter `pair` in 3Commas format.
{% endhint %}
{% endhint %}

<br>
<br>

### Request Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
| **market_code** | `string`	| Yes |	| Name of the exchange in the 3Commas system |
| **pair** | `string`	| Yes |	| Trading pair in 3Commas format |

<br>
<br>

### Response Parameters<br>

| Name | Type |  Description|
|------|------|-----------|
|**last**  | `string` | Last price|
|**bid**  | `string`  | Bid price |
| **ask**  | `string` | Ask price |
| **orderbook_ask**  | `string` | Ask price of ticker|
| **orderbook_bid**  | `string` | Bid price of ticker|
| **orderbook_last**  | `string`  | Last price of ticker|
| **orderbook_price_currency**  | `string`  | Currency price of ticker |
| **strategy_name**  | `string` | The strategy by which the contract price is calculated |
|**contract_strategy_name**| `string` | The strategy by which the contract price is calculated |
|**leverage_data[][code]**| `string` | **TBD** |
|**leverage_data[][name]**| `string` | **TBD** |
|**leverage_data[][can_set_leverage_value]**| `string` | **TBD** |
|**leverage_data[][max_leverage]**| `string` | **TBD** |
|**leverage_data[][value][min]**| `string` | **TBD** |
|**leverage_data[][value][max]**| `string` | **TBD** |
| **instrumentKind**  | `string`  | The type of exchange instrument |
| **minPrice**  | `string`  | Minimum price order |
| **maxPrice**  | `string`  | Maximum price order |
| **priceStep**  | `string` | The minimum step for changing the price  |
| **minLotSize**  | `string`  | The minimum lot size for order in Base currency |
| **lotStep**  | `string` | Order of changing the size in Base currency  |
| **maxMarketBuyAmount**  | `string`  | Maximum order size in Base currency for buy |
| **maxMarketSellAmount**  |`string`| Maximum order size in Base currency for sell |
| **bidMultiplierDown**  | `string` | A multiplier applied to decrease the bid price |
| **bidMultiplierUp**  | `string` | A multiplier applied to increase the bid price |
| **askMultiplierUp**  | `string` | A multiplier applied to increase the ask price |
| **askMultiplierDown**  | `string` | A multiplier applied to decrease the ask price|
| **minTotal**  | `string`  | Minimum order size in Quote |
| **minMarketTotal**  | `string`  | Minimum order size in Quote for market order |
| **maxTotal**  |   `string`| Maximum order size in Quote |
|**maxLotSize**  | `string` | Maximum order size in Base |
<br>
<br>

### Example request<br>

```json
/ver1/accounts/currency_rates_with_leverage_data?market_code=binance_futures_eea&pair=BNFCR_1INCHUSDT
```
<br>

### Example Response and errors<br>

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

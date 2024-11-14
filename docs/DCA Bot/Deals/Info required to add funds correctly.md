## Info required to add funds correctly<br>

**Description:** TBD <br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"> <strong>GET</strong><br>
<mark style="color:blue"> <strong>/ver1/deals/{deal_id}/data_for_adding_funds</strong>

----------

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>
<br>

### Response Parameters<br>

| Name            | Type         | Description  |
|-----------------|--------------|--------------|
| **orderbook_price**            | `string`     | The current price from the an exchange's order book for the pair   |
| **price_per_one_unit_strategy_name** | `string` | The name of strategy used to determine price per unit          |
| **account_id**           | `integer`    | ID of the exchange account entity where this DCA Bot's deal was created|
| **quote_currency**             | `string`     | The quote currency in the trading pair |
| **base_currency**              | `string`     | The base currency in the trading pair      |
| **adding_funds_currency**      | `string`     | Currency for additional funds              |
| **available_amount**           | `string`     | The amount of quote currency available for trading |
| **limits**                     | `object`     | Exchange trading limits applicable to the pair used in this DCA Bot
| **market_supported**           | `boolean`    | Indicates if market orders are supported for this pair                                           |
| **is_contract**                | `boolean`    | Specifies if the trading instrument is a contract                                                |
| **orderbook_price_currency**   | `string`     | Currency used for the order book price                         |
| **take_profit_price**          | `string`     | The set price at which to take profit for the bot's deals                                        |
| **stop_loss_price**            | `string`     | The price set to trigger a stop loss for the bot's deals                                         |
| **account_type**               | `string`     | Specifies the type of account (e.g., PaperTradingAccount)                                        |
| **deal_type**                  | `string`     | Indicates the type of deal being executed (e.g., long or short)                                  |
| **pair**                       | `string`     | Trading pair in 3Commas format |
| **limit**                      | `string`     | The limit price for buy or sell orders                                                           |
| **market_buy_min_total**       | `string`     | The minimum total amount for market buy orders                                                   |
| **min_lot_size**               | `string`     | The minimum amount of the base currency that can be traded per order                             |
| **leverage_custom_value**      | `string`     | The custom leverage value, if specified                                                          |
| **leverage_type**              | `string`     | Type of leverage applied for this Deal (e.g., not_specified)                                                   |

<br>
<br>
  
   [test](./DCA%20Bot/Available%20strategy%20list%20for%20bot.md)


### Example Request<br>

```json
GET /ver1/deals/2295655961/data_for_adding_funds
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "orderbook_price": "2991.62",
    "price_per_one_unit_strategy_name": "orderbook_price",
    "account_id": 32199203,
    "quote_currency": "USDT",
    "base_currency": "ETH",
    "adding_funds_currency": "USDT",
    "available_amount": "9457.19151709",
    "limits": {
        "minPrice": "0.01",
        "maxPrice": "1000000.0",
        "priceStep": "0.01",
        "priceMultiplierDown": "0.2",
        "priceMultiplierUp": "5.0",
        "minLotSize": "0.0001",
        "lotStep": "0.0001",
        "minTotal": "5.0",
        "maxMarketBuyAmount": "2758.00778166",
        "maxMarketSellAmount": "2758.00778166",
        "minMarketBuyAmount": "0.0",
        "minMarketSellAmount": "0.0",
        "maxLotSize": "9000.0",
        "marketBuyMinTotal": "5.0"
    },
    "market_supported": true,
    "is_contract": false,
    "orderbook_price_currency": "USDT",
    "take_profit_price": "2987.31",
    "stop_loss_price": null,
    "account_type": "Account::PaperTradingAccount",
    "deal_type": "long",
    "pair": "USDT_ETH",
    "limit": "5.00000000",
    "market_buy_min_total": "5.0",
    "min_lot_size": "0.00010000",
    "leverage_custom_value": null,
    "leverage_type": "not_specified"
}
```
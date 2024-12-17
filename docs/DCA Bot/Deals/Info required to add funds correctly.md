**Description:** Returns the information required to add funds correctly

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/deals/{deal_id}/data_for_adding_funds`</code>

</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

### Response Parameters

   orderbook_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The current price from the an exchange's order book for the pair

   price_per_one_unit_strategy_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The name of strategy used to determine price per unit

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   ID of the exchange account entity where this DCA Bot's deal was created

   quote_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The quote currency in the trading pair

   base_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The base currency in the trading pair

   adding_funds_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Currency for additional funds

   available_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The amount of quote currency available for trading

   limits&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Exchange trading limits applicable to the pair used in this DCA Bot

   market_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if market orders are supported for this pair (<code>true</code>) or not (<code>false</code>)

   is_contract&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Specifies if the trading instrument is a contract (<code>true</code>) or not (<code>false</code>)

   orderbook_price_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Currency used for the order book price

   take_profit_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The set price at which to take profit for the bot's deals

   stop_loss_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The price set to trigger a stop loss for the bot's deals

   account_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Specifies the type of account

   deal_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Indicates the type of deal being executed: <code>long</code> or <code>short</code>)  

   pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Trading pair in 3Commas format

   limit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The limit price for buy or sell orders

   market_buy_min_total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The minimum total amount for market buy orders

   min_lot_size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The minimum amount of the base currency that can be traded per order

   leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The custom leverage value, if specified

   leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of leverage applied for this Deal
   <details>
   <summary>Allowed value</summary>
      - cross - uses all available funds in your account as collateral for your trades;
      - isolated - the margin is limited to a specific position;
      - not_specified - no leverage type specified for deal;
   </details>

### Example Request

```json
GET /ver1/deals/2295655961/data_for_adding_funds
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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

</details>

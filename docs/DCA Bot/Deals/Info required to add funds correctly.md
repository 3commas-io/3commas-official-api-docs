## Info required to add funds correctly<br>
<br>

**Description:** Returns the information required to add funds correctly<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/deals/{deal_id}/data_for_adding_funds</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>deal_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID Deal entity
</p>
<br>

### Response Parameters<br>

<p>
   <strong>orderbook_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The current price from the an exchange's order book for the pair 
</p>
<p>
   <strong>price_per_one_unit_strategy_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The name of strategy used to determine price per unit
</p>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   ID of the exchange account entity where this DCA Bot's deal was created
</p>
<p>
   <strong>quote_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The quote currency in the trading pair
</p>
<p>
   <strong>base_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The base currency in the trading pair
</p>
<p>
   <strong>adding_funds_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Currency for additional funds
</p>
<p>
   <strong>available_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The amount of quote currency available for trading
</p>
<p>
   <strong>limits</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Exchange trading limits applicable to the pair used in this DCA Bot
</p>
<p>
   <strong>market_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if market orders are supported for this pair (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>is_contract</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Specifies if the trading instrument is a contract (<code>true</code>) or not (<code>false</code>) 
</p>
<p>
   <strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Currency used for the order book price
</p>
<p>
   <strong>take_profit_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The set price at which to take profit for the bot's deals
</p>
<p>
   <strong>stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The price set to trigger a stop loss for the bot's deals
</p>
<p>
   <strong>account_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Specifies the type of account
</p>
<p>
   <strong>deal_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Indicates the type of deal being executed: <code>long</code> or <code>short</code>)  
</p>
<p>
   <strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Trading pair in 3Commas format      
</p>
<p>
   <strong>limit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The limit price for buy or sell orders                          
</p>
<p>
   <strong>market_buy_min_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The minimum total amount for market buy orders                                     
</p>
<p>
   <strong>min_lot_size</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The minimum amount of the base currency that can be traded per order                                         
</p>
<p>
   <strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The custom leverage value, if specified                                     
</p>
<p>
   <strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of leverage applied for this Deal
   <details><summary><em>Allowed value</em></summary>
      <dl>
       <li><strong>cross</strong> - uses all available funds in your account as collateral for your trades;</li>
       <li><strong>isolated</strong> - the margin is limited to a specific position;</li>
       <li><strong>not_specified</strong> - no leverage type specified for deal;</li>
      </dl>
   </details>
</p>

<br>

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
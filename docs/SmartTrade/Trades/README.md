---
sidebar_position: 0
---

# Trades

The Trade is a sub-entity of SmartTrade. Each trade entity includes the conditions set for its specific trade type.

The Trade entity holds the following information about:

- Order type
- Trading pair
- Trade status
- Initial and realized amounts
- Initial and realized total values
- Price values, including initial, average, and realized prices
- Position percentage for the trade
- Conditions related to trailing and triggers (e.g. trailing enabled, trigger price)

Each trade is created automatically by 3Commas based on the conditions set within the SmartTrade entity.

Depending on the conditions set within SmartTrade, a trade can be one of the following types:

- Position trade;
- Take profit trade;
- Stop-loss trade;
- Reduce funds trade;
- Market close trade.

Here you will find a set of methods to manage these trades.

## Attributes

id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>

Unique 3Commas Trade entity ID

average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or<code>string</code>

The weighted average price at which the asset was bought or sold during the execution of the trades

follow_price_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The type of price to follow for this trade (f.e. <code>bid</code>,<code>ask</code> or <code>last</code>)

initial_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The initial amount for this trade

initial_total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The initial total for this trade

initial_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>

The initial price for this trade

order_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>

The limit price for this trade

order_side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The side of the order to be created by this trade
<details>
    <summary>Allowed value</summary>
    - Buy
    - Sell
</details>

order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The type of order used to open the position trade
<details>
    <summary>Allowed value</summary>
    - Market
    - Limit
    - Conditional
</details>

pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Trading pair in 3Commas format for this trade

position_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>

Percentage of the step in Take Profit. This field is only filled if `trade_purpose` is  `take_profit`

realised_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the realized amount from the trade

realised_total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the total realized amount from the trade

realised_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>

Indicates the realized percentage of the total trade amount

realised_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or<code>null</code>

Indicates the realized price of the trade

status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

3Commas status for this Trade

take_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

The percentage price level for Take Profit for this Trade

trade_purpose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

The type of trade

<details>
    <summary>Show allowed values</summary>
    - position
    - take_profit
    - stop_loss
    - reduce_funds
</details>

trail_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the percentage deviation from the price for this trade

trail_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the deviation from the price calculated by 3Commas for this trade

trailing_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Indicates whether the trailing settings for this trade can be edited

trailing_last_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the last price used for trailing

trailing_last_price_updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>

Indicates the timestamp of the last update to the trailing price

trigger_condition&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>

Indicates the condition under which the trigger is activated

<details>
    <summary>Show allowed values</summary>
    - greater
    - less
    - greater_or_equal
    - less_or_equal
</details>

trigger_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the price at which the trigger is activated

trigger_price_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>

Indicates the percentage for the trigger price

trigger_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>

Indicates the type of trigger for the trade

created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string (date-time)</code>

ISO 8601 datetime string of when this Trade entity was created

updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string (date-time)</code>

ISO 8601 datetime string of when this Trade entity was updated

cancelable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>

Indicates whether this trade can be canceled

force_processable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>

Indicates whether this Trade can be close by market

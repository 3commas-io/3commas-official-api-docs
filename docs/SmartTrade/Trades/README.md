<h1>Trades</h1>

<p>
The <strong>Trade</strong> is a sub-entity of SmartTrade. Each trade entity includes the conditions set for its specific trade type.
</p>

<p>
The <strong>Trade</strong> entity holds the following information about:
</p>

<ul>
    <li>Order type ;
    <li>Trading pair;
    Trade status;
    <li>Initial and realized amounts;
    <li>Initial and realized total values;
    <li>Price values, including initial, average, and realized prices;
    <li>Position percentage for the trade;
    <li>Conditions related to trailing and triggers (e.g., trailing enabled, trigger price).
</ul>

<p>
Each trade is created automatically by 3Commas based on the conditions set within the SmartTrade entity.
</p>

<p>
Depending on the conditions set within SmartTrade, a trade can be one of the following types:
</p>

<ul>
    <li>Position trade;</li>
    <li>Take profit trade;</li>
    <li>Stop-loss trade;</li>
    <li>Reduce funds trade;</li>
    <li>Market close trade.</li>
</ul>

<p>
Here you will find a set of methods to manage these trades.
</p>
<br>


## Attributes<br>

<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
<br>
Unique 3Commas Trade entity ID
<br>

<strong>average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or<code>string</code>
<br>
The weighted average price at which the asset was bought or sold during the execution of the trades
<br>

<strong>follow_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br> 
The type of price to follow for this trade (f.e. <code>bid</code>,<code>ask</code> or <code>last</code>)
<br>

<strong>initial_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
The initial amount for this trade
<br>

<strong>initial_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
The initial total for this trade
<br>

<strong>initial_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
<br>
The initial price for this trade
<br>

<strong>order_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
<br> 
The limit price for this trade
<br>

<strong>order_side</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><code>string</code>
<br>
The side of the order to be created by this trade<br>
<details>
    <summary><em>Allowed value</em></summary>         
        <li>Buy</li>
        <li>Sell</li>
</details>
<br>

<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
The type of order used to open the position trade<br>
<details>
    <summary><em>Allowed value</em></summary>         
        <li>Market</li>
        <li>Limit</li>
        <li>Conditional</li>
</details>
<br>

<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
Trading pair in 3Commas format for this trade
<br>

<strong>position_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
<br>
Percentage of the step in Take Profit. This field is only filled if `trade_purpose` is  `take_profit`
<br>

<strong>realised_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br> 
Indicates the realized amount from the trade
<br>

<strong>realised_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br>
Indicates the total realized amount from the trade
<br>

<strong>realised_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
<br>
Indicates the realized percentage of the total trade amount
<br>

<strong>realised_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or<code>null</code>
<br>
Indicates the realized price of the trade
<br>

<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
3Commas status for this Trade
<br>

<strong>take_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br>
The percentage price level for Take Profit for this Trade
<br>

<strong>trade_purpose</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
The type of trade
<br>
<details>
    <summary><strong>Show allowed values</strong></summary>         
        <li>position</li>
        <li>take_profit</li>
        <li>stop_loss</li>
        <li>reduce_funds</li>
</details>
<br>

<strong>trail_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br> 
Indicates the percentage deviation from the price for this trade
<br>

<strong>trail_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br>
Indicates the deviation from the price calculated by 3Commas for this trade<br>

<strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code> 
Indicates whether the trailing settings for this trade can be edited
<br>

<strong>trailing_last_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br> 
Indicates the last price used for trailing
<br>

<strong>trailing_last_price_updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>
<br>
Indicates the timestamp of the last update to the trailing price
<br>

<strong>trigger_condition</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>
<br> 
Indicates the condition under which the trigger is activated
<br> 
<details>
    <summary><strong>Show allowed values</strong></summary>
        <li>greater</li>
        <li>less</li>
        <li>greater_or_equal</li>
        <li>less_or_equal</li>
</details>
<br>

<strong>trigger_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br>
Indicates the price at which the trigger is activated
<br>

<strong>trigger_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
<br>
Indicates the percentage for the trigger price
<br>

<strong>trigger_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br> 
Indicates the type of trigger for the trade
<br>

<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time></code>
<br>
ISO 8601 datetime string of when this Trade entity was created
<br>

<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time></code>
<br>
ISO 8601 datetime string of when this Trade entity was updated
<br>

<strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
<br>
Indicates whether this trade can be canceled
<br>

<strong>force_processable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
<br> 
Indicates whether this Trade can be close by market
<br>
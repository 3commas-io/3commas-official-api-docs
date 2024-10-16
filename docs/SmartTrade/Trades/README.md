# Trade<br>
Set of method to create and work with SmartTrades in 3Commas.


## Attributes<br>

<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
<br>
ID of this trade entity
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
The side of the order to be created by this trade
<br>

<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
The type of order used to open the position trade<br>
<details>
    <summary><strong>Show allowed values</strong></summary>         
        <li>market</li>
        <li>limit</li>
        <li>conditional</li>
</details>
<br>

<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
Trading pair in 3Commas format for this trade
<br>

<strong>position_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
<br>
Percentage of the step in Take Profit. This field is only filled if `trade_purpose` is  `take_profit`<code>
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

<strong>trail_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br> 
Indicates the percentage deviation from the price for this trade<br>

<strong>trail_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br> 
Indicates the deviation from the price for this trade (сами высчитываем) по этому трейду

<strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code> 
Indicates whether the trailing settings for this trade can be edited<br>

<strong>trailing_last_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br> 
Indicates the last price used for trailing<br>

<strong>trailing_last_price_updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
Indicates the timestamp of the last update to the trailing price<br>

<strong>trigger_condition</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br> 
Indicates the condition under which the trigger is activated<br> 
<details>
    <summary><strong>Show allowed values</strong></summary>
        <li>greater</li>
        <li>less</li>
        <li>greater_or_equal</li>
        <li>less_or_equal</li>
</details>
<br>

<strong>trigger_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br> 
Indicates the price at which the trigger is activated<br>

<strong>trigger_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br> 
Indicates the percentage for the trigger price<br>

<strong>trigger_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
Indicates the type of trigger for the trade<br>

<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time></code><br>
ISO 8601 datetime string of when this Trade entity was created<br>

<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time></code><br>
ISO 8601 datetime string of when this Trade entity was updated<br>

<strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates whether this trade can be canceled<br>

<strong>force_processable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br> 
Indicates whether this Trade can be close by market<br>



## Attributes

<dl>
  <dt><strong>id</strong></dt><code>integer</code> - ID of this trade entity</dd>

  <dt><strong>average_price</strong></dt>
  <dd><code>null</code> or <code>string</code> - The weighted average price at which the asset was bought or sold during the execution of the trades</dd>

  <dt><strong>follow_price_type</strong></dt>
  <dd><code>string</code> - The type of price to follow for this trade (e.g. <code>bid</code>, <code>ask</code>, or <code>last</code>)</dd>

  <dt><strong>initial_amount</strong></dt>
  <dd><code>string</code> - The initial amount for this trade</dd>

  <dt><strong>initial_total</strong></dt>
  <dd><code>string</code> - The initial total for this trade</dd>

  <dt><strong>initial_price</strong></dt>
  <dd><code>number</code> - The initial price for this trade</dd>

  <dt><strong>order_price</strong></dt>
  <dd><code>null</code> or <code>string</code> - The limit price for this trade</dd>

  <dt><strong>order_side</strong></dt>
  <dd><code>string</code> - The side of the order to be created by this trade</dd>

  <dt><strong>order_type</strong></dt>
  <dd><code>string</code> - The type of trade used to open the position (e.g. <code>market</code>, <code>limit</code>, <code>conditional</code>)</dd>

  <dt><strong>pair</strong></dt>
  <dd><code>string</code> - Trading pair in 3Commas format for this trade</dd>

  <dt><strong>position_percentage</strong></dt>
  <dd><code>null</code> or <code>string</code> - Percentage of the step in Take Profit. This field is only filled if "trade_purpose": "take_profit"</dd>

  <dt><strong>realised_amount</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the realized amount from the trade</dd>

  <dt><strong>realised_total</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the total realized amount from the trade</dd>

  <dt><strong>realised_percentage</strong></dt>
  <dd><code>number</code> - Indicates the realized percentage of the total trade amount</dd>

  <dt><strong>realised_price</strong></dt>
  <dd><code>number</code> or <code>null</code> - Indicates the realized price of the trade</dd>

  <dt><strong>status</strong></dt>
  <dd><code>string</code> - 3Commas status for this Trade</dd>

  <dt><strong>take_profit_percentage</strong></dt>
  <dd><code>string</code> or <code>null</code> - The percentage price level for Take Profit for this Trade</dd>

  <dt><strong>trade_purpose</strong></dt>
  <dd><code>string</code> - The type of trade</dd>
  <details>
    <summary><strong>Show allowed values:</strong></summary>
    <li>position</li>
    <li>take_profit</li>
    <li>stop_loss</li>
    <li>reduce_funds</li>
  </details>
  <br><br>

  <dt><strong>trail_percentage</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the percentage deviation from the price for this trade</dd>

  <dt><strong>trail_value</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the deviation from the price for this trade (calculated automatically)</dd>

  <dt><strong>trailing_enabled</strong></dt>
  <dd><code>boolean</code> - Indicates whether the trailing settings for this trade can be edited</dd>

  <dt><strong>trailing_last_price</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the last price used for trailing</dd>

  <dt><strong>trailing_last_price_updated_at</strong></dt>
  <dd><code>number</code> or <code>null</code> - Indicates the timestamp of the last update to the trailing price</dd>

  <dt><strong>trigger_condition</strong></dt>
  <dd><code>number</code> or <code>null</code> - Indicates the condition under which the trigger is activated</dd>
  <details>
    <summary><strong>Show allowed values:</strong></summary>
    <li>greater</li>
    <li>less</li>
    <li>greater_or_equal</li>
    <li>less_or_equal</li>
  </details>
  <br><br>

  <dt><strong>trigger_price</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the price at which the trigger is activated</dd>

  <dt><strong>trigger_price_percentage</strong></dt>
  <dd><code>string</code> or <code>null</code> - Indicates the percentage for the trigger price</dd>

  <dt><strong>trigger_type</strong></dt>
  <dd><code>string</code> - Indicates the type of trigger for the trade</dd>

  <dt><strong>created_at</strong></dt>
  <dd><code>string</code> (<code>date-time</code>) - ISO 8601 datetime string of when this Trade entity was created</dd>

  <dt><strong>updated_at</strong></dt>
  <dd><code>string</code> (<code>date-time</code>) - ISO 8601 datetime string of when this Trade entity was updated</dd>

  <dt><strong>cancelable</strong></dt>
  <dd><code>boolean</code> - Indicates whether this trade can be canceled</dd>

  <dt><strong>force_processable</strong></dt>
  <dd><code>boolean</code> - Indicates whether this Trade can be closed by market</dd>
</dl>

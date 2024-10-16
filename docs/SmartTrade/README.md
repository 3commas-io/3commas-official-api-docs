<h1>SmartTrade</h1>

<p>
  The <strong>SmartTrade</strong> allows users to open, manage, and close orders on the exchange with predefined conditions.
</p>

<p>
  3Commas provides a set of methods to create and manage SmartTrade entities and their associated trade entities.
</p>

<p>
  A <strong>SmartTrade</strong> entity holds information, including:
</p>

<ul>
  <li>Exchange account and trading pair;</li>
  <li>Position data;</li>
  <li>Conditions for Take Profit and Stop Loss;</li>
  <li>Conditions for closing at market;</li>
  <li>Conditions for reducing funds.</li>
</ul>

<p>
  The process starts with a <strong>SmartTrade</strong> entity, where all conditions are configured. 
  <strong>SmartTrade</strong> then manages trades, which are automatically created by 3Commas based on the conditions set within the SmartTrade entity.
</p>

<p>
  <strong>SmartTrade</strong> can include the following trade types:
</p>

<ul>
  <li>Position trade;</li>
  <li>Take profit trade;</li>
  <li>Stop-loss trade;</li>
  <li>Reduce funds trade;</li>
  <li>Market close trade.</li>
</ul>


## Attributes<br>

<br>
<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;integer<br>
Unique 3Commas ID for this SmartTrade entity<br><br>

<strong>account</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`object`<br>Details about user account<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`integer`<br>
&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this exchange account entity<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
&nbsp;&nbsp;&nbsp;&nbsp;Exchange types where this SmartTrade was created<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br> 
&nbsp;&nbsp;&nbsp;&nbsp;Name of this exchange account<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>market</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
&nbsp;&nbsp;&nbsp;&nbsp;[?]<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
&nbsp;&nbsp;&nbsp;&nbsp;The URL of the account where this SmartTrade was created<br><br>

<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br>
Trading pair in 3Commas format<br>
<br>
<strong>instant</strong>&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
[?] <br>

<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`object`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[?]<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br> 
&nbsp;&nbsp;&nbsp;&nbsp;Web status for this SmartTrade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this SmartTrade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string` 
&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string` 
&nbsp;&nbsp;&nbsp;&nbsp;Description of the error for this SmartTrade if it fails<br><br>

<strong>leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`object`<br>
TBD: add a discription<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information about this leverage for a futures account<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`false` if editing is not available<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>`string`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage type that was set when creating a SmartTrade on a futures account<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage value that was set when creating a SmartTrade on a futures account<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type_editable</strong><span style="margin-left: 30px;">boolean<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify `leverage[type]` settings when editing a SmartTrade</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`true` if editing is available<br><br>

<details>
<summary><strong>position</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`object`</summary>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TBD: add a discription<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong><span style="margin-left: 30px;">boolean</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of position when editing a SmartTrade.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`true` if editing is available<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong><span style="margin-left: 30px;">string<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[?]<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong><span style="margin-left: 30px;">string<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of order used to open the position<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`object`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TBD: add a discription<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong><span style="margin-left: 30px;">number<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for position trade<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong><span style="margin-left: 30px;">boolean<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the group of unit settings parameters when editing a SmartTrade<br>


<span style="margin-left: 30px;"><strong>price</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>value</strong><span style="margin-left: 60px;">number<br>
<span style="margin-left: 80px;">The price of the position order, including commission<br>
<span style="margin-left: 80px;"><strong>value_without_commission</strong><span style="margin-left: 60px;">number<br>
<span style="margin-left: 80px;">The price of the position order, excluding commission<br>
<span style="margin-left: 80px;"><strong>editable</strong><span style="margin-left: 60px;">boolean<br>
<span style="margin-left: 80px;">Indicates whether the user can modify the group of price settings parameters when editing a SmartTrade<br>
<br>


<span style="margin-left: 30px;"><strong>total</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>value</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 80px;">The total value of the position, including all relevant factors such as price and quantity<br>
<span style="margin-left: 80px;"><strong>value_without_commission</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 80px;"> [?] <br>



<span style="margin-left: 30px;"><strong>conditional</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>

<span style="margin-left: 80px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 80px;">Indicates whether the user can modify the settings of conditional of position when editing a SmartTrade<br>

<span style="margin-left: 80px;"><strong>price</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 120px;"><strong>value</strong><span style="margin-left: 30px;"></span>number<br>
<span style="margin-left: 120px;">The specific price value set for the conditional order trigger<br>
<span style="margin-left: 120px;"><strong>type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 120px;">The type of price for the conditional order used to open the position<br>


<span style="margin-left: 80px;"><strong>order_type</strong>string<br>
<span style="margin-left: 80px;">The type of conditional order used to open the position (e.g., `market`, `limit`, `conditional`)<br>
<span style="margin-left: 80px;"><strong>trailing</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 120px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 120px;">Indicates whether the trailing stop settings for the conditional order can be edited<br>
<span style="margin-left: 120px;"><strong>percent</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 120px;">The trailing stop percentage for the conditional order, specifying the distance from the market price at which the trailing stop is triggered<br>



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>type</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 80px;">The status type of the position trade for this SmartTrade<br>
<span style="margin-left: 80px;"><strong>basic_type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">[?]<br>
<span style="margin-left: 80px;"><strong>title</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">Brief description of this status for this position trade<br>
<span style="margin-left: 80px;"><strong>error</strong> <span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">Description of the error for this conditional trade if it fails<br>
</details>

<strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Short note for this SmarTrade <br>

<strong>note_raw</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
TBD: add a discription <br>

<strong>skip_enter_stepote_raw</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Shows whether the position opening step was skipped<br>

<details>
<summary><strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></summary>
TBD: add a discription<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings this  SmartTrade.<br>
&nbsp;&nbsp;&nbsp;&nbsp;`true` if editing is available<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;TBD: add a discription<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current highest bid price of the asset<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current lowest ask price of the asset<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>last</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last traded price of the asset<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>quote_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[?]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>day_change_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage price change for the asset over the last 24 hours<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>target_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_order_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>missing_funds_to_close</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>liquidation_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The liquidation price of the asset on the futures exchange<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_enter_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset with fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset with fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_enter_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset without accounting for any fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset without accounting for any fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be closed at market based on its current status.<br>
&nbsp;&nbsp;&nbsp;&nbsp;This option is available for SmartTrades with the following statuses: `waiting_targets`, `stop_loss_in_progress`, `reduce_funds_in_progress`, and `pending_reduce_funds`<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>add_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether adding funds is available for this SmartTrade based on its current status.<br>This option is not available for SmartTrades if: `status[basic_type]` is `waiting_position`; `<strong>type]` is `simple_sell` or `simple_buy`; `position[conditional][trailing][editable]` is `false<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>reduce_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether reducing funds is available for this SmartTrade based on its current status.<br>This option is available for SmartTrades with only the status: `waiting_targets`<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_start_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the option to force a market entry for the SmartTrade is available based on its current status.<br>This option is available for SmartTrades when position[status][basic_type] are `to_process`, `order_placed`, `trailing_activated`<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_process_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp; [?] <br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>cancel_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be canceled.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Available for SmartTrades where the parameter `basic_type` is one of the following: `waiting_position`, `waiting_targets`, `stop_loss_in_progress`, `reduce_funds_in_progress`, or `pending_reduce_funds`<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade has been completed or finished.<br> `true` is SmartTrade finished<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_position_step_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp; [?] <br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total amount of funds used to enter the position for this SmartTrade, including all additional funds trades, specified in base<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of funds used to enter the position for this SmartTrade, specified in quota<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in base<br> 

&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in quota<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The trading fee of exchange for transaction<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time></code><br> 
&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was created<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string <date-time> or null</code> 
&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was updated<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Type of SmartTrade<br>
</details><br>


<details>
<summary>
<strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></summary>
TBD: add a discription<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in quote<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in USD<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in percent<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>roe</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number` or `null`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts<br><br>
</details><br>

<details>
<summary><strong>margin</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></summary>

TBD: add a description<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount</strong> `number` or `null`  
&nbsp;&nbsp;&nbsp;&nbsp;The total margin amount required for this SmartTrade (base)

&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong> `number` or `null`  
&nbsp;&nbsp;&nbsp;&nbsp;The total margin value for this SmartTrade (quote)
</details><br>


<strong>is_position_not_filled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
TBD: add a discription <br>

<div style="margin-left: 20px;">
  <strong>editable</strong> <code>boolean</code><br>
  Indicates whether the user can modify the settings of this SmartTrade.<br>
  <em>true</em> if editing is available.
</div>
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


<h2>Attributes</h2>

<br>
<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
Unique 3Commas ID for this SmartTrade entity<br>

<strong>account</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Details about user account<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this exchange account entity
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Exchange types where this SmartTrade was created
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
&nbsp;&nbsp;&nbsp;&nbsp;Name of this exchange account
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>market</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The URL of the account where this SmartTrade was created<br>
<br>
<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br>
Trading pair in 3Commas format<br>
<br>
<strong>instant</strong>&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
[TBD] <br>
<br>
<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
The common status and information about this status for this SmartTrade entity<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this SmartTrade
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Description of the error for this SmartTrade if it fails
<br>
<br>
<strong>leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Details of the leverage for this SmartTrade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Information about this leverage for a futures account<br>
&nbsp;&nbsp;&nbsp;&nbsp;<code>false</code> if editing is not available<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage type that was set when creating a SmartTrade on a futures account
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br> 
&nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage value that was set when creating a SmartTrade on a futures account
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>type_editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br> 
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the `leverage[type]` settings when editing SmartTrade.<br>`true` means editing is allowed<br>
<br>
<strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
Details of the Take Profit and its steps applied to this SmartTrade<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the take profit settings for this SmartTrade can be edited
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The price type for the take profit trade(s) that was set when creating the SmartTrade. Can be either <code>value</code> or <code>percentage</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Detailed conditions for each step of the Take Profit<br>
        <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dt>
        Unique 3Commas trade ID for this SmartTrade entity</dd>
        <dd><strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
        <dd>The type of order for this trade's take profit</dd>
        <dd><strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the step of take profit settings for this SmartTrade can be edited</dd>
        <dd><strong>units[value]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>Amount of units for this trade</dd>
        <dd><strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dt>
        <dd>Details of the price applied for one step of Take Profit</dd>
        <dd>
          <dl>
            <dd><strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dd>
            <dd>The type of price for the take profit order used to open the position</dd>
            <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The specific price value set to trigger the take profit order</dd>
            <dd><strong>percet</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The specific percentage of the price set to trigger this take profit trade</dd>
          </dl>
        </dd>
        <dd><strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
        <dd>Details of the trailing applied for one step of Take Profit</dd>
        <dd>
          <dl>
            <dd><strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dt>
            <dd>Indicates whether the trailing settings for the take profit in this SmartTrade can be edited</dd>
            <dd><strong>percet</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dt>
            <dd>The specific trailing percentage applied to the price for this take profit trade</dd>
          </dl>
        </dd>
        <dd><strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dt>
        <dd>Status of this the step of Take Profit. Set automatically by 3Commas</dd>
        <dd>
          <dl>
            <dd><strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dt>
            <dd>3Commas status for this take profit trade</dd>
            <dd><strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dt>
            <dd>Brief description of this status for this trade</dd>
            <dd><strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dt>
            <dd>Error description for this take profit trade if it fails</dd>
          </dl>
        </dd>
        <dd><strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dt>
        <dd>Available actions for one step Take Profit</dd>
        <dd>
          <dl>
            <dd><strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dt>
            <dd>Indicates whether the take profit trade can be canceled</dd>
            <dd><strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dt>
            <dd>[TBD]</dd>
          </dl>
        </dd>
      </dl>
    </dd>
    <dd><strong>position</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dt>
    <dd>Indicates the position of this take profit step for this SmartTrade</dd>
  </dl>

<p>
<strong>stop_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Details of the Stop Loss applied to this SmartTrade<br>
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The price type for the stop loss trade(s) that was set when creating the SmartTrade.<br>Can be either <code>value</code> or <code>percentage</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>breakeven</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss has been set at the breakeven point<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
&nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's stop loss<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Status of this the step of Stop Loss. Set automatically by 3Commas<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this stop loss trade<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this stop loss trade if it fails<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set for the stope loss order trigger<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the stop loss trade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>conditional</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the price applied the Stop Loss<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the stop loss order used to close the position<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set to trigger the Stop Loss order<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this Stop Loss trade<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the trailing applied for one step of Stop Loss<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dt>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether trailing is enabled for the conditional stop loss<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percet</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dt>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The trailing percentage for the conditional stop loss<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>timeout</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;TBD<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the timeout setting for the stop loss is enabled<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The value of the timeout setting for the stop loss trade<br>
</p>

<p>
<strong>reduce_funds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br> 
TBD<br>
<strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code></dd>
        <dl>
            <dd><strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dd>
            <dd>Unique 3Commas trade ID for this market close trade in the SmartTrade</dd><br>
            <dd><strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
            <dd>The order type for this reduce funds trade</dd><br>
            <dd><strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
            <dd>
            <dl>
                <dd><strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
                <dd>3Commas status for this Reduce funds trade</dd><br>
                <dd><strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
                <dd>Brief description of this status for this trade</dd><br>
                <dd><strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
                <dd>Error description for this reduce funds trade if it fails</dd>
            </dl></dd><br>
            <dd><strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
            <dl>
                <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
                <dd>Amount of units for this reduce funds trade</dd>
            </dl><br>
            <dd><strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
            <dl>
                <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
                <dd>The price of the reduce funds trade, including the commission</dd><br>
                <dd><strong>value_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
                <dd>The price of the reduce funds trade, excluding commission</dd>
            </dl><br>
            <dd><strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
            <dl>
                <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dd>
                <dd>The total value of the reduce funds trade, including all relevant factors such as price and quantity</dd>
            </dl><br>
            <dd><strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
            <dl>
                <dd><strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
                <dd>Indicates whether the reduce funds trade can be canceled</dd><br>
                <dd><strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
                <dd>Indicates whether a drawdown transaction can be closed at market</dd>

<strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Optional user-defined note for this SmartTrade<br>

<strong>note_raw</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br[TBD]<br>

<strong>skip_enter_step</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Shows whether the position opening step was skipped<br>

<p>
<strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
[TBD]<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of this SmartTrade.<br>
&nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> if editing is available<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current highest bid price of the asset<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current lowest ask price of the asset<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>last</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last traded price of the asset
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>quote_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>day_change_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage price change for the asset over the last 24 hours<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>target_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_order_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>missing_funds_to_close</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;[TBD]<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>liquidation_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The liquidation price of the asset on the futures exchange<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_enter_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset with fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset with fees<br>

<strong>average_enter_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset without accounting for any fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset without accounting for any fees<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be closed at market based on its current status.
&nbsp;&nbsp;&nbsp;&nbsp;<br>This option is available for SmartTrades with the following statuses: <code>waiting_targets</code>, <code>stop_loss_in_progress</code>, <code>reduce_funds_in_progress</code>, and <code>pending_reduce_funds</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>add_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether adding funds is available for this SmartTrade based on its current status.
&nbsp;&nbsp;&nbsp;&nbsp;<br>This option is not available for SmartTrades if: <code>status[basic_type]</code> is <code>waiting_position</code>; <code>data[type]</code> is <code>simple_sell</code> or <code>simple_buy</code>; <code>position[conditional][trailing][editable]</code> is <code>false</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>reduce_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether reducing funds is available for this SmartTrade based on its current status.<br>This option is available for SmartTrades with only the status: <code>waiting_targets</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_start_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the option to force a market entry for the SmartTrade is available based on its current status.<br>This option is available for SmartTrades when <code>position[status][basic_type]</code> are <code>to_process</code>, <code>order_placed</code>, <code>trailing_activated</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_process_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be force processed<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>cancel_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be canceled. Available for SmartTrades where the parameter <code>basic_type</code> is one of the following: <code>waiting_position</code>, <code>waiting_targets</code>, <code>stop_loss_in_progress</code>, <code>reduce_funds_in_progress</code>, or <code>pending_reduce_funds</code><br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade has been completed or finished. <code>true</code> if SmartTrade finished<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_position_step_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Shows whether entry into the position has been completed. <code>true</code> means the entry process is finished<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total amount of funds used to enter the position for this SmartTrade, including all additional funds trades, specified in base<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of funds used to enter the position for this SmartTrade, specified in quote<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in base<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
&nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in quote<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The trading fee of exchange for transaction
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was created<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code> or <code>null</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was updated<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Type of SmartTrade<br>
</p>

<p>
<strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Detailed information about the profit received on this SmartTrade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in quote<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in USD<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in percent<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>roe</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts<br>
</p>
<p>
<strong>margin</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Detailed information about the margin for this SmartTrade<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total margin amount required for this SmartTrade (base)<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;The total margin value for this SmartTrade (quote)<br>
</p>
<p>
<strong>is_position_not_filled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates whether a position has been successfully entered for this SmartTrade<br>
</p>
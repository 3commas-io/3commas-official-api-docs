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
<br>

<h2>Attributes</h2>

<br><br>
<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
Unique 3Commas ID for this SmartTrade entity<br>
<details>
<summary><strong>account</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
Details about user account<br></summary>
<br>
<dd>
<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
Unique 3Commas ID for this exchange account entity<br><br>
<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Exchange types where this SmartTrade was created<br>
<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
Name of this exchange account<br>
<strong>market</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
[TBD]<br>
<strong>link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
The URL of the account where this SmartTrade was created<br>
</dd>
</details><br>
<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br>
Trading pair in 3Commas format<br>
<br>
<strong>instant</strong>&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
[TBD] <br>
<details>
<summary><strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
The common status and information about this status for this SmartTrade entity</summary>
<br>
<dd>
<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
3Commas status for this SmartTrade<br><br>
<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Brief description of this status<br><br>
<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Description of the error for this SmartTrade if it fails<br>
</dd>
</details><br>
<details>
<summary><strong>leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
TBD: add a discription</summary><br>
<p>
<dd><strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Information about this leverage for a futures account<br>
<code>false</code> if editing is not available<br>
<br>
<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
<br>
Shows the leverage type that was set when creating a SmartTrade on a futures account<br>
<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
<br> 
Shows the leverage value that was set when creating a SmartTrade on a futures account<br>
<strong>type_editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br> 
Indicates whether the user can modify <code>leverage[type]</code> settings when editing a SmartTrade<br>
<code>true</code> if editing is available<br><br>
</p>
</details><br>
<details>
  <summary><strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
  <p>Details of the Take Profit and its steps applied to this SmartTrade</p></summary>
  <dl>
    <dd><strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
    <dd>Indicates whether the take profit settings for this SmartTrade can be edited</dd>
    <dd><strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
    <dd>The price type for the take profit trade(s) that was set when creating the SmartTrade. Can be either <code>value</code> or <code>percentage</code></dd>
    <dd><strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code></dd>
    <dd>Detailed conditions for each step of the Take Profit</dd>
    <dd>
      <dl>
        <dd><strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dt>
        <dd>Unique 3Commas trade ID for this SmartTrade entity</dd>
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
</details>
<details>
  <summary><strong>stop_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
  <p>Details of the Stop Loss applied to this SmartTrade</p></summary>
  <dl>
    <dd><strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
    <dd>Indicates whether the stop loss settings for this SmartTrade can be edited</dd><br>
    <dd><strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
    <dd>The price type for the stop loss trade(s) that was set when creating the SmartTrade.<br>Can be either <code>value</code> or <code>percentage</code></dd><br>
    <dd><strong>breakeven</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
    <dd>Indicates whether the stop loss has been set at the breakeven point</dd><br>
    <dd><strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
    <dd>The type of order for this trade's stop loss</dd><br>
    <dd><strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
    <dd>Indicates whether the stop loss settings for this SmartTrade can be edited</dd><br>
    <dd><strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>Status of this the step of Stop Loss. Set automatically by 3Commas</dd><br>
    <dd>
      <dl>
        <dd><strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
        <dd>3Commas status for this stop loss trade</dd>
        <dd><strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
        <dd>Brief description of this status for this trade</dd>
        <dd><strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
        <dd>Error description for this stop loss trade if it fails</dd>
      </dl>
    </dd>
    <dd><strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>TBD</dd>
    <dd>
      <dl>
        <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The specific price value set for the stope loss order trigger</dd>
      </dl>
    </dd>
    <dd><strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>TBD</dd>
    <dd>
      <dl>
        <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The total value of the stop loss trade</dd>
      </dl>
    </dd>
    <dd><strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>TBD</dd>
    <dd>
      <dl>
        <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>TBD</dd>
      </dl>
    </dd>
    <dd><strong>conditional</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>TBD</dd>
    <dd>
      <dl>
        <dd><strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dt>
        <dd>Details of the price applied the Stop Loss</dd>
        <dd>
          <dl>
            <dd><strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
            <dd>The type of price for the stop loss order used to close the position</dd>
            <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The specific price value set to trigger the Stop Loss order</dd>
            <dd><strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The specific percentage of the price set to trigger this Stop Loss trade</dd>
          </dl>
        </dd>
        <dd><strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
        <dd>Details of the trailing applied for one step of Stop Loss</dd>
        <dd>
          <dl>
            <dd><strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dt>
            <dd>Indicates whether trailing is enabled for the conditional stop loss</dd>
            <dd><strong>percet</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dt>
            <dd>The trailing percentage for the conditional stop loss</dd>
          </dl>
        </dd>
      </dl>
    </dd>
    <dd><strong>timeout</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
    <dd>TBD</dd>
    <dd>
      <dl>
        <dd><strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the timeout setting for the stop loss is enabled</dd>
        <dd><strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code></dd>
        <dd>The value of the timeout setting for the stop loss trade</dd>
      </dl>
    </dd>
  </dl>
</details>
<details>
    <summary><strong>reduce_funds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code> </summary>
    <dl>
        <dd><strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code></dd>
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
            </dl>
        </dl>
    </dl>
</details>
 <details>
    <summary><strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
    <p>TBD </p></summary></summary>
    <dl>
        <dd><strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the user can modify the settings of this SmartTrade. <code>true</code> if editing is available</dd><br>
        <dd><strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></dd>
        <dd>
        <dl>
            <dd><strong>bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The current highest bid price of the asset</dd><br>
            <dd><strong>ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The current lowest ask price of the asset</dd><br>
            <dd><strong>last</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>The last traded price of the asset</dd><br>
            <dd><strong>quote_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>[?]</dd><br>
            <dd><strong>day_change_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
            <dd>Percentage price change for the asset over the last 24 hours</dd>
        </dl><br>
        </dd>
        <dd><strong>target_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd><br>
        <dd><strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd><br>
        <dd><strong>base_order_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd><br>
        <dd><strong>missing_funds_to_close</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd><br>
        <dd><strong>liquidation_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The liquidation price of the asset on the futures exchange</dd><br>
        <dd><strong>average_enter_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The average entering price of the asset with fees</dd><br>
        <dd><strong>average_close_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The average closing price of the asset with fees</dd><br>
        <dd><strong>average_enter_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The average entering price of the asset without accounting for any fees</dd><br>
        <dd><strong>average_close_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The average closing price of the asset without accounting for any fees</dd><br>
        <dd><strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the SmartTrade can be closed at market based on its current status.<br>This option is available for SmartTrades with the following statuses: <code>waiting_targets</code>, <code>stop_loss_in_progress</code>, <code>reduce_funds_in_progress</code>, and <code>pending_reduce_funds</code></dd><br>
        <dd><strong>add_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether adding funds is available for this SmartTrade based on its current status.<br>This option is not available for SmartTrades if: <code>status[basic_type]</code> is <code>waiting_position</code>; <code>data[type]</code> is <code>simple_sell</code> or <code>simple_buy</code>; <code>position[conditional][trailing][editable]</code> is <code>false</code></dd><br>
        <dd><strong>reduce_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether reducing funds is available for this SmartTrade based on its current status.<br>This option is available for SmartTrades with only the status: <code>waiting_targets</code></dd><br>
        <dd><strong>force_start_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the option to force a market entry for the SmartTrade is available based on its current status.<br>This option is available for SmartTrades when <code>position[status][basic_type]</code> are <code>to_process</code>, <code>order_placed</code>, <code>trailing_activated</code></dd><br>
        <dd><strong>force_process_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the SmartTrade can be force processed</dd><br>
        <dd><strong>cancel_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the SmartTrade can be canceled. Available for SmartTrades where the parameter <code>basic_type</code> is one of the following: <code>waiting_position</code>, <code>waiting_targets</code>, <code>stop_loss_in_progress</code>, <code>reduce_funds_in_progress</code>, or <code>pending_reduce_funds</code></dd><br>
        <dd><strong>finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd>
        <dd>Indicates whether the SmartTrade has been completed or finished. <code>true</code> if SmartTrade finished</dd><br>
        <dd><strong>base_position_step_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code></dd><br>
        <dd><strong>entered_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The total amount of funds used to enter the position for this SmartTrade, including all additional funds trades, specified in base</dd><br>
        <dd><strong>entered_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>Total amount of funds used to enter the position for this SmartTrade, specified in quote</dd><br>
        <dd><strong>closed_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>Total amount of SmartTrade closing volume in base</dd><br>
        <dd><strong>closed_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>Total amount of SmartTrade closing volume in quote</dd><br>
        <dd><strong>commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The trading fee of exchange for transaction</dd><br>
        <dd><strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code></dd>
        <dd>ISO 8601 datetime string of when this SmartTrade entity was created</dd><br>
        <dd><strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code> or <code>null</code></dd>
        <dd>ISO 8601 datetime string of when this SmartTrade entity was updated</dd><br>
        <dd><strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code></dd>
        <dd>Type of SmartTrade</dd><br>
    </dl>
</details>
<details>
    <summary><strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
    Detailed information about the profit received on this SmartTrade<br></summary><br>
    <dl>
        <dd><strong>volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The total profit volume generated by this SmartTrade in quote</dd><br>
        <dd><strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The total profit volume generated by this SmartTrade in USD</dd><br>
        <dd><strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code></dd>
        <dd>The total profit volume generated by this SmartTrade in percent</dd><br>
        <dd><strong>roe</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code></dd>
        <dd>The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts</dd><br>
    </dl>
</details><br>
<details>
    <summary><strong>margin</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code></summary>
    TBD: add a description<br><br>
    <dl>
        <dd><strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code></dd>
        <dd>The total margin amount required for this SmartTrade (base)</dd><br>
        <dd><strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code></dd>
        <dd>The total margin value for this SmartTrade (quote)</dd><br>
    </dl>
</details><br>
<strong>is_position_not_filled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates whether a position has been successfully entered for this SmartTrade<br>
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
<summary><strong>margin</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
TBD: add a description</summary><br>
<dd>
<strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
The total margin amount required for this SmartTrade (base)<br><br>
<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>  
The total margin value for this SmartTrade (quote)<br>
</dd>
</details><br>
<strong>is_position_not_filled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
TBD: add a discription <br>
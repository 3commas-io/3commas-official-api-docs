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

<p><strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this SmartTrade entity
</p>
<p><strong>account</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details about user account
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this exchange account entity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Exchange types where this SmartTrade was created
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
   &nbsp;&nbsp;&nbsp;&nbsp;Name of this exchange account
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>market</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The URL of the account where this SmartTrade was created
</p>
</p><strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br>
Trading pair in 3Commas format</p>
<p><strong>instant</strong>&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
   [TBD]
</p>
<p><strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   The common status and information about this status for this SmartTrade entity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Description of the error for this SmartTrade if it fails
</p>
<p>
<p><strong>leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the leverage for this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Information about this leverage for a futures account<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>false</code> if editing is not available
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage type that was set when creating a SmartTrade on a futures account
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage value that was set when creating a SmartTrade on a futures account
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type_editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the <code>leverage[type]</code> settings when editing SmartTrade.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means editing is allowed
</p>
</p>
<p>
<p><strong>position</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Position applied to this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The side of the order to be created by this trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of position when editing SmartTrade.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> if editing is available
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Details of Units
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for position trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the value of the unit parameter when editing SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Details of price
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br> 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the position order, including commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the position order, excluding commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the group of price settings parameters when editing SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total value of the position, including all relevant factors such as price and quantity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The type of order used to open the position (e.g., `market`, `limit`, `conditional`)
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>conditional</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of conditional of position when editing SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set for the conditional order trigger
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the conditional order used to open the position
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of conditional order used to open the position<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(e.g., <code>market</code>, <code>limit</code>, <code>conditional</code>)
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the trailing stop settings for the conditional order can be edited
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br> 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The trailing stop percentage for the conditional order, specifying the distance from the market price at which the trailing stop is triggered
</p>
</p>
<p>
<p><strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Take Profit and its steps applied to this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the take profit settings for this SmartTrade can be edited
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The price type for the take profit trade(s) that was set when creating the SmartTrade.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;Can be either <code>value</code> or <code>percentage</code>
</p>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;Detailed conditions for each step of the Take Profit<br>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this SmartTrade entity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's take profit
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the step of take profit settings for this SmartTrade can be edited
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>units[value]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for this trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the price applied for one step of Take Profit
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the take profit order used to open the position
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set to trigger the take profit order
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this take profit trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the trailing applied for one step of Take Profit
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the trailing settings for the take profit in this SmartTrade can be edited
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific trailing percentage applied to the price for this take profit trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status of this the step of Take Profit. Set automatically by 3Commas
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this take profit trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this take profit trade if it fails
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available actions for one step Take Profit
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the take profit trade can be canceled
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the one step of Take Profit can be closed at market based on its current status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>position</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates the position of this take profit step for this SmartTrade
</p>
</p>
<p>
<p><strong>stop_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Stop Loss applied to this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited
<p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The price type for the stop loss trade(s) that was set when creating the SmartTrade.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;Can be either <code>value</code> or <code>percentage</code>
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>breakeven</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss has been set at the breakeven point
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
</dd>
&nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's stop loss</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Status of this the step of Stop Loss. Set automatically by 3Commas
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this stop loss trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this stop loss trade if it fails
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set for the stope loss order trigger
<p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the stop loss trade</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
<p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>conditional</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the price applied the Stop Loss
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the stop loss order used to close the position
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set to trigger the Stop Loss order
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this Stop Loss trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>trailing</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the trailing applied for one step of Stop Loss
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether trailing is enabled for the conditional stop loss
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The trailing percentage for the conditional stop loss
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>timeout</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;TBD
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the timeout setting for the stop loss is enabled
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The value of the timeout setting for the stop loss trade
</p>
</p>
 <p>
<p><strong>reduce_funds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   Details of the Reduce Funds applied to this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this market close trade in the SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The order type for this reduce funds trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detailed information about the status and any errors for a single Reduce Funds step
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this Reduce funds trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this reduce funds trade if it fails
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for this reduce funds trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the reduce funds trade, including the commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the reduce funds trade, excluding commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the reduce funds trade, including all relevant factors such as price<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and quantity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available actions for a single Reduce Funds step
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the reduce funds trade can be canceled
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether a drawdown transaction can be closed at market
</p>
</p>
<p>
<p><strong>market_close</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Market Close applied to this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br> 
   &nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this market close trade in the SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong><code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's market close
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong><code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Detailed information about the status and any errors for this Market Clode
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>basic_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The status type of the market close trade for this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this market close trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this market close trade if it fails
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>units</strong><p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for position trade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong><p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the market close trade, including commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the market close trade, excluding commission
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the reduce funds trade can be closed at market
</p>
</p>
<p><strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Optional user-defined note for this SmartTrade
</p>
<p><strong>note_raw</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   [TBD]
</p>
<p><strong>skip_enter_step</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Shows whether the position opening step was skipped
</p>
<p><strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Optional user-defined note for this SmartTrade</p>
<p><strong>note_raw</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
[TBD]</p>
<p><strong>skip_enter_step</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Shows whether the position opening step was skipped</p>
<p>
<p><strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Available actions applicable to the entire SmartTrade entity
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of this SmartTrade.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> if editing is available
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>bid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current highest bid price of the asset
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>ask</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current lowest ask price of the asset
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>last</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last traded price of the asset
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>quote_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>day_change_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage price change for the asset over the last 24 hours
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>target_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_order_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>missing_funds_to_close</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>liquidation_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The liquidation price of the asset on the futures exchange
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_enter_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset with fees
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset with fees
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_enter_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset without accounting for any fees
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_close_price_without_commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset without accounting for any fees
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sell_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be closed at market based on its current status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>add_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether adding funds is available for this SmartTrade based on its current status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>reduce_funds_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether reducing funds is available for this SmartTrade based on its current status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_start_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the option to force a market entry for the SmartTrade is available based on its current status
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>force_process_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be force processed
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>cancel_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be canceled
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade has been completed or finished.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means SmartTrade finished
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>base_position_step_finished</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows whether entry into the position has been completed.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means the entry process is finished
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total amount of funds used to enter the position for this SmartTrade,<br>
   &nbsp;&nbsp;&nbsp;&nbsp;including all additional funds trades, specified in base
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>entered_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of funds used to enter the position for this SmartTrade, specified in quote
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in base
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>closed_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in quote
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>commission</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The trading fee of exchange for transaction
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was created
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was updated
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Type of SmartTrade
</p>
</p>
<p>
<p><strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Detailed information about the profit received on this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in quote
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in USD
<p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in percent
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>roe</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts
</p>
</p>
<p>
<p><strong>margin</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Detailed information about the margin for this SmartTrade
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total margin amount required for this SmartTrade (base)
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;The total margin value for this SmartTrade (quote)
</p>
</p>
<p><strong>is_position_not_filled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether a position has been successfully entered for this SmartTrade<br>
</p>
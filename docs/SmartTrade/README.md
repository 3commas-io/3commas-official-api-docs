# SmartTrade

  The SmartTrade allows users to open, manage, and close orders on the exchange with predefined conditions.

  3Commas provides a set of methods to create and manage SmartTrade entities and their associated trade entities.

  A SmartTrade entity holds information, including:

- Exchange account and trading pair
- Position data
- Conditions for Take Profit and Stop Loss
- Conditions for closing at market
- Conditions for reducing funds

The process starts with a SmartTrade entity, where all conditions are configured.
SmartTrade then manages trades, which are automatically created by 3Commas based on the conditions set within the SmartTrade entity.

SmartTrade can include the following trade types:

- Position trade
- Take profit trade
- Stop-loss trade
- Reduce funds trade
- Market close trade

## Attributes

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this SmartTrade entity

   account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details about user account

   &nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this exchange account entity

   &nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Exchange types where this SmartTrade was created

   &nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Name of this exchange account

   &nbsp;&nbsp;&nbsp;&nbsp;market&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The URL of the account where this SmartTrade was created

pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string
Trading pair in 3Commas format

   instant&nbsp;&nbsp;&nbsp;&nbsp;`boolean`
   [TBD]

   status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   The common status and information about this status for this SmartTrade entity

   &nbsp;&nbsp;&nbsp;&nbsp;basic_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status

   &nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Description of the error for this SmartTrade if it fails

   leverage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the leverage for this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Information about this leverage for a futures account
   &nbsp;&nbsp;&nbsp;&nbsp;<code>false</code> if editing is not available

   &nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage type that was set when creating a SmartTrade on a futures account

   &nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows the leverage value that was set when creating a SmartTrade on a futures account

   &nbsp;&nbsp;&nbsp;&nbsp;type_editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the <code>leverage[type]</code> settings when editing SmartTrade.
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means editing is allowed

   position&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Position applied to this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The side of the order to be created by this trade

   &nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of position when editing SmartTrade.
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> if editing is available

   &nbsp;&nbsp;&nbsp;&nbsp;units
   &nbsp;&nbsp;&nbsp;&nbsp;Details of Units

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for position trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the value of the unit parameter when editing SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Details of price

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the position order, including commission

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value_without_commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the position order, excluding commission

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the group of price settings parameters when editing SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total value of the position, including all relevant factors such as price and quantity

   &nbsp;&nbsp;&nbsp;&nbsp;order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The type of order used to open the position (e.g., `market`, `limit`, `conditional`)

   &nbsp;&nbsp;&nbsp;&nbsp;conditional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of conditional of position when editing SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set for the conditional order trigger

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the conditional order used to open the position

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of conditional order used to open the position
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(e.g., <code>market</code>, <code>limit</code>, <code>conditional</code>)

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trailing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the trailing stop settings for the conditional order can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The trailing stop percentage for the conditional order, specifying the distance from the market price at which the trailing stop is triggered

   take_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Take Profit and its steps applied to this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the take profit settings for this SmartTrade can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;price_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The price type for the take profit trade(s) that was set when creating the SmartTrade.
   &nbsp;&nbsp;&nbsp;&nbsp;Can be either <code>value</code> or <code>percentage</code>

&nbsp;&nbsp;&nbsp;&nbsp;steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
&nbsp;&nbsp;&nbsp;&nbsp;Detailed conditions for each step of the Take Profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this SmartTrade entity

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's take profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the step of take profit settings for this SmartTrade can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;units[value]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for this trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the price applied for one step of Take Profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the take profit order used to open the position

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set to trigger the take profit order

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this take profit trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trailing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the trailing applied for one step of Take Profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the trailing settings for the take profit in this SmartTrade can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific trailing percentage applied to the price for this take profit trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status of this the step of Take Profit. Set automatically by 3Commas

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basic_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this take profit trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this take profit trade if it fails

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available actions for one step Take Profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancelable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the take profit trade can be canceled

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;panic_sell_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the one step of Take Profit can be closed at market based on its current status

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates the position of this take profit step for this SmartTrade

   stop_loss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Stop Loss applied to this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;price_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The price type for the stop loss trade(s) that was set when creating the SmartTrade.
   &nbsp;&nbsp;&nbsp;&nbsp;Can be either <code>value</code> or <code>percentage</code>

   &nbsp;&nbsp;&nbsp;&nbsp;breakeven&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss has been set at the breakeven point

   &nbsp;&nbsp;&nbsp;&nbsp;order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's stop loss

   &nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the stop loss settings for this SmartTrade can be edited

   &nbsp;&nbsp;&nbsp;&nbsp;status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Status of this the step of Stop Loss. Set automatically by 3Commas

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basic_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this stop loss trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this stop loss trade if it fails

   &nbsp;&nbsp;&nbsp;&nbsp;units&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set for the stope loss order trigger

   &nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the stop loss trade

   &nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;conditional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the price applied the Stop Loss

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The type of price for the stop loss order used to close the position

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific price value set to trigger the Stop Loss order

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this Stop Loss trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trailing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the trailing applied for one step of Stop Loss

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether trailing is enabled for the conditional stop loss

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The trailing percentage for the conditional stop loss

   &nbsp;&nbsp;&nbsp;&nbsp;timeout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;TBD

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the timeout setting for the stop loss is enabled

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The value of the timeout setting for the stop loss trade

   reduce_funds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   Details of the Reduce Funds applied to this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this market close trade in the SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The order type for this reduce funds trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detailed information about the status and any errors for a single Reduce Funds step

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basic_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this Reduce funds trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status for this trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this reduce funds trade if it fails

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;units&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for this reduce funds trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the reduce funds trade, including the commission

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value_without_commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the reduce funds trade, excluding commission

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the reduce funds trade, including all relevant factors such as price
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and quantity

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available actions for a single Reduce Funds step

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancelable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the reduce funds trade can be canceled

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;panic_sell_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether a drawdown transaction can be closed at market

   market_close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Market Close applied to this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas trade ID for this market close trade in the SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;type<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The type of order for this trade's market close

   &nbsp;&nbsp;&nbsp;&nbsp;status<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Detailed information about the status and any errors for this Market Clode

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basic_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The status type of the market close trade for this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this market close trade

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error description for this market close trade if it fails

&nbsp;&nbsp;&nbsp;&nbsp;units

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount of units for position trade

&nbsp;&nbsp;&nbsp;&nbsp;price

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the market close trade, including commission

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value_without_commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price of the market close trade, excluding commission

   &nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the reduce funds trade can be closed at market

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Optional user-defined note for this SmartTrade

   note_raw&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   [TBD]

   skip_enter_step&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Shows whether the position opening step was skipped

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Optional user-defined note for this SmartTrade

   note_raw&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   [TBD]

   skip_enter_step&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Shows whether the position opening step was skipped

   data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Available actions applicable to the entire SmartTrade entity

   &nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of this SmartTrade.
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> if editing is available

   &nbsp;&nbsp;&nbsp;&nbsp;current_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current highest bid price of the asset

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ask&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current lowest ask price of the asset

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last traded price of the asset

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quote_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;day_change_percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage price change for the asset over the last 24 hours

   &nbsp;&nbsp;&nbsp;&nbsp;target_price_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;orderbook_price_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;base_order_finished&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;missing_funds_to_close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;[TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;liquidation_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The liquidation price of the asset on the futures exchange

   &nbsp;&nbsp;&nbsp;&nbsp;average_enter_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset with fees

   &nbsp;&nbsp;&nbsp;&nbsp;average_close_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset with fees

   &nbsp;&nbsp;&nbsp;&nbsp;average_enter_price_without_commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The average entering price of the asset without accounting for any fees

   &nbsp;&nbsp;&nbsp;&nbsp;average_close_price_without_commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The average closing price of the asset without accounting for any fees

   &nbsp;&nbsp;&nbsp;&nbsp;panic_sell_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be closed at market based on its current status

   &nbsp;&nbsp;&nbsp;&nbsp;add_funds_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether adding funds is available for this SmartTrade based on its current status

   &nbsp;&nbsp;&nbsp;&nbsp;reduce_funds_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether reducing funds is available for this SmartTrade based on its current status

   &nbsp;&nbsp;&nbsp;&nbsp;force_start_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the option to force a market entry for the SmartTrade is available based on its current status

   &nbsp;&nbsp;&nbsp;&nbsp;force_process_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be force processed

   &nbsp;&nbsp;&nbsp;&nbsp;cancel_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade can be canceled

   &nbsp;&nbsp;&nbsp;&nbsp;finished&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the SmartTrade has been completed or finished.
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means SmartTrade finished

   &nbsp;&nbsp;&nbsp;&nbsp;base_position_step_finished&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Shows whether entry into the position has been completed.
   &nbsp;&nbsp;&nbsp;&nbsp;<code>true</code> means the entry process is finished

   &nbsp;&nbsp;&nbsp;&nbsp;entered_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total amount of funds used to enter the position for this SmartTrade,
   &nbsp;&nbsp;&nbsp;&nbsp;including all additional funds trades, specified in base

   &nbsp;&nbsp;&nbsp;&nbsp;entered_total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of funds used to enter the position for this SmartTrade, specified in quote

   &nbsp;&nbsp;&nbsp;&nbsp;closed_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in base

   &nbsp;&nbsp;&nbsp;&nbsp;closed_total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Total amount of SmartTrade closing volume in quote

   &nbsp;&nbsp;&nbsp;&nbsp;commission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The trading fee of exchange for transaction

   &nbsp;&nbsp;&nbsp;&nbsp;created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code>
   &nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was created

   &nbsp;&nbsp;&nbsp;&nbsp;updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string &lt;date-time&gt;</code> or <code>null</code>
   &nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this SmartTrade entity was updated

   &nbsp;&nbsp;&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Type of SmartTrade

   profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Detailed information about the profit received on this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in quote

   &nbsp;&nbsp;&nbsp;&nbsp;usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in USD

   &nbsp;&nbsp;&nbsp;&nbsp;percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total profit volume generated by this SmartTrade in percent

   &nbsp;&nbsp;&nbsp;&nbsp;roe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts

   margin&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Detailed information about the margin for this SmartTrade

   &nbsp;&nbsp;&nbsp;&nbsp;amount&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total margin amount required for this SmartTrade (base)

   &nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code> or <code>null</code>
   &nbsp;&nbsp;&nbsp;&nbsp;The total margin value for this SmartTrade (quote)

   is_position_not_filled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether a position has been successfully entered for this SmartTrade

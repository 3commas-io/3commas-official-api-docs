<h1>Deals</h1>

<p>
 The <strong>Deal</strong> is a sub-entity of the DCA Bot. It represents a single automated transaction executed based on the bot's configured strategy.
</p>
<p>
 The <strong>Deal</strong> entity holds the following information about:
</p>
<ul>
   <li>Order type;</li>
   <li>Trading pair(s);</li>
   <li>Status of the deal;</li>
   <li>Initial and realized trade amounts;</li>
   <li>Initial and realized total values of the trade;</li>
   <li>Price details, including entry, average, and final prices;</li>
   <li>Position percentage reached during the trade;</li>
   <li>Conditions related to trailing mechanisms and triggers (e.g., trailing stop enabled, trigger price).</li>
</ul>
<p> 
    Deals are created automatically by the DCA Bot based on predefined conditions and the selected trading strategy. 
</p>
<p> 
    A <strong>Deal</strong> can include various trading stages or types, depending on the configuration, such as:
</p>
<ul>
   <li>Initial trade opening;</li>
   <li>Trailing take profit execution;</li>
   <li>Stop-loss activation;</li>
   <li>Safety orders placement;</li>
   <li>Final trade closure.</li>
</ul>
<p> 
Here, you can find methods and attributes to monitor, update, or analyze the details of deal. 
</p><br>

## Attributes<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this Deal entity
</p>
<p>
    <strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The type of entity
</p>
<p>
    <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<p>
    <strong>bot_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    DCA Bot name specified by the user
</p>
<p>
    <strong>deal_has_error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this Deal has encountered any errors (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p>
<p>
    <strong>account_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The name for the exchange account set by the user
</p>
<p>
    <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string of when this Deal entity was created
</p>
<p>
    <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this Deal entity was update last time
</p>
<p>
    <strong>closed_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this Deal entity was closed
</p>
<p>
    <strong>finished?</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this Deal is finished (<code>true</code>) or not (<code>false</code>)</p>
</p>
<p>
    <strong>max_safety_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    Maximum number of Safety Orders allowed for this Deal
</p>
<p>
    <strong>active_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The number of Safety Trades Deal is allowed to place in advance on the exchange's order book
</p>
<p>
    <strong>current_active_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    [TBD]
</p>
<p>
    <strong>current_active_safety_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    Number of active Safety Orders at the current time
</p>
<p>
    <strong>completed_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    Number of Safety Orders that have been completed
</p>
<p>
    <strong>active_manual_safety_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    Number of active manual Safety Orders at the current time
</p>
<p>
    <strong>completed_manual_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    Number of manually executed Safety Orders that have been completed 
</p>
<p>
    <strong>safety_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The volume of the Safety Order for this Deal
</p>
<p>
    <strong>safety_order_step_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Price deviation in percentage to open Safety Orders
</p>
<p>
    <strong>safety_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The volume type for the Safety Order for this Deal
</p>
<p>
    <strong>safety_strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code><br>
   Array of strategies specifically for the execution of your safety orders
</p>
<p>
    <strong>cancellable?</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this Deal can be canceled (true) or not (false)
</p>
<p>
    <strong>panic_sellable?</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this Deal can be closed at market price (true) or not (false)
</p>
<p>
    <strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code> or <code>null</code><br>
   Indicates whether trailing is enabled for Take Profit of this bot (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>tsl_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether trailing is enabled for Stop Loss (true) or not (false) for this Deal
</p>
<p>
    <strong>stop_loss_timeout_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates if the Stop Loss timeout is active (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>stop_loss_timeout_in_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Duration of the Stop Loss timeout in seconds for this Deal
</p>
<p>
    <strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code><br>
   Trading pair(s) in 3Commas format
</p>
<p>
    <strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    3Commas status for this Deal
    <details>
    <summary><em>Allowed values</em></summary>
       <strong>Bought</strong> - Asset bought;<br>
       <strong>Cancelled</strong> - Deal canceled;<br>
       <strong>Completed</strong> - Deal closed successfully;<br>
       <strong>Base_order_placed</strong> - Base order placed;<br>
       <strong>Stop_loss_finished</strong> - Closed by stop-loss;<br>
       <strong>Ttp_order_placed</strong> - Trailing Take Profit order placed;<br>
       <strong>Panic_sold</strong> - Deal closed manually at market;<br>
       <strong>Failed</strong> - Deal failed due to an error;<br>
       <strong>Liquidated</strong> - Position liquidated;<br>
       <strong>Settled</strong> - Contract expired on the exchange;<br>
       <strong>Close_strategy_activated</strong> - Close strategy executed<br>
   </details>
</p>
<p>
    <strong>localized_status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status
       <details><summary><em>Allowed value</em></summary>
      <dl>
       <li>Active - ;
       <li>Cancelled - Deal canceled;
       <li>Completed - Deal closed successfully;
       <li>Closed at Market Price - Deal closed manually at market;
       <li>Base order placed - ;
    </dl>
   </details>
</p>
<p>
    <strong>take_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of take profit calculation (e.g. <code>base</code>, <code>total</code>)
</p>
<p>
    <strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value for the deal’s Take Profit
</p>
<p>
    <strong>take_profit_steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Take Profit and its steps applied to this Deal
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this Take Profit trade
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of trade when editing Deal (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>panic_sellable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>trade_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas Trade entity ID
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>execution_timestamp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The timestamp of when the deal was executed, in ISO 8601 format, or <code>null</code> if not yet executed
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>initial_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]
</p>
<p>
    <strong>take_profit_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    [TBD]
</p>
<p>
    <strong>base_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The volume of the base order for this Deal Bot
</p>
<p>
    <strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of leverage applied for this Deal<br>
   <details><summary><em>Allowed value</em></summary>
      <dl>
       <li><strong>cross</strong> - uses all available funds in your account as collateral for your trades;</li>
       <li><strong>isolated</strong> - the margin is limited to a specific position;</li>
       <li><strong>not_specified</strong> - no leverage type specified for deal;</li>
      </dl>
   </details>
</p>
<p>
    <strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The leverage value set by the user
</p>
</p>
<p>
    <strong>bought_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The amount of the purchased asset
</p>
<p>
    <strong>bought_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The volume of purchased assets in the base currency
</p>
<p>
    <strong>bought_average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The average price of the purchased asset
</p>
<p>
    <strong>base_order_average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The average price of the base order
</p>
<p>
    <strong>sold_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The amount of the sold asset
</p>
<p>
    <strong>sold_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The volume of sold assets in the base currency
</p>
<p>
    <strong>sold_average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The average price at which the asset was sold
</p>
<p>
    <strong>final_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The final profit from the deal
</p>
<p>
    <strong>martingale_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    [TBD]
</p>
<p>
    <strong>martingale_volume_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Coefficient for increasing <em>safety order volume</em> in Martingale strategy
</p>
<p>
    <strong>martingale_step_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Coefficient for increasing safety order price in Martingale strategy
</p>
<p>
    <strong>stop_loss_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Stop loss percentage for this Deal
</p>
<p>
    <strong>sl_to_breakeven_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether enables the Move to Breakeven feature for this Deal (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>sl_to_breakeven_data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>json</code><br>
    The upper limit to which the stop loss will move
    Example: <code>{upper_breakeven_limit: 1}</code>
</p>
<p>
    <strong>error_message</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    Description of the error for this Deal if it fails
</p>
<p>
    <strong>profit_currency</strong>>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Currency used for the profit from the trades executed by this bot
</p>
<p>
    <strong>stop_loss_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
    Specifies the type of action the Deal performs when Stop Loss is triggered after closing a deal
</p>
<p>
    <strong>base_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Volume type for base orders (e.g., <code>quote_currency</code>, <code>base_currency</code>, <code>percent</code>)
</p>
<p>
    <strong>from_currency</strong>: "USDT", <br>
[TBD]
</p>
<p>
    <strong>to_currency</strong>: "ETH",<br>
    [TBD]
</p>
<p>
    <strong>final_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
    The final profit percentage from the deal
</p>
<p>
    <strong>usd_final_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
    The final profit expressed in USD
</p>
<p>
    <strong>actual_profit</strong>: "-7.69294593",
    [TBD]
</p>
<p>
    <strong>actual_usd_profit</strong>: "-7.69294593",
    [TBD]
</p>
<p>
    <strong>failed_message</strong>: null,
    [TBD]
</p>
<p>
    <strong>trailing_deviation</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value of the trailing price, in percent
</p>
<p>
    <strong>trailing_max_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    [TBD]
</p>
<p>
    <strong>tsl_max_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    [TBD]
</p>
<p>
    <strong>strategy</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Type of strategy used by the bot: <code>long</code> or <code>short</code>
</p>
<p>
    <strong>last_known_position_info</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
</p>
<p>
    <strong>min_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  The minimum profit percentage needed to reach for completing a deal, applicable to the close strategy of Take Profit
</p>
<p>
    <strong>min_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    The type of minimum profit used as the basis for profit calculation in this Deal, applicable to the close strategy of Take Profit
</p>
<p>
  <strong>close_strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code><br>
  An array of strategies used for closing deal
</p>
<p>
    <strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Optional user-defined note for this Deal
</p>
<p>
    <strong>add_fundable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether adding funds is available for this Deal (<code>true</code>) or (<code>not</code>)
</p>
<p>
    <strong>smart_trade_convertable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
     Indicates if this deal was converted to SmartTrade (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>market_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The strategy type used by the bot: <code>spot</code>, <code>long</code>, <code>short</code>.  
</p>
<p>
    <strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Shows the current market price for the traded asset
</p>
<p>
    <strong>stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    Indicates the price at which the stop-loss is triggered
</p>
<p>
    <strong>actual_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    [TBD]
</p>
<p>
    <strong>reserved_quote_funds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The amount of quote currency reserved for this deal
</p>
<p>
    <strong>reserved_base_funds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The symbol of the base coin reserved for this deal
</p>
<p>
    <strong>reserved_base_coin</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The symbol of the second coin reserved for this deal
</p>
<p>
    <strong>reserved_second_coin</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The symbol of the second coin reserved for this deal
</p>
<p>
    <strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Specifies the currency used for price quotes in the order book
</p>
<p>
    <strong>crypto_widget</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
    Displays widget-related information for the cryptocurrency
</p>
<p>
<strong>buy_steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
Contains data about the steps executed during the buy process
<p>
<strong>bot_events</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
Logs events related to the bot's operation
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>message</strong>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contains details about a specific bot event
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>created_at</strong>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this event occurred
</p>
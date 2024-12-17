---
sidebar_position: 1
---

# Deals

 The Deal is a sub-entity of the DCA Bot. It represents a single automated transaction executed based on the bot's configured strategy.

 The Deal entity holds the following information about:

- Order type;
- Trading pair(s);
- Status of the deal;
- Initial and realized trade amounts;
- Initial and realized total values of the trade;
- Price details, including entry, average, and final prices;
- Position percentage reached during the trade;
- Conditions related to trailing mechanisms and triggers (e.g., trailing stop enabled, trigger price).

    Deals are created automatically by the DCA Bot based on predefined conditions and the selected trading strategy.

    A Deal can include various trading stages or types, depending on the configuration, such as:

- Initial trade opening;
- Trailing take profit execution;
- Stop-loss activation;
- Safety orders placement;
- Final trade closure.

Here, you can find methods and attributes to monitor, update, or analyze the details of deal.

## Attributes

    from_currency_id: 0,
    [TBD]


    to_currency_id: 0,
    [TBD]


    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this Deal entity

    type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The type of entity

    bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this DCA Bot entity

    bot_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    DCA Bot name specified by the user


    deal_has_error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this Deal has encountered any errors (<code>true</code>) or not (<code>false</code>)


    account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this exchange account entity

    account_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The name for the exchange account set by the user

    created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string of when this Deal entity was created

    updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    ISO 8601 datetime string of when this Deal entity was update last time


    closed_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    ISO 8601 datetime string of when this Deal entity was closed


    finished?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this Deal is finished (<code>true</code>) or not (<code>false</code>)


    max_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    Maximum number of Safety Orders allowed for this Deal


    active_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The number of Safety Trades Deal is allowed to place in advance on the exchange's order book

    current_active_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    [TBD]


    current_active_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    Number of active Safety Orders at the current time


    completed_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    Number of Safety Orders that have been completed


    active_manual_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    Number of active manual Safety Orders at the current time


    completed_manual_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    Number of manually executed Safety Orders that have been completed


    safety_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The volume of the Safety Order for this Deal

    safety_order_step_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Price deviation in percentage to open Safety Orders

    safety_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The volume type for the Safety Order for this Deal

    safety_strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
   Array of strategies specifically for the execution of your safety orders

    cancellable?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this Deal can be canceled (true) or not (false)


    panic_sellable?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this Deal can be closed at market price (true) or not (false)


    trailing_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code> or <code>null</code>
   Indicates whether trailing is enabled for Take Profit of this bot (<code>true</code>) or not (<code>false</code>)

    tsl_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether trailing is enabled for Stop Loss (true) or not (false) for this Deal


    stop_loss_timeout_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates if the Stop Loss timeout is active (<code>true</code>) or not (<code>false</code>)


    stop_loss_timeout_in_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Duration of the Stop Loss timeout in seconds for this Deal

    pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code>
   Trading pair(s) in 3Commas format

    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    3Commas status for this Deal
    <details>
    <summary>Allowed values</summary>
       Bought - Asset bought;
       Cancelled - Deal canceled;
       Completed - Deal closed successfully;
       Base_order_placed - Base order placed;
       Stop_loss_finished - Closed by stop-loss;
       Ttp_order_placed - Trailing Take Profit order placed;
       Panic_sold - Deal closed manually at market;
       Failed - Deal failed due to an error;
       Liquidated - Position liquidated;
       Settled - Contract expired on the exchange;
       Close_strategy_activated - Close strategy executed
   </details>

    localized_status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;Brief description of this status
    <details>
        <summary>Allowed value</summary>
        - Active - ;
        - Cancelled - Deal canceled;
        - Completed - Deal closed successfully;
        - Closed at Market Price - Deal closed manually at market;
        - Base order placed - ;
   </details>

    take_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of take profit calculation (e.g. <code>base</code>, <code>total</code>)

    take_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value for the deal’s Take Profit

    take_profit_steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Take Profit and its steps applied to this Deal

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific percentage of the price set to trigger this Take Profit trade

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the user can modify the settings of trade when editing Deal (<code>true</code>) or not (<code>false</code>)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;panic_sellable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trade_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas Trade entity ID

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution_timestamp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The timestamp of when the deal was executed, in ISO 8601 format, or <code>null</code> if not yet executed

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initial_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

    take_profit_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    base_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The volume of the base order for this Deal Bot

    leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of leverage applied for this Deal
   <details>
   <summary>Allowed value</summary>
       - cross - uses all available funds in your account as collateral for your trades;
       - isolated - the margin is limited to a specific position;
       - not_specified - no leverage type specified for deal;
   </details>

    leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
   The leverage value set by the user

    bought_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The amount of the purchased asset


    bought_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The volume of purchased assets in the base currency


    bought_average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The average price of the purchased asset


    base_order_average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The average price of the base order


    sold_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The amount of the sold asset


    sold_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The volume of sold assets in the base currency


    sold_average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The average price at which the asset was sold


    final_profit: "-3.35618503",
    The final profit from the deal


    martingale_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    [TBD]


    martingale_volume_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Coefficient for increasing safety order volume in Martingale strategy

    martingale_step_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Coefficient for increasing safety order price in Martingale strategy

    stop_loss_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Stop loss percentage for this Deal

    sl_to_breakeven_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether enables the Move to Breakeven feature for this Deal (<code>true</code>) or not (<code>false</code>)


    sl_to_breakeven_data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>json</code>
    The upper limit to which the stop loss will move
    Example: <code></code>


    error_message: null,
    Description of the error for this Deal if it fails


    profit_currency>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Currency used for the profit from the trades executed by this bot

    stop_loss_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Specifies the type of action the Deal performs when Stop Loss is triggered after closing a deal


    base_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Volume type for base orders (e.g., <code>quote_currency</code>, <code>base_currency</code>, <code>percent</code>)

    from_currency: "USDT",
[TBD]

    to_currency: "ETH",
    [TBD]


    final_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The final profit percentage from the deal


    usd_final_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The final profit expressed in USD


    actual_profit: "-7.69294593",
    [TBD]


    actual_usd_profit: "-7.69294593",
    [TBD]


    failed_message: null,
    [TBD]


    trailing_deviation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value of the trailing price, in percent

    trailing_max_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
    [TBD]


    tsl_max_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
    [TBD]


    strategy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Type of strategy used by the bot: <code>long</code> or <code>short</code>


    last_known_position_info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>


    min_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  The minimum profit percentage needed to reach for completing a deal, applicable to the close strategy of Take Profit

    min_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
    The type of minimum profit used as the basis for profit calculation in this Deal, applicable to the close strategy of Take Profit

  close_strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
  An array of strategies used for closing deal

    note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Optional user-defined note for this Deal

    add_fundable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether adding funds is available for this Deal (<code>true</code>) or (<code>not</code>)


    smart_trade_convertable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
     Indicates if this deal was converted to SmartTrade (<code>true</code>) or not (<code>false</code>)


    market_type: "spot",
    [TBD] Type of strategy used by the bot (e.g., long, short)


    current_price: "2428.0",
    [TBD]



    stop_loss_price: null,
    [TBD]


    actual_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    reserved_quote_funds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    reserved_base_funds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    reserved_base_coin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    reserved_second_coin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    [TBD]


    orderbook_price_currency: "USDT",
    [TBD]


    crypto_widget&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>


    buy_steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
    bot_events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;created_at
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TBD]

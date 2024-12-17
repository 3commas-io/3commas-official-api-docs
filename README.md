# DCA Bot

   The DCA Bot allows users to automate trading on the exchange by following a Dollar Cost Averaging strategy.

   DCA Bot entity contains a set of parameters and conditions that manage deals.

   3Commas provides methods to create and manage DCA Bot entities and their associated deals.

   Each DCA Bot entity holds information, including:

- Exchange account and trading pairs.
- Strategy configuration and active deals.
- Take Profit and Stop Loss settings.
- Safety Orders configuration for risk management.
- Trading cooldowns and limits.


   The process starts with configuring a DCA Bot, where all trading conditions, such as base and safety orders, take profit, and stop loss, are set. The bot automatically creates and manages deals based on the configured strategy.

## Attributes

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this DCA Bot entity

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this exchange account entity

   is_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether DCA Bot is currently enabled (<code>true</code>) or not (<code>false</code>)

   pairs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code>
   Trading pair(s) in 3Commas format

   strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
   An array of strategies used for opening deals in this DCA Bot

   close_strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
   An array of strategies used for closing deals in this DCA Bot

   safety_strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
   Array of strategies specifically for the execution of your safety orders in this DCA Bot

   max_active_deals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The maximum number of active deals available for this DCA Bot. Default: <code>1</code>

   active_deals_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code>
   The current number of active deals managed by this bot

   deletable?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether this DCA Bot can be deleted (<code>true</code>) or not (<code>false</code>)

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string of when this DCA Bot entity was created

   updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string of when this DCA Bot entity was update last time

   trailing_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether trailing is enabled for Take Profit of this bot (<code>true</code>) or not (<code>false</code>)

   trailing_deviation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value of the trailing price, in percent

   tsl_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
  Indicates whether trailing is enabled for Stop Loss (true) or not (false) for this DCA Bot

   deal_start_delay_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code>
   Delay in seconds before a next deal starts

   stop_loss_timeout_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the Stop Loss timeout is active (<code>true</code>) or not (<code>false</code>)

   stop_loss_timeout_in_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Duration of the Stop Loss timeout in seconds

   disable_after_deals_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The number of deals after that the bot will be switched to disabled (is_enabled: <code> false</code>)

   deals_counter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Tracks the number of deals executed by the bot  (считает именно для disable_after_deals_count -  поправить описание!)

   allowed_deals_on_same_pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code>
   Number of active deals allowed with the same trading pair simultaneously.It worls only for bot where <code>type</code> is <code>Bot::MultiBot</code>

   close_deals_timeout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code>
   The time in seconds after which the deals will close automatically

   url_secret &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Unique code this DCA Bot using for copying this bot

   take_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of take profit calculation (e.g. <code>base</code>, <code>total</code>)

   take_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value for the bot’s Take Profit

   take_profit_steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the Take Profit and its steps applied to this DCA Bot

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step number of Take Profit

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The percentage of the base order volume to be allocated for this Take Profit step

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific profit percentage applied to the volume of units for this Take Profit step

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Name assigned to the bot

   base_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Volume type for base orders (e.g., <code>quote_currency</code>, <code>base_currency</code>, <code>percent</code>)

   base_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The volume of the base order for this DCA Bot

   safety_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The volume type for the Safety Order in this DCA Bot

   safety_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The volume of the Safety Order for this DCA Bot

   safety_order_step_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Price deviation in percentage to open Safety Orders

   max_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Maximum number of Safety Orders allowed for per deal

   active_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The number of active Safety Orders the DCA Bot is allowed to place at one time

   min_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   The type of minimum profit used as the basis for profit calculation in this DCA Bot, applicable to the close strategy of Take Profit

   min_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   The minimum profit percentage which need to reach for this DCA Bot to complete a deal, applicable to the close strategy of Take Profit

   type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The type of DCA Bot, based on the number of pairs.If a single pair is passed, a <code>Bot::SingleBot</code> is created;If two or more pairs are passed, a <code>Bot::MultiBot</code> is created

   martingale_volume_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Coefficient for increasing safety order volume in Martingale strategy

   martingale_step_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Coefficient for increasing safety order price (<code>safety_order_step_percentage</code>) in Martingale strategy

stop_loss_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Specifies the type of action the bot performs when Stop Loss is triggered after closing a deal
<details>
   <summary>Allowed values</summary>
   <dl>
      - <code>stop_loss</code> - closes the deal without disabling the bot;
      - <code>stop_loss_and_disable_bot</code> - closes the deal and disables the bot.
   </dl>
</details>

   stop_loss_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Stop loss percentage for this bot

   stop_loss_timeout_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the Stop Loss timeout is active

   stop_loss_timeout_in_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Duration of the Stop Loss timeout in seconds

   cooldown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The waiting time between closing a deal and accepting a signal to create a new deal for the same asset pair (sec.)

   strategy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of strategy used by the bot (e.g., <code>long</code>, <code>short</code>)

   min_volume_btc_24h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The minimum trading volume in BTC over the last 24 hours required to open a deal

   profit_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Currency used for the profit from the trades executed by this bot

   min_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   Minimum price at which the new deal will open for thi DCA Bot

   max_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   Maximum price at which the new deal will open for thi DCA Bot

   account_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The name for the exchange account set by the user

   trailing_deviation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value of the trailing price, in percent

finished_deals_profit_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   [TBD]

   finished_deals_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Total number of deals finished by DCA Bot

   leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of leverage applied for this DCA Bot
   <details>
   <summary>Allowed value</summary>
      <dl>
       - cross - uses all available funds in your account as collateral for your trades;
       - isolated - the margin is limited to a specific position;
       - not_specified - no leverage type specified for this DCA Bot;
      </dl>
   </details>

   leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The leverage value set by the user

   start_order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of order to start deals with (e.g., <code>limit</code>, <code>market</code>).

   active_deals_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Total USD profit from active deals

   risk_reduction_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage of losses reduction applied for this DCA Bot

   reinvesting_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The percentage of realized profit to be reinvested into each new deal

   reinvested_volume_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>number</code>
   USD volume reinvested from profit

   min_price_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   Minimum price percentage for bot activation (only for Multy bot)

   max_price_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
   Max price percent (only for Multy bot)

   active_deals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>

   List of active [deals](/docs/DCA%20Bot/Deals/README.md) managed by this DCA Bot

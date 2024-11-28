<h1>DCA Bot</h1>

<p>
   The <strong>DCA Bot</strong> allows users to automate trading on the exchange by following a Dollar Cost Averaging strategy.
</p>
<p>
   DCA Bot entity contains a set of parameters and conditions that manage deals.
</p>
<p>
   3Commas provides methods to create and manage DCA Bot entities and their associated deals.
</p>
<p> 
   Each <strong>DCA Bot</strong> entity holds information, including: 
</p>
<ul>
   <li>Exchange account and trading pairs;</li>
   <li>Strategy configuration and active deals;</li>
   <li>Take Profit and Stop Loss settings;</li>
   <li>Safety Orders configuration for risk management;</li>
   <li>Trading cooldowns and limits.</li>
</ul><br>
<p>
   The process starts with configuring a <strong>DCA Bot</strong>, where all trading conditions, such as base and safety orders, take profit, and stop loss, are set. The bot automatically creates and manages deals based on the configured strategy.
</p>

## Attributes<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p>
<p>
   <strong>is_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether DCA Bot is currently enabled (<code>true</code>) or not (<code>false</code>)
   </p>
<p>
   <strong>pairs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code><br>
   Trading pair(s) in 3Commas format
</p>
<p>
   <strong>strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code><br>
   An array of strategies used for opening deals in this DCA Bot
</p>
<p>
   <strong>close_strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code><br>
   An array of strategies used for closing deals in this DCA Bot
</p>
<p>
   <strong>safety_strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code><br>
   Array of strategies specifically for the execution of your safety orders in this DCA Bot
</p>
<p>
   <strong>max_active_deals</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The maximum number of active deals available for this DCA Bot. Default: <code>1</code>
</p>
<p>
   <strong>active_deals_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>strign</code><br>
   The current number of active deals managed by this bot
</p>
<p>
   <strong>deletable?</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether this DCA Bot can be deleted
</p>
<p>
   <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string of when this DCA Bot entity was created
</p>
<p>
   <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string of when this DCA Bot entity was update last time
</p>
<p>
   <strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether trailing is enabled for Take Profit of this bot
</p>
<p><strong>trailing_deviation</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value of the trailing price, in percent
</p>
<p>
   <strong>tsl_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether trailing is enabled for Stop Loss
</p>
<p>
   <strong>deal_start_delay_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code><br>
   Delay in seconds before a next deal starts
</p>
<p><strong>stop_loss_timeout_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the Stop Loss timeout is active
</p>
<p><strong>stop_loss_timeout_in_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Duration of the Stop Loss timeout in seconds
</p>
<p><strong>disable_after_deals_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The number of deals after that the bot will be switched to disabled (is_enabled: <code> false</code>)
</p>
<p><strong>deals_counter</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Tracks the number of deals executed by the bot  (считает именно для disable_after_deals_count -  поправить описание!)
</p>
<p><strong>allowed_deals_on_same_pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code><br>
   Number of active deals allowed with the same trading pair simultaneously.<br>It worls only for bot where <code>type</code> is <code>Bot::MultiBot</code>
</p>
<p><strong>close_deals_timeout</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code> or <code>null</code><br>
   The time in seconds after which the deals will close automatically
</p>
<p><strong>url_secret</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique code this DCA Bot using for copying this bot
</p>
<p><strong>take_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of take profit calculation (e.g. <code>base</code>, <code>total</code>)
</p>
<p><strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value for the bot’s Take Profit
</p>
<p><strong>take_profit_steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details of the Take Profit and its steps applied to this DCA Bot
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step number of Take Profit
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>amount_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The percentage of the base order volume to be allocated for this Take Profit step
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific profit percentage applied to the volume of units for this Take Profit step
</p>
<p><strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Name assigned to the bot
</p>
<p><strong>base_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Volume type for base orders (e.g., <code>quote_currency</code>, <code>base_currency</code>, <code>percent</code>)
</p>
<p><strong>base_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The volume of the base order for this DCA Bot
</p>
<p><strong>safety_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The volume type for the Safety Order in this DCA Bot
</p>
<p><strong>safety_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The volume of the Safety Order for this DCA Bot
</p>
<p><strong>safety_order_step_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Price deviation in percentage to open Safety Trades
</p>
<p>
   <strong>max_safety_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Maximum number of Safety Orders allowed for per deal
</p>
<p><strong>active_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
      The number of active Safety Orders the DCA Bot is allowed to place at one time
</p>
<p><strong>min_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   The type of minimum profit used as the basis for profit calculation in this DCA Bot, applicable to the close strategy of Take Profit
</p>
<p><strong>min_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   The minimum profit percentage which need to reach for this DCA Bot to complete a deal, applicable to the close strategy of Take Profit
</p>
<p><strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of DCA Bot, based on the number of pairs.<br>If a single pair is passed, a <code>Bot::SingleBot</code> is created;<br>If two or more pairs are passed, a <code>Bot::MultiBot</code> is created
</p>
<p><strong>martingale_volume_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Coefficient for increasing <em>safety order volume</em> in Martingale strategy
</p>
<p><strong>martingale_step_coefficient</strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Coefficient for increasing safety order price (<code>safety_order_step_percentage</code>) in Martingale strategy
</p>   
<p><strong>stop_loss_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br> 
Specifies the type of action the bot performs when Stop Loss is triggered after closing a deal
<details>
   <summary><em>Allowed values</em></summary>
   <dl>
      <li><code>stop_loss</code> - closes the deal without disabling the bot;</li>
      <li><code>stop_loss_and_disable_bot</code> - closes the deal and disables the bot.</li>
   </dl>
</details>
</p>
<p><strong>stop_loss_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Stop loss percentage for this bot
</p>
<p><strong>stop_loss_timeout_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the Stop Loss timeout is active
</p>
<p><strong>stop_loss_timeout_in_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Duration of the Stop Loss timeout in seconds
</p>
<p><strong>cooldown</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The waiting time between closing a deal and accepting a signal to create a new deal for the same asset pair (sec.)
</p>
<p><strong>strategy</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of strategy used by the bot (e.g., <code>long</code>, <code>short</code>)
</p>
<p><strong>min_volume_btc_24h</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The minimum trading volume in BTC over the last 24 hours required to open a deal
</p>
<p><strong>profit_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Currency used for the profit from the trades executed by this bot
</p>
<p><strong>min_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   Minimum price at which the new deal will open for thi DCA Bot
</p>
<p><strong>max_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   Maximum price at which the new deal will open for thi DCA Bot
</p>
<p><strong>account_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The name for the exchange account set by the user
</p>
<p><strong>trailing_deviation</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value of the trailing price, in percent
</p>
<p><strong>finished_deals_profit_usd</strong> "0.0",</p>
<p><strong>finished_deals_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total number of deals finished by DCA Bot
</p>
<p><strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of leverage applied for this DCA Bot<br>
   <details><summary><em>Allowed value</em></summary>
      <dl>
       <li><strong>cross</strong> - uses all available funds in your account as collateral for your trades;</li>
       <li><strong>isolated</strong> - the margin is limited to a specific position;</li>
       <li><strong>not_specified</strong> - no leverage type specified for this DCA Bot;</li>
      </dl>
   </details>
</p>
</p>
<p><strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The leverage value set by the user
</p>
<p><strong>start_order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of order to start deals with (e.g., <code>limit</code>, <code>market</code>).
</p>
<p><strong>active_deals_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Total USD profit from active deals
</p>
<p><strong>risk_reduction_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage of losses reduction applied for this DCA Bot
</p>
<p><strong>reinvesting_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The percentage of realized profit to be reinvested into each new deal
</p>
<p><strong>reinvested_volume_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>number</code><br>
   USD volume reinvested from profit
</p>
<p><strong>min_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   Minimum price percentage for bot activation (only for Multy bot)
</p>
<p><strong>max_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
   Max price percent (only for Multy bot)
</p>
<p><strong>active_deals</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   List of active deals managed by this DCA Bot
</p>
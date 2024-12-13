# Grid Bots<br>
<p>
<strong>Grid Bot</strong> entities are designed to automate trading strategies by executing a series of buy and sell orders within predefined price ranges. They allow users to take advantage of market fluctuations while minimizing manual intervention.<br>
</p>
<p>
<strong>Grid Bot</strong> entities hold information such as:<br>
</p>
<p><lu>
<li> Configuration details for the bot, including the trading pair, strategy type, and grid settings;
<li> Performance metrics like current profit, total profits, and investment amounts in base and quote currencies;
<li> Status indicators, such as whether the bot is enabled or disabled and whether stop-loss actions are set.<br></lu>
</p>

<p>
3Commas offers a range of tools to create new Grid Bots, manage their settings, and analyze their performance effectively.<br><br>
</p>

## Attributes<br>
<p>
<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
Unique 3Commas ID for this Grid Bot entity
</p>
<p>
<strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
Unique 3Commas ID of this exchange account entity where this Grid Bot was created
</p>
<p>
<strong>account_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
The name for the exchange account defined by the user
</p>
<p>
<strong>is_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates if the Grid Bot is enabled
</p>
<p>
<strong>grids_quantity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Number of grid lines set in the bot configuration
</p>
<p>
<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
ISO 8601 datetime string of when this Grid Bot was created<br>
</p>
<p>
<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
ISO 8601 datetime string of when this Grid Bot was last updated
</p>
<p>
<strong>strategy_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Strategy type for the bot (e.g., manual)
</p>
<p>
<strong>upper_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Shows if the upper stop-loss is enabled<br>
</p>
<p>
<strong>lower_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Shows if the lower stop-loss is enabled
</p>
<p>
<strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Optional user-defined note about the Grid Bot
</p>
<p>
<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates if the bot configuration can be edited
</p>
<p>
<strong>lower_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Lower price limit for the Grid Bot
</p>
<p>
<strong>lower_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Lower stop-loss price, if set
</p>
<p>
<strong>lower_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Action to take if the lower stop-loss is triggered (e.g., stop_bot)
</p>
<p>
<strong>upper_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Upper price limit for the Grid Bot
</p>
<p>
<strong>upper_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Upper stop-loss price, if set
</p>
<p>
<strong>upper_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Action to take if the upper stop-loss is triggered (e.g., stop_bot)<br>
</p>
<p>
<strong>quantity_per_grid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Quantity of the asset per grid line
</p>
<p>
<strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Shows the leverage type that was set when creating a Grid Bot (e.g., cross)<br>
</p>
<p>
<strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Custom leverage value set for the Grid Bot
</p>
<p>
<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Name of the Grid Bot
</p>
<p>
<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Trading pair in 3Commas format for the bot
</p>
<p>
<strong>start_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Starting price of the asset when the bot was created
</p>
<p>
<strong>grid_price_step</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Price step value between each grid line
</p>
<p>
<strong>current_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Current profit in base currency
</p>
<p>
<strong>current_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Current profit in USD
</p>
<p>
<strong>total_profits_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Total number of profitable transactions</p>
<p>
<strong>profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Percentage profit relative to the starting investment
</p>
<p>
<strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Current price of the trading pair<br>
</p>
<p>
<strong>max_active_buy_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Maximum number of active buy orders allowed
</p>
<p>
<strong>max_active_sell_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Maximum number of active sell orders allowed
</p>
<p>
<strong>order_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Currency type used for orders (e.g., quote)
</p>
<p>
<strong>profit_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Currency type used for profit calculation (e.g., quote)
</p>
<p>
<strong>trailing_up_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Shows if the trailing-up feature is enabled
</p>
<p>
<strong>grid_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Type of grid used (e.g., `geometric`)<br>
</p>
<p>
<strong>investment_base_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Investment amount in the base currency
</p>
<p>
<strong>investment_quote_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Investment amount in the quote currency
</p>
<p>
<strong>unrealized_profit_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Unrealized profit or loss in base currency
</p>
<p>
<strong>current_profit_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Current profit or loss in base currency
</p>
<p>
<strong>current_profit_loss_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Percentage of current profit or loss
</p>
<p>
<strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
Currency used for the order book price
</p>
<p>
    <strong>expansion_down_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Shows if the grid expansion downwards is enabled
</p>
<p>
    <strong>expansion_down_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Stop price for downward expansion, if set
</p>
<p>
<strong>grid_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
An array of grid line orders associated with this Grid Bot
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID of the Grid Line entity
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price value of this grid line
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>side</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The order side for this grid line (e.g., `buy` or `sell`)<br>
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_placed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates if the order for this grid line has been placed<br>
</p>
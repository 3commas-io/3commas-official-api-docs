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

<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`integer`<br>
Unique 3Commas ID for this Grid Bot entity<br>

<strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`integer`<br>
Unique 3Commas ID of this exchange account entity where this Grid Bot was created<br>

<strong>account_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
The name for the exchange account defined by the user<br>

<strong>is_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if the Grid Bot is enabled<br>

<strong>grids_quantity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Number of grid lines set in the bot configuration<br>

<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string <date-time>`<br>
ISO 8601 datetime string of when this Grid Bot was created<br>

<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string <date-time>`<br>
ISO 8601 datetime string of when this Grid Bot was last updated<br>

<strong>strategy_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Strategy type for the bot (e.g., manual)<br>

<strong>upper_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Shows if the upper stop-loss is enabled<br>

<strong>lower_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Shows if the lower stop-loss is enabled<br>

<strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Optional user-defined note about the Grid Bot<br>

<strong>editable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if the bot configuration can be edited<br>

<strong>lower_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Lower price limit for the Grid Bot<br>

<strong>lower_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Lower stop-loss price, if set<br>

<strong>lower_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Action to take if the lower stop-loss is triggered (e.g., stop_bot)<br>

<strong>upper_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Upper price limit for the Grid Bot<br>

<strong>upper_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Upper stop-loss price, if set<br>

<strong>upper_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Action to take if the upper stop-loss is triggered (e.g., stop_bot)<br>

<strong>quantity_per_grid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Quantity of the asset per grid line<br>

<strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Shows the leverage type that was set when creating a Grid Bot (e.g., cross)<br>

<strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Custom leverage value set for the Grid Bot<br>

<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Name of the Grid Bot<br>

<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Trading pair in 3Commas format for the bot<br>

<strong>start_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Starting price of the asset when the bot was created<br>

<strong>grid_price_step</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Price step value between each grid line<br>

<strong>current_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Current profit in base currency<br>

<strong>current_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Current profit in USD<br>

<strong>total_profits_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Total number of profitable transactions<br>

<strong>bought_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Volume of assets bought by the Grid Bot<br>

<strong>sold_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Volume of assets sold by the Grid Bot<br>

<strong>profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Percentage profit relative to the starting investment<br>

<strong>current_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Current price of the trading pair<br>

<strong>max_active_buy_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Maximum number of active buy orders allowed<br>

<strong>max_active_sell_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Maximum number of active sell orders allowed<br>

<strong>order_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Currency type used for orders (e.g., quote)<br>

<strong>profit_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Currency type used for profit calculation (e.g., quote)<br>

<strong>trailing_up_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Shows if the trailing-up feature is enabled<br>

<strong>grid_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Type of grid used (e.g., `geometric`)<br>

<strong>investment_base_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Investment amount in the base currency<br>

<strong>investment_quote_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Investment amount in the quote currency<br>

<strong>unrealized_profit_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Unrealized profit or loss in base currency<br>

<strong>current_profit_loss</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Current profit or loss in base currency<br>

<strong>current_profit_loss_percent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Percentage of current profit or loss<br>

<strong>orderbook_price_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Currency used for the order book price<br>

<strong>expansion_down_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Shows if the grid expansion downwards is enabled<br>

<strong>expansion_down_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Stop price for downward expansion, if set<br>

<strong>grid_lines[id]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`integer`<br>
ID of the grid line order<br>

<strong>grid_lines[price]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Price value of this grid line<br>

<strong>grid_lines[side]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
The order side for this grid line (e.g., `buy` or `sell`)<br>

<strong>grid_lines[order_placed]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if the order for this grid line has been placed<br>

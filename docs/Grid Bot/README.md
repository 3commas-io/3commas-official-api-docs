# Grid Bots

Grid Bot entities are designed to automate trading strategies by executing a series of buy and sell orders within predefined price ranges. They allow users to take advantage of market fluctuations while minimizing manual intervention.

Grid Bot entities hold information such as:

- Configuration details for the bot, including the trading pair, strategy type, and grid settings;
- Performance metrics like current profit, total profits, and investment amounts in base and quote currencies;
- Status indicators, such as whether the bot is enabled or disabled and whether stop-loss actions are set.

3Commas offers a range of tools to create new Grid Bots, manage their settings, and analyze their performance effectively.

## Attributes

id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
Unique 3Commas ID for this Grid Bot entity

account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
Unique 3Commas ID of this exchange account entity where this Grid Bot was created

account_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
The name for the exchange account defined by the user

is_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Indicates if the Grid Bot is enabled

grids_quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Number of grid lines set in the bot configuration

created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
ISO 8601 datetime string of when this Grid Bot was created

updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
ISO 8601 datetime string of when this Grid Bot was last updated

strategy_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Strategy type for the bot (e.g., manual)

upper_stop_loss_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Shows if the upper stop-loss is enabled

lower_stop_loss_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Shows if the lower stop-loss is enabled

note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Optional user-defined note about the Grid Bot

editable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Indicates if the bot configuration can be edited

lower_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Lower price limit for the Grid Bot

lower_stop_loss_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Lower stop-loss price, if set

lower_stop_loss_action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Action to take if the lower stop-loss is triggered (e.g., stop_bot)

upper_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Upper price limit for the Grid Bot

upper_stop_loss_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Upper stop-loss price, if set

upper_stop_loss_action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Action to take if the upper stop-loss is triggered (e.g., stop_bot)

quantity_per_grid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Quantity of the asset per grid line

leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Shows the leverage type that was set when creating a Grid Bot (e.g., cross)

leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Custom leverage value set for the Grid Bot

name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Name of the Grid Bot

pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Trading pair in 3Commas format for the bot

start_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Starting price of the asset when the bot was created

grid_price_step&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Price step value between each grid line

current_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Current profit in base currency

current_profit_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Current profit in USD

total_profits_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Total number of profitable transactions

profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Percentage profit relative to the starting investment

current_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Current price of the trading pair

max_active_buy_lines&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Maximum number of active buy orders allowed

max_active_sell_lines&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Maximum number of active sell orders allowed

order_currency_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Currency type used for orders (e.g., quote)

profit_currency_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Currency type used for profit calculation (e.g., quote)

trailing_up_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Shows if the trailing-up feature is enabled

grid_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Type of grid used (e.g., `geometric`)

investment_base_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Investment amount in the base currency

investment_quote_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Investment amount in the quote currency

unrealized_profit_loss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Unrealized profit or loss in base currency

current_profit_loss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Current profit or loss in base currency

current_profit_loss_percent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Percentage of current profit or loss

orderbook_price_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
Currency used for the order book price

    expansion_down_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Shows if the grid expansion downwards is enabled


    expansion_down_stop_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Stop price for downward expansion, if set

grid_lines&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
An array of grid line orders associated with this Grid Bot

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID of the Grid Line entity


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price value of this grid line


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The order side for this grid line (e.g., `buy` or `sell`)


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_placed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates if the order for this grid line has been placed

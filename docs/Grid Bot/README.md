import CollapsibleApiParam from '@site/src/components/CollapsibleApiParam';
import CollapsibleNestedParams from '@site/src/components/CollapsibleNestedParams';
import ApiParam from '@site/src/components/ApiParam';

# Grid Bots

<div class="section-discription-entity">
<p>
    Grid Bot entities are designed to automate trading strategies by executing a series of buy and sell orders within predefined price ranges. They allow users to take advantage of market fluctuations while minimizing manual intervention.
</p>
<p>
    Grid Bot entities hold information such as:
</p>    
<ul>
    <li> Configuration details for the bot, including the trading pair, strategy type, and grid settings;</li>
    <li> Performance metrics like current profit, total profits, and investment amounts in base and quote currencies;</li>
    <li> Status indicators, such as whether the bot is enabled or disabled and whether stop-loss actions are set.</li>
</ul>
<p>
    3Commas offers a range of tools to create new Grid Bots, manage their settings, and analyze their performance effectively.
</p>
</div>

<h2> Attributes</h2>

<ApiParam name='id' type='integer' id="id">
  Unique 3Commas ID for this Grid Bot entity
</ApiParam>

<ApiParam name='account_id' type='integer' id="account_id">
  Unique 3Commas ID of this exchange account entity where this Grid Bot was created
</ApiParam>

<ApiParam name='account_name' type='string' id="account_name">
  The name for the exchange account defined by the user
</ApiParam>

<ApiParam name='is_enabled' type='boolean' id="is_enabled">
  Indicates if the Grid Bot is enabled (<code>true</code>) or not (<code>false</code>)
</ApiParam>

<ApiParam name='grids_quantity' type='string' id="grids_quantity">
  Number of grid lines set in the bot configuration
</ApiParam>

<h3> More attributes </h3>

<CollapsibleApiParam name="created_at" type="string" id="created_at">
ISO 8601 datetime string of when this Grid Bot was created
</CollapsibleApiParam>

<CollapsibleApiParam name="updated_at" type="string" id="updated_at">
ISO 8601 datetime string of when this Grid Bot was last updated
</CollapsibleApiParam>

<CollapsibleApiParam name="strategy_type" type="string" id="strategy_type">
Strategy type for the bot (e.g., manual)
</CollapsibleApiParam>

<CollapsibleApiParam name="upper_stop_loss_enabled" type="boolean" id="upper_stop_loss_enabled">
Shows if the upper stop-loss is enabled
</CollapsibleApiParam>

<CollapsibleApiParam name="lower_stop_loss_enabled" type="boolean" id="lower_stop_loss_enabled">
Shows if the lower stop-loss is enabled
</CollapsibleApiParam>

<CollapsibleApiParam name="note" type="string" id="note">
Optional user-defined note about the Grid Bot
</CollapsibleApiParam>

<CollapsibleApiParam name="editable" type="boolean" id="editable">
Indicates if the bot configuration can be edited
</CollapsibleApiParam>

<CollapsibleApiParam name="lower_price" type="string" id="lower_price">
Lower price limit for the Grid Bot
</CollapsibleApiParam>

<CollapsibleApiParam name="lower_stop_loss_price" type="string" id="lower_stop_loss_price">
Lower stop-loss price, if set
</CollapsibleApiParam>

<CollapsibleApiParam name="lower_stop_loss_action" type="string" id="lower_stop_loss_action">
Action to take if the lower stop-loss is triggered (e.g., stop_bot)
</CollapsibleApiParam>

<CollapsibleApiParam name="upper_price" type="string" id="upper_price">
Upper price limit for the Grid Bot
</CollapsibleApiParam>

<CollapsibleApiParam name="upper_stop_loss_price" type="string" id="upper_stop_loss_price">
Upper stop-loss price, if set
</CollapsibleApiParam>

<CollapsibleApiParam name="upper_stop_loss_action" type="string" id="upper_stop_loss_action">
Action to take if the upper stop-loss is triggered (e.g., stop_bot)
</CollapsibleApiParam>

<CollapsibleApiParam name="quantity_per_grid" type="string" id="quantity_per_grid">
Quantity of the asset per grid line
</CollapsibleApiParam>

<CollapsibleApiParam name="leverage_type" type="string" id="leverage_type">
Shows the leverage type that was set when creating a Grid Bot (e.g., cross)
</CollapsibleApiParam>

<CollapsibleApiParam name="leverage_custom_value" type="string" id="leverage_custom_value">
Custom leverage value set for the Grid Bot
</CollapsibleApiParam>

<CollapsibleApiParam name="name" type="string" id="name">
Name of the Grid Bot
</CollapsibleApiParam>

<CollapsibleApiParam name="pair" type="string" id="pair">
Trading pair in 3Commas format for the bot
</CollapsibleApiParam>

<CollapsibleApiParam name="start_price" type="string" id="start_price">
Starting price of the asset when the bot was created
</CollapsibleApiParam>

<CollapsibleApiParam name="grid_price_step" type="string" id="grid_price_step">
Price step value between each grid line
</CollapsibleApiParam>

<CollapsibleApiParam name="current_profit" type="string" id="current_profit">
Current profit in base currency
</CollapsibleApiParam>

<CollapsibleApiParam name="current_profit_usd" type="string" id="current_profit_usd">
Current profit in USD
</CollapsibleApiParam>

<CollapsibleApiParam name="total_profits_count" type="string" id="total_profits_count">
Total number of profitable transactions
</CollapsibleApiParam>

<CollapsibleApiParam name="profit_percentage" type="string" id="profit_percentage">
Percentage profit relative to the starting investment
</CollapsibleApiParam>

<CollapsibleApiParam name="current_price" type="string" id="current_price">
Current price of the trading pair
</CollapsibleApiParam>

<CollapsibleApiParam name="max_active_buy_lines" type="string" id="max_active_buy_lines">
Maximum number of active buy orders allowed
</CollapsibleApiParam>

<CollapsibleApiParam name="max_active_sell_lines" type="string" id="max_active_sell_lines">
Maximum number of active sell orders allowed
</CollapsibleApiParam>

<CollapsibleApiParam name="order_currency_type" type="string" id="order_currency_type">
Currency type used for orders (e.g., quote)
</CollapsibleApiParam>

<CollapsibleApiParam name="profit_currency_type" type="string" id="profit_currency_type">
Currency type used for profit calculation (e.g., quote)
</CollapsibleApiParam>

<CollapsibleApiParam name="trailing_up_enabled" type="boolean" id="trailing_up_enabled">
Shows if the trailing-up feature is enabled
</CollapsibleApiParam>

<CollapsibleApiParam name="grid_type" type="string" id="grid_type">
Type of grid used: <code>geometric</code>, <code> </code>
</CollapsibleApiParam>

<CollapsibleApiParam name="investment_base_currency" type="string" id="investment_base_currency">
Investment amount in the base currency
</CollapsibleApiParam>

<CollapsibleApiParam name="investment_quote_currency" type="string" id="investment_quote_currency">
Investment amount in the quote currency
</CollapsibleApiParam>

<CollapsibleApiParam name="unrealized_profit_loss" type="string" id="unrealized_profit_loss">
Unrealized profit or loss in base currency
</CollapsibleApiParam>

<CollapsibleApiParam name="current_profit_loss" type="string" id="current_profit_loss">
Current profit or loss in base currency
</CollapsibleApiParam>

<CollapsibleApiParam name="current_profit_loss_percent" type="string" id="current_profit_loss_percent">
Percentage of current profit or loss
</CollapsibleApiParam>

<CollapsibleApiParam name="orderbook_price_currency" type="string" id="orderbook_price_currency">
Currency used for the order book price
</CollapsibleApiParam>

<CollapsibleApiParam name="expansion_down_enabled" type="boolean" id="expansion_down_enabled">
Shows if the grid expansion downwards is enabled
</CollapsibleApiParam>

<CollapsibleApiParam name="expansion_down_stop_price" type="string" id="expansion_down_stop_price">
Stop price for downward expansion, if set
</CollapsibleApiParam>

<CollapsibleApiParam name="grid_lines" type="object" id="grid_lines">
An array of grid line orders associated with this Grid Bot
    <CollapsibleNestedParams>
    <ApiParam name='id' type='string' id='id'>
      ID of the Grid Line entity
    </ApiParam>
    <ApiParam name='price' type='string' id='price'>
        Price value of this grid line
    </ApiParam>
    <ApiParam name='side' type='string' id='side'>
      The order side for this grid line: <code>buy</code> or <code>sell</code>
    </ApiParam>
    <ApiParam name='order_placed' type='boolean' id='order_placed'>
      Indicates if the order for this grid line has been placed
    </ApiParam>
    </CollapsibleNestedParams>
</CollapsibleApiParam>


    


    


    

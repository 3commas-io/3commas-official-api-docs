# Account<br>

**Grid Bot** entities are designed to automate trading strategies by executing a series of buy and sell orders within predefined price ranges. They allow users to take advantage of market fluctuations while minimizing manual intervention.<br>

**Grid Bot** entities hold information such as:<br>

* Configuration details for the bot, including the trading pair, strategy type, and grid settings;
* Performance metrics like current profit, total profits, and investment amounts in base and quote currencies;
* Status indicators, such as whether the bot is enabled or disabled and whether stop-loss actions are set.<br>

3Commas offers a range of tools to create new Grid Bots, manage their settings, and analyze their performance effectively.<br><br>

## Attributes<br>

<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`integer`<br>
ID of the exchange account entity<br>

<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
The name for the exchange account defined by the user<br>

<strong>exchange_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Name of this exchange account<br>

<strong>market_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Icon of the exchange<br>

<strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
3Commas of exchange code entity<br>

<strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether auto-balance  mode is enabled for this account<br>

<strong>auto_balance_period</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`null` or `string`<br>
The interval, in hours, at which automatic portfolio balancing occurs<br>

<strong>auto_balance_portfolio_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `integer` or `null`<br>
ID of the portfolio for which automatic balancing has been initiated<br>

<strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether auto-balance  mode is enabled for this account<br>

<strong>auto_balance_error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string` or `null`<br>
A description comes up to explain why auto-balance failed<br>

<strong>last_auto_balance</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`null` or `string <date-time>`<br>
ISO 8601 datetime `string ` of when this auto-balance was last time<br>

<strong>hedge_mode_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether hedge mode is available for this account<br>

<strong>hedge_mode_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether hedge mode is enabled for this account<br>

<strong>is_locked</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if the account is locked<br>

<strong>lock_reason</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`null` or `string`<br>
The reason for locking this account in case  `is_locked` is `true`<br>

<strong>smart_trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if smart trading is supported<br>

<strong>stats_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether statistic of profit are supported for this account<br>

<strong>trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates if trading is supported at 3Commas<br>

<strong>market_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether creating a market buy order is supported on the exchange<br>

<strong>market_sell_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether creating a market sell order is supported on the exchange<br>

<strong>conditional_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether creating a conditional buy order is supported on the exchange<br>

<strong>bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether DCA Bot is enabled for this account<br>

<strong>bots_ttp_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`
Indicates whether the trailing take profit feature is enabled on this account<br>

<strong>bots_tsl_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether the trading stop loss feature is enabled on this account<br>

<strong>multi_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether the Multi-Pair feature is supported for this account<br>

<strong>fast_convert_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether the "Sell All to BTC/USD" feature is enabled for this account<br>

<strong>grid_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether Grid Bot is enabled for this account<br>

<strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API key used for the account<br>

<strong>api_key_invalid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether the API key for this account is invalid<br>

<strong>api_keys_state</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Indicates the state of the API keys<br>

<strong>deposit_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether the Deposit feature is enabled for this account<br>

<strong>available_include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether this account is available to be included in the summary<br>

<strong>include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`boolean`<br>
Indicates whether this account included in the summary<br>

<strong>supported_market_types</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`array`<br>
The type of market supported by the connected exchange account

<strong>customer_id</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Unique customer ID provided by the Bitstamp exchange<br>

<strong>btc_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Amount of Bitcoin in the account<br>

<strong>usd_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Amount in USD in the account<br>

<strong>day_profit_etc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Daily profit in BTC<br>

<strong>day_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string`<br>
Daily profit in USD<br>

<strong>day_profit_btc_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Daily profit percentage in BTC<br>

<strong>day_profit_usd_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Daily profit percentage in USD<br>

<strong>btc_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Monthly profit in BTC<br>

<strong>usd_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Monthly profit in USD<br>

<strong>btc_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Monthly profit percentage in BTC<br>

<strong>usd_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Monthly profit percentage in USD<br>

<strong>total_btc_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Total profit in BTC<br>

<strong>total_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`number`<br>
Total profit in USD<br>

<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string <date-time>`<br>
ISO 8601 datetime string of when this Account entity was created<br>

<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`string <date-time>`<br>
ISO 8601 datetime string of when this SmartTrade entity was updated<br>





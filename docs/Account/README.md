# Account<br>

**Account** entities hold information about the cryptocurrency portfolio, theys balances and the set of tools that are available for this account.<br><br>

**Account** entities hold information like:
* Details about the connected exchange, including its type, name, and current status;<br>
* Profit and currency information, such as the account's balance and daily and total profit;<br>
* Available trading features for this account.<br><br>

3Commas provides a set of methods to create new exchange account connections and manage existing accounts.<br><br>

## Attributes<br>
<p>
    <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    ID of the exchange account entity
</p>
<p>
    <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The name for the exchange account set by the user
</p>
<p>
    <strong>exchange_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Name of this exchange account
<p>
<p>
    <strong>market_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Icon of the exchange
</p>
<p>
    <strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    3Commas of exchange code entity
</p>
<p>
    <strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether auto-balance  mode is enabled for this account
</p>
<p>
    <strong>auto_balance_period</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
    The interval, in hours, at which automatic portfolio balancing occurs
</p>
<p>
    <strong>auto_balance_portfolio_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>integer</code> or <code>null</code><br>
    ID of the portfolio for which automatic balancing has been initiated
</p>
<p>
    <strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether auto-balance  mode is enabled for this account
</p>
<p>
    <strong>auto_balance_error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    A description comes up to explain why auto-balance failed
</p>
<p>
    <strong>last_auto_balance</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code> <br>
    ISO 8601 datetime <code>string</code> of when this auto-balance was last time
</p>
<p>
    <strong>hedge_mode_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether hedge mode is available for this account
</p>
<p>
    <strong>hedge_mode_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether hedge mode is enabled for this account
</p>
<p>
    <strong>is_locked</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates if the account is locked
</p>
<p>
    <strong>lock_reason</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
    The reason for locking this account in case  <code>is_locked</code> is <code>true</code>
</p>
<p>
    <strong>smart_trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates if smart trading is supported
</p>
<p>
    <strong>stats_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether statistic of profit are supported for this account
</p>
<p>
    <strong>trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates if trading is supported at 3Commas
</p>
<p>
    <strong>market_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether creating a market buy order is supported on the exchange
</p>
<p>
    <strong>market_sell_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether creating a market sell order is supported on the exchange
</p>
<p>
    <strong>conditional_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether creating a conditional buy order is supported on the exchange
</p>
<p>
    <strong>bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether DCA Bot is enabled for this account
</p>
<p>
    <strong>bots_ttp_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the trailing take profit feature is enabled on this account
</p>
<p>
    <strong>bots_tsl_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether the trading stop loss feature is enabled on this account
    </p>
<p>
    <strong>multi_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether the Multi-Pair feature is supported for this account
</p>
<p>
    <strong>fast_convert_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether the "Sell All to BTC/USD" feature is enabled for this account<br>
</p>
<p>
    <strong>grid_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether Grid Bot is enabled for this account
</p>
<p>
    <strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    API key used for the account
</p>
<p>
    <strong>api_key_invalid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether the API key for this account is invalid
</p>
<p>
    <strong>api_keys_state</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Indicates the state of the API keys
</p>
<p>
    <strong>deposit_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether the Deposit feature is enabled for this account
</p>
<p>
    <strong>available_include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this account is available to be included in the summary
</p>
<p>
    <strong>include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this account included in the summary
</p>
<p>
    <strong>supported_market_types</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
    The type of market supported by the connected exchange account
</p>
<p>
    <strong>customer_id</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Unique customer ID provided by the Bitstamp exchange
</p>
<p>
    <strong>btc_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Amount of Bitcoin in the account
</p>
<p>
    <strong>usd_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Amount in USD in the account
</p>
<p>
    <strong>day_profit_etc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Daily profit in BTC
</p>
<p>
    <strong>day_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Daily profit in USD
</p>
<p>
    <strong>day_profit_btc_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Daily profit percentage in BTC<br>
</p>
<p>
    <strong>day_profit_usd_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Daily profit percentage in USD
</p>

<p>
    <strong>btc_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit in BTC
</p>
<p>
    <strong>usd_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit in USD
</p>
<p>
    <strong>btc_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit percentage in BTC
</p>
<p>
    <strong>usd_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit percentage in USD
</p>
<p>
    <strong>total_btc_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Total profit in BTC
</p>
<p>
    <strong>total_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Total profit in USD
</p>
<p>
    <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this Account entity was created
</p>
<p>
    <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this SmartTrade entity was updated
</p>

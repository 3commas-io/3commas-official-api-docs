# Account

**Account** entities hold information about the cryptocurrency portfolio, theys balances and the set of tools that are available for this account.

**Account** entities hold information like:

* Details about the connected exchange, including its type, name, and current status;
* Profit and currency information, such as the account's balance and daily and total profit;
* Available trading features for this account.

3Commas provides a set of methods to create new exchange account connections and manage existing accounts.

## Attributes

    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    ID of the exchange account entity


    name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The name for the exchange account set by the user


    exchange_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Name of this exchange account


    market_icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Icon of the exchange


    market_code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    3Commas of exchange code entity


    autobalance_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether auto-balance  mode is enabled for this account


    auto_balance_period&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
    The interval, in hours, at which automatic portfolio balancing occurs


    auto_balance_portfolio_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>integer</code> or <code>null</code>
    ID of the portfolio for which automatic balancing has been initiated


    autobalance_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether auto-balance  mode is enabled for this account


    auto_balance_error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
    A description comes up to explain why auto-balance failed


    last_auto_balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
    ISO 8601 datetime <code>string</code> of when this auto-balance was last time


    hedge_mode_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether hedge mode is available for this account


    hedge_mode_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether hedge mode is enabled for this account


    is_locked&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates if the account is locked


    lock_reason&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code>
    The reason for locking this account in case  <code>is_locked</code> is <code>true</code>


    smart_trading_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates if smart trading is supported


    stats_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether statistic of profit are supported for this account


    trading_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates if trading is supported at 3Commas


    market_buy_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether creating a market buy order is supported on the exchange


    market_sell_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether creating a market sell order is supported on the exchange


    conditional_buy_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether creating a conditional buy order is supported on the exchange


    bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether DCA Bot is enabled for this account


    bots_ttp_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the trailing take profit feature is enabled on this account


    bots_tsl_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the trading stop loss feature is enabled on this account
    

    multi_bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the Multi-Pair feature is supported for this account


    fast_convert_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the "Sell All to BTC/USD" feature is enabled for this account


    grid_bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether Grid Bot is enabled for this account


    api_key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    API key used for the account


    api_key_invalid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the API key for this account is invalid


    api_keys_state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Indicates the state of the API keys


    deposit_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether the Deposit feature is enabled for this account


    available_include_in_summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this account is available to be included in the summary


    include_in_summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether this account included in the summary


    supported_market_types&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
    The type of market supported by the connected exchange account


    customer_id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Unique customer ID provided by the Bitstamp exchange


    btc_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Amount of Bitcoin in the account


    usd_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Amount in USD in the account


    day_profit_etc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Daily profit in BTC


    day_profit_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Daily profit in USD


    day_profit_btc_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Daily profit percentage in BTC


    day_profit_usd_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Daily profit percentage in USD



    btc_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Monthly profit in BTC


    usd_profit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Monthly profit in USD


    btc_profit_percentage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Monthly profit percentage in BTC


    usd_profit_percentage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Monthly profit percentage in USD


    total_btc_profit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Total profit in BTC


    total_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    Total profit in USD


    created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    ISO 8601 datetime string of when this Account entity was created


    updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    ISO 8601 datetime string of when this SmartTrade entity was updated

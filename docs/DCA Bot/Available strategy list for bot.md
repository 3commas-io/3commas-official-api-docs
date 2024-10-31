## Available strategy list for DCA Bot<br>

**Description:** Retunrs available strategy list for DCA Bot. Use the query parameters to page through results <br>

**Permission:** BOTS_READ<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/bots/strategy_list**

----------

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer`| No |  | Unique 3Commas ID of the exchange account entity |
|**type**  | `string`| No | `simple`<br> `composite` |  |
|**strategy**  | `string`| No | `long`<br>`short` | Strategy type for the bot |

<br>
<br>


### Example Request<br>

```
GET /ver1/bots/strategy_list
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "manual": {
        "strategy_type": "signal",
        "payed": false,
        "beta": false,
        "name": "Manually/API (Bot won't open new trades automatically)"
    },
    "tv_custom_signal": {
        "strategy_type": "signal",
        "payed": false,
        "beta": false,
        "name": "Trading View custom signal"
    },
    "rsi": {
        "name": "RSI",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day",
                "2h": "2 hours",
                "8h": "8 hours",
                "3d": "3 days",
                "1w": "1 week"
            },
            "points": null,
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "time_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "ult": {
        "name": "Ultimate Oscillator",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "points": null,
            "first_period": null,
            "second_period": null,
            "third_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "b_bands_percent": {
        "name": "Bollinger Bands %B",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "points": null,
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "time_period": null,
            "deviation": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "ma_cross": {
        "name": "Moving Average (MA)",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "indicator_type": {
                "ema": "ema",
                "sma": "sma"
            },
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "time_period_first": null,
            "time_period_second": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "adx": {
        "name": "Average Directional Index",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "points": null,
            "time_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "stochastic": {
        "name": "Stochastic",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "points": null,
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "line_trigger_condition": {
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "fast_k_period": null,
            "slow_k_period": null,
            "slow_d_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "macd": {
        "name": "MACD",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "trigger_condition": {
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "line_trigger_condition": {
                "less": "less",
                "greater": "greater"
            },
            "fast_period": null,
            "slow_period": null,
            "signal_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "parabolic_sar": {
        "name": "Parabolic SAR",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "acceleration_factor": null,
            "af_maximum": null,
            "trigger_condition": {
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            }
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "mfi": {
        "name": "Money Flow Index",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "time_period": null,
            "points": null,
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            }
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "cci": {
        "name": "Commodity Channel Index",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "trigger_condition": {
                "less": "less",
                "greater": "greater",
                "crossing_above": "crossing_down",
                "crossing_below": "crossing_up"
            },
            "points": null,
            "time_period": null
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    },
    "heikin_ashi": {
        "name": "Heikin Ashi",
        "payed": false,
        "beta": false,
        "strategy_type": "indicator",
        "options": {
            "time": {
                "3m": "3 minutes",
                "5m": "5 minutes",
                "15m": "15 minutes",
                "30m": "30 minutes",
                "1h": "1 hour",
                "4h": "4 hours",
                "1d": "1 day"
            },
            "candles_count": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "10": "10"
            }
        },
        "accounts_whitelist": [
            "Account::BinanceFuturesAccount",
            "Accounts::BinanceFuturesEeaAccount",
            "Accounts::BinanceFuturesCoin",
            "Accounts::Ftx",
            "Accounts::FtxFutures",
            "Account::BybitAccount",
            "Accounts::BybitUsdtPerpetualAccount",
            "Account::GdaxAccount",
            "Account::KrakenAccount",
            "Account::BinanceUsAccount",
            "Account::GateIoAccount",
            "Accounts::BybitSpotAccount",
            "Accounts::GateIoBtcPerpetualAccount",
            "Accounts::GateIoUsdtPerpetualAccount",
            "Account::BinanceAccount",
            "Account::BinanceJerseyAccount",
            "Account::BinanceMarginAccount",
            "Account::PaperTradingAccount",
            "Account::OkexAccount",
            "Accounts::OkexFuturesAccount",
            "Accounts::CoinbaseAdvancedAccount",
            "Accounts::BitgetUsdtFuturesAccount"
        ]
    }
}
```
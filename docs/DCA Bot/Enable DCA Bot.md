## Enable DCA Bot<br>

**Description:** Enables an existing DCA Bot using its ID<br>


**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/bots/{bot_id}/enable</strong>

----------

<br>
<br>

### Path Parameter<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<br>
<br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes a copy of [DCA Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST /ver1/bots/15577628/enable
```

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 15577628,
    "account_id": 32199203,
    "is_enabled": true,
    "max_safety_orders": 3,
    "active_safety_orders_count": 2,
    "pairs": [
        "USDT_ETH"
    ],
    "strategy_list": [
        {
            "options": {},
            "strategy": "nonstop"
        }
    ],
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "max_active_deals": 1,
    "active_deals_count": 1,
    "deletable?": false,
    "created_at": "2024-11-01T14:47:16.341Z",
    "updated_at": "2024-11-05T18:39:00.270Z",
    "trailing_enabled": false,
    "tsl_enabled": false,
    "deal_start_delay_seconds": null,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "disable_after_deals_count": null,
    "deals_counter": null,
    "allowed_deals_on_same_pair": null,
    "easy_form_supported": false,
    "close_deals_timeout": null,
    "url_secret": "2fa51d0161",
    "take_profit_steps": [],
    "name": "ETH/USDT Classic trading",
    "take_profit": "1.0",
    "min_profit_percentage": "0.0",
    "base_order_volume": "80.0",
    "safety_order_volume": "30.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "total",
    "min_profit_type": null,
    "type": "Bot::SingleBot",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "22.0",
    "cooldown": "300",
    "btc_price_limit": "0.0",
    "strategy": "long",
    "min_volume_btc_24h": "0.0",
    "profit_currency": "quote_currency",
    "min_price": null,
    "max_price": null,
    "stop_loss_type": "stop_loss",
    "safety_order_volume_type": "quote_currency",
    "base_order_volume_type": "quote_currency",
    "account_name": "Paper Account 1251857",
    "trailing_deviation": "0.2",
    "finished_deals_profit_usd": "0.0",
    "finished_deals_count": "0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "start_order_type": "limit",
    "active_deals_usd_profit": "-4.061528134",
    "reinvesting_percentage": "100.0",
    "risk_reduction_percentage": "100.0",
    "reinvested_volume_usd": null,
    "min_price_percentage": null,
    "max_price_percentage": null,
    "active_deals": [
        {
            "from_currency_id": 0,
            "to_currency_id": 0,
            "id": 2294267644,
            "type": "Deal",
            "bot_id": 15577628,
            "max_safety_orders": 3,
            "deal_has_error": false,
            "account_id": 32199203,
            "active_safety_orders_count": 2,
            "created_at": "2024-11-01T14:47:25.276Z",
            "updated_at": "2024-11-03T02:43:09.200Z",
            "closed_at": null,
            "finished?": false,
            "current_active_safety_orders_count": 1,
            "current_active_safety_orders": 1,
            "completed_safety_orders_count": 2,
            "completed_manual_safety_orders_count": 0,
            "cancellable?": true,
            "panic_sellable?": true,
            "trailing_enabled": false,
            "tsl_enabled": false,
            "stop_loss_timeout_enabled": false,
            "stop_loss_timeout_in_seconds": 0,
            "active_manual_safety_orders": 0,
            "pair": "USDT_ETH",
            "status": "bought",
            "localized_status": "Active",
            "take_profit": "1.0",
            "take_profit_steps": [],
            "base_order_volume": "80.0",
            "safety_order_volume": "30.0",
            "safety_order_step_percentage": "1.0",
            "leverage_type": "not_specified",
            "leverage_custom_value": null,
            "bought_amount": "0.0642",
            "bought_volume": "161.545702318",
            "bought_average_price": "2516.288198099688473520249221184",
            "base_order_average_price": "2561.66911",
            "sold_amount": "0.0",
            "sold_volume": "0.0",
            "sold_average_price": "0",
            "take_profit_type": "total",
            "final_profit": "-5.45327499",
            "martingale_coefficient": "1.0",
            "martingale_volume_coefficient": "1.7",
            "martingale_step_coefficient": "4.0",
            "stop_loss_percentage": "22.0",
            "sl_to_breakeven_enabled": false,
            "sl_to_breakeven_data": null,
            "error_message": null,
            "profit_currency": "quote_currency",
            "stop_loss_type": "stop_loss",
            "safety_order_volume_type": "quote_currency",
            "base_order_volume_type": "quote_currency",
            "from_currency": "USDT",
            "to_currency": "ETH",
            "final_profit_percentage": "0",
            "usd_final_profit": "-5.45",
            "actual_profit": "-4.061528134",
            "actual_usd_profit": "-4.061528134",
            "failed_message": null,
            "reserved_base_coin": "161.545702318",
            "reserved_second_coin": "0.0642",
            "trailing_deviation": "0.2",
            "trailing_max_price": null,
            "tsl_max_price": null,
            "strategy": "long",
            "last_known_position_info": null,
            "min_profit_percentage": "0.0",
            "min_profit_type": null,
            "close_strategy_list": [],
            "safety_strategy_list": [],
            "note": null,
            "add_fundable": true,
            "smart_trade_convertable": true,
            "bot_name": "ETH/USDT Classic trading",
            "account_name": "Paper Account 1251857",
            "market_type": "spot",
            "current_price": "2455.48",
            "take_profit_price": "2544.0",
            "stop_loss_price": "1998.1019058",
            "actual_profit_percentage": "-2.42",
            "reserved_quote_funds": "0.0",
            "reserved_base_funds": "0.0",
            "orderbook_price_currency": "USDT",
            "crypto_widget": {
                "progressAccuracy": 2,
                "TTPАctivated": false,
                "buyPrice": "2516.288198099688473520249221184",
                "currentPrice": "2455.48",
                "inverted": false,
                "stopLosses": [
                    [
                        "1998.1019058",
                        false
                    ]
                ],
                "LP": null,
                "buySteps": [
                    {
                        "price": "2023.71",
                        "filled": "0.0"
                    }
                ],
                "marks": [
                    {
                        "type": "tp",
                        "label": "TP",
                        "price": "2544.0",
                        "position": "down"
                    }
                ]
            }
        }
    ]
}
```
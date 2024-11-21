## Close DCA Bot at market price<br>

**Description:** Closes all deals of the bot at market price and disables the DCA Bot<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/bots/{bot_id}/show</strong>

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
<br>

### Parameter response<br>

{% hint style="info" %}
If successful, the response includes an updated copy of the [DCA Bot](./README.md) entity.
{% endhint %}

### Example request<br>

```
POST /ver1/bots/12345678/panic_sell_all_deals
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 12345678,
    "account_id": 23456789,
    "is_enabled": false,
    "max_safety_orders": 3,
    "active_safety_orders_count": 3,
    "pairs": [
        "USDT_ETH"
    ],
    "strategy_list": [
        {
            "options": {},
            "strategy": "nonstop"
        }
    ],
    "close_strategy_list": [
        {
            "options": {
                "time": "3m",
                "points": "70",
                "time_period": "7",
                "trigger_condition": "greater"
            },
            "strategy": "rsi"
        }
    ],
    "safety_strategy_list": [],
    "max_active_deals": 1,
    "active_deals_count": 1,
    "deletable?": false,
    "created_at": "2024-10-24T21:53:26.994Z",
    "updated_at": "2024-11-08T14:00:43.820Z",
    "trailing_enabled": null,
    "tsl_enabled": false,
    "deal_start_delay_seconds": null,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "disable_after_deals_count": null,
    "deals_counter": null,
    "allowed_deals_on_same_pair": null,
    "easy_form_supported": false,
    "close_deals_timeout": null,
    "url_secret": "bfbaf59b47",
    "take_profit_steps": [],
    "name": "20 oct number 2",
    "take_profit": "0.0",
    "min_profit_percentage": "2.0",
    "base_order_volume": "50.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "base",
    "min_profit_type": "base_order_volume",
    "type": "Bot::SingleBot",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "0.0",
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
    "finished_deals_profit_usd": "10.72",
    "finished_deals_count": "10",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "start_order_type": "limit",
    "active_deals_usd_profit": "0.171958779",
    "reinvesting_percentage": "100.0",
    "risk_reduction_percentage": "0.0",
    "reinvested_volume_usd": null,
    "min_price_percentage": null,
    "max_price_percentage": null,
    "active_deals": [
        {
            "from_currency_id": 0,
            "to_currency_id": 0,
            "id": 2295490942,
            "type": "Deal",
            "bot_id": 15565014,
            "max_safety_orders": 3,
            "deal_has_error": false,
            "account_id": 32199203,
            "active_safety_orders_count": 3,
            "created_at": "2024-11-08T00:15:26.306Z",
            "updated_at": "2024-11-08T14:00:43.895Z",
            "closed_at": null,
            "finished?": false,
            "current_active_safety_orders_count": 2,
            "current_active_safety_orders": 2,
            "completed_safety_orders_count": 1,
            "completed_manual_safety_orders_count": 0,
            "cancellable?": true,
            "panic_sellable?": false,
            "trailing_enabled": null,
            "tsl_enabled": false,
            "stop_loss_timeout_enabled": false,
            "stop_loss_timeout_in_seconds": 0,
            "active_manual_safety_orders": 0,
            "pair": "USDT_ETH",
            "status": "panic_sell_pending",
            "localized_status": "Closing at Market Price",
            "take_profit": "0.0",
            "take_profit_steps": [],
            "base_order_volume": "50.0",
            "safety_order_volume": "15.0",
            "safety_order_step_percentage": "1.0",
            "leverage_type": "not_specified",
            "leverage_custom_value": null,
            "bought_amount": "0.0241",
            "bought_volume": "70.733974311",
            "bought_average_price": "2935.019680954356846473029045643",
            "base_order_average_price": "2941.72879",
            "sold_amount": "0.0",
            "sold_volume": "0.0",
            "sold_average_price": "0",
            "take_profit_type": "base",
            "final_profit": "-0.64854789",
            "martingale_coefficient": "1.0",
            "martingale_volume_coefficient": "1.7",
            "martingale_step_coefficient": "4.0",
            "stop_loss_percentage": "0.0",
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
            "usd_final_profit": "-0.65",
            "actual_profit": "0.171958779",
            "actual_usd_profit": "0.171958779",
            "failed_message": null,
            "reserved_base_coin": "70.733974311",
            "reserved_second_coin": "0.0241",
            "trailing_deviation": "0.2",
            "trailing_max_price": null,
            "tsl_max_price": null,
            "strategy": "long",
            "last_known_position_info": null,
            "min_profit_percentage": "2.0",
            "min_profit_type": "base_order_volume",
            "close_strategy_list": [
                {
                    "options": {
                        "time": "3m",
                        "points": "70",
                        "time_period": "7",
                        "trigger_condition": "greater"
                    },
                    "strategy": "rsi"
                }
            ],
            "safety_strategy_list": [],
            "note": null,
            "add_fundable": false,
            "smart_trade_convertable": false,
            "bot_name": "20 oct number 2",
            "account_name": "Paper Account 1251857",
            "market_type": "spot",
            "current_price": "2945.1",
            "take_profit_price": "2981.95",
            "stop_loss_price": null,
            "actual_profit_percentage": "0.34",
            "reserved_quote_funds": "0.0",
            "reserved_base_funds": "0.0",
            "orderbook_price_currency": "USDT",
            "crypto_widget": null
        }
    ]
}
```
</details>

<details>
<summary>Status: 404 Not Found</summary><br>
```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
</details>
## Cancel DCA Bot<br>

**Description:** Cancels an existing DCA Bot and all active deals using the bot's ID<br>


**Permission:** SMART_TRADES_WRITE<br>
**Security:** SIGNED<br>
<br>

-------- 

<mark style="color:green"> **POST**

<mark style="color:gree"> **/ver1/bots/{bot_id}/cancel_all_deals**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**bot_id** | `integer`| Yes |  | Unique 3Commas ID DCA Bot entity |

<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes an updated copy of the [DCA Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST /ver1/bots/15564495/cancel_all_deals
```

<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "id": 15564495,
    "account_id": 32199203,
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
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "max_active_deals": 1,
    "active_deals_count": 1,
    "deletable?": false,
    "created_at": "2024-10-24T16:16:36.536Z",
    "updated_at": "2024-11-08T15:00:28.572Z",
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
    "url_secret": "018ed5c6a1",
    "take_profit_steps": [],
    "name": "ETH/USDT Classic trading",
    "take_profit": "1.0",
    "min_profit_percentage": "0.0",
    "base_order_volume": "20.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "base",
    "min_profit_type": null,
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
    "finished_deals_profit_usd": "4.72",
    "finished_deals_count": "23",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "start_order_type": "limit",
    "active_deals_usd_profit": "-0.26951152",
    "reinvesting_percentage": "100.0",
    "risk_reduction_percentage": "0.0",
    "reinvested_volume_usd": null,
    "min_price_percentage": null,
    "max_price_percentage": null,
    "active_deals": [
        {
            "from_currency_id": 0,
            "to_currency_id": 0,
            "id": 2295607613,
            "type": "Deal",
            "bot_id": 15564495,
            "max_safety_orders": 3,
            "deal_has_error": false,
            "account_id": 32199203,
            "active_safety_orders_count": 3,
            "created_at": "2024-11-08T14:14:23.584Z",
            "updated_at": "2024-11-08T15:00:28.666Z",
            "closed_at": null,
            "finished?": false,
            "current_active_safety_orders_count": 2,
            "current_active_safety_orders": 2,
            "completed_safety_orders_count": 1,
            "completed_manual_safety_orders_count": 0,
            "cancellable?": false,
            "panic_sellable?": false,
            "trailing_enabled": false,
            "tsl_enabled": false,
            "stop_loss_timeout_enabled": false,
            "stop_loss_timeout_in_seconds": 0,
            "active_manual_safety_orders": 0,
            "pair": "USDT_ETH",
            "status": "cancel_pending",
            "localized_status": "Cancel pending",
            "take_profit": "1.0",
            "take_profit_steps": [],
            "base_order_volume": "20.0",
            "safety_order_volume": "15.0",
            "safety_order_step_percentage": "1.0",
            "leverage_type": "not_specified",
            "leverage_custom_value": null,
            "bought_amount": "0.0128",
            "bought_volume": "37.562613088",
            "bought_average_price": "2934.5791475",
            "base_order_average_price": "2946.19325",
            "sold_amount": "0.0",
            "sold_volume": "0.0",
            "sold_average_price": "0",
            "take_profit_type": "base",
            "final_profit": "-0.2691279",
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
            "usd_final_profit": "-0.27",
            "actual_profit": "-0.26951152",
            "actual_usd_profit": "-0.26951152",
            "failed_message": null,
            "reserved_base_coin": "37.562613088",
            "reserved_second_coin": "0.0128",
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
            "add_fundable": false,
            "smart_trade_convertable": false,
            "bot_name": "ETH/USDT Classic trading",
            "account_name": "Testing Account",
            "market_type": "spot",
            "current_price": "2916.44",
            "take_profit_price": "2954.11",
            "stop_loss_price": null,
            "actual_profit_percentage": "-0.62",
            "reserved_quote_funds": "0.0",
            "reserved_base_funds": "0.0",
            "orderbook_price_currency": "USDT",
            "crypto_widget": null
        }
    ]
}
```
</details>
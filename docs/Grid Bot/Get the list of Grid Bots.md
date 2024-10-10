## Get the list of Grid Bots

**Description:** Returns the list of Grid Bots. Use the body parameters to filter results<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/grid_bots**

-------- 

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `string` | No |	| Unique 3Commas ID for this Grid Bot entity. Use a comma-separated list to specify multiple account_id values |
|**state**  | `string` | No |`enabled`<br>`disabled`| Return entities that match the specified state. <br>Use `enabled` to get active bots and `disabled` to get inactive bots |
|**sort_by**  | `string` | No |	| Specifies the field by which to sort the response |
|**sort_direction**  | `string` | No | `ASC`<br>`DESC` | Set the direction of order.<br>Default: `DESC` |
|**limit**  | `integer` | No |	Minimum: `1`<br> Maximum: `1000`| Quantity of the records you want to get in response.<br>Default: `10`|
|**offset**  | `integer` | No |	| Used to specify the starting point for a set of records to return in a paginated list.<br>Default: `0` |
|**from**  | `string` | No |	| Parameter for a filter by created date |
|**base**  | `string` | No |	| Return entities that match the base currency of the trading pair (e.g., `BTC` for BTC/USDT). |
|**quote**  | `string` | No |	| Return entities that match the quote currency of the trading pair (e.g., `USDT` for BTC/USDT) |


<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes an array of [Grid Bot](./README.md) entities.{% endhint %}

<br>
<br>


### Example request<br>

```json
GET  /ver1/grid_bots?account_ids[]=32833909&account_ids[]32864603
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
[
    {
        "id": 2338357,
        "account_id": 32833909,
        "account_name": "My Binance",
        "is_enabled": true,
        "grids_quantity": "81",
        "created_at": "2024-10-03T19:53:35.530Z",
        "updated_at": "2024-10-07T23:04:03.759Z",
        "strategy_type": "manual",
        "upper_stop_loss_enabled": false,
        "lower_stop_loss_enabled": false,
        "note": "New comment about this Grid Bot",
        "editable": true,
        "lower_price": "0.0175",
        "lower_stop_loss_price": null,
        "lower_stop_loss_action": "stop_bot",
        "upper_price": "0.024073",
        "upper_stop_loss_price": null,
        "upper_stop_loss_action": "stop_bot",
        "quantity_per_grid": "20.0",
        "leverage_type": "cross",
        "leverage_custom_value": "10.0",
        "name": "VETUSDT/BNFCR",
        "pair": "BNFCR_VETUSDT",
        "start_price": "0.022395",
        "grid_price_step": "1.00399408015751539830711995",
        "current_profit": "2.8432585523697479",
        "current_profit_usd": "2.8432585523697479",
        "total_profits_count": "23",
        "bought_volume": "0.0",
        "sold_volume": "0.0",
        "profit_percentage": "0.177716336029358217871680786990536",
        "current_price": "0.022681",
        "max_active_buy_lines": "81",
        "max_active_sell_lines": "81",
        "order_currency_type": "quote",
        "profit_currency_type": "quote",
        "trailing_up_enabled": "true",
        "grid_type": "geometric",
        "investment_base_currency": "830.806297511735138952353258838",
        "investment_quote_currency": "200.0",
        "unrealized_profit_loss": "0.14717986",
        "current_profit_loss": "2.9904384123697479",
        "current_profit_loss_percent": "0.1869157334723778284605040877565797",
        "orderbook_price_currency": "BNFCR",
        "expansion_down_enabled": "false",
        "expansion_down_stop_price": null,
        "grid_lines": [
            {
                "id": 256427646,
                "price": "0.01957",
                "side": "buy",
                "order_placed": false
            },
            ...
            {
                "id": 256427674,
                "price": "0.021884",
                "side": "buy",
                "order_placed": true
            }
        ]
    },
    {
        "id": 2340692,
        "account_id": 32864603,
        "account_name": "My Gate.io",
        "is_enabled": false,
        "grids_quantity": "10",
        "created_at": "2024-10-07T19:49:05.146Z",
        "updated_at": "2024-10-07T19:49:05.266Z",
        "strategy_type": "manual",
        "upper_stop_loss_enabled": false,
        "lower_stop_loss_enabled": false,
        "note": null,
        "editable": true,
        "lower_price": "0.11016",
        "lower_stop_loss_price": null,
        "lower_stop_loss_action": "stop_bot",
        "upper_price": "0.15161",
        "upper_stop_loss_price": null,
        "upper_stop_loss_action": "stop_bot",
        "quantity_per_grid": "32.0",
        "leverage_type": "not_specified",
        "leverage_custom_value": "10.0",
        "name": "DOGE_USDT/USDT",
        "pair": "USDT_DOGE_USDT",
        "start_price": null,
        "grid_price_step": "0.004605555555555555555555555555555555555555556",
        "current_profit": "0.0",
        "current_profit_usd": "0.0",
        "total_profits_count": "0",
        "bought_volume": "0.0",
        "sold_volume": "0.0",
        "profit_percentage": "0.0",
        "current_price": "0.10658",
        "max_active_buy_lines": "10",
        "max_active_sell_lines": "10",
        "order_currency_type": "base",
        "profit_currency_type": "quote",
        "trailing_up_enabled": "false",
        "grid_type": "arithmetic",
        "investment_base_currency": "0.0",
        "investment_quote_currency": "0.0",
        "unrealized_profit_loss": "0.0",
        "current_profit_loss": null,
        "current_profit_loss_percent": null,
        "orderbook_price_currency": "USDT",
        "expansion_down_enabled": "false",
        "expansion_down_stop_price": null,
        "grid_lines": [
            {
                "id": 256564760,
                "price": "0.11016",
                "side": null,
                "order_placed": false
            },
            ...
            {
                "id": 256564761,
                "price": "0.11477",
                "side": "sell",
                "order_placed": false
            }
        ]
    },
    {
        "id": 2340683,
        "account_id": 32864603,
        "account_name": "My Gate.io",
        "is_enabled": true,
        "grids_quantity": "81",
        "created_at": "2024-10-07T19:25:19.985Z",
        "updated_at": "2024-10-08T06:09:06.596Z",
        "strategy_type": "manual",
        "upper_stop_loss_enabled": false,
        "lower_stop_loss_enabled": false,
        "note": null,
        "editable": true,
        "lower_price": "0.10709",
        "lower_stop_loss_price": null,
        "lower_stop_loss_action": "stop_bot",
        "upper_price": "0.14743",
        "upper_stop_loss_price": null,
        "upper_stop_loss_action": "stop_bot",
        "quantity_per_grid": "1.525",
        "leverage_type": "cross",
        "leverage_custom_value": "2.0",
        "name": "DOGE_USDT/USDT",
        "pair": "USDT_DOGE_USDT",
        "start_price": "0.11039",
        "grid_price_step": "1.00400404340336061876774988824634211028445743211701796",
        "current_profit": "0.014301075",
        "current_profit_usd": "0.014301075",
        "total_profits_count": "6",
        "bought_volume": "0.0",
        "sold_volume": "0.0",
        "profit_percentage": "0.0117628032189822567750298571790476629149161",
        "current_price": "0.10658",
        "max_active_buy_lines": "81",
        "max_active_sell_lines": "81",
        "order_currency_type": "quote",
        "profit_currency_type": "quote",
        "trailing_up_enabled": "false",
        "grid_type": "geometric",
        "investment_base_currency": "95.373316645187509287670722538",
        "investment_quote_currency": "0.0",
        "unrealized_profit_loss": "0.0",
        "current_profit_loss": null,
        "current_profit_loss_percent": null,
        "orderbook_price_currency": "USDT",
        "expansion_down_enabled": "false",
        "expansion_down_stop_price": null,
        "grid_lines": [
            {
                "id": 256574543,
                "price": "0.1084",
                "side": "sell",
                "order_placed": false
            },
           ... 
            {
                "id": 256563805,
                "price": "0.11283",
                "side": "sell",
                "order_placed": true
            }
        ]
    }
]
</details>
<details>
<summary>Status: 500 Internal Server Error</summary><br>
{
    "error": "unknown_error",
    "error_description": "Unknown error occurred#JSON::ParserError"
}
</details>
## Rename exchange account<br>

**Description:** Updates a name for the exchange account entity<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/{account_id}/rename**

----------
<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**name**  | `integer` | Yes |  | New name for this exchange account |

<br>
<br>

### Parameters response<br>
{% hint style="info" %}
If successful, the response includes a copy of the updated [Account](./README.md) entity.
{% endhint %}

### Example request<br>

```json
POST  /ver1/accounts/11223344/rename?name=new%20name
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 11223344,
    "auto_balance_period": 12,
    "auto_balance_portfolio_id": null,
    "auto_balance_currency_change_limit": null,
    "autobalance_enabled": false,
    "hedge_mode_available": false,
    "hedge_mode_enabled": false,
    "is_locked": false,
    "smart_trading_supported": true,
    "smart_selling_supported": true,
    "available_for_trading": {},
    "stats_supported": true,
    "trading_supported": true,
    "market_buy_supported": true,
    "market_sell_supported": true,
    "conditional_buy_supported": true,
    "bots_allowed": true,
    "bots_ttp_allowed": true,
    "bots_tsl_allowed": true,
    "gordon_bots_available": true,
    "multi_bots_allowed": true,
    "created_at": "2024-08-29T14:16:10.830Z",
    "updated_at": "2024-09-26T12:28:43.736Z",
    "last_auto_balance": null,
    "fast_convert_available": true,
    "grid_bots_allowed": true,
    "api_key_invalid": false,
    "market_icon": "https://3commas.io/img/exchanges/bybit.png",
    "deposit_enabled": false,
    "include_in_summary": true,
    "supported_market_types": [
        "spot"
    ],
    "primary_display_currency_profit_percentage": {
        "currency": "USD",
        "amount": "-0.16"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "-0.05401174500695803439792756475832698874790454537925"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "1.3663"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "0.44407084083148008943838068987130264072722422962415"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "32.94560107758854196560207243524167301125209545462075"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": -0.05401174500695803
    },
    "available_include_in_summary": true,
    "api_key": "gyTAiGCgRe1hctsA1J",
    "name": "new name",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.000510528457085299728982472704546505326572673945",
    "usd_amount": "32.94560107758854196560207243524167301125209545462075",
    "day_profit_btc": "-0.00000158799824032955015420480378682800676158509741104",
    "day_profit_usd": "0.44407084083148008943838068987130264072722422962415",
    "day_profit_btc_percentage": "-0.31",
    "day_profit_usd_percentage": "1.37",
    "btc_profit": "-0.000033044765435689271017527295453494673427326055",
    "usd_profit": "-0.05401174500695803439792756475832698874790454537925",
    "usd_profit_percentage": "-0.16",
    "btc_profit_percentage": "-6.08",
    "total_btc_profit": "-3.304476543568927e-05",
    "total_usd_profit": "-0.05401174500695803",
    "pretty_display_type": "BybitSpot",
    "exchange_name": "Bybit Spot",
    "market_code": "bybit_spot",
    "api_keys_state": "ok"
}

```
</details><br>
<details>
<summary>Status: 401 Unauthorized</summary><br>
```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```
<details>

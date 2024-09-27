## Deposit or withdraw networks info<br>

**Description:**  **TBD**<br>

{% hint style="info" %}
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
{% endhint %}
<br>

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

----------

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/accounts/{account_id}/networks_info**

----------

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer`| Yes |  | Unique 3Commas ID for this exchange account entity |

<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**purpose**  | `integer`| No | `deposit`, `withdraw` | Filter currencies with deposit or withdraw enabled |

<br>
<br>

### Parameters response<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|** **  | `integer`| Yes |  |  |

<br>
<br>

### Example request<br>

```
/ver1/accounts/12345678/networks_info
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json

    {
        "currency": "BTC",
        "name": "Bitcoin",
        "deposit_enable": true,
        "withdraw_enable": true,
        "network_list": [
            {
                "network": "BNB",
                "default": false,
                "deposit_enable": false,
                "withdraw_enable": false,
                "deposit_tip": "Wallet Maintenance, Deposit Suspended",
                "withdraw_tip": "Wallet Maintenance, Withdrawal Suspended",
                "special_tip": "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
                "network_name": "BNB Beacon Chain (BEP2)",
                "network_url": null,
                "address_regexp": "^(bnb1)[0-9a-z]{38}$",
                "withdraw_fee": "0.0000093",
                "withdraw_min": "0.000019",
                "withdrawMax": "10000000000",
                "withdrawMultiple": "0.00000001",
                "memo_regexp": "^[0-9A-Za-z\\-_]{1,120}$",
                "label": "MEMO/Tag",
                "require_address_tag": false
            },
            {
                "network": "BSC",
                "default": false,
                "deposit_enable": true,
                "withdraw_enable": true,
                "deposit_tip": "",
                "withdraw_tip": "",
                "special_tip": "",
                "network_name": "BNB Smart Chain (BEP20)",
                "network_url": null,
                "address_regexp": "^(0x)[0-9A-Fa-f]{40}$",
                "withdraw_fee": "0.000011",
                "withdraw_min": "0.000022",
                "withdrawMax": "10000000000",
                "withdrawMultiple": "0.00000001",
                "memo_regexp": "",
                "label": "",
                "require_address_tag": false
            },
            {
                "network": "BTC",
                "default": true,
                "deposit_enable": true,
                "withdraw_enable": true,
                "deposit_tip": "",
                "withdraw_tip": "",
                "special_tip": "",
                "network_name": "Bitcoin",
                "network_url": null,
                "address_regexp": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^[(bc1q)|(bc1p)][0-9A-Za-z]{37,62}$",
                "withdraw_fee": "0.0004",
                "withdraw_min": "0.0008",
                "withdrawMax": "10000000000",
                "withdrawMultiple": "0.00000001",
                "memo_regexp": "",
                "label": "",
                "require_address_tag": false
            }
        ]
    },
...
```
</details><br>
<details>
<summary>Status: 400 Bad Request</summary><br>
```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "currency": [
            "is missing"
        ],
        "network": [
            "is missing"
        ]
    }
}
```
</details>
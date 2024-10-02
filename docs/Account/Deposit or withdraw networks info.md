## Deposit or withdraw networks info<br>

**Description:**  Shows information about the currency and each supported network for deposits and withdrawals available on the exchange account<br>

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

| Name | Type |	Description|
|------|------|------------|
|**currency**  | `integer`|  The name of currency |
|**name**  | `integer`| The full name of the currency  |
|**deposit_enable**  | `boolean` | Indicates whether currency deposit is available for this account |
|**withdraw_enable**  | `boolean` | Indicates whether currency withdrawal is available for this account |
|**network_list[network]**  | `string`| The name of network |
|**network_list[default]**  | `boolean`| Indicates whether this network is the main one for deposits and withdrawals  |
|**network_list[deposit_enable]**  | `boolean`| Indicates whether currency deposit is available for this network |
|**network_list[withdraw_enable]**  | `boolean`| Indicates whether currency withdrawal is available for this network  |
|**network_list[deposit_tip]** | `string` or `null`| Tip or notice related to deposits |
|**network_list[withdraw_tip]** | `string` or `null` | Tip or notice related to withdrawals |
|**network_list[special_tip]** | `string` or `null`| Additional information regarding specific network requirements |
|**network_list[network_name]** | `string` or `null`| The full name of the network |
|**network_list[network_url]** | `string` or `null`| The URL of the network |
|**network_list[address_regexp]**  | `string` or `null` |  Regular expression (regex) used to validate Address|
|**network_list[withdraw_fee]**  | `string` or `null` | Fee charged for withdrawals |
|**network_list[withdraw_min]**  | `string` or `null` | Minimum withdrawal amount |
|**network_list[withdrawMax]**  | `string` or `null` | The maximum possible withdrawal amount |
|**network_list[withdrawMultiple]**  | `string` or `null`| Minimum increment for withdrawal amounts |
|**network_list[memo_regexp]**  | `string` or `null`| Regular expression (regex) used to validate MEMO |
|**network_list[label]**  | `string` or `null`| Label for the additional field (e.g., `MEMO` or `Tag`) |
|**network_list[require_address_tag]**  | `boolean`| Specifies whether an additional field is required when depositing or withdrawing.<br> For example, `MEMO` or `Tag` |

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
</details><br>
<details>
<summary>Status: 403 Forbidden</summary><br>
```json
{
    "error": "Forbidden. Unavailable for this account."
}
```
</details>
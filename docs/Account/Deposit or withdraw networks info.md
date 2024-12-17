## Deposit or withdraw networks info

**Description:**  Shows information about the currency and each supported network for deposits and withdrawals available on the exchange account

:::info
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
:::

**Permission:**  ACCOUNTS_READ
**Security:** SIGNED

----------

<mark style={{ color: "blue"}}>GET</mark>

<mark style={{ color: "blue"}}>`/ver1/accounts/{account_id}/networks_info`</mark>

----------

### Path Parameter

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this exchange account entity

### Query Parameter

   purpose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filter currencies with <code>deposit</code> or <code>withdraw</code> enabled

### Parameters response

| Name | Type | Description|
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
|**network_list[require_address_tag]**  | `boolean`| Specifies whether an additional field is required when depositing or withdrawing. For example, `MEMO` or `Tag` |

### Example request

```
GET /ver1/accounts/12345678/networks_info
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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

</details>
<details>
<summary>Status: 400 Bad Request</summary>
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
<details>
<summary>Status: 403 Forbidden</summary>
```json
{
    "error": "Forbidden. Unavailable for this account."
}
```
</details>

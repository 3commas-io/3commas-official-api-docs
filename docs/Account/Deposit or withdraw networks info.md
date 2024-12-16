## Deposit or withdraw networks info<br>
<br>

**Description:** Shows information about the currency and each supported network for deposits and withdrawals available on the exchange account<br>

{% hint style="info" %}
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
{% endhint %}
<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/accounts/{account_id}/networks_info</code>

</blockquote>

<br>


### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p><br>

### Query Parameter<br>
<p>
   <strong>purpose</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Filter currencies with <code>deposit</code> or <code>withdraw</code> enabled
</p>
<br>

### Parameters response<br>
<p>
   <strong>currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The name of currency
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The full name of the currency
</p>
<p>
   <strong>deposit_enable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether currency deposit is available for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>withdraw_enable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether currency withdrawal is available for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>withdraw_enable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether currency withdrawal is available for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>network_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   The name of network
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>network</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name of network
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>default</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether this network is the main one for deposits and withdrawals (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>deposit_enable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether currency deposit is available for this network (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdraw_enable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether currency withdrawal is available for this network (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>deposit_tip</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tip or notice related to deposits
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdraw_tip</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tip or notice related to withdrawals
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>special_tip</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additional information regarding specific network requirements
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>network_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The full name of the network
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>network_url</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL of the network
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>address_regexp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regular expression (regex) used to validate Address
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdraw_fee</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fee charged for withdrawals
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdraw_min</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minimum withdrawal amount
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdrawMax</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The maximum possible withdrawal amount
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>withdrawMultiple</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minimum increment for withdrawal amounts
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>memo_regexp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regular expression (regex) used to validate MEMO
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>label</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Label for the additional field (e.g., <code>MEMO</code> or <code>Tag</code>)
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>require_address_tag</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifies whether an additional field is required when depositing or withdrawing.<br> For example, <code>MEMO</code> or <code>Tag</code>
</p>
<br>

### Example request<br>

```
GET /ver1/accounts/12345678/networks_info
```
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
</details>
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
<details>
<summary>Status: 403 Forbidden</summary><br>

```json
{
    "error": "Forbidden. Unavailable for this account."
}
```
</details>
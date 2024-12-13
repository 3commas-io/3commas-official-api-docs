## All market pairs
<code><mark style="color:blue">GET</mark></code> <code>/ver1/accounts/market_pairs</strong></code>

**Description:** The method allows getting the list of pairs is supported by exchange in 3Commas' format

{% hint style="success" %}
This is an endpoint that does not need authentication
{% endhint %}

##### Query Parameters
| Name        | Type    | Mandatory | Description                                 |
|-------------|---------|-----------|---------------------------------------------|
| market_code | integer | Yes       | Unique exchange code in the 3Commas system  |

{% hint style="info" %}
Use endpoint [Supported markets list](/docs/Market%20data/Supported%20markets%20list.md) to get value for parameter <code>market_code</code>.
{% endhint %}

##### Example request

```json
GET /ver1/accounts/market_pairs?market_code=binance_us
```

##### Example Response and errors
<details>
<summary>Status: 200 OK</summary>

```json
[
"BTC_ETH",
"BTC_LTC",
"BTC_BNB",
"BTC_NEO",
"ETH_QTUM",
"ETH_EOS",
"ETH_SNT",
"ETH_BNT",
"BTC_GAS",
"ETH_BNB",
"USDT_BTC",
...
]
```
</details>

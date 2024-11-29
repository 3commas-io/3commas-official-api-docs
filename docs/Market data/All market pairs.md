## All market pairs<br>

**Description:** The method allows getting the list of pairs is supported by exchange in 3Commas' format<br>

{% hint style="success" %}
This is an endpoint that does not need authentication
{% endhint %}
<br>

-------- 

<mark style="color:blue"><strong>GET</strong>

<mark style="color:black">/ver1/accounts/market_pairs

-------- 
<br>

### Query Parameter<br>
<p>
   <strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique exchange code in the 3Commas system
</p>
<br>

{% hint style="info" %}
Use endpoint [Supported markets list](/docs/Market%20data/Supported%20markets%20list.md) to get value for parameter <code>market_code</code> in 3Commas.
{% endhint %}

<br>

### Example request<br>

```json
GET /ver1/accounts/market_pairs?market_code=binance_us
```
<br>


### Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

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
]
```
</details>


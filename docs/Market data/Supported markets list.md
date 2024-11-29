## Supported markets list<br>
<br>

**Description:** Returns the list of markets supported by 3Commas<br>

{% hint style="success" %}
This is an endpoint that does not need authentication
{% endhint %}
<br>

------

<mark style="color:blue;background-color:white"> <strong>GET</strong>

<mark style="color:blue;background-color:white"><strong>/ver1/accounts/market_list</strong>

------
<br>

### Request parameters<br>

```json
NONE
```
<br>

### Response parameters<br>

<p>
   <strong>market_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Name of the exchange in the 3Commas system 
</p>
<p>
   <strong>market_url</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The referral link to the exchange website
</p>
<p>
   <strong>market_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The URL link to the icon for this exchange
</p>
<p>
   <strong>help_link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The public URL to the help page with detailed instructions on connecting the exchange
</p>
<p>
   <strong>form_fields</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Contains required and optional fields necessary for connecting to the exchange
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>required</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows required fields necessary for connecting to the exchange
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>field</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The parameter needs to connect a new exchange account.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: <code>api_key</code>; <code>secret</code>
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>localized_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display name of the field, localized for user convenience
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>optional</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]	</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows optinal fields need for connecting to the exchange
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>field</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The parameter needs to connect a new exchange account.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: <code>api_key</code>; <code>secret</code>
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>localized_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display name of the field, localized for user convenience
</p>
<p>
   <strong>connection_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Shows how many fields use to connect the exchange or the wallet
</p>
<p>
   <strong>available_connection_flows</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   Available exchange connection types in 3Commas<br>
   <details><summary><em>Allowed value</em></summary>
      <dl>
       <li><strong>form</strong> - connection through a web form option;
       <li><strong>fast_connect</strong> - quick connection option;
    </dl>
   </details>
</p>
<p>
   <strong>third_party_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   This exchange provides a service to connect third-party apps.<br><code>false</code> - if the exchange does not support
</p>
<p>
   <strong>trusted_ips</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[string]</code><br>
   The list of IP addresses needs to be whitelisted on the exchange's website for 3Commas to work with the exchange
</p>
<p>
   <strong>trusted_ips_input_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Input type for trusted IP addresses
</p>
<p>
   <strong>fast_connect_action_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Name of the exchange for fast connection option in the 3Commas system
</p>
<br>
<br>


### Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

```json
[
   {
      "market_name": "Coinbase Advanced",
      "market_url": "http://coinbase-consumer.sjv.io/eKE3GD",
      "market_icon": "https://3commas.io/img/exchanges/gdax.png",
      "market_trust_message": "3Commas will not have access to transfer or withdraw your assets. Each exchange connects with encrypted API keys",
      "default_trust_message": "3Commas will not have access to transfer or withdraw your assets. Each exchange connects with encrypted API keys",
      "help_link": "https://help.3commas.io/en/articles/3822851",
      "market_code": "coinbase_advanced",
      "form_fields": {
         "required": [
            {
               "field": "secret",
               "localized_name": "API Secret:"
            },
            {
               "field": "api_key",
               "localized_name": "API Key:"
            }
         ],
         "optional": []
      },
      "connection_type": "fields",
      "available_connection_flows": [
         "form"
      ],
      "optional": [
        
      ]
    },
    "connection_type": "fields",
    "available_connection_flows": [
      "fast_connect",
      "form"
    ],
    "third_party_allowed": false,
    "trusted_ips": [
      "193.31.111.100",
      "193.31.111.158",
      "193.31.111.43",
      "193.31.111.6"
    ],
    "trusted_ips_input_type": "inline",
    "fast_connect_action_name": "binance"
  },
  {
    "market_name": "OKX",
    "market_url": "https://app.3commas.io/users/auth/okx_auth_reg?redirect_to=https%3A%2F%2Fapp.3commas.io%2Faccounts",
    "market_icon": "https://3commas.io/img/exchanges/okex.png",
    "market_trust_message": "1. Log in to your exchange account and go to API Settings \n2. Select third-party apps and choose 3Commas \n3. Paste generated data in inputs below.",
    "default_trust_message": "3Commas will not have access to transfer or withdraw your assets. Each exchange connects with encrypted API keys",
    "help_link": "https://help.3commas.io/en/articles/3109057",
    "market_code": "okex",
    "form_fields": {
      "required": [
        {
          "field": "secret",
          "localized_name": "API Secret:"
        },
        {
          "field": "api_key",
          "localized_name": "API Key:"
        },
        {
          "field": "passphrase",
          "localized_name": "Passphrase:"
        }
      ],
      "trusted_ips_input_type": "inline",
      "fast_connect_action_name": "coinbase_advanced"
   },
   { ... 
   },
]
```
<details>
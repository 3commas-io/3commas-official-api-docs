## Supported markets list<br>

**Description:** Returns the list of markets supported by 3Commas<br>

**Permission:** NONE<br>
**Security:** NONE<br>
<br>

------

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white">**/ver1/accounts/market_list**

------
<br>

### Request Parameters<br>

```json
NONE
````

<br>
<br>

### Response Parameters <br>

| Name | Type |	 Description|
|------|------|------------|
|**market_name** | `string` | Name of the exchange in the 3Commas system |
|**market_url** | `integer`	| The referral link to the exchange website |
|**market_icon**  | `integer`	| Icon of the exchange |
|**help_link** | `integer`	| The public URL to the help page with detailed instructions on connecting the exchange |
|**market_code**  | `integer`	| Unique exchange code in the 3Commas system|
|**form_fields[required][][field]**  | `integer`	| The parameter needs to connect a new exchange account [?] |
|**form_fields[required][][localized_name]**  | `integer`	| The parameter needs to connect a new exchange account [?] |
|**form_fields[optional]** | `integer`	| The parameter needs to connect a new exchange account |
|**connection_type** | `integer`	| Shows how many fields use to connect the exchange or the wallet |
|**available_connection_flows** | `integer`	| Available exchange connection types in 3Commas: <br>`form` - connection through a web form option <br>`fast_connect` - quick connection option |
|**third_party_allowed** | `boolean`	| This exchange provides a service to connect third-party apps.<br>`false` if the exchange does not support. |
|**trusted_ips** | `integer`	| The list of IP addresses needs to be whitelisted on the exchange's website for 3Commas to work with the exchange  |
|**trusted_ips_input_type** | `integer`	| Input type for trusted IP addresses. |
|**fast_connect_action_name** | `string` | Name of the exchange for fast connection option in the 3Commas system |

<br>
<br>


### Example Response and errors<br>


<details>
<summary>Status: 200 OK</summary><br>
<br>

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
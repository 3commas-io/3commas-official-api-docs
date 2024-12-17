## Supported markets list

**Description:** Returns the list of markets supported by 3Commas

:::tip
This is an endpoint that does not need authentication
:::

<blockquote>
<code><mark style={{color: "blue"}}> GET </mark></code>

<code>/ver1/accounts/market_list</code>
</blockquote>

### Request parameters

```json
NONE
```

### Response parameters

   market_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Name of the exchange in the 3Commas system

   market_url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The referral link to the exchange website

   market_icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The URL link to the icon for this exchange

   help_link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The public URL to the help page with detailed instructions on connecting the exchange

   form_fields&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Contains required and optional fields necessary for connecting to the exchange

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows required fields necessary for connecting to the exchange

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;field&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The parameter needs to connect a new exchange account.
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: <code>api_key</code>; <code>secret</code>

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localized_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display name of the field, localized for user convenience

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object] </code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows optinal fields need for connecting to the exchange

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;field&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The parameter needs to connect a new exchange account.
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: <code>api_key</code>; <code>secret</code>

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localized_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display name of the field, localized for user convenience

   connection_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Shows how many fields use to connect the exchange or the wallet

   available_connection_flows&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   Available exchange connection types in 3Commas
   <details>
   <summary>Allowed value</summary>
       - form - connection through a web form option;
       - fast_connect - quick connection option;
   </details>

   third_party_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   This exchange provides a service to connect third-party apps.<code>false</code> - if the exchange does not support

   trusted_ips&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[string]</code>
   The list of IP addresses needs to be whitelisted on the exchange's website for 3Commas to work with the exchange

   trusted_ips_input_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Input type for trusted IP addresses

   fast_connect_action_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Name of the exchange for fast connection option in the 3Commas system

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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

</details>

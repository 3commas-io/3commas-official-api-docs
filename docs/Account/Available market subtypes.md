## Available market subtypes

**Description:** Returns the available account types for connection by user for specific exchange and pair of keys

{% hint style="info" %}
This endpoint supports to create SmartTrade is available for accounts where the parameter `smart_trading_supported` is `true`.
{% endhint %}

Permission: NONE

Security: SIGNED



----------

<mark style="color:green;background-color:white" > **GET**

<mark style="color:green;background-color:white" > **/ver1/accounts/types_to_connect**

----------


**Parameters request**

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`type`**  | <mark style="color:grey;background-color:white">string	| Yes |  | 3Commas of exchange code entity to work with |
|**`name`**  | <mark style="color:grey;background-color:white">string	| Yes |  | Name for exchange account |
|**`api_key`**  | <mark style="color:grey;background-color:white">string	| No |  | ID of the exchange account entity |
|**`secret`**  | <mark style="color:grey;background-color:white">string	| No |  | ID of the exchange account entity |
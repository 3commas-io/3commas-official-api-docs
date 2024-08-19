## Reduce funds for SmartTrade

**Description:** Shows information about available amount to reduce funds.

{% hint style="warning" %}
The endpoint is available for SmartTrades with status `waiting_targets`. Use the endpoint Get SmartTrade to check a status SmartTrade.
{% endhint %}

Permission: SMART_TRADES_WRITE

Security: SIGNED

**Path Parameters**

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`id`  | integer	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |

**Parameter response**

`TBD`

{% code title="index.js" overflow="wrap" lineNumbers="true" %}

```javascript
‌import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, window.document.getElementById('root'));
```

{% endcode %}
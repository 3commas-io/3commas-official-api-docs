## Edit Grid Bot<br>

**Description:**
Updates a existing Grid Bot using its ID<br>

**Permission:** SMART_TRADES_WRITE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:green;background-color:white"> **PATCH**

<mark style="color:green;background-color:white"> **/ver1/grid_bots/manual**

-------- 

<br>
<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**name**  | `integer`	| No | `[1 ... 40]` characters	| Name of Grid Bot. Stores a name that is user-defined for the Grid Bot. If the user doesn't specify the name, the system will generate one automatically |

<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of the updated [Grid Bot](./README.md) entity.
{% endhint %}


### Example request<br>
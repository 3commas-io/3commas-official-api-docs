## Get required balances to start bot<br>

**Description:** <br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/grid_bots/{id}/required_balances**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
| **missing_balance[base][quantity]** | `string` |  |
| **missing_balance[base][currency]** | `string` |  |
| **missing_balance[quote][quantity]** | `string` |  |
| **missing_balance[quote][currency]** | `string` |  |
| **required_balance[base][quantity]** | `string` |  |
| **required_balance[base][currency]** | `string` |  |
| **required_balance[quote][quantity]** | `string` |  |
| **required_balance[quote][currency]** | `string` |  |
| **need_balancing** | `boolean`|  |
| **balancing_available** | `boolean`|  |
| **necessary_quantities[quantity]** | `string`|  |
| **necessary_quantities[currency]** | `string`|  |

### Example Request<br>

```
GET /ver1/grid_bots/12345678/required_balances
```

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
```json
{
   "missing_balance": {
      "base": {
         "quantity": "0.0",
         "currency": "BTC"
      },
      "quote": {
         "quantity": "8500.0",
         "currency": "USDT"
      }
   },
   "required_balance": {
      "base": {
         "quantity": "2.0",
         "currency": "BTC"
      },
      "quote": {
         "quantity": "18500.0",
         "currency": "USDT"
      }
   },
   "need_balancing": true,
   "balancing_available": true,
   "necessary_quantities": {
      "quantity": "8500.0",
      "currency": "USDT"
   }
}
```
</details>
<br>

<details>
<summary>Status: 404 Not Found</summary><br>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
</details>
<br>
<details>
<summary>Status: 500 Internal Server Error</summary><br>

```json
{
    "error": "grid_lines_not_marked",
    "error_description": "Grid lines empty or not marked"
}
```
</details>
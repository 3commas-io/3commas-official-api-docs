## Grid Bot Events<br>

**Description:** Getting a list of events by Grid Bot<br>

Permission: BOTS_READ<br>
Security: SIGNED<br>
<br>

-------- 

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/grid_bots/{id}/events**
-------- 
<br>
<br>

### Path Parameters

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

### Query Parameters

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**page**  | `integer` | Yes |	`1`| Page number for pagination |
|**per_page**  | `integer`	| Yes | Minimum: `1`, Maximum: `100` | Quantity of records on one page.<br>Default: `100` |


### Parameters response
| Name | Type | Description|
|------|------|-----------------|
|**message**  | integer | Name of event |
|**created_at**  | integer | Create date of event |

<br>
<br>

### Example Request**<br>

```json

```
<br>
<br>

### Example Response and errors<br>

<details>

<summary>Status: 201 Created</summary><br>

```json
[{
message: Bot Message
created_at: 2021-07-08 08:08:08
},
{
message: Bot Message
created_at: 2021-07-08 08:08:08
},
{
message: Bot Message
created_at: 2021-07-08 08:08:08
},
...
]
```

</details>
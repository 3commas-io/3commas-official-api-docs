## Grid Bot Events##

**Description:** Getting a list of events by Grid Bot

Permission: BOTS_READ

Security: SIGNED

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/grid_bots/{id}/events**

**Query Parameters**

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**`id`**  | integer | Yes |	| Unique 3Commas ID for this Grid Bot entity |
|**`page`**  | integer | Yes |	`1`| Page number for pagination |
|**`per_page`**  | integer	| Yes | `100`	| Quantity of records on one page. Minimum: `1`, Maximum: `100`.|


**Parameters response**
| Name | Type | Description|
|------|------|-----------------|
|**`message`**  | integer | Name of event |
|**`created_at`**  | integer | Create date of event |

-----
**Example Request**

```json
NONE

```

**Example Response**

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

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

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

### Query Parameters<br>

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**page**  | `integer` | Yes |	`1`| Page number for pagination |
|**per_page**  | `integer`	| Yes | Minimum: `1`, Maximum: `100` | Quantity of records on one page.<br>Default: `100` |


### Parameters response<br>
| Name | Type | Description|
|------|------|-----------------|
|**message**  | integer | Name of event |
|**created_at**  | integer | Create date of event |

<br>
<br>

### Example Request**<br>

```json
GET /ver1/grid_bots/2338357/events?page=1&per_page=10
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

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "page": [
            "is missing",
            "does not have a valid value"
        ],
        "per_page": [
            "is missing",
            "does not have a valid value"
        ]
    }
}
```
</details>
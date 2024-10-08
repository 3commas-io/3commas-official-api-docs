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
|**message**  | string | The description of the event |
|**created_at**  | string | ISO 8601 datetime string indicating when the event was recorded |

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
[
    {
        "message": "Start command received",
        "created_at": "2024-10-03T19:53:38.178Z"
    },
    {
        "message": "Bot is turned on",
        "created_at": "2024-10-03T19:53:38.305Z"
    },
    {
        "message": "Setting leverage: cross 10.0, Success.",
        "created_at": "2024-10-03T19:53:39.569Z"
    },
    {
        "message": "Creating balancing order, Price: 0.021967 BNFCR, Size: 98.741665 BNFCR (4495.0 VETUSDT).",
        "created_at": "2024-10-03T19:53:39.853Z"
    },
    {
        "message": "Balancing order filled, Price: 0.021974 BNFCR, Size: 98.77216807 BNFCR (4495.0 VETUSDT).",
        "created_at": "2024-10-03T19:53:41.750Z"
    },
    ...
    {
        "message": "Creating LIMIT BUY order, Price: 0.02171 BNFCR, Size: 19.99491 BNFCR (921.0 VETUSDT), Current price: 0.021969 BNFCR, Success.",
        "created_at": "2024-10-03T19:53:44.070Z"
    }
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
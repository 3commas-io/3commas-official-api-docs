**Description:** Getting a list of events by Grid Bot

Permission: BOTS_READ
Security: SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/grid_bots/{id}/events`</code>

</blockquote>

### Path Parameter

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Query Parameters

   page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Page number for pagination
   Default: <code>1</code>

   per_page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Quantity of records on one page
   Minimum: <code>1</code>, Maximum: <code>100</code>
   Default: <code>100</code>

### Parameters response

   message&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The description of the event

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string indicating when the event was recorded

### Example Request

```json
GET /ver1/grid_bots/2338357/events?page=1&per_page=10
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

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
<summary>Status: 400 Bad Request</summary>

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

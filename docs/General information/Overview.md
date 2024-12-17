### Base URL

The base URL for the 3Commas API is consistent across all endpoints.

The base endpoint is:

```
https://api.3commas.io/public/api
```

### Request Guidelines

   POST Requests: Parameters must be sent in the request body.

   GET Requests: Parameters must be sent as a query string.

   POST, PUT, DELETE Requests:
   Parameters can be sent:

- As a query string;
- In the request body with content type <code>application/x-www-form-urlencoded</code> or <code>application/json</code>;
- Mixed between the query string and request body;

   Parameter Order:Parameters can be sent in any order;

   Parameter Conflict:If a parameter is sent in both the query string and the request body, the value from the query string will be used.

### Official Channels

   Official Announcements:

   Changes, downtime, etc., will be reported in this [Telegram channel](https://t.me/commas_API)

   Community Discussion:

   Join our [Telegram group](https://t.me/xcommas_api) to discuss API-related questions or issues.

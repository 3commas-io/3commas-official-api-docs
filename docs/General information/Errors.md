
   When a request fails, 3Commas API returns an error object with a relevant HTTP response code and additional information to help identify and resolve the issue.

### HTTP Status Codes

Errors generally return a 4xx response code:

- HTTP `4XX`: Malformed requests (issue is on the sender's side)
- HTTP `429`: Request rate limit exceeded
- HTTP `418`: IP auto-banned for continuing to send requests after receiving `429` codes
- HTTP `5XX`: Internal errors (issue is on 3Commas's side)
- HTTP `504`: Gateway timeout, indicating the API couldn’t get a timely response

:::tip
Success responses return a 2xx status code.
:::

### Error Object

   When an error occurs, the API returns an error object instead of a data object or array. Error responses have the following payload format:

```json
{
   "error": "record_invalid",
   "error_description": "Invalid parameters",
   "error_attributes": {
      "api_key": ["is too short (minimum is 5 characters)"],
      "secret": ["is too short (minimum is 5 characters)"],
      "name": ["is too short (minimum is 2 characters)"]
   }
}
```

### Error Object Fields

    error <code>mandatory</code>
    Specific error codes and messages defined in another document


    error_description <code>optional</code>
    Localized, extended description of the error


    error_attributes <code>optional</code>
    Lists fields that did not pass validation

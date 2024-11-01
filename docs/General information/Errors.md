## Errors

<p>
   When a request fails, <strong>3Commas API</strong> returns an error object with a relevant HTTP response code and additional information to help identify and resolve the issue.
</p>

### HTTP Status Codes

<p>Errors generally return a 4xx response code:</p>

<ul>
   <li>HTTP <code>4XX</code><br>Malformed requests (issue is on the sender's side)</li>
   <li>HTTP <code>429</code><br>Request rate limit exceeded</li>
   <li>HTTP <code>418</code><br>IP auto-banned for continuing to send requests after receiving <code>429</code> codes</li>
   <li>HTTP <code>5XX</code><br>Internal errors (issue is on 3Commas's side)</li>
   <li>HTTP <code>504</code><br>Gateway timeout, indicating the API couldn’t get a timely response</li>
</ul>

{% hint style="success" %}
Success responses return a 2xx status code.
{% endhint %}

### Error Object

<p>
   When an error occurs, the API returns an error object instead of a data object or array. Error responses have the following payload format:
</p>

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
<br>

### Error Object Fields
<p> 
    <strong>error</strong> <code>mandatory</code><br> 
    Specific error codes and messages defined in another document
</p>
<p> 
    <strong>error_description</strong> <code>optional</code><br> 
    Localized, extended description of the error
</p>
<p> 
    <strong>error_attributes</strong> <code>optional</code><br>
    Lists fields that did not pass validation
</p>


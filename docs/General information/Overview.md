## Overview<br>

### Base URL
<p>
The base URL for the 3Commas API is consistent across all endpoints. 
</p>

<p>
The base endpoint is:

```
https://api.3commas.io/public/api
```
</p><br>

### Request Guidelines<br>
<p>
   <strong>POST Requests:</strong> <br>Parameters must be sent in the request body.
</p>
<p>
   <strong>GET Requests:</strong> <br>Parameters must be sent as a query string.
</p>
<p>
   <strong>POST, PUT, DELETE Requests:</strong><br>
   Parameters can be sent:
   <di>
      <li>As a query string;</li>
      <li>In the request body with content type<br> <code>application/x-www-form-urlencoded</code> or<br> <code>application/json</code>;</li>
      <li>Mixed between the query string and request body;</li>
<di>
</p>
<p>
   <strong>Parameter Order:</strong><br>Parameters can be sent in any order;
</p>
<p>
   <strong>Parameter Conflict:</strong><br>If a parameter is sent in both the query string and the request body, the value from the query string will be used.
</p><br>


### Official Channels<br>
<p> 
   <strong>Official Announcements:</strong><br>

   Changes, downtime, etc., will be reported in this [Telegram channel](https://t.me/commas_API)

</p>
<p> 
   <strong>Community Discussion:</strong><br>

   Join our [Telegram group](https://t.me/xcommas_api) to discuss API-related questions or issues.
</p>












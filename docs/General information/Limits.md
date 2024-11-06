## Limits<br>

<p>HTTP status code 429 is returned when the rate limit is exceeded.
</p>

<p>Upon receiving a 429 status, it’s essential to slow down your requests and avoid repeatedly pinging the API.
</p>
<p>
Continued rate limit violations or failure to reduce request frequency after a 429 response will trigger an automatic IP ban (HTTP status 418).
</p>

<p>IP bans are tracked and increase in duration for repeated violations, ranging from 2 minutes to 3 days.
</p>

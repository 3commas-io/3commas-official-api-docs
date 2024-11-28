## Limits<br>
<p>
Our REST API allows a <strong>maximum of 1.00 requests per 1 minute</strong>.
</p>
<p>
If the rate limit is exceeded, an HTTP status code 429 will be returned.
</p>
<p>
After receiving a 429 status, you must reduce the frequency of your requests. Repeated violations or failure to slow down after a 429 response may result in an automatic IP ban (HTTP status 418).
</p>
<p>IP bans are tracked and increase in duration for repeated violations, ranging from 2 minutes to 3 days.
</p>

## Limits<br>

### General Rules<br>
<p>
Our REST API enforces a <strong>maximum of 100 requests per minute</strong>.
<br>
If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of <strong>300 seconds</strong>.
</p>

### Rate limits for specific endpoints<br>
<p>
<code>/public/api/ver1/deals</code>:<br>
<strong>120 requests per minute</strong>. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of <strong>60 seconds</strong>.
</p>

<p>
<code>/public/api/ver1/smart_trades</code>:<br>
<strong>40 requests per 10 seconds</strong>. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of <strong>10 seconds</strong>.
</p>

<p>
<code>/public/api/ver1/deals/{deal_id}/show</code>:<br>
<strong>120 requests per minute</strong>. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of <strong>60 seconds</strong>.
</p>

------------

<p>
After receiving a 429 status, you must reduce the frequency of your requests. Repeated violations or failure to slow down after a 429 response may result in an automatic IP ban (HTTP status <code>418</code>).
</p>

<p>
IP bans are tracked and increase in duration for repeated violations, ranging from <strong>2 minutes to 3 days</strong>.
</p>
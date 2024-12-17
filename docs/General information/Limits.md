### General Rules

Our REST API enforces a maximum of 100 requests per minute.

If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of 300 seconds.

### Rate limits for specific endpoints

<code>/public/api/ver1/deals</code>:
120 requests per minute. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of 60 seconds.

<code>/public/api/ver1/smart_trades</code>:
40 requests per 10 seconds. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of 10 seconds.

<code>`/public/api/ver1/deals/{deal_id}/show`</code>:
120 requests per minute. If the rate limit is exceeded, the API will respond with an HTTP status code <code>429 Too Many Requests</code>, and access will be temporarily restricted for a mitigation period of 60 seconds.

------------

After receiving a 429 status, you must reduce the frequency of your requests. Repeated violations or failure to slow down after a 429 response may result in an automatic IP ban (HTTP status <code>418</code>).

IP bans are tracked and increase in duration for repeated violations, ranging from 2 minutes to 3 days.

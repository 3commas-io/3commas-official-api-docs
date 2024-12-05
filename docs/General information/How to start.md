## How to start<br>
<br>
All requests to the 3Commas API require authentication unless explicitly stated.

{% stepper %}
{% step %}
### Get Your 3Commas API Key
We offer two ways to generate API Key:
<li> System generated;</li>
<li> Self-generated using an RSA asymmetric encryption method.</li>
We recommend the second method as it provides a more secure connection for your apps.
{% endstep %}

{% step %}
### Create a Signature
<code>SIGNED</code> endpoints require an additional <code>Signature</code> header to ensure the authenticity of the request. 
{% endstep %}

{% step %}
### Signed Endpoint
To authenticate, pass your 3Commas `API Key` and the `Signature` header in the request.

{% endstep %}
{% endstepper %}
<br>

### Test authentication<br>
<p> The quickest way to test your authentication setup is by sending a request to the <code>/ver1/validate</code> endpoint. This endpoint verifies the validity of your API credentials and returns the status of your authentication. </p>

<strong>API credentials validity check</strong><br>


<code><mark style="color:blue"><strong>GET</strong></mark></code><br>
<span style="font-family: 'Courier New', monospace;">/ver1/validate</span>
<br>

#### Responce<br>

<p>
 If successful, 3Commas returns:
</p>

```json
{
    "valid": true
}
```
<br>

<p>
    If authentication fails, 3Commas returns a <code>401</code> <strong>Unauthorized</strong> error with the following payload: 
</p>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```

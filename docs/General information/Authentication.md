## Authentication<br>

### Get an API key and Access Token
<p>
To create and manage API key and Access Token, you need to sing in (https://app.3commas.io/en/auth/login) to 3Commas > 3Commas API. 
On the page click the button <mark style="color:green"><strong>New API access token</strong></mark>
</p>
<p>
After creating an API Key, keep the following information safe:

<li>API Key </li>
<li>SecretKey </li>
</p>

### Signed endpoint


### Test authentication<br>
<p> The quickest way to test your authentication setup is by sending a request to the <code>/ver1/validate</code> endpoint. This endpoint verifies the validity of your API credentials and returns the status of your authentication. </p>

<strong>API credentials validity check</strong><br>

**Permission:** NONE<br>
**Security:** SIGNED
<br>

-------- 

<mark style="color:blue"><strong>GET</strong>

<mark style="color:blue"><strong>/ver1/validate</strong>

-------- 
<br>

#### Responce

<p>
 If successful, 3Commas returns:</p>
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



## Signed endpoint<br>
<p> 
    <code>SIGNED</code> endpoints require an additional <code>Signature</code> header to verify the authenticity of the request. 
</p>
<p> 
    The signature is generated using the <code>HMAC SHA256</code> algorithm. This method combines your <code>secretKey</code> (used as a private key) and the <code>uri?totalParams</code> (data being signed) to produce a unique code.
</p>
<p>
    <code>totalParams</code> consists of the <code>query string</code> (parameters in the URL) concatenated with the <code>request body</code> (payload).
</p>
<p>Important notes: 
<ul>
   <li>The signature is not case sensitive.</li>
   <li>Your <code>secretKey</code> should remain private and never be included in the request.</li>
</ul>
</p> 
<p> 
    This ensures the security of your API interactions by validating the sender and protecting against unauthorized requests.
</p>




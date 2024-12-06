## Create a Signature and Send a Request with RSA
<p>
For successful completion, follow the steps and examples below.
</p>

### How to compute the signature with RSA<br>

{% stepper %}

{% step %}
### Prepare the payload:
Convert the data to be signed (signature payload) into _ASCII format_. This payload typically includes all relevant request parameters or fields.
{% endstep %}
{% step %}
### Generate the binary signature:
Use the _RSASSA-PKCS1-v1_5_ signing algorithm with the SHA-256 hash function and _your RSA private key_ to create a binary signature.
{% endstep %}
{% step %}
### Encode the signature:
Convert the binary output of the signature to a Base64 string (RFC 2045).
{% endstep %}

{% endstepper %}


### How to send a signed API request
<p>
Once the signature has been created, you can include it in your API request:</p>

{% stepper %}

{% step %}
### Add the Signature to the request header:
Use the Base64-encoded signature generated in the previous step.
{% endstep %}

{% step %}
### Include your API Key:
Add your 3Commas API Key in the header alongside the Signature.
{% endstep %}

{% step %}
### Send the request::
Make the request to a SIGNED endpoint. Ensure the payload, headers, and method match the data used to compute the signature to avoid mismatches.
{% endstep %}

{% endstepper %}

{% hint style="warning" %}
Keep in mind, the signature is case sensitive. 
{% endhint %}


### Examples<br>
<p>
Below are examples of signed endpoints and step-by-step guides for interacting with them.
</p>

Let's consider the first an example of a signed endpoint for the <code><mark style="color:green"><strong>POST</strong></mark></code><br> method: 

<code>/public/api/ver1/users/change_mode</code><br>
<p>
The following is a step-by-step guide for sending a valid signed payload using the Linux command line with <code>echo</code>, <code>openssl</code>, and <code>curl</code>.
</p>

Key | Value
------------ | ------------
api_key | <pre>vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A</pre>
private key | <pre>-----BEGIN RSA PRIVATE KEY-----<br>MIIEpQIBAAKCAQEAspMfrKDl78gMWr4EO9Nr9LoZirPvkN93oGDO1LPnvDIwkmTV<br>QCXv9EAgzz4E36B9RuXIukMydrwCqtPOaweSAFgj9MZ0PFwIWsHk4x7flUJU3YI3<br>Ub2uc+jl2Mbtxfoei5cbY6iAwsp+HyeKrdonVHtEd9mFutd468+vO7+rx/M80onc<br>fduNVf/GRR2McTOO4Ptm4s68clY0dyXMRLidQjydPPYNjuzs47DVxNK+tXGS7QSH<br>LuC7VO/YBXWqZNzvii1KeCEIePJfz06ywZFTdNxZt2USoudAgUMBvJg0cLKqQJFx<br>p62Pez6aWC0lV9yDPHpUwp+RfrNiP213vKObnQIDAQABAoIBAQCf//KBWiirjzKC<br>m35vnB8+RwBbpp0f0Rn+OL8ZFZispsueX3oy38r/rfW3unnjZIja3UfcnBi7CfnZ<br>1a09eKr4ZADTcHz1GADkUJYkaaUqtyQS1Hl8Y9fLQwGuGY8xs8lqiRmhUXkNDyGy<br>CFvZKX3T1B6kw+FuZ2GQ56S6hCIGJApRCaIfMsBMlUPogJIh+oV5+13ft5EDvTFo<br>IDAb9YZQk+sp0sc38g3MIhqVAl7lqqpowFF5FnS4cRTcSIC1Wc5+R73LDRtNghQc<br>1kAFdM8aiw/dii2huGE+bRz3bjlCW6SOlsSPKOgvqFxVoJ/qjqkfytm1Platx4Ys<br>zAqr4EQBAoGBAOX3FUgUnoqybKOoa6ouSgFXmcADB6jLiXcPOxEg6JadBKSsI0Fx<br>YmqgRK7ddKVaiDmAgdL7RJQ4zyCyeFuGomr796ilsswORDucjNBNVKoxmea58ww+<br>c5pOXccDuiFR32/5hz0pwcmiIYg9tPVpFUMgiPBpjjhNPSajOSE1HJTlAoGBAMbK<br>oJTKhmT+/73BpTY8KSMAYSEbHX/uchsiFd+RlQDmHZ9KGd914UI8hGW4yOBmcvmi<br>u6Yjz5JT6ARqKNkhorbz9FvYhYGjDbLIIHxaDs/6vXOCs/ba3oAnHTFa7cQ5qMle<br>oyndAf4aVPY105yP2SlOW7oBoUUwxaqSOEgOPvhZAoGAMJBNXjt8f63OY4Fdu0Kr<br>Pj1Rqsr5Axx4mzwMLUHV3HisUlpH17oqHnpaBtOdno3P1tTclcGaafLVSwJliG6W<br>PiGX23WinJUms7ALzLGH/6kZ5y+9tAg8QYnrI+wVkpPHq832UWRQGFS04CCn5mua<br>oeJtCNhBwIIPN+mgVvLwZkECgYEAnWlgJNIF/71oVyMapsqWrG+leeiVwHLZCiFA<br>fssx2Qde135+5FLcr21qTX44GnElhAVXX+SlfjJQ3AYQGHeo+ARPL9dRSGkL9NDB<br>4JYTep8LG4eY59VCMOpIFIfzFNmvjN0SiJjH9iV1t4zB5wyFIk85FR4rTLWlID8u<br>r+gP9ukCgYEA3Z8WmO3NKk+eQMo2HcpJhgKl6LcliAFW1pa7Fbnu+lyNKhWQYzQP<br>ltp+HZluqeMrmtiiB33J9fYLIC4oXgEi/1UfPc0mpPRERYC8s5A4GKTdQFFoMn5v<br>wc4dnTdfBxKBacAoUWUZcRuipcgkkUQAQZxqUnGkGZQHf8UFjEzHD5k=<br>-----END RSA PRIVATE KEY-----</pre>


Parameter | Value
------------ | ------------
mode | paper


#### Example 1: As a query string<br>
* **path**: /public/api/ver1/users/change_mode
* **queryString**: mode=paper
* **payload**: /public/api/ver1/users/change_mode?mode=paper
* **signature**:

```
[linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -sign private.pem | openssl enc -base64 -A
>> W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==
```
<br>
* **curl command**:

```
[linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
```

#### Example 2: As a request body<br>
**path**: /public/api/ver1/users/change_mode<br>
**requestBody**: mode=paper<br>
**payload**: /public/api/ver1/users/change_mode?mode=paper<br>
**signature**:

```
[linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -sign private.pem | openssl enc -base64 -A
>> W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==
```

**curl command**:<br>

```
[linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
```

#### Example 3: As a raw json<br>
**path**: /public/api/ver1/users/change_mode<br>
**requestBody**: '{"mode": "paper"}'<br>
**payload**: /public/api/ver1/users/change_mode{"mode": "paper"}<br>

```
[linux]$ echo -n '/public/api/ver1/users/change_mode{"mode": "paper"}' | openssl dgst -sha256 -sign private.pem | openssl enc -base64 -A
>> EEVNxc6DLLb6PVNzc3jeNkVXVIfgHJVrfLws4Hm7wynLTLlDe6QpwPmOeT/5lAZDsft+sIN0nwo4SBNKmkea6mtxkcVz/8BuP3rhQVeGhRn3lAGy/nacsP35B50IMDx+ge1tnkjGGL4IbjtbfP5v+UVLMpJpWfVzQGlWpyLEL6PHAu7cuYs5Ug8lbfq4zgrpl1tSmemNVAedU4D4qYE/LaPB/z/urzoFYQZzobZbnXpLh4MRLaTjUgTNuiJawpk+j0K7Xk2AvHt+gY1TNOCmbRvjaP+ihgzZA0m4h32s7EdGMznI55C4CVftKQRVIfyR6TIifoljCG5nNJNZtTj98Q==
```

**curl command**:<br>

```
[linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: EEVNxc6DLLb6PVNzc3jeNkVXVIfgHJVrfLws4Hm7wynLTLlDe6QpwPmOeT/5lAZDsft+sIN0nwo4SBNKmkea6mtxkcVz/8BuP3rhQVeGhRn3lAGy/nacsP35B50IMDx+ge1tnkjGGL4IbjtbfP5v+UVLMpJpWfVzQGlWpyLEL6PHAu7cuYs5Ug8lbfq4zgrpl1tSmemNVAedU4D4qYE/LaPB/z/urzoFYQZzobZbnXpLh4MRLaTjUgTNuiJawpk+j0K7Xk2AvHt+gY1TNOCmbRvjaP+ihgzZA0m4h32s7EdGMznI55C4CVftKQRVIfyR6TIifoljCG5nNJNZtTj98Q==" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
```
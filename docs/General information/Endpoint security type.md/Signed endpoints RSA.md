## SIGNED Endpoint security with RSA<br>
<p>
3Commas now supports using RSA keys to create signed API requests. All you need to do is generate an RSA Key pair and register the public key on 3Commas.
</p>

### How to create an RSA Key pair

#### 1. You can use command line to create key pair

**Generate Private Key**
<br>
<p>
Run this command to generate a 4096-bit private key and output it to the private.pem file. If you like, you may change the key length and/or output file.
</p>

```
openssl genrsa
```

**Derive Public Key**
<br>
<p>
Given a private key, you may derive its public key and output it to public.pem using this command.
</p>

```
openssl rsa -in private.pem -pubout -out public.pem
```
<br>

#### 2.You can use official Binance RSA key pair generator

<p>
Go to the official [RSA Keys Generator](https://github.com/binance/asymmetric-key-generator/releases) website to download and install the latest version of the generator.
</p>

#### 3. You can use online RSA key pair generator (not recommended)

For example https://cryptotools.net/rsagen

You need to choose 2048 or 4096 key length for RSA key pair.

### How to send a signed API request
* `SIGNED` endpoints require an additional header, `Signature`, to be sent.
* `Signature` should be generated with RSA private key and encoded to Base64 (RFC 2045)
* The signature is case sensitive.

### How to compute the signature
1. Encode signature payload as ASCII data
2. Sign payload using RSASSA-PKCS1-v1_5 algorithm with SHA-256 hash function
3. Encode output as base64 string (RFC 2045)

### Examples
SIGNED Endpoint Examples for 

POST /public/api/ver1/users/change_mode

<p>
Here is a step-by-step example of how to send a valid signed payload from the Linux command line using echo, openssl, and curl.
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
* **path**: /public/api/ver1/users/change_mode
* **requestBody**: mode=paper
* **payload**: /public/api/ver1/users/change_mode?mode=paper
* **signature**:

```
[linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -sign private.pem | openssl enc -base64 -A
>> W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==
```

* **curl command**:

```
[linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: W+a26NiV6KkWP5zWoaDU9nSHmfObAtbbaq+xPIKwiKIz81Mlgrek/Z51qsAWNXEMCpIGW40IYDo7BTq4FSvOVSxdfrFK3lRqBveoXW+/50QOd3p+fDe5Ku7Z0U6MvXSUeFOguMBxP7er1SLGOb5RLYI/2GPMI5txLAoSsTLjGkWOc7S3ZhUpxEfxSCp8wCFp6E99biIX2MhIT1/AAl290ID76Wr1dj9Y3QxIl6KtQlbpEqhvWBaadYaYyZR5YjHAn5NWAE2cvxLkH+SQE1khzAdB6T9ZJ9sgMtY1bOzTTV/Cj9W0SABCYr4In12+uFY0lB+ANvgi8hLr2NCl775Wdw==" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
```

#### Example 3: As a raw json<br>
* **path**: /public/api/ver1/users/change_mode
* **requestBody**: '{"mode": "paper"}'
* **payload**: /public/api/ver1/users/change_mode{"mode": "paper"}

```
[linux]$ echo -n '/public/api/ver1/users/change_mode{"mode": "paper"}' | openssl dgst -sha256 -sign private.pem | openssl enc -base64 -A
>> EEVNxc6DLLb6PVNzc3jeNkVXVIfgHJVrfLws4Hm7wynLTLlDe6QpwPmOeT/5lAZDsft+sIN0nwo4SBNKmkea6mtxkcVz/8BuP3rhQVeGhRn3lAGy/nacsP35B50IMDx+ge1tnkjGGL4IbjtbfP5v+UVLMpJpWfVzQGlWpyLEL6PHAu7cuYs5Ug8lbfq4zgrpl1tSmemNVAedU4D4qYE/LaPB/z/urzoFYQZzobZbnXpLh4MRLaTjUgTNuiJawpk+j0K7Xk2AvHt+gY1TNOCmbRvjaP+ihgzZA0m4h32s7EdGMznI55C4CVftKQRVIfyR6TIifoljCG5nNJNZtTj98Q==
```
* **curl command**:

```
[linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: EEVNxc6DLLb6PVNzc3jeNkVXVIfgHJVrfLws4Hm7wynLTLlDe6QpwPmOeT/5lAZDsft+sIN0nwo4SBNKmkea6mtxkcVz/8BuP3rhQVeGhRn3lAGy/nacsP35B50IMDx+ge1tnkjGGL4IbjtbfP5v+UVLMpJpWfVzQGlWpyLEL6PHAu7cuYs5Ug8lbfq4zgrpl1tSmemNVAedU4D4qYE/LaPB/z/urzoFYQZzobZbnXpLh4MRLaTjUgTNuiJawpk+j0K7Xk2AvHt+gY1TNOCmbRvjaP+ihgzZA0m4h32s7EdGMznI55C4CVftKQRVIfyR6TIifoljCG5nNJNZtTj98Q==" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
```
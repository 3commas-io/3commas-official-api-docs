
## How to create a RSA Key pair
<p>
3Commas now supports using RSA keys to create signed API requests.
</p>
<p>

All you need to do is generate an RSA Key pair and then **only** provide **the public key** on 3Commas.

</p>

### Generate Keys via Command Line<br>
<p>
You can use command line to create RSA Key pair
</p>
{% stepper %} 
{% step %}
### Generate Private Key
Run this command to generate a 4096-bit private key:

```
openssl genrsa
```
{% endstep %} 

{% step %}
### Save Private Key
Output the private key to a file, such as private.pem. You can adjust the key length and/or output file name as needed:

```
openssl genrsa -out private.pem 2048
```
{% endstep %}
{% step %}

### Generate Public Key
To generate the public key from the private key, run this command:

```
openssl rsa -in private.pem -pubout -out public.pem
```
{% endstep %} 

{% step %}
### View Public Key
Run this command to view the public key:

```
cat public.pem
```
This public key needs to be registered on 3Commas.
{% endstep %} 
{% endstepper %}

<br>

### Binance RSA Key Generator
<p>
You can use official Binance RSA key pair generator
</p>
<p>
Go to the official [RSA Keys Generator](https://github.com/binance/asymmetric-key-generator/releases) website to download and install the latest version of the generator.
</p>

### Online RSA Key Generator
<p>
You can use an online RSA key pair generator, but we don't recommend this method due to security concerns.</p>
<p>
For example: 
https://cryptotools.net/rsagen
</p>
<p>
You need to choose 2048 or 4096 key length for RSA key pair.
</p>

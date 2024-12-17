
3Commas now supports using RSA keys to create signed API requests.

All you need to do is generate an RSA Key pair and then **only** provide **the public key** on 3Commas.

### Generate Keys via Command Line

You can use command line to create RSA Key pair

### Generate Private Key

Run this command to generate a 4096-bit private key:

```bash
$ openssl genrsa
```

### Save Private Key

Output the private key to a file, such as private.pem. You can adjust the key length and/or output file name as needed:

```bash
$ openssl genrsa -out private.pem 2048
```

### Generate Public Key

To generate the public key from the private key, run this command:

```bash
$ openssl rsa -in private.pem -pubout -out public.pem
```

### View Public Key

Run this command to view the public key:

```bash
$ cat public.pem
```

This public key needs to be registered on 3Commas.

### Binance RSA Key Generator

You can use official Binance RSA key pair generator

Go to the official [RSA Keys Generator](https://github.com/binance/asymmetric-key-generator/releases) website to download and install the latest version of the generator.

### Online RSA Key Generator

You can use an online RSA key pair generator, but we don't recommend this method due to security concerns.

For example:
[https://cryptotools.net/rsagen](https://cryptotools.net/rsagen)

You need to choose 2048 or 4096 key length for RSA key pair.

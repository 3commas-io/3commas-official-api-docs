# Deals Streams


**Description:** TBD <br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

1. Connect to the base websocket endpoint;

2. Create valid signature:
```
 [linux]$ echo -n "/deals" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 92cbefb3a2f2a8e94479470c7b5eb7cce43037947461c665e9b7f8b05a81a936
```

3. Build identifier(ruby Hash for example):
```ruby
    identifier = {
      channel: 'DealsChannel',
      users: [
        {
          api_key: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8Asma',
          signature: '92cbefb3a2f2a8e94479470c7b5eb7cce43037947461c665e9b7f8b05a81a936'
        }
      ],
    }
```

4. Build valid message for websocket protocol:
```ruby
    {
      "identifier": identifier.to_json,
      "command": "subscribe"
    }
```

5. Send message to subscribe stream.
The message will look like this:

```
      {
        "identifier":"{
        \"channel\":\"DealsChannel\",
        \"users\":
          [
            {\"api_key\":\"vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8Asma\",\"signature\":\"92cbefb3a2f2a8e94479470c7b5eb7cce43037947461c665e9b7f8b05a81a936\"}
          ]}",
        "command": "subscribe"
      }
```

6. You will receive **confirm_subscription** message and then you will receive all created or updated users deals
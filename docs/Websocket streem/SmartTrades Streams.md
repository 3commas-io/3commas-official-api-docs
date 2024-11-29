## SmartTrades Streams<br>


**Description:** TBD <br>

**Permission:** SMART_TRADES_READ<br>
**Security:** SIGNED<br>
<br>
<br>

1. Connect to the base websocket endpoint;

2. Create valid signature:

```
    [linux]$ echo -n "/smart_trades" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 8b30fb42a82e4dcfb4d0273d2910c7ae0add2b32938b19c27c44e306c56c20bc
```

3. Build identifier(ruby Hash for example):

```ruby
    identifier = {
      channel: 'SmartTradesChannel',
      users: [
        {
          api_key: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8Asma',
          signature: '8b30fb42a82e4dcfb4d0273d2910c7ae0add2b32938b19c27c44e306c56c20bc'
        }
      ],
    }
```

4.  Build valid message for websocket protocol:
  ```ruby
    {
      "identifier": identifier.to_json,
      "command": "subscribe"
    }
  ```

5. Send message to subscribe stream. The message will look like this:

    ```
      {
        "identifier":"{
        \"channel\":\"SmartTradesChannel\",
        \"users\":
          [
            {\"api_key\":\"vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8Asma\",\"signature\":\"8b30fb42a82e4dcfb4d0273d2910c7ae0add2b32938b19c27c44e306c56c20bc\"}
          ]}",
        "command": "subscribe"
      }
    ```

6. you will receive **confirm_subscription** message and then you will receive all of updates of users smart trades
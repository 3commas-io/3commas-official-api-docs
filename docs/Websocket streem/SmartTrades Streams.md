# SmartTrades Streams

**Description:** TBD

**Permission:** SMART_TRADES_READ
**Security:** SIGNED

1. Connect to the base websocket endpoint.

2. Create valid signature:

   ```bash
   [linux]$ echo -n "/smart_trades" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
   (stdin)= 8b30fb42a82e4dcfb4d0273d2910c7ae0add2b32938b19c27c44e306c56c20bc
   ```

3. Build identifier (Ruby Hash for example):

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

4. Build a valid message for the websocket protocol:

   ```ruby
   {
     "identifier": identifier.to_json,
     "command": "subscribe"
   }
   ```

5. Send message to subscribe to the stream. The message will look like this:

   ```json
   {
    "identifier": {
    "channel": "SmartTradesChannel",
    "users": [
      {
        "api_key": "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8Asma",
        "signature": "8b30fb42a82e4dcfb4d0273d2910c7ae0add2b32938b19c27c44e306c56c20bc"
      }
    ]

  },
  "command": "subscribe"
}

   ```

6. You will receive **confirm_subscription** message and then you will receive all updates of users' smart trades.

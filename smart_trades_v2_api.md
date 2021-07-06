# SmartTradesV2 Api 
#### _Please read General API Information first_
### Get smart trade history (Permission: SMART_TRADE_READ, Security: SIGNED)
```
GET /v2/smart_trades
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | NO |   | 
pair | string | NO |   | 
type | string | NO | simple_buy, simple_sell, smart_sell, smart_trade, smart_cover, smart_buy  | 
page | integer | NO |  (1) | 
per_page | integer | NO |  (10) | 
status | string | NO | all, active, finished, successfully_finished, cancelled, failed  | 
order_by | string | NO | created_at, updated_at, closed_at, status, profit, profit_percentage (status) | 
order_direction | string | NO | asc, desc (desc) | 
from | string | NO |   | Param for a filter by created date
base | string | NO |   | Base currency
quote | string | NO |   | Quote currency
### Create smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
instant | boolean | NO |   | true for Simple Buy and Simple Sell
skip_enter_step | boolean | NO |   | true only for Smart Sell
note | string | NO |   | 
leverage[enabled] | boolean | YES |   | 
leverage[type] | string | NO | custom, cross, isolated  | 
leverage[value] | integer | NO |   | Cross leverage value
position[type] | string | YES | buy, sell  | 
position[order_type] | string | YES | market, limit, conditional  | 
position[units][value] | number | YES |   | Amount of units to buy
position[price][value] | number | YES |   | Price for limit order
position[conditional][price][value] | number | YES |   | Conditional trigger price
position[conditional][price][type] | string | NO | bid, ask, last  | By default ask for long, bid for short
position[conditional][order_type] | string | YES | market, limit  | 
position[conditional][trailing][enabled] | boolean | YES |   | 
position[conditional][trailing][percent] | number | YES |   | Should be 100% in the sum of all steps
take_profit[enabled] | boolean | YES |   | 
take_profit[steps][][position] | number | NO |  | position number
take_profit[steps][][order_type] | string | YES | market, limit |
take_profit[steps][][volume] | number | YES |  | 
take_profit[steps][][price][type] | string | YES | bid, ask, last  | 
take_profit[steps][][price][value] | number | NO |   | only if position has no trailing or position trailing is finished
take_profit[steps][][price][percent] | number | NO |   | only if position has trailing and position trailing is not finished
take_profit[steps][][trailing][enabled] | boolean | YES |   | 
take_profit[steps][][trailing][percent] | number | YES |   |
stop_loss[enabled] | boolean | YES |   | 
stop_loss[order_type] | string | YES | market, limit  | 
stop_loss[price][value] | number | YES |   | Price for limit order
stop_loss[conditional][price][type] | string | YES | bid, ask, last  | 
stop_loss[conditional][price][value] | number | NO |   | if position has no trailing or position trailing is finished
stop_loss[conditional][price][percent] | number | NO |   | only if position has trailing and position trailing is not finished
stop_loss[conditional][trailing][enabled] | boolean | YES |   | 
stop_loss[timeout][enabled] | boolean | YES |   | 
stop_loss[timeout][value] | integer | YES |   | 

> Another way to create smart trade v2 is send JSON body with the header
> 
> Content-Type: application/json

``` 
{
    "account_id": "1",                              /*required*/
    "pair":"USDT_BTC",                              /*required*/
    "instant":"true|false",                         /*optional. true for Simple Buy and Simple Sell*/
    "skip_enter_step": "true|false",                /*optional. true only for Smart Sell*/
    "leverage": {                                   /*optional. uses only for contract exchanges*/ 
        "enabled": "true|false",                    /*required*/
        "type": "custom|cross",                     /*required only if enabled */
        "value": "12"                               /*value of custom leverage*/
    },    
    "position": {                                   /*required*/
        "type":"buy|sell",                          /*required*/
        "units": {                                  /*required*/
            "value":"0.1234"                        /*amount of units to buy*/
        },
        "price": {                                  /*optional. uses for limit orders or price for Smart Sell*/
            "value":"0.1234"                        /*required*/
        },
        "order_type":"market|limit|conditional",    /*required*/
        "conditional": {                            /*required only if order type is conditional */
            "price": {                              /*required*/
                "value":"0.1234",                   /*conditional trigger price*/
                "type":"bid|ask|last",              /*optional. By default ask for long trades, bid for short trades */
            },
            "order_type": "market|limit",           /*required*/
            "trailing": {                           /*optional. Only for market orders */
                "enabled":"true|false",             /*required*/
                "percent": "12.12"                  /*required if enabled*/
            }
        }        
    },
    "take_profit": {                                /*required only when instant is false */
        "enabled":"true|false",                     /*required*/
        "steps": [                                  /*required if enabled. Maximum steps is 8 */
            {
                "order_type": "market|limit",       /*required*/
                "price": {                          /*required*/
                    "value":"0.123",                /*required only if position has no trailing or position trailing is finished */
                    "type":"bid|ask|last",          /*required*/
                    "percent":"10.5"                /*required only if position has trailing and position trailing is not finished */
                },                
                "volume": "25.0",                   /*required. should be 100% in the sum of all steps */
                "trailing": {                       /*optional. Only for market orders */
                    "enabled":"true|false",         /*required*/
                    "percent": "12.12"              /*required if enabled*/
                }
            },
            /* ... */
        ]
    },
    "stop_loss": {                                  /*required only when instant is false */
        "enabled":"true|false",                     /*required*/
        "order_type": "market|limit",               /*required*/
        "price": {                                  /*required only for limit order_type */
            "value":"0.1234"
        },
        "conditional": {                            /*required*/
            "price": {                              /*required. SL trigger price */
                "value":"0.1234",                   /*required only if position has no trailing or position trailing is finished */
                "type":"bid|ask|last",              /*required*/
                "percent":"10.5"                    /*required only if position has trailing and position trailing is not finished */
            },
            "trailing": {                           /* optional. Only for market orders */
                "enabled":"true|false",             /*required*/
                "percent": "12.12"                  /*required if enabled*/
            }            
        },
        "timeout": {                                /* optional. */
            "enabled":"true|false",                 /*required*/
            "value": "123"                          /*required if enabled. value in seconds*/
        }
    }
}
``` 

### Examples
#### Simple Market Buy
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "instant": "true",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "order_type": "market"
    }
}
```
#### Simple Market Buy with leverage
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "instant": "true",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "order_type": "market"
    },
    "leverage": {
        "enabled": true,
        "type": "custom",
        "value": "12"
    }
}
```
#### Simple Market Sell
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "instant": "true",
    "position": {
        "type": "sell",
        "units": {
            "value": "0.01"
        },
        "order_type": "market"
    }
}
```
#### Simple Limit Buy
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "instant": "true",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "price": {
            "value": "10000"
        },
        "order_type": "limit"
    }
}
```
#### Simple Limit Sell
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "instant": "true",
    "position": {
        "type": "sell",
        "units": {
            "value": "0.01"
        },
        "price": {
            "value": "10000"
        },
        "order_type": "limit"
    }
}
```
#### Smart Trade Conditional Market Buy
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "order_type": "conditional",
        "conditional": {
            "price": {
                "value": "10000"
            },
            "order_type": "market"
        }
    },
    "take_profit": {
        "enabled": "false"
    },
    "stop_loss": {
        "enabled": "false"
    }
}
```
#### Smart Trade Conditional Market Sell
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "position": {
        "type": "sell",
        "units": {
            "value": "0.01"
        },
        "order_type": "conditional",
        "conditional": {
            "price": {
                "value": "8500"
            },
            "order_type": "market"
        }
    },
    "take_profit": {
        "enabled": "false"
    },
    "stop_loss": {
        "enabled": "false"
    }
}
```
#### Smart Trade Conditional Limit Buy
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "price": {
            "value": "10500"
        },
        "order_type": "conditional",
        "conditional": {
            "price": {
                "value": "10000"
            },
            "order_type": "limit"
        }
    },
    "take_profit": {
        "enabled": "false"
    },
    "stop_loss": {
        "enabled": "false"
    }
}
```
#### Smart Trade Conditional Limit Sell
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "position": {
        "type": "sell",
        "units": {
            "value": "0.01"
        },
        "price": {
            "value": "8500"
        },
        "order_type": "conditional",
        "conditional": {
            "price": {
                "value": "8800"
            },
            "order_type": "limit"
        }
    },
    "take_profit": {
        "enabled": "false"
    },
    "stop_loss": {
        "enabled": "false"
    }
}
```
#### Smart Trade Trailing Buy
```
{
    "account_id": 1,
    "pair": "USDT_BTC",
    "position": {
        "type": "buy",
        "units": {
            "value": "0.01"
        },
        "order_type": "conditional",
        "conditional": {
            "price": {
                "value": "10000"
            },
            "order_type": "market",
            "trailing": {
                "enabled": "true",
                "percent": "9.95"
            }
        }
    },
    "take_profit": {
        "enabled": "false"
    },
    "stop_loss": {
        "enabled": "false"
    }
}
```
#### Smart Trade Trailing Sell
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "sell",
    "units": {
      "value": "0.01"
    },
    "order_type": "conditional",
    "conditional": {
      "price": {
        "value": "10000"
      },
      "order_type": "market",
      "trailing": {
        "enabled": "true",
        "percent": "9.95"
      }
    }
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Limit Buy
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "price": {
      "value": "10000"
    },
    "order_type": "limit"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy TP 1 Market
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "market",
        "price": {
          "value": 10000,
          "type": "bid"
        },
        "volume": 100
      }
    ]
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy TP 1 Limit
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "limit",
        "price": {
          "value": 10000,
          "type": "bid"
        },
        "volume": 100
      }
    ]
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy TP 4 Limit Trailing
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "limit",
        "price": {
          "value": 10000,
          "type": "bid"
        },
        "volume": 10
      },
      {
        "order_type": "limit",
        "price": {
          "value": 10500,
          "type": "bid"
        },
        "volume": 20
      },
      {
        "order_type": "limit",
        "price": {
          "value": 11000,
          "type": "bid"
        },
        "volume": 30
      },
      {
        "order_type": "market",
        "price": {
          "value": 11500,
          "type": "bid"
        },
        "volume": 40,
        "trailing": {
          "enabled": true,
          "percent": 10.5
        }
      }
    ]
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy TP 4 Market Trailing
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "market",
        "price": {
          "value": 10000,
          "type": "bid"
        },
        "volume": 10
      },
      {
        "order_type": "market",
        "price": {
          "value": 10500,
          "type": "bid"
        },
        "volume": 20
      },
      {
        "order_type": "market",
        "price": {
          "value": 11000,
          "type": "bid"
        },
        "volume": 30
      },
      {
        "order_type": "market",
        "price": {
          "value": 11500,
          "type": "bid"
        },
        "volume": 40,
        "trailing": {
          "enabled": true,
          "percent": 10.5
        }
      }
    ]
  },
  "stop_loss": {
    "enabled": "false"
  }
}
```
#### Smart Trade Market Buy SL Market
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "market",
    "conditional": {
      "price": {
        "value": 8500,
        "type": "bid"
      }
    }
  }
}
```
#### Smart Trade Market Buy SL Limit
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "limit",
    "price": {
      "value": 8300
    },
    "conditional": {
      "price": {
        "value": 8500,
        "type": "bid"
      }
    }
  }
}
```
#### Smart Trade Market Buy SL Trailing
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "market",
    "conditional": {
      "price": {
        "value": 8500,
        "type": "bid"
      },
      "trailing": {
        "enabled": true,
        "percent": 8.5
      }
    }
  }
}
```
#### Smart Trade Market Buy SL Timeout
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "market"
  },
  "take_profit": {
    "enabled": "false"
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "market",
    "conditional": {
      "price": {
        "value": 8500,
        "type": "bid"
      }
    },
    "timeout": {
      "enabled": true,
      "value": 8
    }
  }
}
```
#### Smart Trade Trailing Buy TP 2 Limit Trailing SL Trailing
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "position": {
    "type": "buy",
    "units": {
      "value": "0.01"
    },
    "order_type": "conditional",
    "conditional": {
      "price": {
        "value": "10000"
      },
      "order_type": "market",
      "trailing": {
        "enabled": "true",
        "percent": "9.95"
      }
    }
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "limit",
        "price": {
          "type": "bid",
          "percent": 11
        },
        "volume": 40
      },
      {
        "order_type": "market",
        "price": {
          "type": "bid",
          "percent": 13
        },
        "volume": 60,
        "trailing": {
          "enabled": true,
          "percent": 10.5
        }
      }
    ]
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "market",
    "conditional": {
      "price": {
        "type": "bid",
        "percent": 6
      },
      "trailing": {
        "enabled": true,
        "percent": 8.5
      }
    }
  }
}
```
#### Smart Sell TP 1 Limit SL Market
```
{
  "account_id": 1,
  "pair": "USDT_BTC",
  "skip_enter_step": true,
  "position": {
    "type": "buy",
    "order_type": "market",
    "units": {
      "value": 0.01
    },
    "price": {
      "value": 8000
    }
  },
  "take_profit": {
    "enabled": "true",
    "steps": [
      {
        "order_type": "limit",
        "price": {
          "value": 10000,
          "type": "bid"
        },
        "volume": 100
      }
    ]
  },
  "stop_loss": {
    "enabled": "true",
    "order_type": "market",
    "conditional": {
      "price": {
        "value": 7500,
        "type": "bid"
      }
    }
  }
}
```

### Get smart trade v2 by id (Permission: SMART_TRADE_READ, Security: SIGNED)
```
GET /v2/smart_trades/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Cancel smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
DELETE /v2/smart_trades/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Update smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
PATCH /v2/smart_trades/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
leverage[enabled] | boolean | YES |   | 
leverage[type] | string | NO | custom, cross, isolated  | 
leverage[value] | integer | NO |   | Cross leverage value
position[units][value] | number | YES |   | Amount of units to buy
position[price][value] | number | YES |   | Price for limit order
position[conditional][price][value] | number | YES |   | Conditional trigger price
position[conditional][price][type] | string | NO | bid, ask, last  | By default ask for long, bid for short
position[conditional][order_type] | string | YES | market, limit  | 
position[conditional][trailing][enabled] | boolean | YES |   | 
position[conditional][trailing][percent] | number | YES |   | 
take_profit[enabled] | boolean | YES |   | 
take_profit[steps][][position] | number | NO |  | position number
take_profit[steps][][order_type] | string | YES | market, limit |
take_profit[steps][][volume] | number | YES |  | 
take_profit[steps][][price][type] | string | YES | bid, ask, last  | 
take_profit[steps][][price][value] | number | NO |   | only if position has no trailing or position trailing is finished
take_profit[steps][][price][percent] | number | NO |   | only if position has trailing and position trailing is not finished
take_profit[steps][][trailing][enabled] | boolean | YES |   | 
take_profit[steps][][trailing][percent] | number | YES |   |
stop_loss[enabled] | boolean | YES |   | 
stop_loss[order_type] | string | YES | market, limit  | 
stop_loss[price][value] | number | YES |   | Price for limit order
stop_loss[conditional][price][type] | string | YES | bid, ask, last  | 
stop_loss[conditional][price][value] | number | NO |   | Trigger price
stop_loss[conditional][price][percent] | number | NO |   | 
stop_loss[conditional][trailing][enabled] | boolean | YES |   | 
stop_loss[timeout][enabled] | boolean | YES |   | 
stop_loss[timeout][value] | integer | YES |   | 
id | integer | YES |   | 
### Average for smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{id}/add_funds
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
order_type | string | YES | market, limit  | 
units[value] | number | YES |   | Amount of units to buy
price[value] | number | YES |   | Price for limit order
id | integer | YES |   | 
### Close by market smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{id}/close_by_market
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Force start smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{id}/force_start
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Process smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{id}/force_process
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Set note to smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{id}/set_note
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
note | string | YES |   | 
id | integer | YES |   | 
### Get smart trade v2 trades (Permission: SMART_TRADE_READ, Security: SIGNED)
```
GET /v2/smart_trades/{smart_trade_id}/trades
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Panic close trade by market (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
id | integer | YES |   | 
### Cancel trade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
DELETE /v2/smart_trades/{smart_trade_id}/trades/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
id | integer | YES |   | 
# Response Entities 

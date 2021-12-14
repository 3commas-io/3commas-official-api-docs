# LooseAccounts Api 
#### _Please read General API Information first_
### Create Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/loose_accounts
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
tokens[code] | array[string] | YES |   | 
tokens[amount] | array[number] | YES |   | 
### Available currencies (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/loose_accounts/available_currencies
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
contains | string | NO |   | 
limit | integer | NO |   | 
offset | integer | NO |   | 
### Update Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
PUT /ver1/loose_accounts/{account_id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | NO |   | 
tokens[code] | array[string] | YES |   | 
tokens[amount] | array[number] | YES |   | 
account_id | integer | YES |   | 
# Response Entities 
### LooseAccountEntity
 ``` 
 {
id: 1                                     
name: New Loose Account                   
created_at: 2021-07-08 08:08:08           
updated_at: 2021-08-09 09:09:09           
type: Accounts::LooseAccount              
is_deleted: false                         
is_locked: false                          
} 
 ``` 

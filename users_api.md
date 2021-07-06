# Users Api 
#### _Please read General API Information first_
### Current User Mode (Paper or Real) (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/users/current_mode
```
**Weight:**
1

**Parameters:**
NONE
### Change User Mode (Paper or Real) (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/users/change_mode
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
mode | string | YES | paper, real  | 
# Response Entities 

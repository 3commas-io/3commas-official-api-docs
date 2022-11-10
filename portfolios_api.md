# Portfolios Api 
#### _Please read General API Information first_
### Show portfolio info (Permission: NONE, Security: SIGNED)
```
GET /ver1/portfolios/{id}
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
id | integer | YES |   | 
### Show portfolios list (Permission: NONE, Security: SIGNED)
```
GET /ver1/portfolios
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
page | integer | NO |   | Current page
per_page | integer | NO |   | Records per page
### Show portfolios, [DEPRECATED] Please, use GET /portfolios instead of portfolios/portfolios
```
GET /ver1/portfolios/portfolios
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (10) | 
offset | integer | NO |  (0) | 
# Response Entities 
### PortfolioEntity
 ``` 
 {
name:                                     
id:                                       
created_at:                               
portfolio_entries: PortfolioEntryEntity    
} 
 ``` 
### PortfolioEntryEntity
 ``` 
 {
target_percentage:                        
currency_code:                            
} 
 ``` 

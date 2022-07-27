# Portfolios Api 
#### _Please read General API Information first_
### Show portfolios
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

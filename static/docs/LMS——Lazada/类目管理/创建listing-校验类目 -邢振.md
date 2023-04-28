# 创建listing-校验类目 -邢振

> 作者：xingzhen

## 简要描述

- 创建listing-校验类目 -邢振

## 请求URL
- ` /lazada/category/checkCategory `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeName |是  |string |店铺名称   |
|categoryId |是  |long |类目id   |
|siteCode |是  |string |站点   |
|listingStatus |是  |int |状态   |

## 返回示例 

``` 
 true:通过
 false:不通过
```
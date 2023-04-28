# 获取状态类型（conditionType）（废弃）

> 作者：xingzhen

## 简要描述

- 获取状态类型（conditionType）接口 （废弃）

## 请求URL
- ` /category/get/condition/type `
  
## 请求方式
- GET 

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "1000": "New",
        "1500": "New without tags",
        "1750": "New with defects",
        "2000": "Certified refurbished",
        "2500": "Seller refurbished",
        "2750": "Like New",
        "3000": "Pre-owned",
        "4000": "Very Good",
        "5000": "Good",
        "6000": "Acceptable",
        "7000": "For parts or not working"
    },
    "msg": "操作成功"
}
```
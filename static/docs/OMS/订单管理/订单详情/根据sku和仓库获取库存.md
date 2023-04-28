# 根据sku和仓库获取库存

> 作者：18679129326@163.com

## 简要描述

- 修改地址接口

## 请求URL
- ` /orderGood/getSkuStock `
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pmsSku |是  |string |pmsSku   |
|wareHouseCode |是  |string |仓库编码   |

## 请求示例 
http://localhost:8181/orderGood/getSkuStock?pmsSku=RY8YBCA03&wareHouseCode=T453

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": 0,
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
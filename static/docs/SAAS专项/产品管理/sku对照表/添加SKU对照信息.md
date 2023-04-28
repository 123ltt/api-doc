# 添加SKU对照信息

> 作者：wuxin

## 简要描述

- 添加SKU对照信息

## 请求URL
- ` /pms/skuMapper/add `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pmsSku |是  |string |系统sku   |
|sellerSku |是  |string | 平台卖家sku    |
|parentSellerSku |否  |string | 平台卖家父sku    |
|platform     |否  |string | 平台    |
|status     |否  |int | 状态 1 有效 0 无效    |
|shopId     |否  |long | 店铺ID    |

## 请求示例 

``` 
  {
      "pmsSku": "wetrt-rtre-rtrt",
      "sellerSku": "wetrt-rtre-rtrt",
      "platform": "AM",
      "status": 0 ,
      "shopId": null
  }
```
## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": null,
    "msg": "操作成功"
}
```
## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
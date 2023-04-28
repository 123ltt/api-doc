# 关联订单item下拉列表

> 作者：lixizhou

## 简要描述

- 关联订单item下拉列表接口

## 请求URL
- ` /orderGood/itemList `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |OMS订单号   |

## 返回示例 

``` 
  {
  "code": 200,
  "success": true,
  "data": [
    {
      "platformProductId": "47512111591035",
      "originalSkuCode": "CA-20B",
      "main_seller_id":4515484555847
    }
  ],
  "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platformProductId |string   |平台itemId  |
|originalSkuCode |string   |在线sku编码  |
|mainSellerId |long   |主销售id  |
|productSalePrice|double|item的销售价

## 备注 

- 更多返回错误代码请看首页的错误代码描述
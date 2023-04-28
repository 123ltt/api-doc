# 更新shipmentID

> 作者：1254837494@qq.com

## 简要描述

-更新shipmentID

## 请求URL
- `http://{网关地址}/requirementPlan/updateShipmentId`
  
## 请求方式
- post 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|code |是  |String |计划单号   |
|shipmentId |是 |String |货件编码 |
|warehouseCode |是  |String |仓库编码   |
|address |是  |String |配送地址   |
|shippingMarkUrl |是  |String |箱唛文件地址 `NEW`  |

## 请求示例 

``` 
{
    "code": "xxx",
    "shipmentId": "xxx",
    "warehouseCode": "xxx",
    "address": "xxx"
}

```
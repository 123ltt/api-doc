# 修改sku

> 作者：liben

## 简要描述

- 修改sku

## 请求URL
- ` /pms/product/editSku `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |long |id   |
|nameZn |是  |string |名称   |
|nameEn |否  |string | 英文名称    |
|sku     |是  |string | sku    |
|status     |是  |int | 状态 （1 有效  0 无效）    |
|categoryId     |是  |int | 类目id   |
|brandName     |否  |string | 品牌名称   |
|modelNumber     |否  |string | 型号   |
|unit     |否  |string | 单位   |
|developLeadUserId     |否  |long | 开发负责人   |
|productLeadUserId     |否  |long | 产品负责人   |
|productLength     |否  |decimal | 产品长   |
|productWidth     |否  |decimal | 产品宽   |
|productHeight     |否  |decimal | 产品高   |
|packLength     |否  |decimal | 包装长   |
|packWidth     |否  |decimal | 包装宽   |
|packHeight     |否  |decimal | 包装高   |
|netWeight     |否  |decimal | 毛重   |
|grossWeight     |否  |decimal | 净重   |
|attributeSpecification     |是  |attributeSpecification | 规格属性  |
|attributeSpecification-color     |是  |string | 颜色  |
|attributeSpecification-size     |是  |int | 尺码  |
|imageUrl     |是  |array(string) | 图片路径  |
|describeEn     |是  |string | 描述  |
|purchaseCost     |是  |number | 采购成本  |
|purchaseDeliveryTime     |是  |number | 采购交期  |
## 请求示例 

``` 
{
    "id":1513438836272873474,
    "nameZn": "裤子",
    "nameEn": "T-shirt",
    "sku": "1q5a-48wq-15dr",
    "status": 0,
    "categoryId": 158,
    "brandName": "李宁",
    "modelNumber": "ZK96",
    "unit": "泽汇科技",
    "developLeadUserId": 1151694613611651,
    "productLeadUserId": 1151694613611651,
    "productLength": 20.00,
    "productWidth": 5.00,
    "productHeight": 50.00,
    "packLength": 20.00,
    "packWidth": 5.00,
    "packHeight": 50.00,
    "netWeight": 20.00,
    "grossWeight": 18.00,
    "imageUrl": "[\"图片路径\"]",
    "attributeSpecification": "{\"color\": \"白色\",\"size\": \"XXL\"}"
}
```
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": true,
    "msg": "操作成功",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
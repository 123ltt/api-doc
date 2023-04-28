# 添加spu

> 作者：liben

## 简要描述

- 添加spu

## 请求URL
- ` /pms/product/addSpu `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|nameZn |是  |string |名称   |
|nameEn |否  |string | 英文名称    |
|spu     |是  |string | spu    |
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
|imageUrl     |是  |array(string) | 图片路径  |
|describeEn     |是  |string | 描述  |
|purchaseCost     |是  |number | 采购成本  |
|purchaseDeliveryTime     |是  |number | 采购交期  |
|attributeSpecification     |是  |attributeSpecification | 规格属性  |
|color     |是  |array(string) | 颜色  |
|size     |是  |array(int) | 尺码  |
|skuList     |是  |list | 子sku信息   |
|skuList-sku |否  |string | 子SKU    |
|skuList-title     |是  |string | 品名    |
|skuList-imageUrl     |是  |array(string) | 图片    |
|skuList-status     |是  |int | 状态 （1 有效  0 无效）    |
|skuList-attributeSpecification     |是  |attributeSpecification | 规格属性 |
|purchaseCost     |是  |decimal | 采购成本 |

## 请求示例 

``` 
 {
    "nameZn": "短袖",
    "nameEn": "T-shirt",
    "sku": "896w-48wq-15dr",
    "spu": "896w-48wq-15dr",
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
    "attributeSpecification": "{\"color\": \"白色\",\"size\": \"XXL\"}",
    "skuList": [
        {
            "sku": "896w-48wq-893qw",
            "title": "裤子",
            "imageUrl": "[\"图片路径\"]",
            "attributeSpecification": "{\"color\": \"白色\",\"size\": \"XXL\"}"
        }
    ]
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
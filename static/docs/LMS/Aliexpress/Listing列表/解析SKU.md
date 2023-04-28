# 解析SKU

> 作者：wuxin

## 简要描述

- 解析SKU接口

## 请求URL
- ` /api/analysisSku `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |string |平台简码   |
|storeCode |是  |string |店铺编码   |
|sellerSku |是  |string |平台SKU   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "platformCode": "WM",
            "itemId": null,
            "sellerSku": "ZYLBMF19371184WXL-888",
            "saleUser": null,
            "productSku": "RY64F1843H5",
            "combineSku": [],
            "productCountry": null,
            "id": null,
            "storeCode": "walmart_US_003c",
            "warehouseId": "888",
			"isPickUp": true
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872be163720183213110312620"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platformCode |string   |平台简码 |
|sellerSku |string   |平台SKU |
|productSku |string   |产品sku|
|combineSku |array |组合sku详情|
|storeCode |string   | 店铺编码|
|warehouseId |string   | 仓库id|
|isPickUp |boolean   | 是否自提 默认为空|
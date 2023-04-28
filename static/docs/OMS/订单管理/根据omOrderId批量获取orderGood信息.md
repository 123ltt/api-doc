# 根据omOrderId批量获取orderGood信息

> 作者：liben

## 简要描述

- 根据omOrderId批量获取orderGood信息

## 请求URL
- ` /orderGood/getSkuInfoByOrderIdList `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|orderIdList |是  |array(string) |om订单号   |

## 请求示例 

``` 
["LZ2112301520000001"]
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "orderId": "LZ2112301520000001",
            "info": [
                {
                    "id": "1476452998594134017",
                    "createUser": "0",
                    "createDept": "0",
                    "createTime": "2021-12-30 15:20:01",
                    "updateUser": "0",
                    "updateTime": "2021-12-30 15:20:01",
                    "status": 1,
                    "isDeleted": 0,
                    "omOrderId": "LZ2112301520000001",
                    "platformProductId": "316921453502949",
                    "platOrderId": "316921453402949",
                    "productsTransactionNum": "",
                    "productsName": "",
                    "originalSkuCode": "WX734M-140",
                    "originalSkuName": "Bayberry Chirldren wool blend skirt dress legging pants for toddler girl kids",
                    "pmsSku": "",
                    "productSalePrice": "3.2542",
                    "productQuantity": 1,
                    "productPicUrl": "https://my-live.slatic.net/p/47b6c39c72051e25b1950ea8f31ad3ff.jpg",
                    "skuAffixType": 0,
                    "skuAffix": "",
                    "productRemarks": "",
                    "productFreightCurrency": "",
                    "productFreightAmount": "0.0000",
                    "logisticsProperty": "",
                    "platOrderIdJson": "",
                    "platOrderIdsJson": "",
                    "grossWeight": "",
                    "skuSplitUnitPrice": "0.0000",
                    "skuCost": "0.0000",
                    "warehouseCode": "",
                    "mainSellerId": "1331853515296534530",
                    "mainCustomerServiceId": 0,
                    "developLeadUserId": 0,
                    "developLeadUserName": "",
                    "reasonType": -1,
                    "reasonDetail": "",
                    "discount": "1.0000",
                    "nwSku": "",
                    "transactionId": "",
                    "ruleId": -1,
                    "location": null,
                    "distributionType": 0,
                    "skuStatus": null,
                    "declarePrice": "0.0000",
                    "lmsWarehouseId": "",
                    "asin": "",
                    "productSku": "",
                    "publicParam": ""
                }
            ]
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a873b4164517143467110029960"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|pmsSku |string   |SKU  |
|productsName |string   |SKU名称  |
|platformProductId |string   |SKU对应Item  |
|productQuantity |int   |数量  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
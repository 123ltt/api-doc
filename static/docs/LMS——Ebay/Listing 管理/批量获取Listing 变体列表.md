# 批量获取Listing 变体列表

> 作者：1638648874@qq.com

## 批量获取Listing 变体列表
**作者**:`胡雍`

**接口地址**:`/ebay/listing/getListingVariantForBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
[1418151021868322817,1418150949306863617]
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listingIds|listingIds|body|true|array|long|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«long,List«EbayListingVariantVO»»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|EbayListingVariantVO|EbayListingVariantVO|
|&emsp;&emsp;costPrice|成本|number||
|&emsp;&emsp;id|主键ID|integer(int64)||
|&emsp;&emsp;isOtherSku|是否spu外其他sku|boolean||
|&emsp;&emsp;listingId|ListingID|integer(int64)||
|&emsp;&emsp;listingStatus|listing状态|integer(int32)||
|&emsp;&emsp;mainPicture|主图(缩略图)|string||
|&emsp;&emsp;productSku|产品SKU|string||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;startPrice|售价(拍卖为起拍价|number||
|&emsp;&emsp;stock|库存|integer(int32)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "1418150949306863617": [
            {
                "id": "1418150949491412994",
                "listingId": "1418150949306863617",
                "productSku": "RVDPZ528DSN",
                "sellerSku": "AUIR2SJ8UT2528A-888",
                "mainPicture": "https://pic.elinkmall.com/SJ/SJ2528/SJ2528%20(13).jpg",
                "costPrice": null,
                "startPrice": "11.02",
                "stock": 1,
                "listingStatus": 1,
                "isOtherSku": null
            },
            {
                "id": "1418150949499801602",
                "listingId": "1418150949306863617",
                "productSku": "RVDPZ528DYE",
                "sellerSku": "AUEO3SJ7OE2528B-888",
                "mainPicture": "https://pic.elinkmall.com/SJ/SJ2528/SJ2528%20(2).jpg",
                "costPrice": null,
                "startPrice": "19.88",
                "stock": 1,
                "listingStatus": 1,
                "isOtherSku": null
            }
        ],
        "1418151021868322817": [
            {
                "id": "1418151022052872193",
                "listingId": "1418151021868322817",
                "productSku": "RWYX6965ZHH",
                "sellerSku": "JLIR5965WP5L-888",
                "mainPicture": "https://pic.elinkmall.com/JL/JL965/JL965L.jpg",
                "costPrice": null,
                "startPrice": "6.95",
                "stock": 1,
                "listingStatus": 1,
                "isOtherSku": null
            },
            {
                "id": "1418151022061260802",
                "listingId": "1418151021868322817",
                "productSku": "RWYX6965ZHJ",
                "sellerSku": "JLUT8962OE5DG-888",
                "mainPicture": "https://pic.elinkmall.com/JL/JL965/JL965DG.jpg",
                "costPrice": null,
                "startPrice": "6.99",
                "stock": 1,
                "listingStatus": 1,
                "isOtherSku": null
            },
            {
                "id": "1418151022065455106",
                "listingId": "1418151021868322817",
                "productSku": "RWYX6965ZHK",
                "sellerSku": "JLUT9961YY5P-888",
                "mainPicture": "https://pic.elinkmall.com/JL/JL965/JL965P.jpg",
                "costPrice": null,
                "startPrice": "6.99",
                "stock": 1,
                "listingStatus": 1,
                "isOtherSku": null
            }
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601642563656205100510508"
    }
}
```
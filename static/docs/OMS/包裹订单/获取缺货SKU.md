# 获取缺货SKU

> 作者：yangruibo

## Author
xingzhen

## 请求URL

- ` /feign/coms/findStockPackage `

## 请求方式

- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pageSize |是  |int |每页数量最大不能超过500 |
|createTimeStart |否  |String |包裹创建时间开始 |
|createTimeEnd | 否  |String |包裹创建时间结束 |
|isOversea | 否  |Boolean |是否海外仓, 海外仓:true，国内仓:false   |
|tenantId | 否  |String |租户 |
|scrollId | 否  |String |游标 |


## 请求示例
{
    "pageSize": 1,
    "createTimeStart":null,
    "createTimeEnd":null,
    "isOversea":false,
    "tenantId":"000000",
 	"scrollId":"123"
}

## 返回结果说明

|参数名|类型|说明|
|:-----  |:-----|-----       
|source |String |pmssku   |
|tenantId |String |租户ID   |
|packageCode |String |包裹号   |
|platOrderId |String |平台订单号   |
|platformCode |String |平台编码   |
|businessType |String |业务类型   |
|orderCode |String |业务单号   |
|orderTime |data |包裹创建时间   |
|productOwnerId |long |货主id   |
|warehouseCode |String |仓库编码   |
|shopCode |String |店铺编码   |
|mainSellerName |String |主销售   |
|priority |int |优先级   |
|isOverseaStock |Boolean |是否海外仓, 海外仓:true，国内仓:false   |
|oosQuantityTotal |int |当前业务单缺货总数量   |
|productSku |String |sku编码   |
|oosQuantity |int |sku缺货数量   |
|listingSellerName |string |listing销售人   |
|productAuthId |String |货权id（租户id）   |
|firstGrabTime |data |抓单时间   |
|scrollId |String |分页游标   |
|platformName |String |平台名称   |

## 返回示例 

 ``` 
{
    "code": 200,
    "success": true,
    "data": {
        "source": "OMS",
        "scrollId": "DXF1ZXJ5QW5kRmV0Y2gBAAAAAA4inLEWdjRURFJiT2dRcXFwSmZLR0VEWWRHQQ==",
		"tenantId": "000000",
        "stockOosInfoList": [
            {
                "packageCode": "EB2102071733000078A",
                "platOrderId": null,
                "platformCode": "AM",
                "platformName": "亚马逊",
                "businessType": "SALE_OUT_WAREHOUSE",
                "orderCode": "EB2102071733000078A",
                "orderTime": "2021-02-08 15:27:18",
                "productOwnerId": 639,
                "productAuthId": "000000",
                "warehouseCode": "CK0001",
                "shopCode": "amazon_US_0034",
				"mainSellerName": "amazon_US_0034",
				"priority": "amazon_US_0034",
                "firstGrabTime": "2021-02-08 11:30:03",
                "oosQuantityTotal": 1,
                "isOverseaStock": false,
                "skuInfoList": [
                    {
                        "productSku": "RY9Q1CM0F",
                        "oosQuantity": 1,
						"listingSellerName": "amazon_US_0034",
                    }
                ]
            }
        ]
    },
    "msg": "操作成功",
    "msgDetail": null,
    "attachedMap": {
        "traceId": "c0a87b011658392231589100314352"
    }
}

 ```
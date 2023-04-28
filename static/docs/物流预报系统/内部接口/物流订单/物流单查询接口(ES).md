# 物流单查询接口(ES)

> 作者：1254837494@qq.com

## 简要描述

-物流单管理 主页 查询ES

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/orderEsDetail`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |否  |Strring |平台代码   |
|tenantId |否  |Strring |租户id   |
|channelCode |否  |Strring |渠道代码   |
|startDate |是  |Date | 开始时间    |
|endDate     |是  |Date | 结束时间    |
|dateType     |是  |Date | 时间类型（枚举--forecast_order_time_search） |
|searchType     |否  |Int | 搜索条件 0:物流单 1:平台单号 2:包裹号 3:跟踪号 4:扩展跟踪号 5:OMS订单 6:sku    |
|searchValue |否  |Strring | 搜索内容    |
|type |否  |Strring |状态 10:待申请跟踪号 20:待申请面单 50:订单完成 70:取消中 90:预报异常&lt;br/>轨迹状态 102:接收 103:转运 104:落地 105:签收 106:运输终止|
|providerCode |否  |Strring |物流商编码   |
|countryCode |否  |Strring |收件人国家简码   |
|storeCode |否  |Strring |店铺编码   |
|warehouseCode |否  |String |发货仓库编码   **new**|
|virtualWarehouse |否  |String |虚仓发货  **new** |
|property |否  |String |物流属性  **new** |
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "list": [
			{
                "id": "1457984308114399233",
                "code": "P202111091612011",
                "platformNumber": "405-0158488-9841139",
                "referenceNumber": "AM2111051839000001A",
                "providerCode": "ZHW-AA0142",
                "channelCode": "CHL0590",
                "trackingNumber": "UU307894641CN",
                "trackingNumberEx": "HHWMU1313000791YQ",
                "status": 50,
                "tenantId": "000004",
                "createTime": "2021-11-09 16:12:02",
                "deliveryTime": null
            }
        ],
        "pagesVO": {
            "totalCount": 100,
            "pageSize": 100,
            "pageStart": 100,
            "totalPages": 10000,
            "current": 2
        }
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86432163789034540010072380"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id |
|code |String   |物流单 |
|referenceNumber |String   |包裹号   |
|platformNumber |String   |平台交易号  |
|providerCode |String   |物流商代码 |
|channelCode |String   |渠道代码  |
|trackingNumber |String   |跟踪号  |
|trackingNumberEx |String   |扩展跟踪号  |
|createTime |Date   |创建时间 |
|deliveryTime|Date |出库时间|
|status |int   |订单状态 10:待申请跟踪号 20:待申请面单 30:回传跟踪号 40:回传面单 50:订单完成 70:取消中 80:已取消 90:预报异常|  
|tenantId |String   |租户id |
|platformCode |String   |销售平台  |
|storeCode |String   |店铺编码   |
|storeName |String   |店铺名称  |
|salesName |String   |销售名称   |
|customerServiceName |String   |客服名称 |
|countryName |String   |收件国家名称 |
|countryCode |String   |收件国家简码  |
|deliveryWeight |String   |出库重量  |
|deliveryTotalFreight |String   |总运费   |
|latelyRemark |String   |最新备注   |
|orderGoodsList |list   |产品信息  |
|sku |String   |产品编码   |
|nameCn |String   |申报中文名   |
|nameEn |String   |申报英文名  |
|hsCode |String   |海关编码 |
|latelyException |String   |最新异常信息  **new** |
----------------------------------------------------------------------------------------------------
# wms渠道计费

> 作者：luobinbin

## 简要描述

- wms渠道计费

## 请求URL
- ` http://test-cams-gateway.zehui.local/logistics-open-api-service/wmsApi/v1/wmsCharge`
  
## 请求方式
- POST 

## 订单参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |String | 客户参考号 唯一识别号     |
|parcels     |是  |List&lt;WmsParcelReq> | 包裹信息    |
|sender     |是  |WmsSenderReq | 发件人信息    |
|receiver     |是  |WmsReceiverReq | 收件人信息    |
|logistics     |是  |WmsLogisticsReq | 渠道信息    |

## WmsParcelReq参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|length |是  |BigDecimal |包裹长 单位:cm   |
|width |是  |BigDecimal |包裹宽 单位:cm   |
|height |是  |BigDecimal |包裹高 单位:cm   |
|weight |是  |BigDecimal |包裹实重 单位:kg   |
|volume |是  |BigDecimal |包裹体积 单位:cm^3   |
|cost |否  |BigDecimal |包裹总价值 rmb  |
|parcelNo| 是 | String | 包裹单号 |
|goods     |是  |List&lt;WmsGoodsReq> | 包裹商品信息    |

## WmsSenderReq参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name |是  |String |发件人名称   |
|countryCode |是  |String |发件人国家简码 默认传中国CN   |
|province |是  |String |发件人省份   |
|city |是  |String |发件人城市   |
|address |是  |String |发件人详细地址   |
|address1 |否  |String |发件人详细地址1   |
|warehouseCode |是  |String |发货仓库 库存系统仓库代码，例如【Z11】（龙岗T仓[T453] 龙岗中转A仓[ZZA685] 清溪R仓[R293] ）  |
|tel |否 |String |发件人电话 电话和手机必传一个 |
|phone |否 |String |发件人手机 电话和手机必传一个 |



## WmsReceiverReq参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name |是  |String |收件人名称   |
|countryCode |是  |String |收件人国家简码 默认传中国CN   |
|province |是  |String |收件人省份   |
|city |是  |String |收件人城市   |
|postCode |否  |String |收件人邮编   |
|address |是  |String |收件人地址   |
|address1 |否  |String |收件人地址1   |
|tel |否 |String |收件人电话 电话和手机必传一个 |
|phone |否 |String |收件人手机 电话和手机必传一个 |

## WmsGoodsReq参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sku |否  |String |sku编码   |
|name |是  |String |sku中文名称  |
|num |是  |Integer |sku数量   |
|length |否  |BigDecimal |sku长   |
|width |否  |BigDecimal |sku宽   |
|height |否  |BigDecimal |sku高   |
|volume |否  |BigDecimal |sku体积   |
|weight |否  |BigDecimal |sku重量   |
|cost |否  |BigDecimal |sku单价 rmb   |
|originCountry |否 |String |源产地   |

## WmsLogisticsReq 物流渠道信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|channelCode |是  |String |渠道代码-圆通速递(CHL1140)    |




## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "refrenceNumber": "Ref2021101900001",
        "logisticsNo": "e73cf8d3d577418a9b74c771b79dcb4d",
        "channelCode": "CHL1140",
        "parcels": [
            {
                "parcelNo": "Ref2021101900001-1",
                "cost": "64.1974"
            }
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a81472163462640462610058844"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|----- 
|code |Integer   |状态码 参考BladeX R 200 业务成功 400 业务异常  500服务器异常|
|msg |String   | 描述信息  |
|data| WmsChargeApiResponse | 包裹信息 |
## WmsChargeApiResponse 物流渠道信息
|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|refrenceNumber | 是 |String |客户参考号 唯一识别号 |
|logisticsNo |是 |String |物流系统内部单号 |
|channelCode |是  |String |渠道代码   |
|parcels | 是 |List&lt;WmsParcelChargeResponse> |包裹信息数据 |
## List&lt;WmsParcelChargeResponse> 物流渠道信息
|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|parcelNo |是  |String |包裹单号   |
|cost |是 | BigDecimal | 包裹总费用 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
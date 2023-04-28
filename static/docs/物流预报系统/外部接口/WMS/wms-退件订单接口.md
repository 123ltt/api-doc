# wms-退件订单接口

> 作者：1254837494@qq.com

## 简要描述

- 接收wms退件订单接口

## 请求URL
- ` http://test-cams-gateway.zehui.local/logistics-open-api-service/wmsApi/v1/wmsReturnOrder`
  
## 请求方式
- POST 

## BODY内容

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |String |oms包裹号   |
|tenantId |是  |string | 租户ID    |
|trackingNumber     |是  |string | 跟踪号1    |
|trackingNumberEx     |否  |string | 跟踪号2    |
|reason     |是  |string | 退件原因    |
|type     |是  |Integer | 1 国内退件 2 海外退件 3 海外仓退件    |
|refuseTime     |是  |Date | 退件到货扫描时间    |
|wmsOrderNumber |是 | String | 退件单号 |
|wmsOperator |是 | String | wms退件操作人 |
|remark |否 | String | 备注 |

## 请求示例 

``` 
{
	"referenceNumber": "LZ0000000001",
	"tenantId": "000000",
	"trackingNumber": "12154545",
	"trackingNumberEx": "",
	"reason": "超尺寸" ,
	"type": 1,
	"refuseTime": "2021-11-11 14:22:22",
	"wmsOperator":"周武",
	"wmsOrderNumber":"0001"
}

```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a814721634694517383100310880"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |200 接收成功 非200接收失败  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
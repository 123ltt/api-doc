# OMS提供-回写WMS包裹状态到OMS

> 作者：lizhiyuan

## 简要描述

- WMS调用，回写wms最新状态到OMS

## 请求URL
- `http://test-ams-gateway.zehui.local/oms/wms/sendPkg2Oms`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
	"tenantId": "000000",
    "data": [
        {
            "pushWmsNo": "OMS包裹号A",
            "wmsStatus": "wms包裹状态",
			"wmsSubStatus": "wms包裹子状态",
			"actualWeight":"110",
			"deliveryTime":"2020-11-11 11:11:11"
        },
        {
            "pushWmsNo": "OMS包裹号B",
            "wmsStatus": "wms包裹状态",
			"wmsSubStatus": "wms包裹子状态",
			"actualWeight":"包裹实际重量,单位:g",
			"deliveryTime":"2020-11-11 11:11:11"
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|tenantId |是  |String |租户ID   |
|pushWmsNo |是  |String |OMS包裹号   |
|wmsStatus |是  |String |wms包裹状态编码 |
|wmsSubStatus |是  |String |wms包裹子状态编码 |
|actualWeight |否  |String |wms包裹实际重量,单位:g |
|deliveryTime |否  |String |发货北京时间 |

## 返回示例 

``` 
  {
    "code": 200,
    "data": [
        {
            "error": null,
            "pushWmsNo": null,
            "success": false
        }
    ],
    "msg": "ok",
    "success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|pushWmsNo |int   |单号 |
|success |int   |是否成功 |
|error |int   |失败原因 |


## 备注
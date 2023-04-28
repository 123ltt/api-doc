# OMS提供-回写WMS退件单到OMS

> 作者：1017632646@qq.com

## 简要描述

- WMS调用，回写WMS退件单到OMS

## 请求URL
- `http://test-ams-gateway.zehui.local/oms/wms/sendReturnPkg2Oms`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
	"tenantId": "000000",
    "data": [
        {
            "pkgCode": "OMS包裹号",
            "returnType": 1,
            "returnStatus": 1,
            "returnTime":"2020-11-11 11:11:11",
            "returnOrderNo": "wms退件单号",
            "returnRemark":"退件备注"
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|tenantId |是  |String |租户ID |
|pkgCode |是  |String |OMS包裹号   |
|returnType |是  |int |退件类型  1:国内退件 2:海外退件 |
|returnStatus |是  |int |退件状态  1:退件未入库 2:退件已入库  |
|returnTime |是  |String |退件北京时间 |
|returnOrderNo |否  |String |wms退件单号 |
|returnRemark |否  |String |退件备注 |

## 返回示例 

``` 
  {
    "code": 200,
    "data": null,
    "msg": "操作成功",
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|code |int   |全部成功时为200 |

## 备注
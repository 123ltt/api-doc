# 渠道API配置修改接口

> 作者：1254837494@qq.com

简要描述

   渠道API配置修改接口

请求URL

   {tms-base}/base/channelApi/update

请求方式

    POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----    
|id |是   |配置id|无|
|channelCode |是   |渠道编码|无
|strategyName |是   |策略名称|无
|paramJson |是   |配置参数|无
|lpId |是   |物流商id|无




## 请求示例 

``` 
{
	"channelCode":"F100-3",
	"strategyName":"test",
	"paramJson":"{
        \"token\":\"def0d46f1e7e264f2349fe8120c90b8f\",
	    \"shippingUrl\":\"http://api.buylogic.cc
	/webservice/rest/getShipments\",
		\"orderUrl\":\"http://api.buylogic.cc/webservice/rest/addOrders\",
        \"trackUrl\":\"http://api.buylogic.cc
 /webservice/rest/madeTrackingNumber\",
        \"labelUrl\":\"http://api.buylogic.cc
		 /webservice/rest/printLabelsBySize\"
}",
	"lpId":18,
	"id":"1366639371872235521"
}
 
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "修改成功"
}
```
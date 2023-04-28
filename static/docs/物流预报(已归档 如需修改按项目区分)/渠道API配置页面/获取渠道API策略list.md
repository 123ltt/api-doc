# 获取渠道API策略list

> 作者：1254837494@qq.com

简要描述

    获取渠道API策略list

请求URL

   {tms-base}/base/channelApi/getApiList

请求方式

    GET

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|strategyName |String   |策略名|无
|strategyDesc |String   |策略描述|无
|paramJson |String   |接口参数json|无


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": null,
            "channelCode": null,
            "strategyName": "baXin",
			"strategyDesc": "八星",
            "paramJson": "{\"token\":\"\",\"orderUrl\":\"\",\"labelUrl\":\"\",\"shippingUrl\":\"\"}",
            "lpId": null,
            "labelType": null
        },
        {
            "id": null,
            "channelCode": null,
            "strategyName": "bullFrog",
			"strategyDesc": "牛蛙",
            "paramJson": "{\"trackToken\":\"\",\"trackUrl\":\"\",\"labelToken\":\"\",\"labelUrl\":\"\"}",
            "lpId": null,
            "labelType": null
        }
    ],
    "msg": "操作成功"
}
 
```
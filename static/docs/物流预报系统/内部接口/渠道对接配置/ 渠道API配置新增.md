#  渠道API配置新增

> 作者：luobinbin

## 简要描述

- 渠道API配置新增接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-provider/base/channelApi/add`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|strategyName |是|String  |策略名|
|paramJson |否|String   |授权信息|
|channelWay|是|Integer|渠道方式：1.线上 2.线下|
|traceUrl|否|String|轨迹接口`NEW`|
|lpId|是|String|物流商id|
|channelCode|是|String|渠道代码，多个用逗号分割|
## 请求示例 

``` 
{
	"traceUrl":"",
    "strategyName":"smt",
    "paramJson":"{\"cnLabelUrl\":\"\"}",
    "channelWay":"2",
    "lpId":2,
    "channelCode":"CHL1218,CHL1219"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "保存成功",
    "attachedMap": {
        "traceId": "c0a8727d1640057543364100116732"
    }
}
```


## 备注 

- 更多返回错误代码请看首页的错误代码描述
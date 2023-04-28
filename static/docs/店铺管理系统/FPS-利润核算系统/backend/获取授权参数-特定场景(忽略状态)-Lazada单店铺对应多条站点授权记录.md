# 获取授权参数-特定场景(忽略状态)-Lazada单店铺对应多条站点授权记录

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 查询授权参数-特定场景站点(忽略状态)，Lazada 平台比较特殊，单店铺存在多站点的授权信息

`特定的业务场景需要谨慎使用，会拉取到旧租户+新租户店铺的授权参数`

## 请求URL
- ` /client/api-auth/getAuthParamValueStrategySpecificSite`
  
## 请求方式
- POST 

## 请求示例
```
{
    "platformCode": "LZ",
    "code": "lazada_MY_001W",
    "siteCode": "MY"
}
```


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |String | 平台简码    |
|name |否  |String | 店铺名称(店铺名称或编号不能同时缺失)   |
|code |否  |String | 店铺编号(code优先级大于name, name, code 必传其一)    |
|siteCode |是  |String | 站点编号    |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "authId": "1384799311413768194",
        "platformCode": "LZ",
        "siteCode": "MY",
        "name": "Etecho",
        "code": "lazada_MY_001V",
        "storeStatus": 4,
        "token": "50000801208ogHZ0hXjo19da26d2UCxuFYkESeLTzjkiLgZgq1jHzlPtK9E5Tdn",
        "paramMap": {
            "sellerId": "300142878308",
            "appSecret": "BkhUgRmBjWKBjgXes1spNf2otDruvifl",
            "appKey": "107483"
        },
        "apiUrl": ""
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af40565163971087721851831"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platformCode | string   | 平台码 |
|siteCode | string   | 站点码 |
|name | string   | 店铺名称 |
|code | string   | 店铺编号 |
|developAccount | string   | 开发者账号 |
|token | string   | 约定参数 |
|paramMap | string   | 参数映射 |




## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
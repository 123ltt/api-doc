# 查询授权参数-LZ

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 查询授权参数-LZ

## 请求URL
- ` /client/api-auth/getAuthParamValueStrategySite`
  
## 请求方式
- POST 

## 请求示例
```
{
    "platformCode": "LZ",
    "siteCode": "TH",
    "code": "lazada_MY_0071",
    "name": "bayberry"
}
```


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |String | 平台简码    |
|name |否  |list | 店铺名称    |
|siteCode |是  |String | 站点编号    |
|code |否  |list | 店铺编号(优先级>店铺名称)    |
|storeStatusList |否  |List | 店铺状态列表, 默认是开启状态， 店铺状态(-1 未开启, 0 关闭, 1 开启, 2 暂停运营, 3 冻结, 4 已迁移， -99 未知)     |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "platformId": 132888432,
        "platformCode": "LZ",
        "platformName": "lazada",
        "siteId": "1353618676514947073",
        "siteCode": "TH",
        "sitePublishList": [
            {
                "siteId": "1353618460164358145",
                "siteCode": "MY"
            }
        ],
        "companyId": "1328887085897093121",
        "companyName": "深圳哇哈哈贸易有限公司",
        "name": "bayberry",
        "code": "lazada_MY_0071",
        "storeId": "1353653541842624513",
        "authId": "1355073480210518017",
        "developAccount": "",
        "deadline": "",
        "token": "50000201016pmUqbY7JvEksZUPhb1053ed1ajiTdru0GKhNkZGtXIc5jy5wY8h",
        "tokenExpires": "",
        "accessCount": 19.221682589285738,
        "paramMap": {
            "appSecret": "BkhUgRmBjWKBjgXes1spNf2otDruvifl",
            "appKey": "107483"
        }
    },
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platformId | string   | 平台ID |
|platformCode | string   | 平台码 |
|platformName | string   | 平台名称 |
|siteId | string   | 站点ID |
|siteCode | string   | 站点码 |
|sitePublishList | list   | 刊登站点列表 |
|name | string   | 店铺名称 |
|code | string   | 店铺编号 |
|developAccount | string   | 开发者账号 |
|deadline | number   | 过期时间 |
|token | string   | 约定参数 |
|paramMap | string   | 参数映射 |




## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
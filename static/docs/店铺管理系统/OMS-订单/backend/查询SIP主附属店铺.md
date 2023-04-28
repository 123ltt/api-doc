# 查询SIP主附属店铺

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 查询SIP主,附属店铺信息

## 请求URL
- ` /client/store-info/listByStoreMainSubInfoQuery`
  
## 请求方式
- POST

## 请求示例
```
{
  "platformCode": "SP",
  "subStore": true,
  "storeStatusList": [1]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |String | 平台简码    |
|names |否  |String | 店铺名称列表    |
|codes |否  |String | 店铺编号列表    |
|subStore |否  |Boolean | true 附属店铺, false 主店铺, 不设置查询所有    |
|storeStatusList |否  |List | 店铺状态列表, 不设置查询所有,店铺状态(-1 未开启, 0 关闭, 1 开启, 2 暂停运营, 3 冻结, 4 已迁移， -99 未知)    |



## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "name": "yrdtechnology.thth",
            "code": "shopee_TH_02YZ",
            "subStore": true
        },
        {
            "name": "yrdtechnology.vnvn",
            "code": "shopee_VN_02Z0",
            "subStore": true
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ad1639645130509101335868"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|
|name |String   |店铺名称  |
|code |String |店铺编号  |
|subStore |Boolean |是否是附属店铺  |





## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
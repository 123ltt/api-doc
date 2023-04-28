# 获取授权Token(通用)

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 查询授权参数

## 请求URL
- ` /client/api-auth/getAuthToken`
  
## 请求方式
- POST

## 请求示例 

``` 
{
  "platformCode": "SP",
  "siteCode": "MY",
  "existToken": true
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |String | 平台简码    |
|siteCode |否  |String | 站点编号    |
|name |否  |String | 店铺名称    |
|existToken |否  |boolean | 存在Token（ShopeeV2,v1兼容）    |



## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "暂无承载数据",
    "attachedMap": {
        "traceId": "0af4056f163273372418913561"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | string   | 状态码 |
|success | string   | 是否成功 |
|data | string   | 响应数据 |
|msg | string   | 响应信息 |
|traceId | string   | 请求追溯Id |





## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
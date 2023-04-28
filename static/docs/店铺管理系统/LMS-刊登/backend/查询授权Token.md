# 查询授权Token

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 查询授权参数

## 请求URL
- ` /client/api-auth/getAuthToken`
  
## 请求方式
- GET 


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |String | 平台简码    |
|name |否  |String | 店铺名称    |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "siteCode": "",
        "storeCode": "",
        "token": ""
    },
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|storeCode | string   | 店铺编号 |
|siteCode | string   |站点编号 |
|token | string   |授权token |




## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
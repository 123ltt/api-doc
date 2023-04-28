# Fanno从平台同步勾选的店铺Listing

> 作者：yangruibo

## 作者
- 骆小敏
	
	
## 简要描述

- Fanno从平台同步勾选的店铺Listing

## 请求URL
- ` listing/syncItem `

## 请求方式
- POST


## 参数

|参数名|必选|类型|示例值|说明|
|:----    |:---|:----- |-----   |
|ids |是  |long[] |[1484707646280036353,1484707878833221633] |主键ID |


## 返回示例

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "itemId": "1484707646280036353",
            "code": 200,
            "success": true,
            "listingId": "1729395115149527778",
            "message": "同步完成"
        },
        {
            "itemId": "1484707878833221633",
            "code": 200,
            "success": true,
            "listingId": "1729395114649291490",
            "message": "同步完成"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af403cf164646256491210998"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|itemId|String|表主键ID
|listingId|String|local平台产品ID
|code|String|200则为正常，其他则为异常码

## 备注

- 更多返回错误代码请看首页的错误代码描述
# Fanno从平台同步勾选的全球Listing

> 作者：yangruibo

## 作者
- 骆小敏
	
	
## 简要描述

- Fanno从平台同步勾选的全球Listing

## 请求URL
- ` listing/global/syncItem `

## 请求方式
- POST


## 参数

|参数名|必选|类型|示例值|说明|
|:----    |:---|:----- |-----   |
|ids |是  |long[] |[1485523514723860481,1485523515495612418] |主键ID |


## 返回示例

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "itemId": "1483648383566966785",
            "code": 200,
            "success": true,
            "listingId": "1729394671637793506",
            "message": "同步完成"
        },
        {
            "itemId": "148551824804118528",
            "code": 500,
            "success": false,
            "listingId": null,
            "message": "同步失败,原因:ids:148551824804118528 不存在,请确认是否勾选的全球商品ID"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af403cf164646223717010018"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|itemId|String|表主键ID
|listingId|String|全球平台ID
|code|String|200则为正常，其他则为异常码

## 备注

- 更多返回错误代码请看首页的错误代码描述
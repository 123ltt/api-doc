# 批量更新获取listing详情

> 作者：wuxin

## 简要描述

- 获取用于批量更新所需的listing信息

## 请求URL
- `/aliexpresslisting/listing/data`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|listingIds |是  |array |listingId   |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": [
        {
            "account": "cn1521306888wkzh",
            "productSpu": "SVDBG431",
            "itemId": 1005003187327135,
            "groupId": 518528682,
            "freightTemplateId": 24056438333,
			"detailTemplateName": "123",
			"detail": ""
        },
        {
            "account": "cn1520262774nmdw",
            "productSpu": "SZSWQ340",
            "itemId": null,
            "groupId": null,
            "freightTemplateId": 722558109,
			"detailTemplateName": "123",
			"detail": ""
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872be164204213591512754224"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|account |int   |用户组id，1：超级管理员；2：普通用户  |
|productSpu |int   |用户组id，1：超级管理员；2：普通用户  |
|itemId |int   |用户组id，1：超级管理员；2：普通用户  |
|groupId |int   |用户组id，1：超级管理员；2：普通用户  |
|freightTemplateId |int   |用户组id，1：超级管理员；2：普通用户  |
|detailTemplateName |string   |产品信息模板  |
|detail |string   |描述  |
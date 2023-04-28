# cd修改自发货订单为 cdFBC订单(MKPFBC)平台发货

> 作者：chenpan

## 简要描述

- cd修改自发货订单为 cdFBC订单(MKPFBC)平台发货

## 请求URL
- ` /cdPlatOrdermain/updateToFBC `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
omOrderIds |是 | list |订单号   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "successList": [],
        "failList": [
            "CD2112181500000001"
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c4164327039727310028400"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
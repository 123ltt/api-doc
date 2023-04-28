# token失效提示

> 作者：lijinghua@zehui.com

## 简要描述

- 账号token过期提示

## 请求URL
- `/sendTips/getTokenInvalid?platCodes=JG&platCodes=WF&platCodes=XP&platCodes=CD&platCodes=FS`
  
## 请求方式
- GET

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "storeName": "Greathomestyle",
            "storeCode": "wayfair_07ZB",
            "invalidTime": "2022-03-11 18:32:47"
        },
        {
            "storeName": "Fs-monicaria",
            "storeCode": "fannoshop_0831",
            "invalidTime": "2022-03-21 16:30:00"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ab1647951511907108714456"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 根据牛蛙渠道ID获取渠道代码

> 作者：13243718327@163.com

## 简要描述

- 根据牛蛙渠道ID获取渠道代码

## 请求URL
- ` https://cams-gw.izehui.com/ctms-provider/channel/getChannelByDwgId`
  
## 请求方式
- GET 

## header内容
authorization：
blade-auth：
具体联系杨锐波授权账号

## Body内容

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|dwgList |是  |list |渠道Id集合   |

## 请求报文示例
```
[
    1,
    2,
    999999999999
]
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1372075471457628162",
            "channelCode": "CHL0022",
            "name": "Detuschemail",
            "dwgId": 1
        },
        {
            "id": "1372075477145104385",
            "channelCode": "CHL0533",
            "name": "大陆DHL",
            "dwgId": 2
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8728b1622537525039100912628"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|success |boolean   |成功或者失败 |
|data |list   |渠道信息 |
|data.id |long   |渠道Id(新系统ID) |
|data.channelCode |String   |新系统渠道代码(建议使用此代码作为唯一条件) |
|data.name |String   |渠道名称
|data.dwgId |Long   |牛蛙发货方式组ID

## 备注 

- 更多返回错误代码请看首页的错误代码描述
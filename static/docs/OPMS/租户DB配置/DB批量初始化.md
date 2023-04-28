# DB批量初始化

> 作者：raojun

## 简要描述

- **作者**:`饶俊`&lt;br/>

- DB批量初始化

## 请求URL
- http://dev-service.zehui.local/api/opms/tenant/db/initBatch

## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
| |是  |List&lt;Long> |json类型参数   |

## 请求示例
``` 
请求方式post，参数格式application/json数组，内容：tenant/db/page接口的主键ID
[
    1412248202699669506, 1412248253182312450, 1412248306122817537
]
```

## 返回示例

```
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "暂无承载数据",
    "attachedMap": {
        "traceId": "c0a872421625553180701103512536"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |状态码   |
|success |string   |成功状态   |
|data |string   |响应数据   |
|msg |string   |响应信息   |
## 备注 

- 更多返回错误代码请看首页的错误代码描述
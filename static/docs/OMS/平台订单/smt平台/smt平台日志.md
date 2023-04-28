# smt平台日志

> 作者：18679129326@163.com

**简要描述：** 

- 平台订单日志

**AUTH：** 
ZWX

**请求URL：** 
- ` /oms/smplatOrderhis/page?platOrderId=2`
  
**请求方式：**
- GET 

**请求示例：** 
```
http://192.168.114.172:8181/smplatorderhis/page?platOrderId=2
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|id |int   |主键|是|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1",
                "createUser": "0",
                "createDept": "0",
                "createTime": "2020-11-17 15:38:52",
                "updateUser": "0",
                "updateTime": "2020-11-17 15:38:52",
                "status": 0,
                "isDeleted": 0,
                "platOrderId": "2",
                "logger": "2",
                "msgBrief": "tsess",
                "msgDetail": "打算",
                "stacktrace": "aaa",
                "createUserAccount": ""
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:----    |:---|:----- |
| platOrderId | varchar | 平台订单号 |
| logger | varchar | 操作属性 |
| msgBrief | text | 操作描述,给用户看 |
| createUserAccount | varchar | 用户登陆账号 |
| createTime | date | 操作时间 |





 **备注** 

- 更多返回错误代码请看首页的错误代码描述
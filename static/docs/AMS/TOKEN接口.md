# TOKEN接口

> 作者：xiezhihua@zehui.com

**简要描述：** 

- **作者**:`谢智华`&lt;br/>判断请求头中的token是否有效

**请求URL：** 
- ` ams-auth/token/user-token-check `
  
**请求方式：**
- get `application/x-www-form-urlencoded` 

**参数：** 

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|blade-auth |必选  |header |主键 |

 **返回示例**

``` 
{
    "msg": "操作失败",
    "code": 400,
    "data": null,
    "success": false
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |

 **备注** 

-
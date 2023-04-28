# code获取跳转地址

> 作者：1254837494@qq.com

简要描述

    code获取跳转地址

请求URL

   {tms-system}/system/platformAccount/getCodeUrl?id=1397748962122842114

请求方式

    get

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|id |是|Long   |id

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": "https://www.wishpost.cn/oauth_v3/authorize?response_type=code&client_id=57ce7f6850db5ec1b527deb4&state=1&scope=user.order.write&force_login=false",
    "msg": "操作成功"
}
```
# Paypal账号列表-分页多条件

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- Paypal账号列表-分页多条件

## 请求URL
- ` /store/ebay-paypal/page`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|paypalAddress |否 |string   |paypal账号  |
|startAddTime|否 |string   |账号添加时间-开始时间  |
|endAddTime|否 |string   |账号添加时间-结束时间  |
|paypalStatus|否 |int   |paypal状态(1正常,2正常(停用),3冻结,4已注销)  |
|type|否| int |账户类型(1公司账户,2私人账户)  |


## 请求示例

``` 
{
  "paypalAddress": "",
  "startAddTime": "2015-12-28 16:01:19",
  "endAddTime": "2020-12-28 16:01:19",
  "register": null,
  "paypalStatus": null,
  "type": null
}
```


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "size": 20,
        "pages": 1,
        "total": 1,
        "records": [
            {
                "id": 126,
                "paypalAddress": "hngenius@sina.com",
                "addTime": "2016-12-15 13:36:54",
                "bullfrogUserId": 44,
                "userId": 102,
                "userJobNumber": "童锐锐00015",
                "register": "付宇翔",
                "paypalStatus": 2,
                "type": 1,
                "rate": [
                    {
                        "proportion": "225.85",
                        "currency": "RMB",
                        "fixedAmount": "124.19"
                    },
                    {
                        "proportion": "225.85",
                        "currency": "USD",
                        "fixedAmount": "104.19"
                    }
                ]
            }
        ]
    },
    "msg": "操作成功"
}
```

## 返回参数说明 
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|userId |Long   |userId(老OA系统，AMS是同步的)  |
|userJobNumber |string   |用户+工号  |
|paypalAddress |string   |paypal账号  |
|addTime |string   |账号添加时间  |
|bullfrogUserId |Long   |牛蛙userId  |
|register |string   |注册人  |
|paypalStatus |int   |paypal状态(1正常,2正常(停用),3冻结,4已注销)  |
|type |int   |账户类型(1公司账户,2私人账户)  |
|rate |object   |多币种对于固定费,费率 |
|fixedAmount |string   |固定费 |
|proportion |string   |费率 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
|1004 |参数校验错误  |
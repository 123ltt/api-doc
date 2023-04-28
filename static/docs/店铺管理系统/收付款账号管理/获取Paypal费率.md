# 获取Paypal费率

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 获取EbayPaypal费率

## 请求URL
- ` /client/pay-account/getPaypalRate`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|account |是 |string   |EbayPaypal账号  |
|currency|是 |string   | 币种编号 |


## 请求示例

``` 
/client/pay-account/getPaypalRate?account=zhangmiaolc@outlook.com&amp;currency=GBP
```


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "account": "zhangmiaolc@outlook.com",
        "fixedAmount": "0.2",
        "rate": "0.037"
    },
    "msg": "操作成功"
}
```

## 返回参数说明 
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|account |Long   |paypal账号 |
|fixedAmount |string   |paypal固定费  |
|rate |string   |paypal费率  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
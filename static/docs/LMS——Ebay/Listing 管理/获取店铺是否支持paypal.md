# 获取店铺是否支持paypal

> 作者：1638648874@qq.com

## 简要描述

- 获取店铺是否支持paypal

## 请求URL
- `/ebay/listing/checkPaypal`

## 请求方式
- GET

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeName |是  |string |storeName   |


## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": true
	],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|data |boolean  |是否支持paypal(true：支持，false:不支持) |

## 备注

- 更多返回错误代码请看首页的错误代码描述
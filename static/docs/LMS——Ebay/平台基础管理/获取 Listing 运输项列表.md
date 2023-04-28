# 获取 Listing 运输项列表

> 作者：yangruibo

## 简要描述

- 获取 Listing 运输项列表

## 请求URL
- `/ebay/common/shipping/items`

## 请求方式
- GET

## 请求数据类型
- 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|siteCode |是  |string |站点编号   |
|storeAccount |否  |string |店铺账号   |
|itemType |是  |string |运输项类型，来源常量键`shippingItemType`   |
|international |否  |boolean |是否国际运输服务，默认false   |

## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": [
		{
			"name":"China",
			"value":"CN"
		}
	],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|name |string   |项名称 |
|value |string   |项值 |

## 备注

- 更多返回错误代码请看首页的错误代码描述
# Listing copy到草稿

> 作者：wuxin

## 简要描述

- Listing copy到草稿

## 请求URL
- `/aliexpresslisting/copyToDraft`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |List&lt;Long>| listingId    |
|store|是 |list&lt;object>  |
	|account|是|string|店铺|
	|accountCode| String | 店铺编码|

## 请求示例

``` 
  {
    "ids": [123,456,789],
    "store": [
		{
			"account":"店铺",
			"accountCode": "店铺CODE"
		}
	]
  }
```


## 返回示例 

``` 
  {
    "code": 0,
	"msg": "",
    "data": {
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |


## 备注 

- 更多返回错误代码请看首页的错误代码描述
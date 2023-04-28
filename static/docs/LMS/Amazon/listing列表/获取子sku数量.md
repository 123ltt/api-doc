# 获取子sku数量

> 作者：wuxin

## 简要描述

- listing列表获取子sku数量

## 请求URL
- ` http://xx.com/amazonlisting/getVariantNum `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |String |主键ID   |
|listingStatus |是  |int |状态   |
~~~~
## 参数示例 

``` 
{
	"ids": [123],
	"listingStatus": 1
}

```

## 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
	 "records":[
	 {
		"amazonListingId": 123456,
		"num": 2,
	 }
	 ]
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|amazonListingId |long   |主键ID  |
|num |long   |sku数量  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
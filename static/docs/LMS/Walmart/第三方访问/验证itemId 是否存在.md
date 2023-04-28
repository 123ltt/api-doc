# 验证itemId 是否存在

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- 验证itemId 是否存在

## 请求URL
- `/walmartThirdPartyAccess/getItemId`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|token |是  |string |token
|itemIds |是  |List&lt;String> | itemId|


## 返回示例 

``` 
  {
    "error_code": 0,
    "data": [
		"123456"
	]
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |List&lt;String>   | 存在的itemId  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
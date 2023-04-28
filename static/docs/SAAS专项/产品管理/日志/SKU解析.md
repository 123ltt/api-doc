# SKU解析

> 作者：wuxin

## 简要描述

- SKU解析

## 请求URL
- `/pms/skuParse`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sku |是  |string |sku   |


## 返回示例 

``` 
  {
    "code": 0,
	"msg": "",	
    "data": {
      "sku": "1",
      "nameEn": "12154545",
      "nameZn": "吴系挂",
      "imageUrl": "http://www.lsdfd.jpg" ,
      "purchaseCost": 1.11
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|sku |string   |sku  |
|nameEn |string   |标题英文  |
|nameZn |string   |标题中文  |
|imageUrl |string   |图片  |
|purchaseCost |double   |成本  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 根据id获取子sku信息

> 作者：liben

## 简要描述

- 根据id获取sku信息

## 请求URL
- ` /pms/product/getSkuInfoById `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |long |id   |

## 返回示例 

``` 
  {
    "code":200,
    "data":
	[{
        "sku": "asfsa-sdsad-sa4-sd5",
        "spu": "af265-sad54-asd7-sfsd",
		"attributeSpecification":"{"颜色":"black", "尺码":"Y"}",
        "mainImage": "主图片路径",
        "nameEn": "T-Shirt",
        "nameZn": "短袖",
        "categoryPath": "衣服/上衣/短袖",
        "brandName": "李宁",
        "productLength": 80,
        "productWidth": 20,
        "productHeight": 80,
		"packWidth": 80,
        "packHeight": 20,
        "packLength": 80,
        "netWeight": 20,
		"grossWeight": 18,
        "status": 0,
        "cost": 80,
        "developLeadUserName": "张三",
        "productLeadUserName": "李四",
        "createdTime": "2022-04-06 08:00:00",
        "updatedTime": "2022-04-06 08:00:00",
		"parentCombinationSku":{
			"mainImage": "",
			"nameEn": "",
			"sku": ""
		}
      }]
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
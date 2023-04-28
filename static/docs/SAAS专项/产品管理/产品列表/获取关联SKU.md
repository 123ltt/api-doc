# 获取关联SKU

> 作者：liben

## 简要描述

- 获取关联SKU

## 请求URL
- `/pms/product/getRelationSku`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|content |否  |string |SKU编码、SKU名称   |
|type |是  |int | 1:组合sku 2:spu  |
|current |是  |int | 当前页  |
|site |是  |int | 页大小  |
|queryType |是  |int | 2  |

## 返回示例 

``` 
  {
    "code": 0,
	"msg": "",
    "data": {
      "id": 1,
      "mainImage": "12154545",
      "nameEn": "吴系挂",
	  "sku": "123",
      "categoryPath": "",
      "brandName": "1436864169"
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id  |
|mainImage |string   |主图  |
|nameEn |string   |标题  |
|sku |string   |sku  |
|categoryPath |string   |类目全路径  |
|brandName |string   |品牌  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
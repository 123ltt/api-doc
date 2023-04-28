# Listing-修改库存

> 作者：wuxin

## 作者
-  吴新
    
## 简要描述

- Listing-修改库存

## 请求URL
- ` http://xxx/aliexpresslistingvariant/updateStock `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id  |是  |number | listing主键ID	   |
|variants.id  |是  |number | sku主键ID   |
|variants.ipmSkuStock  |是  |number | 库存  |

## 请求示例 

``` 
  {
     "id": 1,
	 "variants": [
	 	{
			"id": 123,
			"ipmSkuStock": 999
		},
		{
			"id": 124,
			"ipmSkuStock": 999
		}
	 ]
  }
```

## 返回示例 

``` 
  {
    "msg": "操作成功",
    "code": 200,
    "data": null
  }
```

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 查询SPU下可复制的SKU

> 作者：yun527292121@163.com

## 简要描述

- 复制SPU时，查询SPU下可复制的SKU

## 请求URL
- ` /pms/sku/queryCanCpSkuBySpu`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productSpu |是  |String |SPU编码

## 请求示例 

``` 
{
  "productSpu":"123003"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "data": {
        "productSpu":"SPU编码",
		"productName":"SPU名称",
		"lstCanCpSku":[{
			"productSku":"SKU编码",
			"productName":"SKU名称",
			"status":2
		}]
    },
    "msg": "操作成功",
    "success": true
}
```

## 返回参数说明  data

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSpu |String   |SPU编码  |
|productName |String   |SPU编码  |
|lstCanCpSku |CanCpSkuVO[]   |SPU能复制的SKU  |
|└ productSku |String   |SKU编码  |
|└ productName |String   |SKU名称  |
|└ status |String   |SKU状态  |

## 备注
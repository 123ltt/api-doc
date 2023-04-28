# 列表-复制为新的SPU

> 作者：yun527292121@163.com

## 简要描述

- 复制为新的SPU

## 请求URL
- ` /blade-product/sku/cpSpu `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productSpu |是  |String |SPU编码
|lstProductSku |是  |String[] |SKU编码

## 请求示例 

``` 
{
  "productSpu":"123003"
  "lstProductSku":["123003001","123003002"]
}
```

## 返回示例 

``` 
{
    "code": 200,
    "data": {
        "productSpu":"123004"
    },
    "msg": "操作成功",
    "success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSpu |String   |新的SPU编码,复制成功才有值  |

## 备注
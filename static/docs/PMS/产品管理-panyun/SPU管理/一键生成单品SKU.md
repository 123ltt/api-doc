# 一键生成单品SKU

> 作者：yun527292121@163.com

## 简要描述

- SPU没有规格属性时，使用此接口

## 请求URL
- ` /pms/sku/generateSingleItemSku`
  
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
        "productSku":"新生成的SKU编码"
    },
    "msg": "操作成功",
    "success": true
}
```

## 返回参数说明  data

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |新生成的SKU编码  |

## 备注
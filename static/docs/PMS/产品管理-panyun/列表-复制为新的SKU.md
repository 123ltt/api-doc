# 列表-复制为新的SKU

> 作者：yun527292121@163.com

## 简要描述

- 复制为新的SKU

## 请求URL
- ` /blade-product/sku/cpSku `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productSku |是  |string |SKU编码

## 请求示例 

``` 
{
  "productSku":"123003"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "data": {
        "productSku":"123003"
    },
    "msg": "操作成功",
    "success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|productSku |String   |新的SKU编码,复制成功才有值  |

## 备注
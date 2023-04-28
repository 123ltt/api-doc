# 上架sku-mjf

> 作者：1571221458@qq.com

## 简要描述

- 上架sku

## 请求URL
- ` wishlisting/enableSku `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|variantId |是  |long |变体id  |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": true,
    "msg": "操作成功"
}

{
    "code": 500,
    "success": false,
    "data": null,
    "msg": "listing状态不正确"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|msg |string   |错误信息  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
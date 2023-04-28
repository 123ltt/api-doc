# 店铺审批列表-外链SKU前缀,水印码

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 外链SKU前缀,水印码

## 请求URL
- ` /store/approve/code-id`
  
## 请求方式
- GET

## 参数

## 请求示例


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "externalSkuPrefix": "0000",
        "watermark": "000000000000"
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|externalSkuPrefix |是  |String | 外链SKU前缀    |
|watermark |是  |String | 水印码    |


## 备注 

- 更多返回错误代码请看首页的错误代码描述

|错误码|提示信息|
|:----    |:---|
|200 |操作成功  |
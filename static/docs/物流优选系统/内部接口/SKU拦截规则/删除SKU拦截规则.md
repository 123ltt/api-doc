# 删除SKU拦截规则

> 作者：luobinbin

## 简要描述

- 删除SKU拦截规则接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-optimize/skuLimit/remove`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|ids |是|String|主键id,多个用逗号分割|
## 返回示例 
```
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "删除成功",
    "attachedMap": {
        "traceId": "c0a8727d16400562685501035576"
    }
}
```

## 备注 

- 更多返回错误代码请看首页的错误代码描述
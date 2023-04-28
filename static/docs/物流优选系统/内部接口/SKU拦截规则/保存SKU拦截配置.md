# 保存SKU拦截配置

> 作者：luobinbin

## 简要描述

- 保存SKU拦截配置接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-optimize/skuLimit/save`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|id |否|Long   |主键id，编辑必填|
|lpCodes |否|List   |物流商编码集合|
|channelCodes |否|List   |渠道编码集合|
|skus |是|List   |SKU编码集合|
|name|是|String|规则名称|
|tips|是|String|提示语|
## 请求示例 

``` 
{
    "id":1473132545482948609,
    "lpCodes":["ZHW-AA0308","ZHW-AA1000"],
    "channelCodes":["CHL1016","CHL1214"],
    "skus":["ss4","ss3"],
    "name":"刺猬刺猬1",
    "tips":"lalalala1"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "保存成功",
    "attachedMap": {
        "traceId": "c0a8727d1640057543364100116732"
    }
}
```


## 备注 

- 更多返回错误代码请看首页的错误代码描述
# SKU拦截详情

> 作者：luobinbin

## 简要描述

- SKU拦截详情接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-optimize/skuLimit/detail`
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|id |是|Long   |主键id|

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": 1,
        "name": "修√",
        "channelNames": null,
        "channelCodes": [
            "CHL1026",
            "CHL1027"
        ],
        "lpNames": null,
        "lpCodes": [
            "ZHW-AA0294",
            "ZHW-AA0285"
        ],
        "skus": [
            "S1",
            "S2"
        ],
        "tips": "冬至冬至",
        "status": 1,
        "updateTime": "2021-12-21 09:42:14",
        "updateUserStr": "↓√"
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d16400559349061029576"
    }
}
```

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|id |Long   |主键id|无
|name |String   |规则名称|无
|channelCodes |List   |渠道编码|无
|lpCodes|List   |物流商编码|无
|skus|List   |SKU集合|无
|tips|String   |提示|无


## 备注 

- 更多返回错误代码请看首页的错误代码描述
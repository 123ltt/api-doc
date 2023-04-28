# SKU拦截列表

> 作者：luobinbin

## 简要描述

- SKU拦截列表接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-optimize/skuLimit/list?current=1&size=10`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|lpCodes |否|List   |物流商编码集合|
|channelCodes |否|List   |渠道编码集合|
|skus |否|List   |SKU编码集合|
|name|否|String|规则名称
|status|否|Integer|状态|
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": 1,
                "name": "修√",
                "channelNames": "速卖通线上无忧优先,速卖通线上无忧标准",
                "channelCodes": null,
                "lpNames": "华源达,递一小包",
                "lpCodes": null,
                "skus": [
                    "S1",
                    "S2"
                ],
                "tips": "冬至冬至",
                "status": 1,
                "updateTime": "2021-12-21 09:42:14",
                "updateUserStr": "↓√"
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d16400558356521026576"
    }
}
```

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|id |Long   |主键id|无
|name |String   |规则名称|无
|channelNames |String   |渠道名称|无
|lpNames|String   |物流商名称|无
|skus|List   |SKU集合|无
|tips|String   |提示|无
|status|Integer   |状态 1.正常 2.失效|无
|updateTime|Date   |更新时间|无
|updateUserStr|String   |操作人|无

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 根据供应商ID查询黑名单参考数据

> 作者：lainanjiao

接口根路径
dev 环境： http://dev-service.zehui.local/api/platform-pss
test 环境： http://test-service.zehui.local/api/platform-pss

    
## 简要描述

- 根据供应商ID查询黑名单参考数据接口

## 请求URL
- ` /client/blackList/detailBySupplierId`
  
## 请求方式
- GET 

## 请求参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|supplierId |是  |Long |供应商ID   |

## 请求示例
 http://dev-service.zehui.local/api/platform-wms/blackList/detailBySupplierId?supplierId=49072

## 返回示例 

``` 
{
    "code": 0,
    "success": false,
    "data": [
        {
            "seq": null,
            "productSku": "RY5XH2812NA",
            "nwStatus": 19,
            "nwStatusName": "推广sku",
            "productName": "婴童秋装连身衣爬服纯棉坑条连体哈衣紫色70",
            "noHandleSaleOrderQty": null,
            "noHandleStockQty": null,
            "noHandlePurOrderQty": 30
        },
        {
            "seq": null,
            "productSku": "SPA78698YZ4",
            "nwStatus": 19,
            "nwStatusName": "推广sku",
            "productName": "免打孔壁挂肥皂盒浴室沥水翻盖肥皂架家用香皂收纳盒置物盒 白色",
            "noHandleSaleOrderQty": null,
            "noHandleStockQty": null,
            "noHandlePurOrderQty": null
        },
        {
            "seq": null,
            "productSku": "SPV2V4516MW",
            "nwStatus": 19,
            "nwStatusName": "推广sku",
            "productName": "6122#网孔运动内衣跑步背心健身聚拢文胸 黑色M码",
            "noHandleSaleOrderQty": null,
            "noHandleStockQty": null,
            "noHandlePurOrderQty": 88
        },
        {
            "seq": null,
            "productSku": "SPV2V4516MZ",
            "nwStatus": 19,
            "nwStatusName": "推广sku",
            "productName": "6122#网孔运动内衣跑步背心健身聚拢文胸 黑色2XL码",
            "noHandleSaleOrderQty": null,
            "noHandleStockQty": null,
            "noHandlePurOrderQty": null
        },
        {
            "seq": null,
            "productSku": "SW2J81526EF",
            "nwStatus": 1,
            "nwStatusName": "在线",
            "productName": "2021亚马逊速卖通秋冬爆款冲锋衣三合一两件套户外登山服防水外套  553  粉色 XL",
            "noHandleSaleOrderQty": null,
            "noHandleStockQty": null,
            "noHandlePurOrderQty": null
        }
    ],
    "msg": null,
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|-productSku |String   |pmsSku编码  |
|-nwStatus |Long   |nwSku对应的产品状态  |
|-nwStatusName |String   |nwSku对应的产品状态名称  |
|-productName |String   |产品名称  |
|-noHandleSaleOrderQty |Integer   |未处理销售订单数 (目前还没有数据) |
|-noHandleStockQty |List&lt;StockQtyVO>   |未处理库存数 (目前还没有数据)  |
|-noHandlePurOrderQty |Integer   |未处理采购订单数  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
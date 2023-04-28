# OMS提供-拆包接口

> 作者：xiongxianxing

## 简要描述

-OMS提供已推送包裹的拆单接口 支持对已推送包裹的拆单操作： 拆单的包裹所有SKU的数量之和必须和拆单前一致 否则提示失败

## 请求URL
- `POST http://test-ams-gateway.zehui.local/oms/wms/unpack`
## URL

## HEADER

`Blade-Auth = access_token`

注意：授权接口请联系 AMS - 杨锐波
  
## 请求方式
- POST 

## 请求示例 

```
{
    "push2WmsNo":"AM2102250541000002A1",
	"tenantId": "000000",
    "wmsSkuList" :[
        {"wmsSku":"HW898-1","deliverableQuantity":10}, 
        {"wmsSku":"HW898-5","deliverableQuantity":1},
        {"wmsSku":"HW898-3","deliverableQuantity":2},
        {"wmsSku":"HW898-4","deliverableQuantity":1},
        {"wmsSku":"HW898-2","deliverableQuantity":40},
        {"wmsSku":"HW898-6","deliverableQuantity":-2}
        ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|requestId |否  |String |追踪id，非必填   |
|tenantId |否  |String |租户，必填   |
|push2WmsNo |是  |String |OMS推送到WMS的单号   |
|wmsSkuList |是  |String |商品列表 |
|-> wmsSku |是  |String |wmssku |
|-> deliverableQuantity |是  |Integer |可用库存数量 |


## 返回示例 
拆包失败
```
{
    "code": 400,
    "success": false,
    "data": null,
    "msg": "包裹拆分失败 : 不满足拆包条件：【SKU数量大于3小于等于5个并且只差一个允许拆】/【SKU数量大于5小于等于10个并且差2个以内允许拆】/【SKU数量大于10并且差3个以内允许拆】/【有效库存小于0不让拆 有效库存  = 总库存 - 占用库存】/【导单时间小于2天，不让拆】"
}
```
拆包成功
```
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "拆包成功！"
}
```

发生异常
```
{
    "code": 200,
    "success": false,
    "data": null,
    "msg": "包裹拆分失败 : 包裹不存在"
}

{
    "code": 200,
    "success": false,
    "data": null,
    "msg": "包裹拆分失败 : 所有sku都有货，不允许拆包！"
}

{
    "code": 200,
    "success": false,
    "data": null,
    "msg": "包裹拆分失败 : 【wms回调拆包】包裹状态不为已推送！AM2102250541000002A待推送"
}

{
    "code": 200,
    "success": false,
    "data": null,
    "msg": "包裹拆分失败 : 平台订单：206-5919487-9055501 导单时间：2021-04-13 18:28:52 小于2天，不允许拆包！"
}
```
## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|code |int   |全部成功时为200 |
|msg | String  | 信息 |
|success | true  | 拆包成功 |


## 备注
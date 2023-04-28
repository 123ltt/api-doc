# 牛蛙单海外自建仓退仓fba单据初始化

> 作者：765251035@qq.com

## 简要描述
1、初始化牛蛙海外自建仓退仓fba单据
2、默认初始化单据状态为：部分已退货/已退货
3、目的仓入库上架需要以退仓单号作为业务单号
4、生成目的仓在途，以退仓单号为业务单号

## 请求URL
- 测试环境网关：http://test-cams-gateway.zehui.local
- 服务名：platform-wms
- ` http://test-cams-gateway.zehui.local/platform-wms/warehouse/saas/bullfrogRefund/selfBuild/init`

## 请求方式
- POST

## 参数

|参数名|类型|必选|说明|
|:----    |:---|:----- |-----   |
|refundCode     |string  |是| 退仓单号|
|shopName     |string  |是 | 店铺名称|
|removeCode     |string  |是 | 移除单号|
|destinationWarehouseId     |long  |是 | 目的仓库|
|remark     |string  |是 | 备注|
|createUser|long|是|创建人|
|**planInformationRefundList**|List|是|计划退货明细|
|-productSku|string|是|产品sku|
|-platformSku|string|是|平台sku|
|-fnsku|string|是|fnsku|
|-refundQuantity|int|是|退货数量|
|**goodsRefundDetailList**|List|是|退货明细信息|
|-productSku|string|是|产品sku|
|-fnsku|string|是|fnsku|
|-actuallyRefundQuantity|int|是|实际退货数量|
|-transportTypeCode|string|是|运输方式|
|-transportNumber|string|是|物流跟踪号|
|-actuallyRefundDate|date|是|退货时间（yyyy-MM-dd HH:mm:ss）|


## 请求示例
```

```

## 返回示例

```

```

## 返回参数说明

|参数名|类型|说明|备注|
|:-----|:-----|-----| |
|code|Integer|状态码 |  |
|success|Boolean|成功标识  |  |
|msg|String| 消息 |  ||


## 备注 

- 更多返回错误代码请看首页的错误代码描述
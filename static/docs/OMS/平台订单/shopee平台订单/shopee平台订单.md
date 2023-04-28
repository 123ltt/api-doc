# shopee平台订单

> 作者：liben

## 简要描述

- shopee平台订单

## 请求URL
- ` /SpMain/page`
  
## 请求方式
- POST 

## 参数
``` 
{
    "platformCode": "amazon"，
    "storeName":"店铺编码"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号"，
    "searchContent":"搜索内容"，
    "orderType":"订单类型:0-线上订单 ,1-手工导单"
    "orderStatus":"平台订单类型(total全部,UNPAID未到账,READY_TO_SHIP待发货,COMPLETED已发货,IN_CANCEL取消中,CANCELLED已取消,TO_RETURN待退货,MarkFailed标记失败)"
    "current": 1,
    "size": 20
}
``` 

## 参数说明

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String[]   |店铺编号|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号|否|
|searchContent |String   |搜索内容|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|orderStatus |int   |平台订单类型(total全部,UNPAID未到账,READY_TO_SHIP待发货,COMPLETED已发货,IN_CANCEL取消中,CANCELLED已取消,TO_RETURN待退货,MarkFailed标记失败)|否|
|ifPreSale |int   |是否预售单(1是,2不是)|否|

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platOrderId": "201111N1SM624J",
                "storeCode": "shopee_MY_003e",
                "omOrderId": "",
                "sourceOrderId": "",
                "payTime": null,
                "firstGrabDate": "2021-02-24 16:35:01",
                "lastGrabDate": "2021-02-24 16:35:01",
                "orderType": 0,
                "platOrderStatus": "CANCELLED",
                "omsMarkStatus": "",
                "markStatus": null,
                "siteCode": "MY",
                "ifPreSale": -1,
                "carrierCode": "Standard Delivery",
                "trackingNo": "",
                "omsMarkDate": null,
                "deliveryTime": null,
                "orderCurrency": "MYR",
                "totalOrderAmount": null,
                "buyerPaysFreight": null,
                "sellerIncomeFreight": null,
                "platformTradeAmount": null,
                "buyerPaymentAmount": null,
                "sellerIncomeAmount": null,
                "freightChargesAmount": null,
                "adjustmentAmount": null,
                "paymentMethod": null,
                "freightSubsidyAmount": null,
                "handSyncTime": null,
                "transactionFee": null,
                "voucherSeller": null,
                "serviceFee": null,
                "sellerRebate": null,
                "escrowTax": null,
                "carrierType": 0,
                "ifCashOnOelivery": 0,
                "ifPushedToOm": 3,
                "buyerName": "Izzaty Faatihah",
                "buyerTel": "60173935349",
                "buyerCountryCode": "MY",
                "buyerZipcode": "68100",
                "buyerCity": "Batu Caves",
                "buyerDistrict": "",
                "buyerTown": "",
                "buyerState": "Selangor",
                "buyerAddress": "No 2B Jalan 13H Selayang Baru, Batu Caves, 68100, Selangor",
                "buyerMsg": "",
                "orderTime": "2020-11-11 00:04:49",
                "tenantId": "000000",
                "companyId": "1328887085897093121",
                "orderStatus": null,
                "omOrderStatus": null,
                "searchType": null,
                "searchContent": null,
                "orderTimeStart": null,
                "orderTimeEnd": null,
                "firstGrabDateStart": null,
                "firstGrabDateEnd": null,
                "storeName": "bettergirls.my",
                "mark": null,
                "storeCodes": null,
                "searchContentList": null,
                "goodList": [
                    {
                        "platOrderId": "201111N1SM624J",
                        "itemId": "10095399330",
                        "sellerSku": "SV0989W",
                        "skuName": "Women Knitted Long Sleeve Sweater Women Pullover  Sweater Top",
                        "imgUrl": "",
                        "originalPrice": "22.0000",
                        "discountPrice": "15.3900",
                        "productCount": 1,
                        "mainSellerId": null
                    }
                ],
                "orderTypeName": null
            }
        ],
        "total": 154,
        "size": 1,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 154
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:---- |:---|:----- |
| id | bigint | 主键id |
| ifPreSale | bigint | 是否预售订单:0-N,1-Y |
| platOrderId | varchar | shopee平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| omOrderStatus | String | OM订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| buyerCountryCode | varchar | 配送至国家code |
| trackingNo | varchar | 跟踪号 |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| payTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| deliveryTime | datetime | 已发货时间,即订单为shipped状态的时间，即节点的LastUpdateDate |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| totalOrderAmount | decimal | 订单总金额,节点OrderTotal.Amount |
| disCountAmount | decimal | 折扣金额 |
| orderCurrency | varchar | 支付金额结算币种,节点：OrderTotal.CurrencyCode |
| orderType | varchar | 订单来源(0线上,1手工) |
| shippingServiceCost | varchar | 运费 |
| platOrderStatus | varchar | 平台订单状态 |
| buyerName | varchar | 买家id |
 **返回参数说明goodList** 

|参数名|类型|说明|
|:---- |:---|:----- |
| skuName | varchar |商品item |
| itemId | varchar | itemID |
| imgUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sellerSku | varchar | 平台SKU编码 |
| productCount | int | 数量 |
| originalPrice | decimal | 订单商品的售价 |
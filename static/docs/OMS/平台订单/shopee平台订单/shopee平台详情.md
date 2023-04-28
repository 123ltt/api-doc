# shopee平台详情

> 作者：fanglongbin

## 简要描述

- shopee平台详情

## 请求URL
- ` /SpMain/detail`
  
## 请求方式
- GET 

## 参数
|参数名|类型|说明|
|:-----  |:-----|-----                           |
| platOrderId |string   |平台id  |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "platOrderId": "201031PK0SQUCW",
        "storeCode": "shopee_MY_003e",
        "omOrderId": "",
        "sourceOrderId": "",
        "payTime": null,
        "firstGrabDate": null,
        "lastGrabDate": "2021-02-24 15:23:28",
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
        "buyerName": "Ales bin muhammad basri",
        "buyerTel": "601111120084",
        "buyerCountryCode": "MY",
        "buyerZipcode": "42200",
        "buyerCity": "Kuala Selangor",
        "buyerDistrict": "",
        "buyerTown": "",
        "buyerState": "Selangor",
        "buyerAddress": "lot 1259 batu 14 1/2 , jalan kapar . 42200 kapar klang , selangor darul ehsan, Kuala Selangor, 42200, Selangor",
        "buyerMsg": "",
        "orderTime": "2020-10-31 00:59:02",
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
                "platOrderId": "201031PK0SQUCW",
                "itemId": "9529281325",
                "sellerSku": "OS0050D",
                "skuName": "Vintage Boho Beach Shirts Women Summer Kimono Cardigan Plus Size",
                "imgUrl": "",
                "originalPrice": "26.0000",
                "discountPrice": "15.5900",
                "productCount": 1,
                "mainSellerId": null
            },
            {
                "platOrderId": "201031PK0SQUCW",
                "itemId": "9529281331",
                "sellerSku": "OS0050G",
                "skuName": "Vintage Boho Beach Shirts Women Summer Kimono Cardigan Plus Size",
                "imgUrl": "",
                "originalPrice": "26.0000",
                "discountPrice": "16.3700",
                "productCount": 1,
                "mainSellerId": null
            }
        ],
        "orderTypeName": null,
        "shippingServiceCost": null
    },
    "msg": "操作成功"
}
```

## 主表参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
| 销售平台 |string   |前端控制  |
| platOrderId |string   |平台单号  |
| omOrderId |string   |oms单号  |
| orderType |int   |订单来源(0线上,1手工)  |
| storeName |string   |销售店铺  |
| siteCode |string   |站点编码  |
| platOrderStatus |string   |平台订单状态  |
| omOrderStatus |string   |oms订单状态  |
| ifPreSale |int   |是否预售订单:0-N,1-Y |
| totalOrderAmount |string   |订单总金额  |
| platformTradeAmount |string   |平台交易费  |
| buyerPaymentAmount |string   |买家实付  |
| sellerIncomeAmount |string   |卖家实收  |
| escrowTax |string   |税费  |
| freightChargesAmount |string   |客付运费  |
| adjustmentAmount |string   |调整金额  |
| buyerName |string   |收件人  |
| countryName |string   |国家名称  |
| buyerState |string   |省/州  |
| buyerCity |string   |城市  |
| buyerTel |string   |移动电话(与固定电话一样)  |
| buyerTel |string   |固定电话(与移动电话一样)  |
| buyerZipCode |string   |邮编  |
| buyerEmail |string   |邮箱(暂时为空)  |
| buyerAddress |string   |地址一(地址二相同)  |
| buyerAddress |string   |地址二(地址一相同)  |
| carrierCode |string   |渠道编码  |
| trackingNo |string   |跟踪号  |
| buyerDistrict |string   |买家区  |
| orderTime |datetime   |订单创建时间|
| payTime |datetime   |订单付款时间  |
| firstGrabDate |datetime   |抓单时间  |
| updateTime |datetime   |平台订单最后更新时间  |
| omsMarkDate |datetime   |标记时间  |
| deliveryTime |datetime   |实际发货时间  |

## 商品表参数说明 
|参数名|类型|说明|
|:-----  |:-----|-----                           |
| skuName | varchar |商品item |
| itemId | varchar | itemID |
| imgUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sellerSku | varchar | 平台SKU编码 |
| productCount | int | 数量 |
| originalPrice | decimal | 单价 |


## 备注 

-销售价 = 单价 * 数量
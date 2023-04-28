# JOOM平台订单详情页面

> 作者：liben

## 简要描述

- JOOM平台订单详情页面
- 李奔

## 请求URL
- ` /joom/detail `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|orderId |是  |string |平台订单号   |
|storeCode |是  |string |店铺code   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1450375240881238020",
        "orderId": "3J54N3NW",
        "omOrderId": "",
        "orderType": "线上订单",
        "storeCode": "joom_02Z2",
        "orderStatus": "已发货",
        "omsOrderStatus": null,
        "transactionNumber": null,
        "buyerId": "6001a1ef4e564d35012e2851",
        "orderTotal": "1.4900",
        "platformTrade": "0.2235",
        "buyerActualAmount": "1.4900",
        "sellerIncomeAmount": "1.2665",
        "taxTotal": "0",
        "freightChargesAmount": "0.0000",
        "sellerIncomeFreight": "0.0000",
        "orderOriginalPrice": "1.4900",
        "name": "Rachel Anne Muscat Baron",
        "country": "MT",
        "addressState": "Kherson",
        "city": "Mosta",
        "phoneNumber": "+35679417645",
        "mobileNumber": null,
        "zipcode": "MST1673",
        "streetAddress1": "17, Baron’s Eutopia, Naqqax Street",
        "streetAddress2": "",
        "shippingProvider": "",
        "trackingNumber": "",
        "orderTime": "2021-10-17 03:15:27",
        "createTime": "2021-10-19 16:16:19",
        "markDate": null,
        "lastUpdated": null,
        "deliveryTime": null,
        "surplusDeliveryTime": null,
        "currency": "USD",
        "disCountAmount": "0.0",
        "platformCode": "joom",
        "orderGoods": [
            {
                "productImageUrl": "https://img.joomcdn.net/cf79bb116aa567cab0b3596b646b27bc72909b7e_original.jpeg",
                "sku": "1488336914366875995-2-3-26341-1161832900_ZQ0062BS",
                "productName": "Women Floral Lace Bra Unpadded Brassiere Sleepwear",
                "price": "1.4900",
                "quantity": 1,
                "salesAmount": "1.4900",
                "currency": "USD",
                "itemId": "1489630957461091788-202-1-26341-3926452091"
            }
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a873b4163728864432310028848"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|orderId |string   |平台单号 |
|omOrderId |string   |OMS单号 |
|platformCode |string   |销售平台 |
|disCountAmount |decimal   |折扣 |
|orderType |string   |订单来源 |
|storeCode |string   |销售店铺 |
|orderStatus |string   |平台订单状态 |
|omsOrderStatus |string   |OMS订单状态 |
|transactionNumber |string   |交易号 |
|buyerId |string   |买家ID |
|orderTotal |decimal   |订单总金额 |
|platformTrade |decimal   |平台交易费 |
|buyerActualAmount |decimal   |买家实付金额 |
|sellerIncomeAmount |decimal   |卖家实收金额 |
|taxTotal |decimal   |税费 |
|freightChargesAmount |decimal   |客付运费 |
|sellerIncomeFreight |decimal   |卖家实收运费 |
|orderOriginalPrice |decimal   |订单原价 |
|name |string   |收件人 |
|country |string   |国家 |
|addressState |string   |省/州 |
|city |string   |城市 |
|phoneNumber |string   |固定电话 |
|mobileNumber |string   |手机号|
|zipcode |string   |邮编 |
|streetAddress1 |string   |地址一|
|streetAddress2 |string   |地址二 |
|shippingProvider |string   |物流商 |
|trackingNumber |string   |跟踪号 |
|orderTime |date   |订单创建时间 |
|createTime |date   |抓单时间 |
|markDate |date   |标记时间 |
|lastUpdated |date   |平台订单最后更新时间 |
|deliveryTime |date   |实际发货时间 |
|surplusDeliveryTime |date   |剩余发货时间 |
|currency |string   |币种 |
|orderGoods |list   |商品信息 |
|productImageUrl |string   |商品图片 |
|sku |string   |SKU |
|productName |string   |商品名称 |
|price |decimal   |产品单价 |
|quantity |int   |数量 |
|salesAmount |decimal   |销售金额 |
|currency |string   |币种 |
|itemId |string   |itemId |



## 备注 

- 更多返回错误代码请看首页的错误代码描述
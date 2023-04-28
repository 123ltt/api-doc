# 编辑Listing

> 作者：wuxin

## 作者
- 吴新

## 简要描述

- 编辑 listing

## 请求URL
- `/wishlisting/updateListing`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|updateField | 是 | Array | 修改字段 1.产品 2.变体 3.国家运费|
|fbwordConfirm | 是 | boolean | 违禁词确认 默认 false|
|id |是  |long |listing 主键ID   |
|account |是  |string |账号   |
|accountCode |是  |string |账号编码   |
|productSpu |是  |string |spu   |
|title |是  |string | 标题    |
|tags  |否  |string | 标签  --逗号分隔 |
|description  |否  |string | 描述 |
|sellerSku  |是  |string | 父sku |
|upc  |否  |string | upc |
|mainImage  |否  |string | 主图 |
|extraImagList  |否  |array | 副图  |
|maxQuantity  |否  |string | 最大预订单数量 |
|localizedCurrencyCode  |否  |string | 本地币种 |
|shipping  |否  |number | 运费 |
|localizedShipping  |否  |number | 本地运费 |
|msrp  |否  |number | 厂家指导价 |
|costPrice | 是 | number | 成本  |
|countryShippingId | 是 | number | 国家运费ID|
|disableVariant | 否 | array | 禁用 sellerSku |
|enableVariant | 否 | array | 启用 sellerSku|
|variantDTOS.wishItemId  |是  |string | wish平台ID |
|variantDTOS.sellerSku  |是  |string | sellerSku |
|variantDTOS.isUpdate  |否  |boolean | 变体是否修改 |
|variantDTOS.wishListingId  |否  |number | listing主键ID |
|variantDTOS.itemId  |否  |string | wish平台变体Id， 为空则代表为新增 |
|variantDTOS.parentSku  |否  |string | 父sku |
|variantDTOS.productSku  |否  |string | pms sku |
|variantDTOS.inventory  |否  |number | 库存 |
|variantDTOS.price  |否  |number | 价格 |
|variantDTOS.localizedPrice  |否  |number | 本地价格 |
|variantDTOS.localizedCurrencyCode  |否  |string | 本地币种 |
|variantDTOS.shipping  |否  |number | 运费 |
|variantDTOS.localizedShipping  |否  |number | 本地运费 |
|costPrice | 是 | number | 成本  |
|variantDTOS.isEnabled  |否  |boolean | 是否启用 |
|variantDTOS.size  |否  |string | 大小 |
|variantDTOS.color  |否  |string | 颜色 |
|variantDTOS.msrp  |否  |number | 厂家指导价 |
|variantDTOS.localizedMsrp  |否  |number | 本地厂家指导价 |
|variantDTOS.shippingTime  |否  |string | 运输时间 |
|variantDTOS.mainImage  |否  |string | sku图片 |
|variantDTOS.profitRate  |否  |number | 利润率 |
|variantDTOS.packageWeight | 否 | number | 包裹重量(单位是g) |
|countryShippingList.countryCode  |否  |string | 国家简码 |
|countryShippingList.enabled  |否  |boolean | 是否启用 |
|countryShippingList.wishExpress  |否  |boolean | 是否承诺5天运达 |
|countryShippingList.localizedPrice  |否  |number | 本地价格 |
|countryShippingList.regions.useCountryShipping  |否  |boolean | 是否使用国家运费 |
|countryShippingList.regions.localizedPrice  |否  |number | 区域运费 |
|countryShippingList.regions.stateCode  |否  |string | 区域编码 |
|countryShippingList.regions.enabled  |否  |boolean | 是否启用 |


## 请求示例 
```
  {
   "updateField": [1],
   "id": 123,
   "productSpu": "JKLD",
   "title": "标题",
   "tags": "123,456",
   "description": "描述",
   "sellerSku": "123",
   "upc": 456789,
   "mainImage": "www.qwe.jpg",
   "extraImages": "www.we.jpg|www.dfsd.jpg",
   "maxQuantity": 1，
   "price": 1.23,
   "costPrice": 45,
   "localizedPrice": 10.23,
   "localizedCurrencyCode": "CNY",
   "shipping": 1,
   "localizedShipping": 12,
   "msrp": 12,
   "countryShippingId": 123,
   "disableVariant": ["sellerSku"],
   "enableVariant": ["sellerSku"],
   "variantDTOS":[
     {
	  "isUpdate": true,
	  "wishListingId": 123,
	  "wishItemId": "123456",
	  "itemId": "sdfas123",
	  "sellerSku": "123",
	  "parentSku": "123",
	  "productSku": "123",
	  "inventory": 0,
	  "price": 1.23,
	  "costPrice": 45,
	  "localizedPrice": 10.23,
	  "localizedCurrencyCode": "CNY",
	  "shipping": 1,
	  "localizedShipping": 12,
	  "isEnabled": true,
	  "size": "1",
	  "color": "red",
	  "msrp": 12,
	  "localizedMsrp": 100,
	  "shippingTime": "5-10",
	  "mainImage": "www.dfsd.jpg",
	  "profitRate": 12,
	  "packageWeight": 1.2
	 },
	  {
	  "isUpdate": false,
	  "wishListingId": 123,
	  "wishItemId": "123456",
	  "itemId": "sdfas123",
	  "sellerSku": "123",
	  "parentSku": "123",
	  "productSku": "123",
	  "inventory": 0,
	  "price": 1.23,
	  "costPrice": 45,
	  "localizedPrice": 10.23,
	  "localizedCurrencyCode": "CNY",
	  "shipping": 1,
	  "localizedShipping": 12,
	  "isEnabled": true,
	  "size": "1",
	  "color": "red",
	  "msrp": 12,
	  "localizedMsrp": 100,
	  "shippingTime": "5-10",
	  "mainImage": "www.dfsd.jpg",
	  "profitRate": 12,
	  "packageWeight": 1.2
	 }
   ],
  "countryShippingList": [
        {
            "countryCode": "US",
            "enabled": true,
            "wishExpress": false,
            "localizedPrice": 3,
            "regions": [
                {
                    "useCountryShipping": false,
                    "localizedPrice": 2,
                    "state": null,
                    "stateCode": "US_PA",
                    "enabled": true
                }
            ]
        }
    ],
   "fbwordConfirm": false
  }
```



## 返回示例 

``` 
  {
    "code": 0,
	"msg": "操作成功",
    "data": {
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 新增草稿-mjf

> 作者：1571221458@qq.com

## 简要描述

-新增草稿接口

## 请求URL
- ` /wishlisting/addDraft `
  
## 请求方式
- POST 
## 参数示例 

``` 
{
    "productSpu": "S0JY7VA089",
    "productSku": "S0JY7VA089H",
    "account": "himotherandbaby",
    "accountCode": "wish_ALL_0047",
    "landingPageUrl": null,
    "upc": null,
    "title": "1/sdf7/10 Pcsdfs Disposable Mask 3-Layer Earloop Face Mask, Unisex Fashion Black Pink Mouth Mask Individual Package",
    "tags": [
        "suer",
        "sdfji"
    ],
    "listingType": "Variation",
    "description": "Indisdfvidual package face mask, Unisex\nColor: Black, Pink, Blue, White\n1.Stylish black and pink face masks\n2.Safe and breathable, Hypoallergenic, high filtration, capacity. Elastic ear-loops with no pressure to the ears\n3.Provide some protection against dust, or some poisonous things. It is great for woodworking, house cleaning and general maintenance.\n4.The breathable earloop face masks will prevent your allergy symptoms and reduce the risk of catching a cold or the flu, and transmitting it to others.\nWide Usage: flu face masks, cold wind, auto exhaust, dust, allergen protect masks, Germs, Allergies, Chemicals , Smoke, Ash, Pollen, Gardening, Travel, etc\nPackage Include:\n1/5/10 Pcs Mask",
    "mainImage": "https://canary.contestimg.wish.com/api/webimage/5ed107ea31d9592500c51dd0-medium.jpg?cache_buster=9fad6ed160ca7cdead58d65480072848",
    "extraImages": [
        "https://canary.contestimg.wish.com/api/webimage/5ed107ea31d9592500c51dd0-1-original.jpg",
        "https://canary.contestimg.wish.com/api/webimage/5ed107ea31d9592500c51dd0-2-original.jpg"
    ],
    "msrp": 3456.78,
    "shippingTime": "9-12",
    "maxQuantity": null,
    "price": null,
    "localizedPrice": 34.23,
    "shipping": null,
    "localizedShipping": 12.32,
    "costPrice": 12.45,
    "inventory": 1234,
    "profitRate": null,
    "fbwordConfirm": null,
	"customsHsCode": "123123",
	"weight": 50,
	"condition": "NEW",
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
    "variantList": [
        {
            "productSku": "S0JY7VA089H",
            "color": "black",
            "size": "xxl",
            "price": null,
            "localizedPrice": 123,
            "costPrice": 12,
            "shipping": null,
            "localizedShipping": 12.34,
            "inventory": 1230,
            "shippingTime": null,
            "profitRate": 12.34
        },
        {
            "productSku": "RY8SC5C0J",
            "color": "red",
            "size": "xl",
            "price": null,
            "localizedPrice": 123,
            "costPrice": 12,
            "shipping": null,
            "localizedShipping": 12.34,
            "inventory": 1230,
            "shippingTime": null,
            "profitRate": 12.34
        }
    ]
}
```
## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|account |是  |string |店铺名称   |
|sizeCategoryIndex |是  |int |尺码分类索引   |
|accountCode |是  |string | 店铺编码    |
|title     |是  |string | 标题    |
|tags     |否  |array | 标签 ，字符串数组   |
|description     |是  |string | 描述    |
|upc     |否  |string | 产品编码    |
|listingType     |是  |string | listing类型    |
|productSpu     |是  |string | spu    |
|productSku     |是  |string | 内部sku    |
|landingPageUrl     |否  |string | 来源URL    |
|upc     |否  |string | upc    |
|mainImage     |是  |string | 主图    |
|extraImages     |否  |array | 副图，字符串数组    |
|msrp     |否  |double | 建议零售价    |
|shippingTime     |否  |string | 运输时间    |
|maxQuantity     |否  |int | 最大购买数    |
|price     |否  |double | 售价    |
|localizedPrice     |是  |double | 本地价格    |
|shipping     |否  |double | 物流运费    |
|localizedShipping     |是  |double | 本地物流运费    |
|costPrice     |是  |double | 成本    |
|profitRate     |是  |double | 利润率    |
|inventory     |是  |int | 库存    |
|fbwordConfirm     |是  |double | 违禁词确认    |
|weight     |否  |double | 重量    |
|customsHsCode     |否  |string | 海关HS编码    |
|condition     |否  |string | 状态    |
|developUser     |是  |long | 开发人员    |
|customerUser     |是  |long | 客服人员    |
|variantList     |是  |array | 变体集合    |
|&emsp;&emsp;&emsp;&emsp;packageWeight     |是  |double | 包裹重量|
|&emsp;&emsp;&emsp;&emsp;color     |否  |string | 颜色    |
|&emsp;&emsp;&emsp;&emsp;size     |否  |string | 尺寸    |
|&emsp;&emsp;&emsp;&emsp;productSku     |否  |string | 变体    |
|&emsp;&emsp;&emsp;&emsp;inventory     |是  |int | 库存    |
|&emsp;&emsp;&emsp;&emsp;price     |否  |double | 售价    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice|是  |double |本地售价    |
|&emsp;&emsp;&emsp;&emsp;costPrice     |是  |double | 成本价    |
|countryShippingList     |是  |array | 国家运费    |
|&emsp;&emsp;&emsp;&emsp;countryCode     |是  |string | 国家编码    |
|&emsp;&emsp;&emsp;&emsp;enabled     |是  |boolean | 是否启用    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice     |是  |double | 运费    |
|&emsp;&emsp;&emsp;&emsp;regions     |否  |array | 地区    |
|&emsp;&emsp;useCountryShipping     |是  |boolean | 是否使用国家运费    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice     |是  |double | 运费    |
|&emsp;&emsp;&emsp;&emsp;state|是  |string |区域全称   |
|&emsp;&emsp;&emsp;&emsp;stateCode     |是  |string |区域编码     |
|&emsp;&emsp;&emsp;&emsp;enabled     |是  |boolean | 是否启用|

## 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
      "uid": "1",
      "username": "12154545",
      "name": "吴系挂",
      "groupid": 2 ,
      "reg_time": "1436864169",
      "last_login_time": "0",
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
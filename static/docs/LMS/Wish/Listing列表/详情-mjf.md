# 详情-mjf

> 作者：1571221458@qq.com

## 简要描述

- 用户注册接口

## 请求URL
- ` /wishlisting/getById `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |long |主键id   |

## 返回示例 

``` 
{
    "productSpu": "S0K6Y5R",
    "productSku": "S0K6Y5R01",
    "sellerSku": "XhhhN0322A",
    "account": "himotherandbaby",
    "accountCode": "wish_ALL_0047",
    "landingPageUrl": null,
    "upc": null,
    "title": "2 Pcs Car Air Conditioner Cover Under Rear Seat Seat Air Vent Duct Outlet Shell",
    "tags": [
        "touran,vwaircondition,gti,tiguan,VW,Cover,vwtiguan,Seats,outlet,vwpolo"
    ],
    "listingType": "Normal",
    "description": "Description:\r\nType:Car Air Conditioner Cover\r\nMaterial:Plastic\r\nFitment:For Volkswagen VW Tiguan Mk2 Allspace 2016 2017\r\nColor:Black\r\nFeature:\r\n1.Easy installation, no tools are needed, can be fitted in a minute.\r\n2.Multiple hole design, do not affect the outlet air flow.\r\n3.Effectively prevent fine articles from entering the outlet.\r\n4.Protect your car and keep it clean.\r\n5.Please make sure the item is the one that you need before you purchase.\r\n6.Fitment:For Volkswagen VW Tiguan Mk2 Allspace 2016 2017\r\nPackage List: 2Pcs Car Air Conditioner Cover (Both left side and right side)",
    "mainImage": "https://canary.contestimg.wish.com/api/webimage/5b91f7f0b973aa05fa1c3319-original.jpg?cache_buster=-6113508573911079026",
    "extraImages": [
        "https://canary.contestimg.wish.com/api/webimage/5b91f7f0b973aa05fa1c3319-1-original.jpg?cache_buster=-8089696133542095788",
        "https://canary.contestimg.wish.com/api/webimage/5b91f7f0b973aa05fa1c3319-2-original.jpg?cache_buster=-5975568087472005001",
        "https://canary.contestimg.wish.com/api/webimage/5b91f7f0b973aa05fa1c3319-3-original.jpg?cache_buster=-5861343475255732469",
        "https://canary.contestimg.wish.com/api/webimage/5b91f7f0b973aa05fa1c3319-4-original.jpg?cache_buster=-6174549560340247916"
    ],
    "msrp": null,
    "shippingTime": null,
    "maxQuantity": null,
    "price": null,
    "localizedPrice": null,
    "shipping": null,
    "localizedShipping": 6.96,
    "costPrice": null,
    "inventory": 0,
    "profitRate": null,
    "countryShippingList": [
        {
            "countryCode": "BE",
            "enabled": true,
            "wishExpress": null,
            "localizedPrice": 6.96,
            "regions": null
        },
        {
            "countryCode": "FR",
            "enabled": true,
            "wishExpress": null,
            "localizedPrice": 6.96,
            "regions": [
                {
                    "useCountryShipping": true,
                    "localizedPrice": null,
                    "state": "Guadeloupe",
                    "stateCode": "GP",
                    "enabled": false
                },
                {
                    "useCountryShipping": true,
                    "localizedPrice": null,
                    "state": "Mayotte",
                    "stateCode": "YT",
                    "enabled": false
                },
                {
                    "useCountryShipping": true,
                    "localizedPrice": null,
                    "state": "Saint Pierre and Miquelon",
                    "stateCode": "PM",
                    "enabled": false
                }
            ]
        }
    ],
    "wishListingVariantVOList": [
        {
            "id": 1376837468220838000,
            "productSku": "S0JZ90H0E",
            "color": "Blue",
            "size": "90",
            "price": null,
            "localizedPrice": 27.83,
            "costPrice": null,
            "shipping": 6.96,
            "localizedShipping": null,
            "inventory": 1911
        },
        {
            "id": 1376837468220838000,
            "productSku": "S0JZ90H0G",
            "color": "Blue",
            "size": "120",
            "price": null,
            "localizedPrice": 34.79,
            "costPrice": null,
            "shipping": 6.96,
            "localizedShipping": null,
            "inventory": 1951
        },
        {
            "id": 1376837468220838000,
            "productSku": null,
            "color": "Blue",
            "size": "110",
            "price": null,
            "localizedPrice": 34.79,
            "costPrice": null,
            "shipping": 6.96,
            "localizedShipping": null,
            "inventory": 1908
        }
    ]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|account  |string |店铺名称   |
|title       |string | 标题    |
|tags       |array | 标签 ，字符串数组   |
|description     |string | 描述    |
|upc       |string | 产品编码    |
|productSpu       |string | spu    |
|productSku       |string | 内部sku    |
|sellerSku       |string | 平台sku    |
|upc      |string | upc    |
|mainImage      |string | 主图    |
|extraImages     |array | 副图，字符串数组    |
|msrp       |double | 建议零售价    |
|shippingTime       |string | 运输时间    |
|maxQuantity       |int | 最大购买数    |
|price       |double | 售价    |
|localizedPrice       |double | 本地价格    |
|shipping      |double | 物流运费    |
|localizedShipping      |double | 本地物流运费    |
|costPrice      |double | 成本    |
|profitRate      |double | 利润率    |
|inventory       |int | 库存    |
|wishListingVariantVOList      |array | 变体集合    |
|&emsp;&emsp;&emsp;&emsp;isEnabled      |string | 是否启用    |
|&emsp;&emsp;&emsp;&emsp;color      |string | 颜色    |
|&emsp;&emsp;&emsp;&emsp;size       |string | 尺寸    |
|&emsp;&emsp;&emsp;&emsp;productSku      |string | 产品sku    |
|&emsp;&emsp;&emsp;&emsp;sellerSku      |string | 平台sku    |
|&emsp;&emsp;&emsp;&emsp;profitRate      | double| 利润率    |
|&emsp;&emsp;&emsp;&emsp;inventory       |int | 库存    |
|&emsp;&emsp;&emsp;&emsp;price      |double | 售价    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice  |double |本地售价    |
|&emsp;&emsp;&emsp;&emsp;costPrice      |double | 成本价    |
|countryShippingList       |array | 国家运费    |
|&emsp;&emsp;&emsp;&emsp;countryCode       |string | 国家编码    |
|&emsp;&emsp;&emsp;&emsp;enabled       |boolean | 是否启用    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice      |double | 运费    |
|&emsp;&emsp;&emsp;&emsp;regions       |array | 地区    |
|&emsp;&emsp;useCountryShipping       |boolean | 是否使用国家运费    |
|&emsp;&emsp;&emsp;&emsp;localizedPrice       |double | 运费    |
|&emsp;&emsp;&emsp;&emsp;state  |string |区域全称   |
|&emsp;&emsp;&emsp;&emsp;stateCode       |string |区域编码     |
|&emsp;&emsp;&emsp;&emsp;enabled       |boolean | 是否启用|

## 备注 

- 更多返回错误代码请看首页的错误代码描述
# 根据spu,sku编码获取多语言信息

> 作者：yun527292121@163.com

## 简要描述

- 根据spu,sku编码获取多语言信息接口

## 请求URL
- ` http://localhost/blade-product/skulanguage/getLanguageBySpuAndSku?spu=11111&amp;sku=11111 `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|spu |是  |string |spu编码   |
|sku |是  |string | sku编码    |


## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": [
        {
            "country": "法国",
            "countryCode": "FR",
            "productName": "testmirrorlanguage",
            "description": "SMS",
            "feature": "Système",
            "keywords": "Bonjour"
        },
        {
            "country": "德国",
            "countryCode": "DE",
            "productName": "testmirrorlanguage",
            "description": "Text",
            "feature": "System",
            "keywords": "Hallo"
        },
        {
            "country": "意大利",
            "countryCode": "IT",
            "productName": "testmirrorlanguage",
            "description": "Tes",
            "feature": "Sistema",
            "keywords": "Ciao"
        },
        {
            "country": "西班牙",
            "countryCode": "ES",
            "productName": "testmirrorlanguage",
            "description": "Mensaje de o",
            "feature": "Sistema",
            "keywords": "Hola"
        },
        {
            "country": "葡萄牙",
            "countryCode": "PT",
            "productName": "testmirrorlanguage",
            "description": "Tex",
            "feature": "sistema",
            "keywords": "Olá"
        },
        {
            "country": "日本",
            "countryCode": "JP",
            "productName": "テストミラー言語",
            "description": "テキスト",
            "feature": "システム",
            "keywords": "こんにちは"
        },
        {
            "country": "俄罗斯",
            "countryCode": "RU",
            "productName": "testmirrorlanguage",
            "description": "СМС",
            "feature": "Системы",
            "keywords": "Привет"
        },
        {
            "country": "阿拉伯",
            "countryCode": "AR",
            "productName": "اختبار الميرجورليغ",
            "description": "نص",
            "feature": "نظام",
            "keywords": "مرحبًا"
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|country |string   |国家名称 |
|countryCode |string   |国家两位简码  |
|productName |string   |名称  |
|keywords |string   |关键词  |
|description |string   |描述  |
|feature |string   |feature描述  |

## 备注 

-
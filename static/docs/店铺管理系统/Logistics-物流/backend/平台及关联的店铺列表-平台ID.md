# 平台及关联的店铺列表-平台ID

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 平台及关联的店铺列表-平台ID

## 请求URL
- ` /client/platform/getPlatformWithStoreById`
  
## 请求方式
- GET 

## 参数
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1328884326670012417",
        "platformName": "amazon",
        "platformCode": "AM",
        "stores": [
            {
                "id": "1328894953020395521",
                "code": "amazon_JP_0025"
            },
            {
                "id": "1328895389878128642",
                "code": "amazon_ES_0027"
            },
            {
                "id": "1329362410676088833",
                "code": "amazon_JP_0029"
            },
            {
                "id": "1332157622064168962",
                "code": "amazon_UK_0033"
            },
            {
                "id": "1332157622143860737",
                "code": "amazon_US_0034"
            },
            {
                "id": "1332157622269689858",
                "code": "amazon_UK_0035"
            },
            {
                "id": "1332633109127839746",
                "code": "amazon_US_0032"
            },
            {
                "id": "1335785921988231170",
                "code": "amazon_FR_0039"
            },
            {
                "id": "1335785922013396993",
                "code": "amazon_NL_0040"
            },
            {
                "id": "1335785922042757122",
                "code": "amazon_DE_0041"
            },
            {
                "id": "1335785922067922945",
                "code": "amazon_ES_0042"
            },
            {
                "id": "1335785922105671681",
                "code": "amazon_CA_0043"
            },
            {
                "id": "1335785922130837505",
                "code": "amazon_CA_0044"
            },
            {
                "id": "1335785922160197633",
                "code": "amazon_DE_0045"
            },
            {
                "id": "1335785922193752066",
                "code": "amazon_FR_0046"
            },
            {
                "id": "1335785922218917890",
                "code": "amazon_IT_0036"
            },
            {
                "id": "1335785922256666626",
                "code": "amazon_ES_0037"
            },
            {
                "id": "1335785922294415361",
                "code": "amazon_NL_0038"
            }
        ]
    },
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|              
|id | string   | 平台ID |
|platformName | string   | 平台名称 |
|platformCode | string   | 平台简码 |
|stores | list   | 关联店铺 |
|id | string   | 店铺ID |
|code |string   |店铺编码  |




## 备注
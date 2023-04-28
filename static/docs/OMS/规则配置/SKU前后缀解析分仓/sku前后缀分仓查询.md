# sku前后缀分仓查询

> 作者：fanglongbin

## 简要描述

- 查询接口

## 请求URL
- ` /skuResolvingRule/pageSkuAffixResolvingRule `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|affixContent |否  |string | 前后缀内容    |
|shippingCountry     |否  |string | 仓库国家    |
|wareHouseType     |否  |string | 仓库类型    |
|deliveryWarehouse     |否  |string | 发货仓库    |
|status     |否  |string | 状态    |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1346365058035216386",
                "affixContent": "test3",
                "deliveryWarehouse": "MGCK001",
                "deliveryChannel": "112",
                "description": "12223",
                "handler": null,
                "status": "1",
                "createTime": "2021-01-05 15:56:59",
                "wareHouseType": "PLATFORM",
                "shippingCountry": "US",
                "virtualWarehouseSign": 1,
                "createUser": "0",
                "wareHouseName": "美国第一仓",
                "channelName": null,
                "countryName": "美国",
                "wareTypeName": "自建仓"
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |主键id  |
|affixContent |string   |sku前后缀内容  |
|deliveryWarehouse |string   |发货仓库  |
|deliveryChannel |string   |发货渠道  |
|status |int   |状态 |
|description |string   |描述 |
|handler |string   |处理人(添加人) |
|createTime |datetime   |创建时间 |
|wareHouseName |string   |发货仓库名 |
|channelName |string   |发货渠道名 |
|shippingCountry |string   |发货国家 |
|wareHouseType |string   |仓库类型 |
|virtualWarehouseSign |int   |虚仓标识（1是,2否） |
|countryName |string   |国家名称 |
|wareTypeName |string   |仓库类型名称 |
## 备注 

-
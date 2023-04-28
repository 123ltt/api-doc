# 物流单API

> 作者：2318309077

## 简要描述

-物流单管理 主页

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/detail`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |否  |Strring |平台代码   |
|tenantId |否  |Strring |租户id   |
|channelCode |否  |Strring |渠道代码   |
|startDate |是  |Date | 开始时间    |
|endDate     |是  |Date | 结束时间    |
|searchType     |否  |Int | 搜索条件 0:物流单 1:平台单号 2:包裹号 3:跟踪号 4:扩展跟踪号    |
|searchValue |否  |Strring | 搜索内容    |
|type |否  |Strring |状态 10:待申请跟踪号 20:待申请面单 50:订单完成 70:取消中 90:预报异常|
## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1368771626266542082",
                "code": "P2021030811524043",
                "referenceNumber": "test202103080000002",
                "platformNumber": "pfn",
                "providerCode": null,
                "channelCode": "F03-46",
                "trackingNumber": "1615175561481-1894335375",
                "trackingNumberEx": null,
                "labelUrl": "http://192.168.114.176:9000/bladex/upload/20210308/3d6eb5edcda9425eebb84eb72eb19454.pdf",
				 "chargeWeight": "12000.0000",
                "totalWeight": "1200.0000",
                "volumeWeight": "13000.0000",
                "totalCost": "123.234450",
                "codCurrency": "USD",
                "createTime": "2021-03-08 11:52:41",
                "finishTime": "2021-03-08 11:52:43",
				"buyerCode":"1223",
				"status":11
            }
        ],
        "total": 55178,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 5518
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id |
|code |String   |物流单 |
|referenceNumber |String   |包裹号   |
|platformNumber |String   |平台交易号  |
|providerCode |String   |物流商代码 |
|channelCode |String   |渠道代码  |
|trackingNumber |String   |跟踪号  |
|trackingNumberEx |String   |扩展跟踪号  |
|labelUrl |String   |面单地址  |
|chargeWeight |String   |计费重量 g |
|totalWeight |String   |包裹重量 g |
|volumeWeight |String   |体积重量 g  |
|totalCost |String   |总价值 |
|codCurrency |String   |币种  |
|trackNoTime |Date   |获取跟踪号时间 |
|labelTime |Date   |获取面单时间|
|createTime |Date   |创建时间 |
|finishTime |Date   |完成时间 |
|buyerCode |String   |买家账号 |
|status |int   |订单状态 10:待申请跟踪号 20:待申请面单 30:回传跟踪号 40:回传面单 50:订单完成 70:取消中 80:已取消 90:预报异常|
----------------------------------------------------------------------------------------------------




    
## 简要描述

-查询产品详情 数据

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/goods/detail`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|oId |是  |Long |订单id   |
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1368870568266301442",
            "platformTradeNumber": null,
            "itemId": null,
            "sku": "12321sku",
            "nameCn": "圣诞节新款树脂圣诞节日摆件坐麋鹿",
            "nameEn": "Christmas new resin Christmas holiday",
            "title": "test",
            "number": "1",
            "length": "23.4560",
            "width": "33.0000",
            "height": "43.0000",
            "weight": "1200.0000",
            "cost": "12.000000",
            "rmbCost": "8038.680000",
            "currency": "USD",
            "url": "http//121311311112121111111111111111111111111111111",
            "code": null,
            "property": null,
            "originCountry": null,
            "hsCode": "",
            "oid": "1368870567943340034",
            "pid": "1368870568119500802"
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id |
|platformTradeNumber |String   |电商平台交易号 |
|itemId |String   |平台itemid   |
|sku |String   |商品SKU  |
|nameCn |String   |商品中文名称 |
|nameEn |String   |商品英文名称 |
|title |String   |商品描述 |
|number |String   |商品数量 |
|length |String   |商品长 |
|width |String   |商品宽|
|height |String   |商品高 |
|weight |String   |商品单件重量g |
|cost |String   |商品申报价值 |
|rmbCost |String   |商品申报价值(分) |
|currency |String   |商品申报价值币种 |
|url |String   |商品销售ur |
|code |String   |商品海关代码 |
|property |String   |包裹属性 0 普通 1 带电 2带磁 |
|originCountry |String   |源产地 |
|hsCode |String   |海关编码 |
----------------------------------------------------------------------------------------------------


    
## 简要描述

-收件人信息

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/receiver/detail`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|oId |是  |Long |订单id   |
## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "id": "1368870568408907778",
        "name": "xin ming",
        "companyName": null,
        "tel": null,
        "phone": "5869098233",
        "countryName": "BE",
        "countryCode": "BE",
        "province": "CA",
        "city": "Pomona",
        "county": null,
        "street": null,
        "address": "67700Lockwood-JolonRoad",
        "address1": null,
        "postCode": "91766",
        "email": "1254837494@qq.com",
        "oid": "1368870567943340034"
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id |
|name |String   |收件人名称 |
|companyName |String   |收件公司名称 |
|tel |String   |收件人电话|
|phone |String   |收件人手机 |
|countryName |String   |收件人国家名称 |
|countryCode |String   |收件人国家简码 |
|province |String   |收件人省/洲 |
|city |String   |收件人城市 |
|county |String   |收件人县/区 |
|street |String   |收件人街道 门牌号 |
|address |String   |地址 |
|address1 |String   |地址1 |
|postCode |String   |邮编 |
|email |String   |邮箱 |

----------------------------------------------------------------------------------------------------


    
## 简要描述

-费用详情

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/cost/detail`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|oId |是  |Long |订单id   |
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "totalFreight": "13.000000",
        "baseFreight": "12.000000",
        "headerFreight": null,
        "footFreight": null,
        "additionalCost": null,
        "tariff": null,
        "oid": "1368870567943340034"
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|----- |
|id |int   |id |
|totalFreight |String   |总运费 |
|fullCost    |String   |基础运费(全程)(旧：baseFreight) |
|firstCost   |String   |头程费(旧：headerFreight) |
|tailCost    |String   |尾程费(旧：footFreight) |
|additionCost   |String   |附加费(旧：additionalCost) |
|tax    |String   |关税(旧：tariff) |

----------------------------------------------------------------------------------------------------
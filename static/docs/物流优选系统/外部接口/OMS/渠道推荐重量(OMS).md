# 渠道推荐重量(OMS)

> 作者：luobinbin

## 简要描述

- OMS渠道推荐重量 

## 请求URL
- `http://test-ctms-optimize.zehui.local/client/omsClient/channelOptimalWeight`

## API引入POM  `NEW`
        &lt;dependency>
             &lt;groupId>com.zhkj.tms&lt;/groupId>
            &lt;artifactId>ctms-optimize-api&lt;/artifactId>
            &lt;version>7.0.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
feign接口 com.zhkj.optimize.feign.IOmsOptimizeFeign#channelOptimalWeight


## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |String |业务号  用于定位查询记录|
|channelCode |是  |String |渠道代码|
|tenantId |是  |String |租户|
|price|是|BigDecimal|金额，金额需要大于0 |
|address     |是  |OptimalWeightAddressRequest |地址信息 |
|platform     |是  |OptimalWeightPlatformRequest | 平台信息|

address相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|countryCode     |是  |String | 国家 |
|province     |否  |String |省  |
|city     |否  |String | 市  |
|postCode     |否  |String |邮编  和渠道优选保持一致，除个别平台拿不到外其他必传 |

platform相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode     |是  |String | 平台编码|
|serviceType     |否  |String |服务类型 Lazada需要传此参数|

## 请求示例
``` 
 {   
    "referenceNumber":"123",
    "channelCode":"CHL1220",
    "price":"12.33",
    "address":{
        "countryCode":"US",
        "province":"California",
        "city":"Los Angeles",
        "postCode":"100000"
    },
    "platform":{
        "platformCode":"SM",
        "serviceType":"standard"
    }
}
```

## 返回示例
``` 
 {
    "code": 200,
    "success": true,
    "data": {
        "channelCode": "CHL1220",
        "optimalWeight": "28.816"
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d1663917404621101812116"
    }
}
```

## 返回OptimalWeightResponse参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |Integer   |状态码 参考BladeX R 200 业务成功 400 业务异常  500服务器异常|
|channelCode |string   |渠道代码  |
|optimalWeight |BigDecimal   |推荐重量 最多六位小数  单位kg |
|minOptimalWeight |BigDecimal   |最低重量 单位kg `NEW`|


## 备注 

- 更多返回错误代码请看首页的错误代码描述
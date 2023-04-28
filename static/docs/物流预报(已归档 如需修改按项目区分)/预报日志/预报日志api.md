# 预报日志api

> 作者：2318309077

## 简要描述

- 日志查询接口

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/log/blogs`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current |是  |string |当前页数   |
|size |是  |string | 每页展示条数    |
|referenceNumber     |否  |string | 配送单号    |
|tenantId     |否  |long | 租户id    |
|bizType     |否  |int | 消息类型    |
|startDate     |否  |date | 开始时间    |
|endDate     |否  |date | 结束时间    |
## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "list": [
            {
                "id": "-2127114118-1615948471072",
                "bizNumber": "lt1202103170000001",
                "bizType": 1,
                "bizTypeName": null,
                "requestSysName": "TMS",
                "responseSysName": "F91-01",
                "requestMessage": "{\"status\":\"Failure\",\"errors\":[{\"code\":120023,\"message\":\"Country and service option do not match\"}],\"data\":[{\"status\":\"Failure\",\"errors\":[{\"code\":120023,\"message\":\"Country and service option do not match\"}],\"orderId\":null,\"referenceNo\":\"lt1202103170000001\",\"trackingNo\":null,\"connoteId\":null}]}",
                "responseMessage": null,
                "status": 1,
                "mqMessage": "{\"id\":1372013445657956353,\"createUser\":null,\"createDept\":null,\"createTime\":\"2021-03-17 10:34:30\",\"updateUser\":null,\"updateTime\":\"2021-03-17 10:34:30\",\"status\":10,\"isDeleted\":0,\"code\":\"P2021031710343098\",\"orderId\":\"11111\",\"referenceNumber\":\"lt1202103170000001\",\"platformNumber\":\"pfn\",\"platformTradeNumber\":null,\"trackingNumber\":null,\"trackingNumberEx\":null,\"trackingId\":null,\"platformCode\":\"ZH\",\"storeCode\":\"123\",\"siteCode\":\"siteCode\",\"warehouseName\":\"SZ\",\"warehouseCode\":\"SZ\",\"providerCode\":\"\",\"channelCode\":\"F91-01\",\"totalGoods\":1,\"property\":null,\"type\":1,\"isSignature\":null,\"traceStatus\":null,\"labelUrl\":null,\"cancelReason\":null,\"totalCost\":12,\"rmbTotalCost\":8038.680000,\"codCurrency\":\"USD\",\"totalLength\":1,\"totalWidth\":33,\"totalHeight\":43,\"totalWeight\":100.0,\"totalVolume\":26543.45,\"remark\":null,\"buyerCode\":\"buy111\",\"finishTime\":null,\"labelTime\":null,\"trackNoTime\":null,\"chargeWeight\":null,\"volumeWeight\":null}",
                "consumerQueue": "generate_trackNo_queue",
                "count": 1,
                "createTime": "2021-03-17 10:35:32",
                "updateTime": "2021-03-17 10:35:46",
                "tenantId": "000000",
                "errorMsg": "com.alibaba.fastjson.JSONArray cannot be cast to java.lang.String",
                "success": false
            },
            {
                "id": "-1607197679-1615948005999",
                "bizNumber": "lx1202103170000002",
                "bizType": 7,
                "bizTypeName": null,
                "requestSysName": "TMS",
                "responseSysName": "OMS",
                "requestMessage": "[{\"failedMsg\":\"领讯解析xml,拿取追踪号失败 &lt;soap:Envelope xmlns:soap=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\">&lt;soap:Body>&lt;ns1:createAndAuditOrderResponse xmlns:ns1=\\\"http://service.hop.service.ws.hlt.com/\\\">&lt;return>&lt;id>1105162201&lt;/id>&lt;success>true&lt;/success>&lt;trackingNo>&lt;/trackingNo>&lt;/return>&lt;/ns1:createAndAuditOrderResponse>&lt;/soap:Body>&lt;/soap:Envelope>\",\"pkgCode\":\"lx1202103170000002\"}]",
                "responseMessage": "{\"code\":200,\"msg\":\"接收成功\",\"success\":true}",
                "status": 0,
                "mqMessage": "{\"businessId\":1372007650274918402,\"businessNo\":\"lx1202103170000002\",\"errorMsg\":\"领讯解析xml,拿取追踪号失败 &lt;soap:Envelope xmlns:soap=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\">&lt;soap:Body>&lt;ns1:createAndAuditOrderResponse xmlns:ns1=\\\"http://service.hop.service.ws.hlt.com/\\\">&lt;return>&lt;id>1105162201&lt;/id>&lt;success>true&lt;/success>&lt;trackingNo>&lt;/trackingNo>&lt;/return>&lt;/ns1:createAndAuditOrderResponse>&lt;/soap:Body>&lt;/soap:Envelope>\",\"errorType\":null}",
                "consumerQueue": "callBack_orderFailure_queue",
                "count": 0,
                "createTime": "2021-03-17 10:26:46",
                "updateTime": "2021-03-17 10:26:46",
                "tenantId": "000000",
                "errorMsg": null,
                "success": true
            },
            {
                "id": "-1243418009-1615947089329",
                "bizNumber": "lx1202103170000002",
                "bizType": 1,
                "bizTypeName": null,
                "requestSysName": "TMS",
                "responseSysName": "F53-01",
                "requestMessage": "&lt;soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"http://service.hop.service.ws.hlt.com/\">\n&lt;soapenv:Header/>\n&lt;soapenv:Body>\n&lt;ser:createAndAuditOrder>\n&lt;userToken>7f91e9568ff34a96b6af00a64cedafec&lt;/userToken>\n&lt;createOrderRequest>\n    &lt;cargoCode>D&lt;/cargoCode>\n    &lt;city>New York&lt;/city>\n    &lt;codCurrency>USD&lt;/codCurrency>\n    &lt;codSum>12.000000&lt;/codSum>\n    &lt;consigneeName>xin ming&lt;/consigneeName>\n    &lt;consigneePostcode>10041&lt;/consigneePostcode>\n    &lt;consigneeTelephone>5869098233&lt;/consigneeTelephone>\n    &lt;declareItems>\n        &lt;cnName>Christmas new resin Christmas holiday&lt;/cnName>\n        &lt;name>Christmas new resin Christmas holiday&lt;/name>\n        &lt;netWeight>0.1000&lt;/netWeight>\n        &lt;pieces>1&lt;/pieces>\n        &lt;unitPrice>12.000000&lt;/unitPrice>\n    &lt;/declareItems>\n    &lt;destinationCountryCode>US&lt;/destinationCountryCode>\n    &lt;goodsCategory>O&lt;/goodsCategory>\n    &lt;height>43.0000&lt;/height>\n    &lt;insured>N&lt;/insured>\n    &lt;length>1.0000&lt;/length>\n    &lt;orderNo>lx1202103170000002&lt;/orderNo>\n    &lt;originCountryCode>AF&lt;/originCountryCode>\n    &lt;pieces>1&lt;/pieces>\n    &lt;province>New York&lt;/province>\n    &lt;shipperAddress>啊啊啊啊啊啊啊啊&lt;/shipperAddress>\n    &lt;shipperCity>抚州&lt;/shipperCity>\n    &lt;shipperCompanyName>2&lt;/shipperCompanyName>\n    &lt;shipperMobile>3&lt;/shipperMobile>\n    &lt;shipperName>周进1&lt;/shipperName>\n    &lt;shipperPostcode>8&lt;/shipperPostcode>\n    &lt;shipperProvince>江西&lt;/shipperProvince>\n    &lt;shipperStreet>5&lt;/shipperStreet>\n    &lt;shipperStreetNo>5&lt;/shipperStreetNo>\n    &lt;shipperTelephone>10086&lt;/shipperTelephone>\n    &lt;street>New York New York 123&lt;/street>\n    &lt;transportWayCode>EBL-US-D&lt;/transportWayCode>\n    &lt;weight>0.1000&lt;/weight>\n    &lt;width>33.0000&lt;/width>\n&lt;/createOrderRequest>\n&lt;/ser:createAndAuditOrder>\n&lt;/soapenv:Body>\n&lt;/soapenv:Envelope>",
                "responseMessage": "&lt;soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">&lt;soap:Body>&lt;ns1:createAndAuditOrderResponse xmlns:ns1=\"http://service.hop.service.ws.hlt.com/\">&lt;return>&lt;id>1105162201&lt;/id>&lt;success>true&lt;/success>&lt;trackingNo>&lt;/trackingNo>&lt;/return>&lt;/ns1:createAndAuditOrderResponse>&lt;/soap:Body>&lt;/soap:Envelope>",
                "status": 1,
                "mqMessage": "{\"id\":1372007650274918402,\"createUser\":null,\"createDept\":null,\"createTime\":\"2021-03-17 10:11:29\",\"updateUser\":null,\"updateTime\":\"2021-03-17 10:11:29\",\"status\":10,\"isDeleted\":0,\"code\":\"P2021031710112897\",\"orderId\":\"11111\",\"referenceNumber\":\"lx1202103170000002\",\"platformNumber\":\"pfn\",\"platformTradeNumber\":null,\"trackingNumber\":null,\"trackingNumberEx\":null,\"trackingId\":null,\"platformCode\":\"ZH\",\"storeCode\":\"123\",\"siteCode\":\"siteCode\",\"warehouseName\":\"SZ\",\"warehouseCode\":\"SZ\",\"providerCode\":\"\",\"channelCode\":\"F53-01\",\"totalGoods\":1,\"property\":null,\"type\":1,\"isSignature\":null,\"traceStatus\":null,\"labelUrl\":null,\"cancelReason\":null,\"totalCost\":12,\"rmbTotalCost\":8038.680000,\"codCurrency\":\"USD\",\"totalLength\":1,\"totalWidth\":33,\"totalHeight\":43,\"totalWeight\":100.0,\"totalVolume\":26543.45,\"remark\":null,\"buyerCode\":\"buy111\",\"finishTime\":null,\"labelTime\":null,\"trackNoTime\":null,\"chargeWeight\":null,\"volumeWeight\":null}",
                "consumerQueue": "generate_trackNo_queue",
                "count": 5,
                "createTime": "2021-03-17 10:26:45",
                "updateTime": "2021-03-17 10:26:45",
                "tenantId": "000000",
                "errorMsg": "领讯解析xml,拿取追踪号失败 &lt;soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">&lt;soap:Body>&lt;ns1:createAndAuditOrderResponse xmlns:ns1=\"http://service.hop.service.ws.hlt.com/\">&lt;return>&lt;id>1105162201&lt;/id>&lt;success>true&lt;/success>&lt;trackingNo>&lt;/trackingNo>&lt;/return>&lt;/ns1:createAndAuditOrderResponse>&lt;/soap:Body>&lt;/soap:Envelope>",
                "success": false
            }
        ],
        "pagesVO": {
            "totalCount": 3334,
            "pageSize": 3,
            "pageStart": 0,
            "totalPages": 10000,
            "current": 1
        }
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |String   |主键id  |
|bizNumber |String   |配送单号  |
|bizType |String   |业务类型 1,"请求生成跟踪号"2,"请求生成面单"3,"请求取消订单"4,"回传跟踪号"5,"回传面单"6,"回传取消结果"7,"回传预报失败信息"|
|bizTypeName |String   |业务类型 |
|requestSysName |String   |请求方系统名称 |
|responseSysName |String   |响应方 系统名称 |
|requestMessage |String   |请求报文  |
|responseMessage |String   |响应报文  |
|status |String   | 业务状态 1 处理成功 2 处理失败  |
|mqMessage |String   | 关联MQ消息对象  |
|consumerQueue |String   | 关联MQ queue |
|count |String   | 请求次数  |
|createTime |String   | 創建时间 |
|updateTime |String   | 修改时间  |
|tenantId |String   | 租户id|
|errorMsg |String   | 异常信息|
## 备注 

- 更多返回错误代码请看首页的错误代码描述
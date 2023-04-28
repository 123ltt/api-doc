# 标记推送海外仓API

> 作者：pengyutian

**简要描述：** 

- 标记推送海外仓API（目前默认泽汇海外仓）
- 说明：
		1.单次请求数量不超过500，
		2.超过20条时，先标记后续通过定时推送，
		3.不超过20条时直接推送并返回推送结果。（推送失败会标记后续定时推送） 
- 作者：彭雨田

**请求URL：** 
- dev : http://dev-service.zehui.local/api/cpms
- 测试： http://test-service.zehui.local/api/cpms
- 正式：
- `/thirdWarehouseSku/pushOverseasWarehouseApi`
* pms
		&lt;dependency>
            &lt;groupId>com.zhkj.cpms&lt;/groupId>
            &lt;artifactId>pms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
- `com.zhkj.pms.feign.TwmsClient`
* cpms 
		&lt;dependency>
            &lt;groupId>com.zhkj.cpms&lt;/groupId>
            &lt;artifactId>cpms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
- `com.zhkj.cpms.feign.TwmsClient`

  
**请求方式：**
- POST 

**请求示例(dev)：** 
```
{
  "data":{
        "productSkus":["QA11M075H34"],
      "warehouseId":629,
      "warehouseName":"xxx",
      "pushSource":"Twms"
      }
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
| productSkus |List&lt;String> |SKU编码|是|
| warehouseId |Integer |仓库ID|是|
| warehouseName |String |仓库名字|是|
| pushSource |String |推送来源|是|


 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": 
        [{
            "productSkus": "QA11M075H34",
            "warehouseId": 630,
            "warehouseName": "xxx",
            "pushSource": "供应链",
            "msg": "推送失败,已标记,等待重新推送",
            "code": 0
        }]
    ,
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281634202880881100612612",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
| productSkus |String |SKU编码|
| warehouseId |Integer |仓库ID|
| warehouseName |String |仓库名字|
| pushSource |String |推送来源|
| code |Integer |200 推送成功 402 重复推送 500错误 0等待定时推送（1>单次请求大于20 2>当前推送失败）|
| msg |String |结果描述|
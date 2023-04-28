# 获取SKU风险等级

> 作者：pengyutian

**简要描述：** 


获取SKU风险等级





**请求URL：** 
```
 ` /lms/sku/riskLevel

 com.zhkj.pms.feign.ILmsSkuClient
 com.zhkj.cpms.feign.ILmsSkuClient
&lt;parent>
        &lt;groupId>com.zhkj.pms&lt;/groupId>
        &lt;artifactId>common-api&lt;/artifactId>
        &lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```


- 侵权风险等级枚举 

```
com.zhkj.pms.enums.InfringementRiskLevelEnum
&lt;parent>
        &lt;groupId>com.zhkj.pms&lt;/groupId>
        &lt;artifactId>pms-common&lt;/artifactId>
        &lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data":{
	 "lstProductSku":["xxx"]
	}
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|lstProductSku |String   |PMS_SKU集合|是|




 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
       {
	   "productSku":"xxx",
	    "riskLevel":2
	   }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428164517139976610035008"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |pms_sku编码|
|riskLevel |int   |风险等级 |
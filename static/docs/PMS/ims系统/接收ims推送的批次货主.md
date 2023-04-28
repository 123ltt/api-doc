# 接收ims推送的批次货主

> 作者：pengyutian

## 简介

接收ims推送的批次货主

**POM依赖**

```java
&lt;parent>
	&lt;groupId>com.zhkj.cpms&lt;/groupId>
	&lt;artifactId>zhkj-cpms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>

&lt;parent>
	&lt;groupId>com.zhkj.cpms&lt;/groupId>
	&lt;artifactId>zhkj-pms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

**调用方法**

```java
com.zhkj.cpms.feign.TransferSkuCostClient#skuCostUpdateOwner

com.zhkj.pms.feign.TransferTenantSkuCostClient#skuCostUpdateOwner

/api/transfer-sku-cost/update-owner
```

**请求数据**

| 参数 |类型 |必填| 含义  |
| ------------ | ------------ |
| deployNumber|String  |是| 批次号  |
| sku  |String| 是 |pms系统SKU |
| warehouseId  |String| 是|仓库ID  |
| owners |List&lt;String> |是 |货主  |
| sourceType |String |是 |请求系统 (IMS/FTMS) com.zhkj.cpms.enums.TransferSkuCostSourceEnum |



**请求示例**

```json
{
    "data": [{
        "deployNumber": "test_batch_num",
        "sku": "SC2HM331DGD",
        "warehouseId":"271",
		"owners":["xxx"],
		"sourceType":"IMS"
    }]
}

```

**响应示例**

```json
{
    "code": 200,
    "success": true,
    "data": true,
    "msg": "更新成功",
    "attachedMap": {
        "traceId": "0af4048a163455657750310581"
    }
}
```
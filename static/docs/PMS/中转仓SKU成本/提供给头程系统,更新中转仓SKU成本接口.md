# 提供给头程系统,更新中转仓SKU成本接口

> 作者：pengyutian

## 简介

提供给头程系统, 推送中转仓数据接口

**POM依赖**

```java
&lt;parent>
	&lt;groupId>com.zhkj.cpms&lt;/groupId>
	&lt;artifactId>zhkj-cpms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

**调用方法**

```java
com.zhkj.cpms.feign.TransferSkuCostClient#skuCostSaveBatch

/api/transfer-sku-cost/save-batch

```

**请求数据**

| 参数  | 含义  |
| ------------ | ------------ |
| deployNumber  | 批次号  |
| sku  |  pms系统SKU |
| freightCost  | 运费(RMB)  |
| purChaseCost  | 采购价格(RMB)  |
| warehouseCode  | 仓库CODE  |


**请求示例**

```json
[{
	"deployNumber": "test_batch_num",
	"sku": "DJYRXHSC8450A",
	"freightCost": "80.0000",
	"purChaseCost": "70.0000"，
	"warehouseCode":"A1",
}]
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
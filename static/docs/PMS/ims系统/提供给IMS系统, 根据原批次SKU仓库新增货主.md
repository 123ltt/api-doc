# 提供给IMS系统, 根据原批次SKU仓库新增货主

> 作者：pengyutian

## 简介

提供给IMS系统, 根据原批次SKU仓库新增货主
重复新增只PMS的修改时间

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
com.zhkj.cpms.feign.TransferSkuCostClient#skuCostSaveBatch

com.zhkj.cpms.feign.TransferTenantSkuCostClient#skuCostSaveBatch

/api/transfer-sku-cost/save-batch
```

**请求数据**

| 参数  |字段|是否必填| 含义  |
| ------------ | ------------ |
| deployNumber  |String|是| 批次号  |
| sku  |String|是|  pms系统SKU |
| freightCost |BigDecimal| 是| 头程费(RMB)  |
| firstCostDiscount |BigDecimal| 否| 头程折扣（首次添加（0,1],后续只能保证同第一次添加一样） |
| purChaseCost  |BigDecimal|是| 采购价格(RMB)  |
| purchaseDiscount |BigDecimal| 否| 采购折扣（首次添加（0,1],后续只能保证同第一次添加一样）  |
| warehouseId  |Long|是| 仓库id  |
| owners  |String|是| 货主  |
| sourceType  |String|是| 来源系统 （IMS）  |
| isModifyDate  |Boolean|否| 是否需要修改数据 （为刷数据而生 会记录修改日志）  |

**请求示例**

```json
[{
	"deployNumber": "1",
	"sku": "QC325468274",
	"freightCost": 14.9220,
	"purChaseCost": 23.8000,
	"warehouseId":227,
    "owner":"xx",
	"purchaseDiscount":0.5,
    "firstCostDiscount":0.5,
    "sourceType":"IMS"
},{
	"deployNumber": "1",
	"sku": "QC325468274",
	"freightCost": 14.9220,
	"purChaseCost": 23.8000,
	"warehouseId":227,
    "owner":"xxx",
	 "purchaseDiscount":0.5,
    "firstCostDiscount":0.5,
    "sourceType":"IMS"
}
]
```

**响应示例**

```json
{
    "code": 200,
    "success": true,
    "data": true,
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af4048a163455657750310581"
    }
}
```
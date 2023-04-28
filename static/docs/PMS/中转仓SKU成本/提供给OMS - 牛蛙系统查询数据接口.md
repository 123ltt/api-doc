# 提供给OMS/牛蛙系统查询数据接口

> 作者：pengyutian

## 简要描述

OMS 通过接口, 获取转仓SKU的头程费用和采购费用

**开发人** : `李景华`

**POM依赖**

```java
        &lt;dependency>
            &lt;groupId>com.zhkj.pms&lt;/groupId>
            &lt;artifactId>pms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
```

**使用 feign 接口** :

```java
com.zhkj.pms.feign.TransferTenantSkuCostClient.querySingle
```

**重要说明** :

```
 A.SKU+批次号+店铺+仓库id

         如果能找到唯一数据则返回；如果找不到则只拿SKU+批次号+仓库id三个参数去找数据并返回



     B.SKU+店铺+仓库id

         如果能找到唯一数据则返回；

         如果找到多条数据则返回产品成本（采购折后价+头程折后价）最低的那条数据；

         如果SKU+店铺+仓库id都找不到数据则只拿SKU+仓库id去找数据，找到多条则返回产品成本（采购折后价+头程折后价）最低的那条数据
```
** 注意事项 **
```
oms查询会有补偿，详见重要说明 若其他系统调用不用补偿查询， requestSource 不传参数
requestSource入参自己系统名称,
有特殊要求沟通
```


**请求内容** : 

| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|requestSource|请求系统名称 |query| 否 |int|zhkj.cpms.enums.RequestSourceEnuming|
|data.indexId|索引 |query| true |array|string|
|data.pmsSku|pms sku |query|pms sku , 牛蛙SKU 必须填一个|array|string|
|data.nwSku|牛蛙SKU |query|pms sku , 牛蛙SKU 必须填一个|array|string|
|data.batchNum|批次号|query|false|array|string|
|data.account|货主店铺账号|query|false|array|string|
|data.warehouseId|仓库ID|query|true|array|long|

**使用 http 接口** : 

```java
请求接口: {{服务中心网关地址}}cpms/api/transfer-sku-cost/query/single
```


**请求示例** :

**请求头** : 

|参数|取值|
|---|----|
|Authorization | Base64(clientId:clientSecret)|
|Blade-Auth| access_token|

**请求体 ** : 

```json
{	
	"requestSource":1,
	"data": {
	"indexId":1,
		"pmsSku": "DJYRXHSC8450A",
		"batchNum": "test_batch_num",
		"account": "test_account2",
		"warehouseId": 227
	}
}
```


**响应参数** :


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«TransferSkuCostVO对象»|IPage«TransferSkuCostVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|TransferSkuCostVO对象|
|&emsp;&emsp;&emsp;&emsp;account|货主店铺账号|string||
|&emsp;&emsp;&emsp;&emsp;batchNum|批次号|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;firstCost|头程成本|number||
|&emsp;&emsp;&emsp;&emsp;firstCostDiscount|头程折扣|number||
|&emsp;&emsp;&emsp;&emsp;firstCostDiscountPrice|头程折后价|number||
|&emsp;&emsp;&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nwSku|牛蛙SKU编码|string||
|&emsp;&emsp;&emsp;&emsp;productCost|产品成本价|number||
|&emsp;&emsp;&emsp;&emsp;productSku|SKU编码|string||
|&emsp;&emsp;&emsp;&emsp;purchaseCost|采购成本|number||
|&emsp;&emsp;&emsp;&emsp;purchaseDiscount|采购折扣|number||
|&emsp;&emsp;&emsp;&emsp;purchaseDiscountPrice|采购折后价|number||
|&emsp;&emsp;&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;warehouseId|目的仓库|integer(int32)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||

**响应示例** :

```json
{
	"code": 200,
	"success": true,
	"data": {
		"id": "1449967884406644737",
		"batchNum": "test_batch_num",
		"productSku": "DJYRXHSC8450A",
		"nwSku": "W23032845",
		"account": "test_account,test_account1",
		"owner": null,
		"warehouseId": 1,
		"purchaseCost": "800.0000",
		"purchaseDiscount": "0.1000",
		"purchaseDiscountPrice": "80.0000",
		"firstCost": "700.0000",
		"firstCostDiscount": "0.1000",
		"firstCostDiscountPrice": "70.0000",
		"productCost": "150.0000",
		"createUser": null,
		"createDept": null,
		"createTime": null,
		"updateUser": null,
		"updateTime": "2021-10-18 14:49:38",
		"status": 1,
		"isDeleted": 0
	},
	"msg": "操作成功",
	"attachedMap": {
		"traceId": "0af4048a163455545720510201"
	}
}
```
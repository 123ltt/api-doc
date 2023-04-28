# 提供给OMS接口查询中转SKU价格

> 作者：pengyutian

## 简要描述

OMS 通过接口, 获取转仓SKU的头程费用和采购费用

**开发人** : `李景华`

**POM依赖**

```java
&lt;parent>
	&lt;groupId>com.zhkj.pms&lt;/groupId>
	&lt;artifactId>zhkj-pms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

**使用 feign 接口** :

```java
com.zhkj.pms.feign.TransferTenantSkuCostClient
```

**重要说明** :

查询逻辑按照 [PMS原型](http://pu-ng.zehui.local/PMS/#id=qj58do&p=sku%E6%B5%B7%E5%A4%96%E4%BB%93%E6%8A%98%E6%89%A3&g=1)

** 注意事项：**

```
oms查询会有补偿，详见重要说明 requestSource 不传参数
其他系统指定查询不能共用oms补偿的逻辑则需要入参（入参自己系统简称）
有特殊要求则沟通处理
```



**请求内容** : 

| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|requestSource| 请求来源 |query|否|int|com.zhkj.cpms.enums.RequestSourceEnum|
|data.indexId|索引ID |query|是|string|string|
|data.pmsSku|pms sku |query|pms sku , 牛蛙SKU 必须填一个|array|string|
|data.nwSku|牛蛙SKU |query|pms sku , 牛蛙SKU 必须填一个|array|string|
|data.batchNum|批次号|query|false|array|string|
|data.account|货主店铺账号|query|false|array|string|
|data.warehouseId|仓库ID|query|true|array|long|

**使用 http 接口** : 

```java
请求接口: {{服务中心网关地址}}cpms/api/transfer-sku-cost/query
```


**请求示例** :

```json
{
    "data": [
        {
			"indexId" : "test_index_id",
            "pmsSku": "DJYRXHSC8450A",
            "batchNum": "test_batch_num",
            "account": "test_account2",
			"warehouseId" : 227
        },
        {
			"indexId" : "test_index_id_2",
            "nwSku": "test_nw_sku",
            "batchNum": "test_batch_num",
			"account": "test_account2",
			"warehouseId" : 227
        }
    ]
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
        "test_index": {
            "id": "1455854802977166694",
            "batchNum": "ZH20210816562",
            "productSku": "RYKXB0502Y9",
            "nwSku": "LK0050BL",
            "account": "公共",
            "owner": "张亚琴",
            "warehouseId": 376,
            "warehouseName": null,
            "purchaseCost": "59.3805",
            "purchaseDiscount": "1.0000",
            "purchaseDiscountPrice": "59.3805",
            "firstCost": "0.4800",
            "firstCostDiscount": "1.0000",
            "firstCostDiscountPrice": "0.4800",
            "productCost": "59.8605",
            "createUser": "0",
            "createDept": "0",
            "createTime": "2021-11-26 09:10:01",
            "updateUser": "0",
            "updateTime": "2022-02-26 09:28:43",
            "status": 1,
            "isDeleted": 0
        }
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ab1646465409570101139652"
    }
}
```
# 根据SKU给财务系统提供产品数据

> 作者：pengyutian

**简要描述：** 

- 根据SKU给财务系统提供产品数据
- 1.根据修改时间区间筛选，默认获取第一页 2.在修改时间范围内传递上次最大的id获取下一页数据  修改时间左闭右闭
-   返回数据根据id正序排序
- 负责人：彭雨田
- 位置：
		com.zhkj.cpms.feign.financeGetDetailed
		&lt;dependency>
            &lt;groupId>com.zhkj.cpms&lt;/groupId>
            &lt;artifactId>cpms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>

**请求URL：** 
- ` /finance/sku/getDetailed     正式：https://service.izehui.com/api/cpms
  
**请求方式：**
- POST 

**请求示例：** 
```
{
   "productSkus":["SC2HM331DGT"],
   "updateTimeLeft":null,
   "updateTimeRight":null,
   "id":null,
   "limit":1
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSkus |String[] |SKU编码 数量不大于500 大于500只取前500|否  |
|updateTimeLeft |Date |修改时间左区间（闭）|否  |
|updateTimeRight |Date |修改时间右区间 （闭）|否  |
|id |Long |上一次最大的id |否  |
|limit |int |分页条数最大500 默认500|否  |
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
			"id":xx,
            "productSku": "SC2HM331DGT",
            "productSpu": "SC2HM331",
            "nwSku": "LJ1331DSZS",
            "nwMainSku": "LJ1331",
            "type": 2,
            "categoryId": 319630011,
            "productName": "0365套装#聚拢无钢圈防下垂收副乳前扣文胸套装 豆沙紫S",
            "ascription": 2,
            "ascriptionTenantId": "",
            "distributionType": true,
            "purchasePrice": "16.0000",
            "productCost": "15.5752",
            "netWeight": 90.0,
            "packWeight": 100.0,
            "volumeWeight": 10.0,
            "sizeLong": "4.0000",
            "sizeWidth": "4.0000",
            "sizeHeight": "4.0000",
            "sizeLongPack": "18.0000",
            "sizeWidthPack": "10.0000",
            "sizeHeightPack": "8.0000",
            "logisticsAttr": [
                "普货"
            ],
            "supplierId": 61851,
            "attributes": {
                "季节": "普通",
                "滞销类型": "采购失误"
            },
            "developLeadUserId": 122,
            "isJingpuJieguan": 2,
            "productCreateTime": "2020-08-05 15:49:03",
            "productUpdateTime": "2021-06-09 11:49:54",
            "productKingdeeInnerId": "5193676",
            "pmsCategory": {
                "id": 319630011,
                "name": "内衣套装",
                "parentId": 2491298011
            }
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281631001981757100323676",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |pms_sku 编码|
|productSpu |String |pms_spu 编码|
|nwSku |String | nw_sku 编码|
|nwMainSku |String   | nw_主 sku 编码|
|type |int |sku类型  (1:SPU 2:SKU 3:组合SKU) |
|categoryId |Long | sku类目id |
|productName |String   |中文名称|
|ascription |Integer |SKU归属 (1公司/租户共享、2平台共享,3-部门独享)|
|ascriptionTenantId |String | 归属租户id (SKU归属租户id，多个使用逗号隔开)|
|distributionType |Boolean   |是否分销SKU (true 是)|
|purchasePrice |Double |采购价 |
|productCost |Double | 成本价 |
|netWeight |Double   |净重量|
|packWeight |Double |打包重 |
|volumeWeight |Double | 体积重 |
|sizeLong |BigDecimal |尺寸长度 |
|sizeWidth |BigDecimal | 尺寸宽度 |
|sizeHeight |BigDecimal   |尺寸高度|
|sizeLongPack |BigDecimal |打包尺寸长度 |
|sizeWidthPack |BigDecimal | 打包尺寸宽度 |
|sizeHeightPack |BigDecimal   |打包尺寸高度|
|logisticsAttr |List&lt;String> |物流分类 |
|developLeadUserId |Long   |开发人员|
|isJingpuJieguan |Integer |是否接管 （1是，2否）|
|productCreateTime |Date | SKU添加时间 |
|productUpdateTime |Date   |SKU更新时间|
|productKingdeeInnerId |String |供应商金蝶ID |
|attributes |Map | SKU属性集 |
|-季节 |String | 季节 |
|-滞销类型 |String | 滞销类型 |
|pmsCategory |FinancePmsCategoryDto | SKU类目(分类)信息 |
|-id |Long | 类目ID |
|-name |String | 类目名称 |
|-parentId |Long | 上级类目ID |
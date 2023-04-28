# 根据时间或指定sku批量获取sku信息

> 作者：pengyutian

**简要描述：** 

- 根据时间或指定sku批量获取sku信息

**请求URL：** 
http://test-service.zehui.local/api/cpms/transferWarehouse/getSku 测试
- ` /transferWarehouse/getSku
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "productSpu":"",
    "productSku":"",
    "nwSku":"",
    "type":null,
    "leftUpDate":"2021-07-30 19:50:35",
    "frontMaxId":1387795063204544515,
    "frontMaxDate":"2021-07-30 19:50:35",
    "rightUpDate":"2021-07-30 19:50:36",
    "skuStatus":null,
    "size":500
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSpu |String   |产品系统spu编码|否|
|productSku |String   |产品系统SKU编码|否|
|nwSku |String   |对应的牛蛙sku编码|否|
|type |int   |产品类型（1.SPU、 2.SKU、 3.组合SKU）|否 默认2|
|skuStatus |int   |sku状态（0.审核中、1.审核失败、2.有效3.无效4.无效待审核）|否|
|leftUpDate|Date|时间左区间|否
|rightUpDate|Date|时间右区间|否
|frontMaxId|String|上一次拉取最大id（首次不传，后续需要传 无校验）|否
|frontMaxDate|Date|上一次拉取最大修改时间（首次不传，后续需要传 无校验）|否
|size|String|分页大小（默认500，最大500）|否

 **返回示例**
``` 
{
    "code": 0,
    "data": {
        "records": [
            {
                "id": "1387795063452008451",
                "updateTime": "2021-07-29 19:50:35",
                "productSpu": "S815E207",
                "productSku": "S815E207710",
                "nwSku": "EN8207EXL",
                "productName": "女童夏季唯美浪漫全棉碎花图案韩版连衣裙公主裙2020新款苹果款11码",
                "productNameEn": "Girls Summer Beautiful Romantic Cotton Floral Pattern Korean Dress Princess Skirt 2020 New Pineapple Models",
                "netWeight": 94.0,
                "packWeight": 104.0,
                "sizeLongPack": "23.0000",
                "sizeWidthPack": "13.0000",
                "sizeHeightPack": "2.0000",
				"productCost":"0.0123",
                "status": 3,
                "productIsCe": 2,
                "remark": "",
                "seasonAttr": "夏季",
                "bigGoodsAttr": null,
                "pmsSkuLogisticsAttr": ["普货","xxx"],
                "pmsCategoryBullfrogRel": null，
				"packageDescription": "Package Including：1 x women Blazer",
                "qcType": "全检",
                "pdPackageType": "OPP袋",
				"platformFbaSkuVos": [
                    {
                        "productSku": "SVVMJ021Wx3",
                        "nwSku": "LI046US",
                        "platformSku": "SC0004",
                        "fnSku": "xxx",
                        "platformCode": "AM",
                        "account": "Silvercell US",
						"goodsId":12
                    }
                ]
            }
        ],
        "total": 1,
        "size": 500,
        "current": 1,
        "searchCount": true,
        "pages": 1
    },
    "msg": "执行成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|total |int   |总条数|
|size |int   |分页大小|
|current |int   |页码|
|pages |int   |总多少页|
|records |Array   |数据集合|
|-- id |long   |id|
|-- updateTime |Date   |产品系统更新时间|
|-- productSpu |String   |产品系统SPU|
|-- productSku |String   |产品系统SK+U|
|-- nwSku |String   |牛蛙SKU|
|-- productName |int   |SKU名称|
|-- productNameEn |int   |SKU英文名称|
|-- netWeight |Double   |产品净重|
|-- packWeight |Double   |包装后重量|
|-- sizeLongPack |Double   |包装后长|
|-- sizeWidthPack |Double   |包装后宽|
|-- sizeHeightPack |Double   |包装后高|
|-- status |int   |SKU状态|
|-- productIsCe |int   |是否欧代（1 普通sku 2 FBAsku ）|
|-- remark |String   |备注|
|-- pmsSkuLogisticsAttr |List&lt;String>   |物流属性|
|-- seasonAttr |String   |季节属性 |
|-- bigGoodsAttr |String   |大货属性 |
|-- packageDescription |String   |包裹描述 |
|-- qcType |String   |质检标准 |
|-- productCost |BigDecimal   |产品成本 |
|-- pdPackageType |String   |包装类型 |
|-- pmsCategoryBullfrogRel |String   |产品分类 (暂定)|
|-- platformFbaSkuVos |Array   |fnSKU集合|
|-- -- productSku |Date   |PMS_sku|
|-- -- nwSku |String   |牛蛙SKU|
|-- -- platformSku |String   |平台SKU|
|-- -- fnSku |String   |fnSku|
|-- -- platformCode |String   |平台|
|-- -- account |String   |账号|
|-- -- goodsId |Long   |货品id|
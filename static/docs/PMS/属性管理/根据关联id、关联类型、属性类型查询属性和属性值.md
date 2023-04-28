# 根据关联id、关联类型、属性类型查询属性和属性值

> 作者：pengyutian

**简要描述：** 

- 根据关联id、关联类型、属性类型查询属性和属性值

**请求URL：** 
- `/attrRelation/getAttrByRelationIdOrType?type=0&relationId=1387754972946186242`
(数据在test可测试)
  
**请求方式：**
- Post 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|relationId |是  |number |关联id   |	
|type |否  |number |属性类型 0类目 1spu 2sku 3组合sku（这个字段保留，暂时无作用）   |
|attTypes |否  |Array[number] |属性类型1基础属性,2物流属性,3仓储库存属性,4销售属性,5侵权属性,6规格属性,7价格属性,8扩展属性,9类目属性 （不填查全部）   |


 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "attrId": "1324289987517804546",
            "attrName": "季节",
            "attrNameEn": null,
            "configType": 2,
            "showType": 1,
            "attrType": null,
            "valueItemList": [
                {
                  ...
                }
            ]
        },
		...
        {
            "attrId": "1387754225911283714",
            "attrName": "颜色",
            "attrNameEn": null,
            "configType": 2,
            "showType": 1,
            "attrType": null,
            "valueItemList": [
                {
                    "cutName": "[]",
                    "defaultValue": null
                }
            ]
			"defaultValueItemList":[{"黄色"}]
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af40262162461635039214581",
        "zhkj-req-id": "20210625181226137_q5ui"
    }
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|attrName |String   |属性名称 |
|attrNameEn |String   |属性英文名称 |
|configType |number   |配置类型 标准(1),配置(2) |
|showType |number   |展示类型 单字段属性(1),多字段属性(2) |
|attrType |number   |属性类型 基础属性(1),物流属性(2),仓储库存属性(3),销售属性(4),侵权属性(5) |
|defaultValueItemList|String| 默认取值属性值
|valueItemList[0].cutName |String   |取值名称 |
|valueItemList[0].defaultValue |String   |默认取值 |


 **备注** 

- 更多返回错误代码请看首页的错误代码描述
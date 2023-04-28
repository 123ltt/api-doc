# 根据关联ID查询属性和属性值

> 作者：yun527292121@163.com

**简要描述：** 

- 根据类目id查询属性

**请求URL：** 
- `/blade-product/attrRelation/getAttrByRelationId?relationId=9`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|relationId |是  |number |关联id   |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "attrId": "1303527768138571778",
            "attrName": "颜色",
            "attrNameEn": "",
			"attrType": 0,
			"configType": 2,
			"showType": 0,
            "valueItemList": [
                {
                    "cutName": "红色,黄色",
					"defaultValue": "红色"
                }
            ]
        }
    ],
    "msg": "操作成功"
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
|valueItemList[0].cutName |String   |取值名称 |
|valueItemList[0].defaultValue |String   |默认取值 |


 **备注** 

- 更多返回错误代码请看首页的错误代码描述
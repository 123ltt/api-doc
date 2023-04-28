# 简称字典list接口

> 作者：1254837494@qq.com

简要描述

   简称字典list接口

请求URL

 {网关地址}/base/shipmentMark/getDictList

请求方式

    GET




## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [  
        {
            "id": "1343819583659827202",
            "tenantId": null,
            "parentId": "1343759063511830529",
            "code": "common_shipment_mark_name",
            "dictKey": "无忧购",
            "dictValue": "无忧购",
            "sort": 1,
            "remark": null,
            "isSealed": null,
            "isDeleted": null,
            "children": [
                {
                    "id": "1343819583676604417",
                    "tenantId": null,
                    "parentId": "1343819583659827202",
                    "code": "common_shipment_mark_name",
                    "dictKey": "huitongkuaidi",
                    "dictValue": "百世汇通快递",
                    "sort": 1,
                    "remark": null,
                    "isSealed": null,
                    "isDeleted": null,
                    "parentName": null,
                    "hasChildren": false
                }
            ],
            "parentName": null,
            "hasChildren": false
        },
		{
            "id": "1343819583659827202",
            "tenantId": null,
            "parentId": "1343759063511830529",
            "code": "common_shipment_mark_name",
            "dictKey": "无忧购",
            "dictValue": "无忧购",
            "sort": 1,
            "remark": null,
            "isSealed": null,
            "isDeleted": null,
            "children": [
                {
                    "id": "1343819583676604417",
                    "tenantId": null,
                    "parentId": "1343819583659827202",
                    "code": "common_shipment_mark_name",
                    "dictKey": "huitongkuaidi",
                    "dictValue": "百世汇通快递",
                    "sort": 1,
                    "remark": null,
                    "isSealed": null,
                    "isDeleted": null,
                    "parentName": null,
                    "hasChildren": false
                }
            ],
            "parentName": null,
            "hasChildren": false
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|dictKey | 是 |String   |值（平台编码或简称值）
|dictValue | 是 |String   |名称（平台名称或简称名称）
|children | 是 |String   |子集(平台简称list)
# 根据类目id查询属性

> 作者：lixizhou

**作者：** 李锡洲

**简要描述：** 

- 根据类目id查询属性

**请求URL：** 
- `192.168.50.196/api/blade-product/attrRelation/getByRelationId?type=1&relationId=9`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|type |是  |number |关联类型 0类目 1spu 2sku 3组合sku   |
|relationId |是  |number |关联id   |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "type": 2,
            "relationId": "1314511182165458945",
            "attrId": 11,
            "attrName": null,
            "attrType": null
        },
        {
            "type": 2,
            "relationId": "1314511182165458945",
            "attrId": 12,
            "attrName": null,
            "attrType": null
        },
        {
            "type": 2,
            "relationId": "1314511182165458945",
            "attrId": 10,
            "attrName": null,
            "attrType": null
        }
    ],
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|type |number |关联类型 0类目 1spu 2sku 3组合sku   |
|relationId   |number |关联id   |
|attrId |number   |属性id |
|source|int|属性来源 0-未知,1-继承SPU，2-继承类目，3-手动关联，4-继承SKU
|attrName|string|属性名称|
|attrType |int   |属性类型 |

 **备注** 

- 更多返回错误代码请看首页的错误代码描述
# 简称字典list接口-新

> 作者：1254837494@qq.com

简要描述

   简称字典list接口-新

请求URL

 {网关地址}/base/shipmentMark/getDictListNew

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
            "parentId": "1343759063511830529",
            "name": "无忧购",
            "fullName": "无忧购",
            "children": [
                {
                    "id": "1343819583676604417",
                    "parentId": "1343819583659827202",
                    "name": "huitongkuaidi",
                    "fullName": "百世汇通快递",
                    "hasChildren": false
                }
            ],
            "parentName": null,
            "hasChildren": false
        },
		{
            "id": "1343819583659827202",
            "parentId": "1343759063511830529",
            "name": "无忧购",
            "fullName": "无忧购",
            "children": [
                {
                    "id": "1343819583676604417",
                    "parentId": "1343819583659827202",
                    "name": "huitongkuaidi",
                    "fullName": "百世汇通快递",
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
|name | 是 |String   |值（平台编码或简称）原dictKey
|fullName | 是 |String   |名称（平台名称或简称全称）原dictValue
|children | 是 |String   |子集(平台简称list)
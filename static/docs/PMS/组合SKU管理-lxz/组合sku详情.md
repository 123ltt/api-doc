# 组合sku详情

> 作者：yun527292121@163.com

**作者：** 李锡洲

**简要描述：** 

- 组合sku详情

**请求URL：** 
- `192.168.50.196/api/blade-product/sku/detailCombineSku?id=1304244258248626178`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |number |主键id   |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1304244258248626178",
        "createUser": -1,
        "createDept": -1,
        "createTime": "",
        "updateUser": -1,
        "updateTime": "",
        "status": 1,
        "isDeleted": -1,
        "productSpu": "",
        "productSku": "",
        "combineSku": "6569c7de7db046e98445582bb00de1f4",
        "categoryId": -1,
        "productStatus": -1,
        "supplierSku": "",
        "productName": "",
        "productNameEn": "",
        "nwSku": "",
        "isSampling": false,
        "groupId": -1,
        "ascription": false,
        "type": -1,
        "model": "",
        "referenceUrl": "",
        "brandName": "",
        "description": "",
        "feature": "",
        "sourceType": -1,
        "remark": "",
        "sampleSku": "",
        "keywords": "",
        "isRefundDuty": false,
        "isRestrictPublish": false,
        "subjectLink": -1,
        "tenantId": -1,
        "productNameSpu": "",
        "attrValueList": [],
        "combineSkuDetails": [
            {
                "id": "1304253354939027457",
                "createUser": -1,
                "createDept": -1,
                "createTime": "2020-09-11 11:00:06",
                "updateUser": -1,
                "updateTime": "2020-09-11 11:00:06",
                "status": 1,
                "isDeleted": 0,
                "combineSku": "6569c7de7db046e98445582bb00de1f4",
                "sku": "41564156415",
                "count": 8,
                "detail": ""
            },
            {
                "id": "1304253354955804674",
                "createUser": -1,
                "createDept": -1,
                "createTime": "2020-09-11 11:00:06",
                "updateUser": -1,
                "updateTime": "2020-09-11 11:00:06",
                "status": 1,
                "isDeleted": 0,
                "combineSku": "6569c7de7db046e98445582bb00de1f4",
                "sku": "45615641578",
                "count": 9,
                "detail": ""
            }
        ],
        "combineSkuDetail": ""
    },
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|id |number|主键id
|combineSku|string|组合sku编码
|status |number|状态
|
|combineSkuDetails|数组|组合sku详情
|sku |string|sku编码
|count |number|数量


 **备注** 

- 更多返回错误代码请看首页的错误代码描述
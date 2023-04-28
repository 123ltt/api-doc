# 组合sku列表

> 作者：lixizhou

**作者：** 李锡洲

**简要描述：** 

- 组合sku列表

**请求URL：** 
- `192.168.50.196/api/blade-product/sku/pageCombineSku?current=1&size=20`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current |是  |number |当前页码   |
|size |是  |number |每页显示数量   |
|createUser|否|number|开发人
|productSku|否|string|组合sku编码
|status|否|number|状态
 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1320922691932987394",
                "productSku": "ZOSJ6AAH",
                "productName": null,
                "combineSkuDetail": "OS9G0KH02*1111",
                "status": 0,
                "createTime": "2020-10-27 10:58:06"
            },
            {
                "id": "1320922536332697601",
                "productSku": "ZOSJ69B9",
                "productName": null,
                "combineSkuDetail": "OS9G0KH02*12",
                "status": 0,
                "createTime": "2020-10-27 10:57:29"
            },
            {
                "id": "1320922254500634625",
                "productSku": "ZOSJ68C1",
                "productName": null,
                "combineSkuDetail": "OS9G0KH02*1",
                "status": 0,
                "createTime": "2020-10-27 10:56:22"
            }
        ],
        "total": 15,
        "size": 3,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 5
    },
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|id |number   |主键id |
|productSku |string   |组合sku编码 |
|productName|string|组合sku名称|
|combineSkuDetail |string   |sku组合详情 |
|status |number   |状态 |
|createTime |number   |录入时间 |

 **备注** 

- 更多返回错误代码请看首页的错误代码描述
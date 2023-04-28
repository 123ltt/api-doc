# 新增或修改组合SKU

> 作者：yun527292121@163.com

**作者：** 李锡洲

    
**简要描述：** 

- 新增或修改组合SKU

**请求URL：** 
- `192.168.50.196/api/blade-product/sku/saveCombineSku`
  
**请求方式：**
- POST 

**请求示例（JSON）**

``` 
新增组合SKU
{
    "combineSkuDetails": [
        {
            "sku": "41564156415",
            "count": 6
        },
        {
            "sku": "45615641578",
            "count": 4
        }
    ]
}

修改组合SKU
{
	"id":1304244258248626178,
	"productSku":"6569c7de7db046e98445582bb00de1f4",
    "combineSkuDetails": [
        {
            "sku": "41564156415",
            "count": 8
        },
        {
            "sku": "45615641578",
            "count": 9
        }
    ]
}
```

**请求参数说明：** 

|参数名|类型|必选|说明|
|:----    |:---|:----- |-----   |
|id |number|否|主键id（修改组合sku必传）
|productSku|string|否|组合sku编码（修改组合sku必传）
|sku |string|是|sku编码
|count |number|是|数量

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": {},
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
 **备注**
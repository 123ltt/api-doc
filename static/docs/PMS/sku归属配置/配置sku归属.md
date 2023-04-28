# 配置sku归属

> 作者：lixizhou

**作者：** 李锡洲

    
**简要描述：** 

- 配置sku归属

**请求URL：** 
- `/skuAscriptionConfig/save`
  
**请求方式：**
- POST 

**请求示例（JSON）**

``` 
{
	"productSpus":["123", "456"],
    "orgIds": [1111, 2222]
}
```

**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productSpus |是|数组|spu编码
|orgIds|是|数组|sku归属的组织id

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": null
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
 **备注**
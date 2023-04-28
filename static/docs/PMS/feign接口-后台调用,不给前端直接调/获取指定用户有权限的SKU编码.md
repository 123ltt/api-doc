# 获取指定用户有权限的SKU编码

> 作者：pengyutian

**简要描述：** 


获取指定用户有权限的SKU编码

指定用户id,获取指定的用户的权限，再获取对应的SKU





**请求URL：** 
- ` /common/getProductSkuByJurisdictionUserId

- com.zhkj.cpms.feign.CommonClient
- com.zhkj.pms.feign.CommonClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": 6615
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|data |Long   |用户id|是|




 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        "SBEMN7661M2"
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428164517139976610035008"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|data |List&lt;String>   |pms_sku编码|
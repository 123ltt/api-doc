# 根据类目id获取SKU编码

> 作者：pengyutian

**简要描述：** 

根据类目id获取SKU编码

过滤同查看符合刊登接口的条件（刊登-搜索可刊登的产品）
1.过滤删除
2.SKU状态为有效（已经不判断了）
3.限制刊登为否
4.亚马逊平台不过滤fba，其他的平台过滤
5.是否可售为是
6.来自租户  过滤租户（pms过滤租户  cpms不过滤）
7.不侵权
8.不限价
9.返回spu 和 组合SKU编码 

**请求URL：** 
- ` /sku/getSkuCodeByCategoryId
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data":{
        "categoryId":["319630011"],
		"platformCode":"AM"
    }
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|categoryId |Long   |类目id|是|
|platformCode |String   |平台code|否|
|account|String|账号|否
|siteCode|String|站点编码|否

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSpu": "QTVWY374",
            "type": 1,
        }
		        {
            "productSpu": "xxxx",
            "type": 2,
        }
		
		....
		]
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSpu |String   |SPU编码 或组合sku编码|
|type |int   |SPU类型（1SPU 3组合SKU ）|
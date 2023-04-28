# 根据SKU查询三级类目(牛蛙类目)

> 作者：pengyutian

**简要描述：** 

- 根据SKU查询三级类目(牛蛙类目)

**请求URL：** 
- ` /common/getTertiaryCategorieByPmsSku
  
- com.zhkj.pms.feign.CommonClient

- com.zhkj.cpms.feign.CommonClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data":{
		"productSkus":["SKU编码1","SKU编码2"]
	}
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSkus |String[] |PMS-SKU编码|是|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "SKU编码1",
            "primaryCategory": "",
            "secondaryCategory": "",
            "tertiaryCategory": "",
            "primaryCategoryId": 1,
            "secondaryCategoryId": 2,
            "tertiaryCategoryId": 3
        },
        {
            "productSku": "SKU编码2",
            "primaryCategory": "一级类目",
            "secondaryCategory": "一级类目",
            "tertiaryCategory": "一级类目",
            "primaryCategoryId": 1,
            "secondaryCategoryId": 2,
            "tertiaryCategoryId": 3
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281638000534109100314180",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 


|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|primaryCategory |decimal |一级类目 |
|secondaryCategory |String | 二级类目 |
|tertiaryCategory |String | 三级类目 |
|primaryCategoryId |Long | 一级类目id |
|secondaryCategoryId |Long | 二级类目id |
|tertiaryCategoryId |Long | 三级类目id |
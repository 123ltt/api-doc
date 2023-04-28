# 分页查询PMS类目 并携带映射的牛蛙类目

> 作者：pengyutian

**简要描述：** 

- 分页查询PMS类目 并携带映射的牛蛙类目 
- 查PMS类目表  若有映射牛蛙类目则携带牛蛙类目id和name
- 负责人：彭雨田
- 位置：

**请求URL：** 
- ` /finance/getPmsCategoryORNwCategory     

- 正式：https://service.izehui.com/api/cpms
- 测试：http://test-service.zehui.local/api/cpms
- dev: http://dev-service.zehui.local/api/cpms
  
**请求方式：**
- POST 

**请求示例：** 
```
{
  "current":1,
  "size":10
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|current |Long |分页页码（默认1）|否  |
|size |Long |分页条数（默认500，超过500默认500）|否  |
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                 "pmsCategoryId": 172426,
                "pmsCategoryName": "清洁工具",
                "parentCategoryId": 172435,
                "pmsCategoryEn": "Cleaning Equipment",
                "nwCategoryId": 1769,
                "nwCategoryName": "屏幕保护"
            }
			...
			        ],
        "total": 31264,
        "size": 500,
        "current": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428163480259247110101952",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|pmsCategoryId |Long   |PMS类目id|
|pmsCategoryName |String |PMS类目中文名|
|parentCategoryId |Long | PMS类目上级类目id|
|pmsCategoryEn |String   | PMS类目英文名|
|nwCategoryId |Long |牛蛙类目id |
|nwCategoryName |String | 牛蛙类目中文名 |
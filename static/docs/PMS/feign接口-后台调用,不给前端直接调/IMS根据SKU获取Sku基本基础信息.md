# IMS根据SKU获取Sku基本基础信息

> 作者：pengyutian

**简要描述：** 


IMS根据SKU获取Sku基本基础信息





**请求URL：** 
```
 ` /ims/sku/imsGetSkuSpecifParametersInfo

 com.zhkj.pms.feign.ImsClient
 com.zhkj.cpms.feign.ImsClient

```


  
**请求方式：**
- POST 

**请求示例：** 
```

 {
    "data":{
        "productSkus":["SQHMB05612C"],
		"returnType":1
    }
}


```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSkus |String[]   |PMS_SKU集合|是|
|returnType |int   |返回类型|是 com.zhkj.pms.enums.ImsReturnTypeEnum|




 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "oneVOList": null,
        "twoVOList": [
            {
                "productSku": "SQHMB05612C",
                "productSpu": "SQHMB056",
                "category": 11846801,
                "developLeadUserId": 0,
                "categoryApiVOS": [
                    {
                        "id": 11846801,
                        "parentId": 0,
                        "name": "视频游戏",
                        "nameEn": "Video Games",
                        "level": 1,
                        "categoryPathId": "11846801",
                        "categoryPath": "视频游戏",
                        "isLeaf": 0
                    }
                ],
                "skuLogisticsVO": {
                    "productSku": "SQHMB05612C",
                    "packWeight": 12.0 
                },
                "seasonAttr": "普通",
                "discount": "0.3"
            }
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428164744850974110063584"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|oneVOList |Obj   |returnType = 1返回 |
|-productSku |String   |pms_sku编码|
|-ductCreateTime |date   |开发时间 |
|-category |Long   |类目id |
|-categoryVOS |List&lt;obj>   |多级类目 |
|--parentId |long  |上级id |
|--id |long  |ID |
|--name |String  |类目名字 |
|--level |int  |类目等级 |
|twoVOList |Obj   |returnType = 2返回 |
|-productSku |String   |pms_sku编码|
|-productSpu |String   |pms_spu编码 |
|-developLeadUserId |Long   |开发人员ID |
|-developLeadUserName |String   |开发人员NAME |
|-ductCreateTime |date   |开发时间 |
|-skuLogisticsVO |Obj   |物流信息 |
|--packWeight |Double  |打包重量 |
|-seasonAttr |String   |季节属性 |
|-discount |BigDecimal   |折扣比例  折扣为0默认1 |
|-category |Long   |类目id |
|-categoryVOS |List&lt;obj>   |多级类目 |
|--parentId |long  |上级id |
|--id |long  |ID |
|--name |String  |类目名字 |
|--level |int  |类目等级 |
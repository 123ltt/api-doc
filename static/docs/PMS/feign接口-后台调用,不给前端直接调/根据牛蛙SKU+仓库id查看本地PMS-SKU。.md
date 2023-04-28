# 根据牛蛙SKU+仓库id查看本地PMS-SKU。

> 作者：pengyutian

**简要描述：** 

根据牛蛙SKU+仓库id查看本地PMS-SKU。

步骤：
1.根据nw_sku查询pms_sku
2.分情况
	1根据nw_sku查询sku，若存在且此sku且是非FBAsku，直接返回。
	2.未查到主动同步nw_sku。
	3.再次查询次nw_sku，查到此sku且是非FBAsku即返回。
	4.获取仓库对应的牛蛙SKU前缀，去掉前缀查nw_Sku,查到此sku且是非FBAsku即返回。
	5.主动同步去前缀的nw_sku。
	6.再次查看去前缀的nw_sku,查到此sku且是非FBAsku即返回。




**请求URL：** 
- ` /common/getLocalPmsSkuByNwSku

- com.zhkj.cpms.feign.CommonClient
- com.zhkj.pms.feign.CommonClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
  "data":[
      {
          "nwSku":"B07TF78ZPK",
		  "warehouseId":123
      }
  ]
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|nwSku |String   |牛蛙SKU|是|
|warehouseId |Long   |仓库id|是|



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "RA2CC353MY8",
            "nwSku": "HX0353A",
            "warehouseId": 23,
			"inputNwSkuIsLocalSku":true,
			"inputNwSku": "HX0353A",
			"isSuccess":true,
			"msg":null
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281637288565779100712140",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |本地sku编码|
|nwSku |String   |本地nw_sku|
|warehouseId |Long   |仓库id|
|inputNwSkuIsLocalSku |Boolean   |是否本地SKU（true/是）|
|inputNwSku |String   |入参nw_sku|
|isSuccess |Boolean   |解析是否成功|
|msg |原因   |错误原因|
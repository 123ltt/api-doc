# 获取sku平台限价

> 作者：pengyutian

**简要描述：** 

- SKU—platformCode-site-warehouseType为维度存储 保证唯一
- 获取sku平台限价
- SKU必填（支持批量） platformCode 必填 site 选填
- 过滤禁用
- 查询指定的SKU—platformCode-site 的限价
- 若requestSource为空  仓库类型必填  返回条件为SKU platformCode site  warehouseType的限价 （oms）
- 若requestSource不为空  不根据仓库类型查询 在查询到条件为SKU platformCode site的限价后 对SKU platformCode site分组取限价的最小值 保证返回对象中SKU platformCode site维度下唯一且限价为最小（lms）
- 

**请求URL：** 
- ` /api/sku/getPlatformLimitedPrice`

- 请求来源 使用value ：com.zhkj.pms.enums.RequestSourceEnum
  
**请求方式：**
- GET 

**请求示例：**
```
{
    "platformCode": "WM",
    "productSku": [
        "SS2YA368ZPJ"
    ],
    "sites":["TH"],
	"warehouseType":0,
	"requestSource":"lms"
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSku |String[]   |SKU编码|是|
|warehouseType |int  |仓库类型（0为实体仓，1为虚拟仓|请求来源为空必填|
|platformCode |String   |平台code|否|
|site |String[]  |站点|否|
|requestSource |String  |请求来源 （RequestSourceEnum使用value /lms ）|否 |



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "platformCode": "WM",
            "productSku": "SS2YA368ZPJ",
            "lowestSellingPrice": 6.99,
            "currency": "USD",
            "site": "TH",
            "skuStockStatus": "0",
            "fixedPriceType": 1，
			 "warehouseType": 0
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281633589636242202813600",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|platformCode |String   |平台code|
|productSku |String[]   |SKU编码|
|site |String   |站点|
|skuStockStatus |库存状态   |字典值（ ims_product_status ）|
|fixedPriceType |限价类型   |限价类型（2.供应商限价/1.公司限价(老数据为1) ）|
|warehouseType |仓库类型   |（0为实体仓，1为虚拟仓 |

 **备注**
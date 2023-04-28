# 获取sku库存信息

> 作者：lixizhou

**作者：** 李锡洲

    
**简要描述：** 

- 获取sku库存信息

**请求URL：** 
- `stock/getBySkuAndPackageCode`
  
**请求方式：**
- POST 

**请求示例（JSON）**

``` 
{
	"productSku":"S0K9M3C02",
	"omOrderId":"SM2102200917000031"
}
```

**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productSku|是|string|sku编码
|omOrderId |是|string |订单号 |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "warehouseName": "清溪Z仓",
            "availableStock": 0
        },
        {
            "warehouseName": "美国FBA仓库",
            "availableStock": 15
        }
    ],
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|warehouseName | string  |仓库名称 |
|availableStock | string  |可用库存数量|
 **备注**
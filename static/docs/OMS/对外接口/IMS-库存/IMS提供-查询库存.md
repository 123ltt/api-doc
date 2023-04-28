# IMS提供-查询库存

> 作者：yun527292121@163.com

## 简要描述
- feign接口
- 货权-公司id
- 货主-公司下的L1级事业部id
- OMS先去sams获取店铺的货主或货权，拿到货主或货权后，再调IMS接口拿库存

## 请求URL
- ``

## 请求方式
- POST 

## 请求示例 

``` 
{
	"companyId":"公司id",
	"level1DeptId":"L1级事业部id",
	"warehouseCode":["不传查所有仓库"],
	"lstPmsSku":["A301","A302"]
}
```

## 请求参数 data

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|  companyId |Y |String |货权-公司id |
|  level1DeptId |Y |String |货主-公司下的L1级事业部id   |
|  warehouseCode |N |String[] |仓库编码，不传查所有仓库   |
|  lstPmsSku |Y |String[] |PMS sku编码   |

## 返回示例 

``` 
{
    "code": 200,
    "data": [
        {
            "pmsSku": "A301",
            "stock": 100,
            "warehouseCode": "SZ"
        }
    ]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|:-----|-----|
|pmsSku |String   |SKU |
|stock |Integer   |可用库存 |
|warehouseCode |String   |仓库编码 |

## 备注
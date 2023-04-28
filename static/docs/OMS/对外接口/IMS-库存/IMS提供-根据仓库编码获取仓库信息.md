# IMS提供-根据仓库编码获取仓库信息

> 作者：yun527292121@163.com

## 简要描述

- feign接口

## 请求URL
- ``
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": ["warehouseCode1","warehouseCode2"]
}
```

## 请求参数 data

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |


## 返回示例 

``` 
{
    "code": 200,
    "data": [
        {
            "warehouseCode": "新仓库编码",
            "warehouseCodeNw": "牛蛙仓库编码",
            "warehouseCodeThird": "第三方仓库编码，例如:谷仓的仓库编码",
            "warehouseName": "仓库名称",
            "warehouseFullName": "/深圳仓库/清溪",
            "warehouseType": "仓库类型",
            "countryCode": "国家编码",
			"ifVirutal":1
        }
    ]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|:-----|-----|
|warehouseCode |String   |新仓库编码（牛蛙仓库编码、第三方仓库编码） |
|warehouseCodeNw |String   |牛蛙仓库编码(会和新仓库编码一样) |
|warehouseCodeThird |String   |第三方仓库编码，例如:谷仓的仓库编码（会和新仓库编码一样） |
|warehouseName |String   |仓库名称 |
|warehouseFullName |String   |仓库全路径名称，例如：/深圳仓库/清溪 |
|warehouseType |String   |仓库类型编码：平台、第三方、自建 |
|countryCode |String   |国家编码 |
|ifVirutal |String   |是否虚拟仓库,1-Y,0-N |

## 备注
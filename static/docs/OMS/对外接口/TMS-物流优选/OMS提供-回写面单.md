# OMS提供-回写面单

> 作者：18679129326@163.com

## 简要描述

- 回写面单追踪码到OMS

## 请求URL
- `http://test-oms-service.zehui.local/feign/tms/sendSheet2Oms`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": [
        {
			"logisticsNo": "物流跟踪号",
            "pkgCode": "OMS包裹号A",
			"sheetUrl":"面单url"
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pkgCode |是  |String |OMS包裹号   |
|logisticsNo |是  |String |物流跟踪号   |

## 返回示例 

``` 
  {
    "code": 200,
    "data": null,
    "msg": "操作成功",
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|code |int   |全部成功时为200 |

## 备注
# WMS提供-审核退件包裹

> 作者：hnuhwk@163.com

## 简要描述

- 审核通过，wms继续发货
- 审核不通过，wms做撤单操作

## 请求URL
- `http://wms-service.zehui.local/auditReturnPkg`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": [
        {
            "pkgCode": "OMS包裹号A",
            "ifPass": "1-通过，0-不通过",
            "remark": "审核备注？",
        },
        {
            "pkgCode": "OMS包裹号B",
            "ifPass": "1-通过，0-不通过",
            "remark": "审核备注？",
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pkgCode |是  |String |OMS包裹号 |
|ifPass |是  |Int |1-通过,wms继续发，0-不通过，wms会撤单 |
|remark |是  |String |审核备注 |

## 返回示例 

``` 

{
    "code": 200,
    "data": 
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|:-----|-----|
|code |int   |全部成功时为200 |

## 备注
# OMS提供-回写包裹撤销结果

> 作者：yun527292121@163.com

## 简要描述

- 回写包裹撤销结果到OMS

## 请求URL
- `http://test-oms-service.zehui.local/feign/tms/sendPkgCancelRslt`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": [
        {
            "pkgCode": "OMS包裹号A",
			"cancelRslt":1,
			"cancelMsg":"描述",
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pkgCode |是  |String |OMS包裹号   |
|cancelRslt |是  |Integer |撤销结果:1-成功，2-不允许撤销  |
|cancelMsg |否  |String |撤销结果描述 |

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
# OMS提供-回写预报失败

> 作者：yun527292121@163.com

## 简要描述

- 预报失败时调用，通知OMS获取面单追踪码失败

## 请求URL
- `http://test-oms-service.zehui.local/feign/tms/sendTrackingCodeFailed2Oms`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": [
        {
            "pkgCode": "OMS包裹号A",
			"failedType":"失败类型",
			"failedMsg":"失败原因描述"
        }
    ]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pkgCode |是  |String |OMS包裹号   |
|failedType |是  |String |失败类型   |
|failedMsg |是  |String |失败原因描述   |

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
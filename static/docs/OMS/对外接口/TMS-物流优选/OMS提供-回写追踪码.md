# OMS提供-回写追踪码

> 作者：18679129326@163.com

1.引入pom
&lt;dependency>
&lt;groupId>com.zhkj.oms&lt;/groupId>
&lt;artifactId>oms-api&lt;/artifactId>
&lt;version>1.0.0-SNAPSHOT&lt;/version>
&lt;/dependency>

2.对应的feign  ------TMSClient
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/68a25b2c888aaa19963c1d6f12c69332&showdoc=.jpg)
    
## 简要描述

- 回写面单追踪码到OMS

## 请求URL
- `http://test-oms-service.zehui.local/feign/tms/sendTrackingCode2Oms`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": [
        {
			"logisticsNo": "物流跟踪号",
            "pkgCode": "OMS包裹号A",
            "trackingCode1": "追踪码1",
            "trackingCode2": "追踪码2"
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
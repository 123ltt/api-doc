# OMS提供-回写退件单到OMS

> 作者：1017632646@qq.com

## 简要描述

- TMS调用，回写退件单到OMS

## feign
 
-  jar
        &lt;dependency>
            &lt;groupId>com.zhkj.oms&lt;/groupId>
            &lt;artifactId>oms-api&lt;/artifactId>
            &lt;version>1.0.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
-  method
		com.zhkj.oms.feign.TMSClient#sendReturnPkg2Oms
   


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|tenantId |是  |String |租户ID |
|pkgCode |是  |String |OMS包裹号   |
|returnType |是  |int |退件类型  1:国内退件 2:海外退件 |
|returnStatus |是  |int |退件状态  1:退件未入库 2:退件已入库  |
|returnTime |否  |Date |退件北京时间 |
|returnOrderNo |否  |String |wms退件单号 |
|returnRemark |否  |String |退件备注 |
|returnReason |否  |String |退件原因 |

## 返回成功示例 

``` 
  {
    "code": 200,
    "data": [],
    "msg": "操作成功",
}
```
## 返回失败示例 

``` 
  {
    "code": 200,
    "data": [
        {
          "tenantId":"",
          "pkgCode":"001A",
          "returnType":1,
          "returnStatus":2,
          "returnTime":"2021-11-11 00:00:00",
          "returnOrderNo":"1234",
          "returnRemark":"dsfs",
          "returnReason":"222",
          "errorMsg":"租户id不能为空！"
        },
        {
          "tenantId":"000000",
          "pkgCode":"",
          "returnType":1,
          "returnStatus":2,
          "returnTime":"2021-11-11 00:00:00",
          "returnOrderNo":"1234",
          "returnRemark":"dsfs",
          "returnReason":"222",
          "errorMsg":"包裹号不能为空！"
        }
    ],
    "msg": "操作成功",
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|errorMsg |String   |失败原因 |

## 备注
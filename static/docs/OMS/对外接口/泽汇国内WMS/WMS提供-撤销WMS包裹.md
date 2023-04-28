# WMS提供-撤销WMS包裹

> 作者：yun527292121@163.com

## 简要描述
- http://10.10.30.182:3000/project/333/interface/api/8944
- 撤销WMS包裹

## 请求URL
- `http://`
  
## 请求方式
- POST 

## 请求示例 

``` 
{
    "data": ["OMS包裹号A","OMS包裹号B"]
}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|data |是  |String[] |OMS包裹号，多个   |

## 返回示例 

``` 

{
    "code": 200,
    "data": [
        {
            "pkgCode": "OMS包裹号A",
            "cancelRslt": 1,
			"cancelRsltMsg":"撤销结果描述：成功或失败原因",
			"wmsStatus": "wms包裹状态"
        }
    ]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|:-----|-----|
|code |int   |成功时为200 |

## 备注
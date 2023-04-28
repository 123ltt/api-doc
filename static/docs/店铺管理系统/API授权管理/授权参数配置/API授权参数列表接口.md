# API授权参数列表接口

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/auth/pageParams `
  
## 请求方式
- POST 

## 参数示例

 ``` 
 {
  "platform": 1314104622689661000,
  "site": 1314109310377980000,
  "parameter": "ClientID"
} 

 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platform |是  |string |平台ID   |
|site |是  |string | 站点ID    |
|parameter     |否  |string | 参数名    |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "size": 20,
        "pages": 1,
        "total": 2,
        "records": [
            {
                "id": "1314498464233373698",
                "platformId": "1314104622689660929",
                "platformCode": "lazada2",
                "siteId": "1314109310377979906",
                "siteCode": "us34",
                "allSiteSupported": false,
                "fba": true,
                "parameter": "ClientID"
            },
            {
                "id": "1314498865527603202",
                "platformId": "1314104622689660929",
                "platformCode": "lazada2",
                "siteId": "1314109310377979906",
                "siteCode": "us34",
                "allSiteSupported": false,
                "fba": true,
                "parameter": "ClientID"
            }
        ]
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |参数ID  |
|platformId |int   |平台ID  |
|platformCode |int   |平台码  |
|siteId |int   |站点ID  |
|siteCode |int   |站点码  |
|allSiteSupported |int   |是否支持该 平台 下所有站点 |
|fba |int   |FBA  |
|parameter |int   |参数名  |
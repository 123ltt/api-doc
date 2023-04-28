# API授权参数添加接口

> 作者：luocheng

## 作者

- 李志远

## 请求URL
- ` /store/auth/addParams `
  
## 请求方式
- POST 

## 参数示例

 ``` 
{
    "platform": 1314104622689660929,
    "sites": [
        1314109310377979906,
        1314110884726820866
    ],
    "fba": true,
    "parameters": [
        "ClientID",
        "ClientSecret"
    ]
}

 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platform |是  |string |平台ID   |
|sites |是  |array | 站点ID数组    |
|parameters     |否  |array | 参数名数组    |
|fba     |否  |bool | 是否FBA    |

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": {},
    "msg": "API授权参数添加成功"
}
```
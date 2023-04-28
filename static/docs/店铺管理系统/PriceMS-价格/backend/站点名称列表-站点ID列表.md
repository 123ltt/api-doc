# 站点名称列表-站点ID列表

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 站点名称列表-站点ID列表

## 请求URL
- ` /client/site/listByIds`
  
## 请求方式
- GET 

## 参数
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "siteId": "1329698573782945793",
            "siteName": "US"
        },
        {
            "siteId": "1332621841808560130",
            "siteName": "UK"
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|              
|siteId | string   | 站点ID |
|siteName | string   | 站点名称 |
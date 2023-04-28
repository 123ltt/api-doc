# 查询所有的站点code

> 作者：luocheng

## 作者
马佳菲
    
## 简要描述

- 查询所有的站点code

## 请求URL
- ` /store/site/listAllSite `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "displayName": "SG",
            "hiddenValue": "SG"
        },
        {
            "displayName": "TH",
            "hiddenValue": "TH"
        },
        {
            "displayName": "UK",
            "hiddenValue": "UK"
        },
        {
            "displayName": "VN",
            "hiddenValue": "VN"
        },
        {
            "displayName": "US",
            "hiddenValue": "US"
        },
        {
            "displayName": "CA",
            "hiddenValue": "CA"
        }
    ],
    "msg": "操作成功"
}
```
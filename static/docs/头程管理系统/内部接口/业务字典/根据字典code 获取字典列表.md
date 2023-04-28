# 根据字典code 获取字典列表

> 作者：wangchaolang

## 简要描述

- 根据字典code 获取字典列表

## 请求URL
- `http://{网关地址}/ftms/dict-biz/dictionary?code={字典code}`
  
## 请求方式
- GET 

## 请求参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|code|是|string|字典代码|

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": [
        {
            "id": -1,
            "tenantId": "",
            "parentId": -1,
            "code": "common_settlement_period",
            "dictKey": "1",
            "dictValue": "预付款",
            "sort": 1,
            "remark": "预付款",
            "isSealed": -1,
            "isDeleted": -1
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |字典代码(唯一值)  |
|dictKey |string   |字典key  |
|dictValue |string   |字典value  即每个key对应的value  |
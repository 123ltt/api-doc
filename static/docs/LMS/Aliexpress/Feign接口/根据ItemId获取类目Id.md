# 根据ItemId获取类目Id

> 作者：xuxiaofei

author：徐小飞
    
## 简要描述

- 根据ItemId获取类目Id接口

## 请求URL
- ` api/getCategoryIdByItemId `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|itemIds |是  |List&lt;Long> |itemId集合   |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "1005002762008081": 154104,
        "1005002583498847": 200297146
    },
    "msg": "操作成功",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |map   |key为itemId，value为类目Id|
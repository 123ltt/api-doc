# 店铺等级-等级ID列表

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 店铺等级-等级ID列表

## 请求URL
- ` /client/store-level/listByIds`
  
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
            "storeLevelId": "1321638912740859905",
            "storeLevelName": "普通店铺"
        },
        {
            "storeLevelId": "1321638912812163074",
            "storeLevelName": "旗舰店(Lazmall)"
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|              
|storeLevelId | string   | 店铺等级ID |
|storeLevelName | string   | 店铺等级名称 |
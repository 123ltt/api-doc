# 平台信息-平台ID

> 作者：luocheng

## 作者

- 罗成
    
## 简要描述

- 平台信息-平台码

## 请求URL
- ` /client/platform/getById`
  
## 请求方式
- GET 

## 参数
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1328884326670012417",
        "platformName": "amazon",
        "platformCode": "AM"
    },
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|
|id | string   | 平台ID |
|platformName | string   | 平台名称 |
|platformCode | string   | 平台简码 |
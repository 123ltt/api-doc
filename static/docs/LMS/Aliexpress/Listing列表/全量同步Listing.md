# 全量同步Listing

> 作者：xuxiaofei

## 简要描述

- 同步Listing接口

## 请求URL
- ` /aliexpresslisting/init/sync/listing`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|accounts |是  |array | 店铺账号|


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872be1637657535922104814948"
    }
}
```
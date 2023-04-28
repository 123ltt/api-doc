# Listing-批量上架&amp;amp;amp;amp;amp;下架

> 作者：wuxin

## 作者
-  吴新
    
## 简要描述

- Listing-批量上架&批量下架

## 请求URL
- ` http://xxx/aliexpresslisting/batchOnlineAndOffline `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|listingIds  |是  |array | 主键ID	   |
|type  |是  |number | 类型 1-上架 2-下架	   |
|isCheck | 是 |boolean | 是否已检测 |


## 返回示例 

``` 
  {
    "msg": "操作成功",
    "code": 200,
    "data": null
  }
```

## 备注 

- 更多返回错误代码请看首页的错误代码描述
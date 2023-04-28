# 删除-mjf

> 作者：1571221458@qq.com

## 简要描述

- 删除接口

## 请求URL
- ` /wishlisting/remove `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |string |主键id,用逗号分隔   |

## 返回示例 

``` 
{
    "code": 500,
    "success": false,
    "data": null,
    "msg": "ids必传"
}
{
    "code": 500,
    "success": false,
    "data": null,
    "msg": "itemId=58aff946250d2253373dc969状态不正确"
}

```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
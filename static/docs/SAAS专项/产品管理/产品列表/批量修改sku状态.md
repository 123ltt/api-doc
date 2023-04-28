# 批量修改sku状态

> 作者：liben

## 简要描述

- 批量修改sku状态

## 请求URL
- ` /pms/product/editStatusBatch `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |array(long) |ids   |
|status |是  |int | 0 无效 1 有效    |

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": true,
    "msg": "操作成功",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
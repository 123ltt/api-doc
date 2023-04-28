# cd修改自发货订单为 cdFBC订单(MKPFBC)平台发货

> 作者：chenpan

## 简要描述

- cd修改自发货订单为 cdFBC订单(MKPFBC)平台发货

## 请求URL
- ` /cdPlatOrdermain/updateToFBC `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |订单号   |

## 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
      "uid": "1",
      "username": "12154545",
      "name": "吴系挂",
      "groupid": 2 ,
      "reg_time": "1436864169",
      "last_login_time": "0",
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
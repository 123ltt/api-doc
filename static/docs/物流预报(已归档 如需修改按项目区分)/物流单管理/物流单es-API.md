# 物流单es-API

> 作者：2318309077

## 简要描述

--物流单管理 主页

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/orderEsDetail`
  
## 请求方式
- get

## 参数
|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|channelCode |否  |Strring |渠道代码   |
|startDate |是  |Date | 开始时间    |
|endDate     |是  |Date | 结束时间    |
|searchType     |否  |Int | 搜索条件 0:物流单 1:平台单号 2:包裹号 3:跟踪号 4:扩展跟踪号    |
|searchValue |否  |Strring | 搜索内容    |
|type |否  |Strring |状态 10:待申请跟踪号 20:待申请面单 50:订单完成 70:取消中 90:预报异常|
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
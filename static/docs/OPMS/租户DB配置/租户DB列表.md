# 租户DB列表

> 作者：raojun

## 简要描述

- **作者**:`饶俊`&lt;br/>

- 租户DB列表

## 请求URL
- http://dev-opms.zehui.local/api/tenant/db/page

## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|size |否  |Integer |分页大小   |
|current |否  |Integer |当前页   |
|tenantId |否  |string | 租户ID    |
|dbDomain |否  |string | 数据库集群地址    |
|dbStatus |否  |string | 初始化状态    |
|appId |否  |Long | 应用ID    |
|syncStatus |否  |string | 同步状态    |
|changeStatus |否  |string | 变更状态    |

## 请求示例
``` 
{
size: 10,
current: 1,
tenantId: 000000,
dbDomain: ,
dbStatus: wait,
appId: 10001,
syncStatus: wait,
changeStatus: wait
}
```

## 返回示例

```
{
  "code": 200,
  "success": true,
  "data": {
    "records": [
      {
        "id": "1322020284584198146",
        "tenantId": "000000",
        "appCode": "ams",
        "appName": "权限管理",
        "dbDomain": "10.10.40.56",
        "dbSchema": "dev_ams",
        "username": "dev_ams",
        "dbStatus": "初始化完成",
        "syncStatus": "同步完成",
        "remark": "测试备注",
        "changeStatus": "未变更"
      }
    ],
    "total": 1,
    "size": 10,
    "current": 1,
    "orders": [
    ],
    "optimizeCountSql": true,
    "hitCount": false,
    "searchCount": true,
    "pages": 1
  },
  "msg": "操作成功",
  "attachedMap": {
    "traceId": "0af40007162484302397610571",
    "zhkj-req-id": "2021062809180043_6svk"
  }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |状态码   |
|success |string   |成功状态   |
|data |string   |响应数据   |
|msg |string   |响应信息   |
|tenantId |string   |租户ID   |
|appCode |string   |app标示   |
|dbDomain |string   |数据库集群地址   |
|dbSchema |string   |DB 名称   |
|username |string   |DB 用户名   |
|dbStatus |string   |DB状态（待初始化/初始化中/初始化完成/初始化失败）   |
|syncStatus |string   |同步状态（等待同步/同步中/同步完成/同步失败）   |
|remark |string   |备注   |
|changeStatus |string   |变更状态（未变更/变更中/变更成功/变更失败）   |
## 备注 

- 更多返回错误代码请看首页的错误代码描述
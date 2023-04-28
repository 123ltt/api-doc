# 租户DB变更

> 作者：raojun

## 简要描述

- **作者**:`饶俊`&lt;br/>

- 租户DB变更

## 请求URL
- http://dev-opms.zehui.local/api/tenant/db/schema_update

## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|appId |是  |string |应用ID   |
|tenantIds |是  |List&lt;String> |租户集合   |
|sqlContent |是  |string | sql脚本    |

## 请求示例
``` 
{
"appId":"10001",
"tenantIds":["000000"],
"sqlContent":"ALTER TABLE ams_role MODIFY remark VARCHAR(262);ALTER     TABLE ams_menu MODIFY name VARCHAR(33)"
}
```

## 返回示例

```
{
  "code": 200,
  "success": true,
  "data": {},
  "msg": "暂无承载数据"
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |状态码   |
|success |string   |成功状态   |
|data |string   |响应数据   |
|msg |string   |响应信息   |
## 备注 

- 更多返回错误代码请看首页的错误代码描述
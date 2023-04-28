# 保存手工导单excel

> 作者：fanglongbin

## 简要描述

- 保存手工导单excel

## 请求URL
- `manual/uploadManualExcelFile  `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|fileName |是  |string |文件名   |
|taskParameters |是  |string | 文件路径    |
|modular |是  |string | 模板名称  亚马逊模板(AMAZON_MODULAR) 通用模板(COMMON_MODULAR)|

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": true,
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |成功 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
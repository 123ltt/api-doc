# 审核 Listing

> 作者：wuxin

## 作者
- 吴新


## 简要描述

- 审核Listing

## 请求URL
- `/listing/global/audit`

## 请求方式
- POST

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |Arrays |主键ID   |
|timedUploadTime |是  |date | 定时上传时间    |
|isCheck     |是  |boolean | 是否检测 默认false    |

## 请求示例
```
{
    "ids": [
		1343488912163753985,
		1343488912163753985
	],
    "timedUploadTime": 2020-12-31 00:00:00
}
```

## 返回示例

```
  {
    "code": 200,
    "success": true,
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |状态码 |
|success |boolean   |是否成功: true false |

## 备注 

- code | 201 | 警告


- 警告返回示例

{
“code”: 201,
“data”: {},
“msg”: “[{“sku”:”123”, “fbWords”: [“123”, “456”]}]”,
“success”: true
}
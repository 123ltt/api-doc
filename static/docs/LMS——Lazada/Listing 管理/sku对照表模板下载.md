# sku对照表模板下载

> 作者：1638648874@qq.com

## 简要描述

- sku对照表模板下载

## 请求URL
- `/lazada/product/skuTemplateDownload`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |List&lt;Long> | 文件路径    |
## 返回示例 


**响应状态**:


| 状态码 | 说明 |
| -------- | -------- |
|200|OK|
|201|Created|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|


**响应参数**:


| 参数名称 | 参数说明 | 类型 |
| -------- | -------- | ----- |-
|code|状态码|integer(int32)|
|data|承载数据|object|
|msg|返回消息|string|
|success|是否成功|boolean|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```
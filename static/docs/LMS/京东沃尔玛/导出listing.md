# 导出listing

> 作者：1638648874@qq.com

## 导出listing


**接口地址**:`/jdwalmartListing/export/listing`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"account": "",
	"listingStatus": 0
}
```

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jdwalmartListingExportDTO|jdwalmartListingExportDTO|body|true|JdwalmartListingExportDTO|JdwalmartListingExportDTO|
|&emsp;&emsp;account|||true|string||
|&emsp;&emsp;listingStatus|listing状态(具体值请查看listingStatus枚举)||false|integer(int32)||
**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


暂无


**响应示例**:
```javascript

```
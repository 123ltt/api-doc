# 上传excel到泽汇文件服务器

> 作者：raojun

## 详情


**接口地址**:`http://test-saas.zehui.local/api/ops-resource/oss/endpoint/put-file?fileType=lms`


**请求方式**:`POST`


**请求数据类型**:`*multipart/form-data*`


**响应数据类型**:`*application/json*`


**接口描述**:


**请求示例**:


```javascript

```


**请求参数**:


**请求参数**:

| 参数名称 | 参数说明 | 是否必须 | 数据类型 | schema |
| -------- | -------- | -------- | -------- | ------ |


**响应状态**:

| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:

| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|msg|返回消息|string||
|success|是否成功|boolean|||
|link|上传成功之后文件地址|string|||
|domain|文件服务地址|string|||
|name|文件名称|string|||
|originalName|文件原始名称|string|||

**响应示例**:
```javascript
{
  "code": 200,
  "success": true,
  "data": {
    "link": "https://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/000000/local_file/20211216/2d3daa0f27d11feee02ebacd9b6e6da1.xlsx",
    "domain": "https://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com",
    "name": "000000/local_file/20211216/2d3daa0f27d11feee02ebacd9b6e6da1.xlsx",
    "originalName": "更新指定价_指定库存模板.xlsx",
    "encodeName": "q8EUBrgOmdk05coCtyIJ9salemPYyHyYvt4NHmUoEsKs7haJui2uhCLDVOuMJ/cMrTJB7MXjXHHZCtKamIEf2dtdHfPxFUzLoJ3FOEjIJUS0LAG28LzyFQ==",
    "fileId": "1471295535653588993"
  },
  "msg": "操作成功",
  "attachedMap": {
    "traceId": "0af403ee163961916553623151",
    "zhkj-req-id": "20211216094600492_c9t5"
  }
}
```
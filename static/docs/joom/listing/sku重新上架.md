# sku重新上架

> 作者：1638648874@qq.com

# sku重新上架

**作者**：`胡雍`

**接口地址**: `/joomProduct/skuReShelve`

**请求方式**: `POST`

**请求数据类型**: `application/x-www-form-urlencoded`

**响应数据类型**: `*/*`

**接口描述**: sku重新上架

``` json
针对下线SKU, 点击重新上架功能，调用平台接口实现下架，并变更状态为在线
```

**请求参数**:

| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | 
| -------- | -------- | ----- | -------- | -------- |
|variantId| variant表主键|query|true|integer|

**响应状态**:

| 状态码 | 说明 | schemal
| -------- | -------- |
|200|OK|R«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||

**响应参数**:

| 参数名称 | 参数说明 | 类型 |
| -------- | -------- | ----- |
|code|状态码|integer(int32)|
|data|承载数据|string|
|msg|返回消息|string|
|success|是否成功|boolean||

**响应示例**:

``` javascript
{
  "code": 0,
  "data": "",
  "msg": "",
  "success": true
}
```
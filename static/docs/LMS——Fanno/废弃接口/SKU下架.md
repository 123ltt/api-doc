# SKU下架

> 作者：yangruibo

# sku下架

**作者**：`谢智华`

**接口地址**: `/lazada/spus/unShelveSku`

**请求方式**: `GET`

**请求数据类型**: `*`

**响应数据类型**: `*/*`

**接口描述**: 下架

``` json

下架功能, 出现在 Online在线、Out of stock无库存、更新失败 列表中

针对在线SKU, 点击下架功能，调用平台接口实现下架，并变更状态为Canceled

```

**请求参数**:

**请求参数**:

| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | 
| -------- | -------- | ----- | -------- | -------- |
|spuId|listingId|query|true|integer|
|skuId|sku主键|query|true|integer|

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
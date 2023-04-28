# listing重新上架

> 作者：1638648874@qq.com

# listing重新上架
**作者**: 胡雍

**接口地址**: `/joomProduct/reShelve`

**请求方式**: `POST`

**请求数据类型**: `application/x-www-form-urlencoded`

**响应数据类型**: `*/*`

**接口描述**: 重新上架

``` json

重新上架功能, 出现在 Canceled 列表中

针对已下架的产品, 点击重新上架功能, 会将产品状态修改成 Updating 状态

定时任务会读取 Updating 状态下的任务, 调用平台接口实现上架

```

**请求参数**:

| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | 
| -------- | -------- | ----- | -------- | -------- |
|ids|主键ID集合|body|true|integer|
|isCheck|是否需要检测侵权|body|true|boolean|

**响应状态**:

| 状态码 | 说明 | schemal
| -------- | -------- |
|200|OK|R«string»|
|201|违禁词校验警告,可以通过 isCheck 参数来控制是否校验违禁词||
|400|重新上架校验失败||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|-|

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
    "code": 201,
    "success": false,
    "data": null,
    "msg": "[{\"listingId\":\"1397390148151087105\",\"onlyTips\":false,\"msg\":\"listingId:1397390148151087105,严禁禁止违禁词:[test],请修改!\"}]",
    "attachedMap": {
        "traceId": "0af4032f162210034910210061",
        "zhkj-req-id": "2021052715254948_64kp"
    }
}
```
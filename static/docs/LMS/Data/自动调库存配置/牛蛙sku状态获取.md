# 牛蛙sku状态获取

> 作者：xingzhen

## 牛蛙sku状态获取
**作者**:`邢振`


**接口地址**:`/adjustStockConfig/getStatus`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«AdjustStockConfigVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "1": "在线",
        "2": "下线",
        "37": "滞销下架",
        "8": "七天后缺货",
        "13": "子sku下架",
        "45": "sku待审核",
        "46": "sku审核未通过",
        "47": "滞销",
        "18": "下线待审核",
        "19": "推广sku",
        "20": "新品库存",
        "21": "15天后缺货",
        "27": "滞销待分配"
    },
    "msg": "操作成功"
}
```
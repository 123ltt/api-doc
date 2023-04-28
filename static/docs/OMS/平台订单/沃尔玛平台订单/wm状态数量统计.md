# wm状态数量统计

> 作者：18679129326@163.com

**简要描述：** 

- 平台订单列表
**AUTH：**
 ZWX
 
**请求URL：** 
- ` /oms/walmart/count`
  
**请求方式：**
- POST 

**请求示例：** 
```
与page页参数同
```
 **返回示例**
``` 

订单状态：PLACE_ORDER_SUCCESS:待付款; IN_CANCEL:取消中; WAIT_SELLER_SEND_GOODS:待发货; SELLER_PART_SEND_GOODS:部分发货; WAIT_BUYER_ACCEPT_GOODS:已发货; FUND_PROCESSING:已取消；
{
    "code": 200,
    "success": true,
    "data": {
        "canceled": 0,
        "total": 1051,
        "shipped": 561,
        "unknow": 31,
        "acknowledged": 34,
        "created": 0,
		"markFailed": 0,
        "delivered": 425,
		"markFailed": 0
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:---- |:---|:----- |
| created | varchar | 待确认 |
| acknowledged | varchar | 待发货 |
| shipped | String | 已发货 |
| delivered | String | 已完成|
| cancelled | varchar | 已取消 |
| unknow | varchar | 未知 |
| markFailed | varchar | 标记失败 |




 **备注** 

- 更多返回错误代码请看首页的错误代码描述
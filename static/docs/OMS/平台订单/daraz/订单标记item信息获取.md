# 订单标记item信息获取

> 作者：liben

## 简要描述

- 订单标记item信息获取

## 请求URL
- ` /dzPlatordermain/items`
  
## 请求方式
- GET 

## 参数

|参数名|类型|说明|
|:-----  |:-----|-----                           |
| ordersId |str   |平台订单号  |
| storeCode |str   |店铺code  |

## 返回示例 
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "name": "Women Autumn Warm Long Sleeve Polka Dot Print Pullover Top Casual Loose Round Collar Sweater",
            "itemId": "1256990686"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a873b4164689518709010046284"
    }
}
```
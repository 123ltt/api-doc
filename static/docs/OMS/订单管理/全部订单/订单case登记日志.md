# 订单case登记日志

> 作者：chenpan

## 简要描述

- 订单case登记日志

## 请求URL
- `/case/addCaseLog `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |oms订单号   |
|platOrderId |是  |string |平台订单号   |
|type |是  |string |case类型   |
|reason |是  |map |case原因   |
|status |是  |string |CASE状态   |
|pictureUrl |是  |string |图片url   |
|currency |是  |string |币种   |
|username |是  |string |添加名称   |
|createTime |是  |date |添加时间   |
|skuList |是  |array |sku列表   |
|refundType |是  |string |退款类型   |
|refundMessage |是  |string |退款留言  |

eg:下拉值请用中文 比如 case类型: 差评
## 请求样式 

``` 
{
    "omOrderId": "SM2107061603000001",
    "platOrderId": "8134854178914681",
    "skuList": [
        {
            "pmsSku": "S5SEP3775SJ",
            "productQuantity": 5,
            "productSalePrice": "4.0500"
        }
    ],
    "type": "重寄",
    "reason": {
        "物流原因": "发货延迟"
    },
    "currency": "AED",
    "status": "开始",
    "refundType": "全额退款",
    "pictureUrl":"",
    "username":"",
    "createTime":""
}
```
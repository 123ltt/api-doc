# amazon列表状态

> 作者：xiongxianxing

**简要描述：** 

- 平台订单列表状态

**请求URL：** 
- ` /oms/amplatorder/count`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "platformCode": "amazon"，
    "storeName":"店铺名称"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1-平台单号,2-ASIN，3-OMS单号,4-在线SKU，5-跟踪号"，
    "searchContent":"搜索内容"，
    "fulfillmentChannel":"发货类型，发货类型，AFN表示FBA自发货,MFN表示自发货 ALL 全部"
	"orderStatus":" 订单状态:total-全部 ,pending待付款 ,unshipped,待发货-shipped已发货,-cancelled取消"
    "current": 1,
    "size": 20
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|platformCode |String   |amazon|是|
|storeCode |String   |aavvcc|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1-平台单号,2-ASIN，3-OMS单号,4-在线SKU，5-跟踪号|否|
|searchContent |String   |搜索内容|否|
|productSku |String   |SKU编码|否|
|fulfillmentChannel |String   |发货类型，AFN表示FBA自发货,MFN表示自发货 |否|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "Unshipped": 16,
        "total": 103,
        "Shipped": 77,
        "Canceled": 10,
        "Pending": 0
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:----    |:---|:----- |
|	total	|	tinyint	|	全部	|
|	Pending	|	tinyint	|	待付款|
|	Unshipped	|	tinyint	|未发货|
|	Shipped	|	tinyint	|已发货|
|	Canceled	|	tinyint	|取消|


 **备注** 

- 更多返回错误代码请看首页的错误代码描述
# RMA-查看

> 作者：wuxin

## 简要描述

- RMA-查看

## 请求URL
- `/oms/orderRma/get`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |OMS订单号   |

## 返回示例 

``` 
  {
    "code": 0,
	"msg"": null,
    "data": {
      "id": 123,
      "platformCode": "AM",
      "siteCode": "CN",
      "storeCode": "AM123" ,
      "omOrderId": "1436864169",
      "platOrderId": "0",
	  "platformProductId": "0",
	  "productsName": "0",
	  "originalSkuCode": "0",
	  "orderTime": "0",
	  "source": "0",
	  "tag": "0",
	  "tagRemark": "0",
	  "categoryId": "0",
	  "quantity": "0",
	  "authenticateResult": "0",
	  "remark": "0",
	  "createTime": "0",
	  "createUserName": "0",
	  "updateTime": "0",
	  "updateUserName": "0",
	  "status": "0",
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |主键ID|
|platformCode |string   |平台简码|
|siteCode |string   |站点编码|
|storeCode |string   |店铺编码|
|omOrderId |string   |OMS订单号|
|platOrderId |string   |平台订单号|
|platformProductId |string   |itemId|
|productsName |string   |产品名称|
|originalSkuCode |string   |sellerSKU|
|orderTime |date   |下单时间|
|source |int   |来源 1-Add 2-Patch 3-PlatfromReturn 4-refund 5-multichannel|
|tag |string   |标签|
|tagRemark |string   |标签备注|
|categoryId |long   |类目ID|
|quantity |int   |数量|
|authenticateResult |string   |鉴定结果|
|remark |string   |备注内容|
|createTime |date   |创建时间|
|createUserName |string   |创建人|
|updateTime |date   |修改时间|
|updateUserName |string   |修改人|
|status |int   |状态 1-Unit returned to inventory|

## 备注 

- 更多返回错误代码请看首页的错误代码描述
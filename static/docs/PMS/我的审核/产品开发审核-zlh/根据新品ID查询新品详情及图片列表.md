# 根据新品ID查询新品详情及图片列表

> 作者：zhanglonghui

## 简要描述

- 根据新品ID查询新品详情及图片列表

## 请求URL
- ` /blade-product/newProductApproval/queryNewProductAndImg?id={id} `
  
## 请求方式
- GET

## 参数

|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|id |新品ID  |true |integer(int64)   |





## 返回示例 

``` 
{
	"code": 0,
	"msg": "",
	"success": true
	"data": {
		"baseInfo": {
			"flowStatus": "NEW_PRODUCT_BIZ_0100",
			"flowNodeNo": "NEW_PRODUCT_NODE_01",
			"comment": "",
			"id": 0,
			"idCategory": 0,
			"flowId": "ads032942kjda8",
			"platformLink": "",
			"priceSupply": 0,
			"productName": "",
			"productWeight": 0,
			"sampleSpuCode": "",
			"sizeHeight": 0,
			"sizeLong": 0,
			"sizeWidth": 0,
			"sourceType": 0,
			"vendorCode": "",
			"vendorLink": "",
			"vendorProductCode": "",
			"devType": 0,
			"minimumOrder":50,
			"deliveryDay":30,
			"ifCanUpdate":true,
			"ifPurchaseCanUpdateVendorCode": true,
			"categoryPathIdList": ["1111","2222"]
		},
		"imageList": [
			{
				"imageUrl": "www.baidu.com",
				"isPrime": 1,
				"imageName": "abc.jpg"
			}
		],
		"infringementInfo": {
			"ifCanUpdate":true,
            "infringementLevel": 1,
            "infringementType": 1,
            "forbiddenPlatformCountryList": [
				{
					"countryList":["AU","JP"],
					"platform": "ebay"
				}
			],
            "infringementReason": "fdafadfadsfaf"
        }
	}
}
```

## 返回参数说明 

|参数名|说明|类型|
|:-----  |:-----|-----                           |
|code | 200操作成功否则失败  |int  |
|data |承载数据   |  |
|msg |返回消息   | string |
|success |是否成功   | boolean |
|id |新品ID|integer(int64) |
|idCategory |类目ID   |integer(int64) |
|flowId |流程实例ID   |string |
|imageUrl |图片的URL   |String |
|isPrime |是否主图   |integer(int32) |
|platformLink |平台链接   |String |
|priceSupply |供货价格   |float |
|productName |产品名称   |String |
|productWeight |产品重量   |integer(int32) |
|sampleSpuCode |样品SPU编码  |String |
|sizeHeight |尺寸高度   |float |
|sizeLong |尺寸长度   |float |
|sizeWidth |尺寸宽度   |float |
|sourceType |产品来源, 1:线下发现, 2:线上发掘, 0:其它   |integer(int32) |
|vendorCode |供应商编码   |String |
|vendorLink |供应商链接   |String |
|vendorProductCode |供应商产品编码   |String |
|devType |开发模式, 0:铺货, 1:精品   |number |
|minimumOrder |最小起订量   |number |
|deliveryDay |交期(天)   |number |
|flowEventInfoList |流程事件选项列表   | |
|eventNo |流程事件编码   |String |
|eventName |流程事件名   |String |
|sortIdx |流程事件排序   |number |
|infringementInfo |安全审核信息   | |
|infringementLevel |侵权级别，0:无, 1:低, 2:中, 3:高   |number |
|infringementType |侵权类型，0:无,1:专利侵权, 2:商标侵权, 3:版权侵权   |number |
|infringementReason |侵权原因   |String |
|forbiddenPlatformCountryList |禁止上架限制平台国家内容   | |
|countryList |禁止上架限制国家列表   | |
|platform |禁止上架限制平台  | string|
|ifCanUpdate |是否显示保存按钮  | boolean|
|categoryPathIdList |类目ID路径列表  | List&lt;String>|

## 备注 

- 更多返回错误代码请看首页的错误代码描述
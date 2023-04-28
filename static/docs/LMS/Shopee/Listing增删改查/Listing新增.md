# Listing新增

> 作者：xingzhen

## 新增


**接口地址**:`/shopeelisting/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeListing


**请求示例**:


```javascript
{
	"account": "",
	"accountCode": "",
	"accounts": [],
	"attributes": "",
	"auditTime": "",
	"categoryId": 0,
	"cmtCount": 0,
	"condition": "",
	"costPrice": 0,
	"currency": "",
	"daysToShip": 0,
	"description": "",
	"developUser": 0,
	"discountId": 0,
	"fbwordConfirm": true,
	"id": 0,
	"images": "",
	"inflatedOriginalPrice": 0,
	"inflatedPrice": 0,
	"is2tierItem": true,
	"isDeleted": 0,
	"isOnline": true,
	"isPreOrder": true,
	"isShopeeUpload": true,
	"itemId": 0,
	"itemStatus": "",
	"likes": 0,
	"listingCreateTime": "",
	"listingStatus": 0,
	"listingType": "",
	"listingUpdateTime": "",
	"logistics": "",
	"name": "",
	"originalPrice": 0,
	"packageHeight": 0,
	"packageLength": 0,
	"packageWidth": 0,
	"price": 0,
	"priceSource": "",
	"productIdType": "",
	"productSpu": "",
	"ratingStar": 0,
	"reservedStock": 0,
	"saleUser": 0,
	"sales": 0,
	"searchContent": [],
	"searchSort": 0,
	"searchType": 0,
	"sellerSku": "",
	"shopId": 0,
	"shopeeListingVariantDTOList": [
		{
			"costPrice": 0,
			"discountId": 0,
			"id": 0,
			"inflatedOriginalPrice": 0,
			"inflatedPrice": 0,
			"isDeleted": 0,
			"itemId": 0,
			"itemStatus": "",
			"listingCreateTime": "",
			"listingUpdateTime": "",
			"name": "",
			"originalPrice": 0,
			"price": 0,
			"priceSource": "",
			"productSku": "",
			"reservedStock": 0,
			"sellerSku": "",
			"shopeeListingId": 0,
			"sipItemPrice": 0,
			"status": 0,
			"stock": 0,
			"tierIndex": "[0,1]",
			"variationId": 0
			"variationAttribute":""
		}
	],
	"sipItemPrice": 0,
	"sizeChart": "",
	"status": 0,
	"stock": 0,
	"tenures": "",
	"tierVariation": "[{"images_url":["https://cf.shopee.com.my/file/79c0fd68726a3288a3e85dbfdda4aef7","https://cf.shopee.com.my/file/540dceb88f01aac8597495eeeb7c522d"],"name":"color","options":["light blue","dark blue"]},{"name":"size","options":["S","M","L","XL","2XL","3XL"]}]",
	"timedUploadTime": "",
	"upOnlineTime": "",
	"upOnlineTimeEnd": "",
	"upOnlineTimeStart": "",
	"variantIds": [],
	"views": 0,
	"weight": 0,
	"wholesales": "",
	"isPreOrder":"",
	"accountPrefix":"",
	"customerUser":""
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopeeListing|虾皮listing|body|true|ShopeeListing对象|ShopeeListing对象|
|  account|店铺名||false|string||
|  accountCode|店铺名CODE||false|string||
|  accounts|店铺账号||false|array|string|
|  attributes|属性JSON||false|string||
|  auditTime|审核时间||false|string(date-time)||
|  categoryId|类目id||false|integer(int32)||
|  cmtCount|评论数||false|integer(int32)||
|  condition|物品状况||false|string||
|  costPrice|成本价||false|number||
|  currency|币种||false|string||
|  daysToShip|运输时间||false|integer(int32)||
|  description|商品描述||false|string||
|  developUser|开发人员||false|integer(int64)||
|  discountId|折扣id||false|integer(int32)||
|  fbwordConfirm|违禁词确认||false|boolean||
|  id|主键id||false|integer(int64)||
|  images|图片JSON||false|string||
|  inflatedOriginalPrice|税后原价格||false|number||
|  inflatedPrice|税后价格||false|number||
|  is2tierItem|是否两层变体结构||false|boolean||
|  isDeleted|是否已删除||false|integer(int32)||
|  isOnline|是否在线||false|boolean||
|  isPreOrder|是否为预订单||false|boolean||
|  isShopeeUpload|是否后台刊登||false|boolean||
|  itemId|平台ID||false|integer(int64)||
|  itemStatus|商品状态||false|string||
|  likes|收藏量||false|integer(int32)||
|  listingCreateTime|平台创建时间||false|string(date-time)||
|  listingStatus|listing状态||false|integer(int32)||
|  listingType|listing类型||false|string||
|  listingUpdateTime|平台修改时间||false|string(date-time)||
|  logistics|物流JSON||false|string||
|  name|商品标题||false|string||
|  originalPrice|原始售价||false|number||
|  packageHeight|高||false|integer(int32)||
|  packageLength|长||false|integer(int32)||
|  packageWidth|宽||false|integer(int32)||
|  price|价格||false|number||
|  priceSource|创建SIP策略||false|string||
|  productIdType|编码类型||false|string||
|  productSpu|产品SPU||false|string||
|  ratingStar|星级数||false|number||
|  reservedStock|促销时锁定库存||false|integer(int32)||
|  saleUser|负责人||false|integer(int64)||
|  sales|销量||false|integer(int32)||
|  searchContent|搜索内容||false|array|string|
|  searchSort|搜索类别||false|integer(int32)||
|  searchType|搜索类型 1-标题(单个) 2-内部sku 3-外部sku 4-ItemId||false|integer(int32)||
|  sellerSku|平台SKU||false|string||
|  shopId|店铺id||false|integer(int32)||
|  shopeeListingVariantDTOList|||false|array|ShopeeListingVariant对象|
|    costPrice|成本价||false|number||
|    discountId|折扣id||false|integer(int32)||
|    id|主键id||false|integer(int64)||
|    inflatedOriginalPrice|税后原价格||false|number||
|    inflatedPrice|税后价格||false|number||
|    isDeleted|是否已删除||false|integer(int32)||
|    itemId|平台ID||false|integer(int64)||
|    itemStatus|商品状态||false|string||
|    listingCreateTime|平台创建时间||false|string(date-time)||
|    listingUpdateTime|平台修改时间||false|string(date-time)||
|    name|变体名称||false|string||
|    originalPrice|历史原价||false|number||
|    price|价格||false|number||
|    priceSource|创建SIP策略||false|string||
|    productSku|产品SKU||false|string||
|    reservedStock|促销时锁定库存||false|integer(int32)||
|    sellerSku|平台SKU||false|string||
|    shopeeListingId|主表关联ID||false|integer(int64)||
|    sipItemPrice|SIP结算价格||false|number||
|    status|业务状态||false|integer(int32)||
|    stock|库存||false|integer(int32)||
|    tierIndex|属性坐标||false|string||
|    variationId|平台变体ID||false|integer(int64)||
|    variationAttribute|变体属性||false|integer(int64)||
|  sipItemPrice|SIP结算价格||false|number||
|  sizeChart|尺码表||false|string||
|  status|业务状态||false|integer(int32)||
|  stock|库存||false|integer(int32)||
|  tenures|TW分期付款||false|string||
|  tierVariation|变体属性信息||false|string||
|  timedUploadTime|定时刊登时间||false|string(date-time)||
|  upOnlineTime|上架时间||false|string(date-time)||
|  upOnlineTimeEnd|上架结束时间||false|string(date-time)||
|  upOnlineTimeStart|上架开始时间||false|string(date-time)||
|  variantIds|||false|array|integer|
|  views|浏览量||false|integer(int32)||
|  weight|重量||false|number||
|  wholesales|批发商层级列表||false|string||
|  isPreOrder|是否为预订单||false|Boolean||
|  accountPrefix|店铺前缀编码||true|String||
|  customerUser|客服人员||true|String||

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```
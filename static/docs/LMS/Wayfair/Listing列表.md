# Listing列表

> 作者：xingzhen

## 分页


**接口地址**:`/wayfairListing/page`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入wayfairListing


**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current  |是  |number | 当前页	   |
|size  |是  |number | 每页大小	   |
|accounts  |否  |List&lt;string> | 账号	   |
|upOnlineTimeStart |否  |Number | 上架开始时间    |
|upOnlineTimeEnd     |否  |Number | 上架结束时间    |
|createTimeStart |否  |Number | 创建开始时间    |
|createTimeEnd     |否  |Number | 创建结束时间    |
|discontinuedTimeStart |否  |Number | 停产开始时间    |
|discontinuedTimeEnd     |否  |Number | 停产结束时间    |
|searchType     |否  |Number | 搜索类型  1-标题(单个) 2-内部sku 3-外部sku 4-listingId  |
|searchContent     |否  |Array | 搜索内容    |
|createUser     |否  |Long | 创建人 id   |
|listingStatus     |是  |Number | 状态  3-Uploading 4-Upload Failed 5-Online 6-Updating 7-Update Failed 8-Match Failed 9-Canceling 10-Canceled   |
|isGbcInfringe     |否  |boolean |是否gbc侵权|
|infringementTypes     |否  |List&lt;Integer> |侵权类型: 1 外观专利侵权，2 设计专利侵权，3 商标侵权(关键词侵权)，4 图片侵权(盗图)，5 著作侵权，6 发明专利侵权，7 平台禁售|



## 返回示例 

``` 
{
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"account": "",
				"accountCode": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"customerUser": 0,
				"developUser": 0,
				"discontinued": true,
				"discontinuedTime": "",
				"id": 0,
				"infringementType": "",
				"isDeleted": 0,
				"isGbcInfringe": 0,
				"itemId": 0,
				"itemNextAvailabilityDate": "",
				"listingStatus": 0,
				"listingType": "",
				"productNameAndOptions": "",
				"productSku": "",
				"quantityBackorder": 0,
				"quantityOnHand": 0,
				"quantityOnOrder": 0,
				"saleUser": 0,
				"sellerSku": "",
				"status": 0,
				"supplierId": 0,
				"updateTime": "",
				"updateUser": 0
			}
		],
		"searchCount": true,
		"size": 0,
		"total": 0
	},
	"msg": "",
	"success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«WayfairListingVO对象»|IPage«WayfairListingVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|WayfairListingVO对象|
|&emsp;&emsp;&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;&emsp;&emsp;accountCode|店铺CODE||false|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;customerUser|客服人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;discontinued|产品是否已停产||false|boolean||
|&emsp;&emsp;&emsp;&emsp;discontinuedTime|停产时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;infringementType|侵权类型: 1-外观专利侵权,2-设计专利侵权,3-商标侵权,4-图片侵权,5-著作侵权,6-发明专利侵权,7-平台禁售||false|string||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isGbcInfringe|是否GBC侵权||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;itemId|平台ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;itemNextAvailabilityDate|产品未来可供应的时间点||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;listingStatus|listing状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;&emsp;&emsp;productNameAndOptions|产品名称以及要为其提交的其他信息(标题)||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|内部SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;quantityBackorder|缺货商品的数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;quantityOnHand|商品的可售库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;quantityOnOrder|分配给未结订单的商品数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;saleUser|负责人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;supplierId|包含此产品的供应商/仓库的识别号||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean|
|variantNum |long   |子sku数量  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述





## 分页


**接口地址**:`/wayfairListing/page`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入wayfairListing


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|account|店铺名|query|false|string||
|accountCode|店铺CODE|query|false|string||
|accountPrefix|店铺前缀码|query|false|string||
|accounts|店铺账号|query|false|array|string|
|cmtCountSign|评论数筛选符号|query|false|string||
|createDept|创建部门|query|false|integer(int64)||
|createTime|创建时间|query|false|string(date-time)||
|createTimeEnd|创建结束时间|query|false|string(date-time)||
|createTimeStart|创建开始时间|query|false|string(date-time)||
|createUser|创建人|query|false|integer(int64)||
|current|当前页|query|false|integer(int32)||
|customerUser|客服人员|query|false|integer(int64)||
|developUser|开发人员|query|false|integer(int64)||
|discontinued|产品是否已停产|query|false|boolean||
|discontinuedTime|停产时间|query|false|string(date-time)||
|discontinuedTimeEnd|停产结束时间|query|false|string(date-time)||
|discontinuedTimeStart|停产开始时间|query|false|string(date-time)||
|fbwordConfirm|违禁词确认|query|false|boolean||
|id|主键id|query|false|integer(int64)||
|ids||query|false|array|integer|
|infringementType|侵权类型: 1-外观专利侵权,2-设计专利侵权,3-商标侵权,4-图片侵权,5-著作侵权,6-发明专利侵权,7-平台禁售|query|false|string||
|infringementTypes|侵权类型|query|false|array|integer|
|isAutoUpload|是否自动刊登|query|false|boolean||
|isDeleted|是否已删除|query|false|integer(int32)||
|isDiscount|是否含有活动价|query|false|boolean||
|isGbcInfringe|是否GBC|query|false|boolean||
|itemId|平台ID|query|false|integer(int64)||
|itemNextAvailabilityDate|产品未来可供应的时间点|query|false|string(date-time)||
|likesSign|收藏量筛选符号|query|false|string||
|listingStatus|listing状态|query|false|integer(int32)||
|listingType|listing类型|query|false|string||
|nwStatusList||query|false|array|integer|
|productIdType|编码类型|query|false|string||
|productNameAndOptions|产品名称以及要为其提交的其他信息(标题)|query|false|string||
|productSku|内部SKU|query|false|string||
|quantityBackorder|缺货商品的数量|query|false|integer(int32)||
|quantityOnHand|商品的可售库存|query|false|integer(int32)||
|quantityOnOrder|分配给未结订单的商品数量|query|false|integer(int32)||
|ratingStarSign|星级数筛选符号|query|false|string||
|saleUser|负责人|query|false|integer(int64)||
|salesSign|销量筛选符号|query|false|string||
|searchContent|搜索内容|query|false|array|string|
|searchSort|搜索类别|query|false|integer(int32)||
|searchType|搜索类型 1-标题(单个) 2-内部sku 3-外部sku 4-ItemId 5-listingId 6-globalItemId|query|false|integer(int32)||
|sellerSku|平台SKU|query|false|string||
|size|每页的数量|query|false|integer(int32)||
|status|业务状态|query|false|integer(int32)||
|supplierId|包含此产品的供应商/仓库的识别号|query|false|integer(int64)||
|upOnlineTimeEnd|上架结束时间|query|false|string(date-time)||
|upOnlineTimeStart|上架开始时间|query|false|string(date-time)||
|updateField|修改字段|query|false|array|integer|
|updateTime|更新时间|query|false|string(date-time)||
|updateTimeEnd|更新结束时间|query|false|string(date-time)||
|updateTimeStart|更新开始时间|query|false|string(date-time)||
|updateUser|更新人|query|false|integer(int64)||
|viewsSign|浏览量筛选符号|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«WayfairListingVO对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«WayfairListingVO对象»|IPage«WayfairListingVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|WayfairListingVO对象|
|&emsp;&emsp;&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;&emsp;&emsp;accountCode|店铺CODE||false|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;customerUser|客服人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;discontinued|产品是否已停产||false|boolean||
|&emsp;&emsp;&emsp;&emsp;discontinuedTime|停产时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;infringementType|侵权类型: 1-外观专利侵权,2-设计专利侵权,3-商标侵权,4-图片侵权,5-著作侵权,6-发明专利侵权,7-平台禁售||false|string||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isGbcInfringe|是否GBC侵权||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;itemId|平台ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;itemNextAvailabilityDate|产品未来可供应的时间点||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;listingStatus|listing状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;&emsp;&emsp;productNameAndOptions|产品名称以及要为其提交的其他信息(标题)||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|内部SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;quantityBackorder|缺货商品的数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;quantityOnHand|商品的可售库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;quantityOnOrder|分配给未结订单的商品数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;saleUser|负责人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;supplierId|包含此产品的供应商/仓库的识别号||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"account": "",
				"accountCode": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"customerUser": 0,
				"developUser": 0,
				"discontinued": true,
				"discontinuedTime": "",
				"id": 0,
				"infringementType": "",
				"isDeleted": 0,
				"isGbcInfringe": 0,
				"itemId": 0,
				"itemNextAvailabilityDate": "",
				"listingStatus": 0,
				"listingType": "",
				"productNameAndOptions": "",
				"productSku": "",
				"quantityBackorder": 0,
				"quantityOnHand": 0,
				"quantityOnOrder": 0,
				"saleUser": 0,
				"sellerSku": "",
				"status": 0,
				"supplierId": 0,
				"updateTime": "",
				"updateUser": 0
			}
		],
		"searchCount": true,
		"size": 0,
		"total": 0
	},
	"msg": "",
	"success": true
}
```
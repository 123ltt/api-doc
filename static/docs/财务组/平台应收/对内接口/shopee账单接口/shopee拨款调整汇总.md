# shopee拨款调整汇总

> 作者：shiweijie122@163.com

## 分页


**接口地址**:`/shopeeAllocateTotal/list`


**请求方式**:`GET`


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|allocateTimeBegin|拨款时间开始|query|false|string(date-time)||
|allocateTimeEnd|拨款时间结束|query|false|string(date-time)||
|current|当前页|query|false|integer(int32)||
|diffAmountMax|差异检测max|query|false|number||
|diffAmountMin|差异检测min|query|false|number||
|size|每页的数量|query|false|integer(int32)||
|storeName|店铺名称|query|false|string|||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«ShopeeAllocateTotal对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | schema | 是否必须 |类型|
| -------- | -------- | ----- |----- |-----|
|allocateTime|拨款时间||false|string(date-time)|
|createDept|创建部门||false|integer(int64)|
|createTime|创建时间||false|string(date-time)|
|createUser|创建人||false|integer(int64)|
|diffAmount|差异检测||false|number|
|fromAmount|拨款金额(原币)||false|number|
|fromCurrency|原始币种||false|string|
|id|主键id||false|integer(int64)|
|isDeleted|是否已删除||false|integer(int32)|
|noSipAdjustment|拨款明细(非SIP)||false|number|
|noSipAmount|明细(非SIP)||false|number|
|sipAdjustment|拨款明细(SIP)||false|number|
|sipAmount|明细(SIP)||false|number|
|status|业务状态||false|integer(int32)|
|storeCode|店铺编码||false|string|
|storeName|店铺名称||false|string|
|tenantId|租户ID||false|string|
|updateTime|更新时间||false|string(date-time)|
|updateUser|更新人||false|integer(int64)||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"allocateTime": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"diffAmount": 0,
				"fromAmount": 0,
				"fromCurrency": "",
				"id": 0,
				"isDeleted": 0,
				"noSipAdjustment": 0,
				"noSipAmount": 0,
				"sipAdjustment": 0,
				"sipAmount": 0,
				"status": 0,
				"storeCode": "",
				"storeName": "",
				"tenantId": "",
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
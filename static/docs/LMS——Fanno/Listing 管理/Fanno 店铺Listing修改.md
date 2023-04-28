# Fanno 店铺Listing修改

> 作者：yangruibo

## 店铺Listing修改

**作者**:`杨锐波`

**接口地址**:`/listing/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:店铺Listing 修改


**请求示例**:


```javascript
{
	"id": "",
	"title": 0,
	"description": "",
	"mainImageUrl": "",
	"extraImageUrls": ["", ""],
	"warrantyPeriod": 0,
	"warrantyPolicy": "",
	"variants": [
		{
			"id": 0,
			"productSku": 0,
			"profitRate": "0.3",
			"sellingPrice": "18.50",
			"availableStock": "",
			"variantAttrs": [{
				"id": 123123,
				"image": "http:/asfwae.com/asfasdf"
			}]
		}
	]
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|request||body|true|更新店铺Listing请求|更新店铺Listing请求对象|
|&emsp;&emsp;id|ListingID(本地)||true|Long||
|&emsp;&emsp;title|商品标题||true |string||
|&emsp;&emsp;mainImageUrl|商品主图片||true |string||
|&emsp;&emsp;extraImageUrls|商品副图片集||false |array(string)||
|&emsp;&emsp;description|商品描述||true|string||
|&emsp;&emsp;warrantyPeriod|服务期限||false|Integer||
|&emsp;&emsp;warrantyPolicy|服务条款||false|string||
|&emsp;&emsp;variants|||true|array(object)|变体对象集|
|&emsp;&emsp;&emsp;&emsp;id|变体ID(本地)||true|long||
|&emsp;&emsp;&emsp;&emsp;productSku|商品SKU||true|string||
|&emsp;&emsp;&emsp;&emsp;sellingPrice|售价||true|string||
|&emsp;&emsp;&emsp;&emsp;profitRate|利润率||false|string||
|&emsp;&emsp;&emsp;&emsp;availableStock|库存||true|number||
|&emsp;&emsp;variantAttrs|||false|array(object)|变体属性对象集|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|变体属性ID(本地)||true|long||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;image|图片||false|string||

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK|R|
|201|Warn||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```
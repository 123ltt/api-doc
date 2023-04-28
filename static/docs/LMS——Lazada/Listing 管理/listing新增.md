# listing新增

> 作者：1638648874@qq.com

## listing新增

**作者**:`胡雍`

**接口地址**:`/lazada/product/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:`lazada Listing新增`


**请求示例**:


```javascript
{
	"attributes": "",
	"categoryId": 0,
	"description": "",
	"developer": 0,
	"isFbwordConfirmed": true,
	"isLazadaUpload": true,
	"listingStatus": 0,
	"listingType": "",
	"name": "",
	"packageContent": "",
	"packageHeight": 0,
	"packageLength": 0,
	"packageWeight": 0,
	"packageWidth": 0,
	"qcStatus": "",
	"saleUser": 0,
	"sellerSku": "",
	"shortDescription": "",
	"site": "",
	"spu": "",
	"storeCode": "",
	"storeName": "",
	"spuMainImage":"https://my-live-02.slatic.net/p/4f6dd0a48eee6db3bfde173b7cf0ae7c.jpg",
	"spuAllImage":"["https://my-live-02.slatic.net/p/4f6dd0a48eee6db3bfde173b7cf0ae7c.jpg","https://my-live-02.slatic.net/p/51d85ff93221530fe4b20de19bd3f4a1.jpg","https://my-live-02.slatic.net/p/2deefa21ff28dcb90bc8a0c6b0767c4f.jpg","https://my-live-02.slatic.net/p/e7474a177bdfcd6d5b8a135e5be4e33d.jpg","https://my-live-02.slatic.net/p/4a0dcf4418021db36d182e0beaed058a.jpg","https://my-live-02.slatic.net/p/7420471988a2d514aefbd4d0c520353e.jpg","https://my-live-02.slatic.net/p/92dcb61c18663b60a11c6ffb81e1a3ff.jpg","https://my-live-02.slatic.net/p/5e6bfddd47fabd843559c84cf6fd0bca.jpg"]",
	"lazadaProductSkuDTOList": [
		{
			"combineSku": "",
			"id": 0,
			"idRetailPrice": 0,
			"idSalesPrice": 0,
			"masterImage": "",
			"myRetailPrice": 0,
			"mySalesPrice": 0,
			"phRetailPrice": 0,
			"phSalesPrice": 0,
			"price": 0,
			"specialPrice": 0,
			"productSku": "",
			"productStatus": 0,
			"quantity": 0,
			"sellerSku": "",
			"sgRetailPrice": 0,
			"sgSalesPrice": 0,
			"allImages": "",
			"specifications": "",
			"spuId": 0,
			"status": 0,
			"taxClass": "",
			"thRetailPrice": 0,
			"thSalesPrice": 0,
			"updateTime": "",
			"updateUser": 0,
			"viewUrl": "",
			"vnRetailPrice": 0,
			"vnSalesPrice": 0，
			"productCost":0.00,
			"productWeight":0.00,
			"shippingFee":0.00,
			"profitRate":0.00,
			"myProfitRate":0.00,
			"sgProfitRate":0.00,
			"thProfitRate":0.00,
			"phProfitRate":0.00,
			"idProfitRate":0.00,
			"vnProfitRate":0.00,
			"specialFromDate":null,
			"specialToDate":null,
			"availablity":true
		}
	]

}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|lazadaProductDTO|Lazada 商品SPU表|body|true|LazadaProductSpu对象|LazadaProductSpu对象|
|&emsp;&emsp;attributes|产品类目属性(json 格式)||true|string||
|&emsp;&emsp;categoryId|商品类目ID||true|integer(int32)||
|&emsp;&emsp;description|商品描述||true|string||
|&emsp;&emsp;developer|开发人员||true|integer(int64)||
|&emsp;&emsp;isFbwordConfirmed|违禁词是否已确认（是:true,否:false）||false|boolean||
|&emsp;&emsp;listingStatus|listing状态（默认1）||true|integer(int32)||
|&emsp;&emsp;listingType|listing类型||true|string||
|&emsp;&emsp;name|商品标题||true|string||
|&emsp;&emsp;&emsp;&emsp;spuMainImage|listing主图||true|string||
|&emsp;&emsp;&emsp;&emsp;spuAllImage|商品所有图片(第一张为主图)||true|string||
|&emsp;&emsp;packageContent|包装内容（what's in the box)||false|string||
|&emsp;&emsp;packageHeight|包装尺寸_高(cm)||false|number||
|&emsp;&emsp;packageLength|包装尺寸_长(cm)||false|number||
|&emsp;&emsp;packageWeight|包装重量(kg)||false|number||
|&emsp;&emsp;packageWidth|包装尺寸_宽(cm)||false|number||
|&emsp;&emsp;qcStatus|QC Stauts||false|string||
|&emsp;&emsp;saleUser|负责人(销售员)||false|integer(int64)||
|&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;shortDescription|短描述||false|string||
|&emsp;&emsp;site|站点(多个用逗号隔开)||false|string||
|&emsp;&emsp;skuSuffix|sku后缀||false|string||
|&emsp;&emsp;spu|SPU||false|string||
|&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;storeCode|店铺编码||false|string||
|&emsp;&emsp;storeName|店铺名称||false|string||
|&emsp;&emsp;lazadaProductSkuDTOList|||true|array|LazadaProductSku对象|
|&emsp;&emsp;&emsp;&emsp;combineSku|组合sku||false|string||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;idRetailPrice|ID站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;idSalesPrice|ID站促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;masterImage|商品主图，主副图最多8张||false|string||
|&emsp;&emsp;&emsp;&emsp;allImages|商品所有图片(第一张为主图),json格式||false|string||
|&emsp;&emsp;&emsp;&emsp;myRetailPrice|MY站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;mySalesPrice|MY站点促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;phRetailPrice|PH站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;phSalesPrice|PH站促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;sgRetailPrice|SG站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;sgSalesPrice|SG站促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;thRetailPrice|TH站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;thSalesPrice|TH站促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;vnRetailPrice|VN站点售价||false|number||
|&emsp;&emsp;&emsp;&emsp;vnSalesPrice|VN站促销价||false|number||
|&emsp;&emsp;&emsp;&emsp;price|商品价格（全球站点时，为第一个站点对应价格)||false|number||
|&emsp;&emsp;&emsp;&emsp;specialPrice|促销价（全球站点时，为第一个站点对应价格)||false|number||
|&emsp;&emsp;&emsp;&emsp;profitRate |利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;myProfitRate |MY站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;sgProfitRate |SG站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;thProfitRate |TH站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;phProfitRate |PH站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;idProfitRate |ID站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;vnProfitRate |VN站点利润率||false|number||
|&emsp;&emsp;&emsp;&emsp;quantity|商品数量||true|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;productSku|productSku||true|string||
|&emsp;&emsp;&emsp;&emsp;productStatus|产品状态(0:draft 1:active,2.inactive,3:deleted)||true|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;specifications|变体属性（商品规格，json 格式） ||false|string||
|&emsp;&emsp;&emsp;&emsp;taxClass|税种||true|string||
|&emsp;&emsp;&emsp;&emsp;productCost|产品成本||false|number||
|&emsp;&emsp;&emsp;&emsp;productWeight|产品重量||false|number||
|&emsp;&emsp;&emsp;&emsp;shippingFee|运费||false|number||
|&emsp;&emsp;&emsp;&emsp;specialFromDate|促销开始日期||false|number||
|&emsp;&emsp;&emsp;&emsp;specialToDate|促销结束日期||false|number||
|&emsp;&emsp;&emsp;&emsp;availablity|availablity||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Warn||
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
# 将listing 加入或移除图书馆

> 作者：1638648874@qq.com

## 将listing 加入或移除图书馆
**作者**:`胡雍`


**接口地址**:`/ebay/listing/addOrRemoveListingLibray`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入ebayListing


**请求示例**:


```javascript
{
	"addLibrayName": "测试图书馆1",
	"deleteLibrayName": "测试图书馆2",
	"listingIds": [1433295506279370754]
}
```




**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|dto|dto|body|true|EbayListingUpdateLibraryDTO|EbayListingUpdateLibraryDTO|
|&emsp;&emsp;addLibrayName|新增图书馆名||false|string||
|&emsp;&emsp;deleteLibrayName|删除图书馆名||false|string||
|&emsp;&emsp;listingIds|ebay listing 主表ID||true|array|integer|||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601644571641138100610368"
    }
}
```
# ebay发送站内信

> 作者：1638648874@qq.com

## ebay发送站内信

**作者**:`胡雍`

**接口地址**:`/ebayMemberMessageSend/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入ebayMemberMessageAddDTOS


**请求示例**:


```javascript
[
	{
		"body": "dear friend, thanks for your message. But we sent the item color by random. could you pls check again our item page. we wrote, We don´t offer color choose, all items will send by random,there are many patterns. we sent the item by random. since we send item by batch, our warehouse staff don´t really have the time to separate orders by color.hope you could understand!thanks!",
		"itemId": "1534884",
		"orderNo": "525340468",
		"recipientUserId": "jak_8796",
		"recipientUserName": "james akers",
		"sender": "euroup",
		"sendingUserId": "euroup",
		"subject": "邮件标题"
	}
]
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ebayMemberMessageAddDTOS|ebayMemberMessageAddDTOS|body|true|array|EbayMemberMessageAddDTO|
|&emsp;&emsp;body|发送内容||true|string||
|&emsp;&emsp;itemId|ItemID||true|string||
|&emsp;&emsp;orderNo|订单编号||true|string||
|&emsp;&emsp;recipientUserId|接收人ID||true|string||
|&emsp;&emsp;recipientUserName|接收人||true|string||
|&emsp;&emsp;sender|发送人名称||true|string||
|&emsp;&emsp;sendingUserId|发送人用户ID||true|string||
|&emsp;&emsp;subject|标题||fasle|string|||


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
	"attachedMap": {},
	"code": 200,
	"data": [
	{
	"orderNo":"",//订单编号
	"itemId":"1534884",// Item ID
	"sendStatus":1,// 0：待发送,1:发送成功 2:发送失败
	"sendResult":null// 发送结果(包含错误信息)，如果sendStatus为2 ，会有错误信息
	}
	],
	"msg": "操作成功",
	"success": true
}
```
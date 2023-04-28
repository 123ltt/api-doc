# eb批量手工同步

> 作者：lizhiyuan

**作者：** 

- LZY

**简要描述：** 

- 平台订单批量手工同步

**请求URL：** 

- ` /ebay/batchGrabAndSync`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "store":"店铺编码",
    "country":"国家二字编码",
    "searchContent":"搜索内容，多个单号逗号或者换行隔开",
	"startTime":"开始时间",
    "endTime":"结束时间",
	"timeType":"时间类型"
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|store |String   |店铺编码|否||
|country |String   |国家二字编码|否|
|searchContent |String   |搜索内容，多个单号逗号或者换行隔开|否|
|startTime |date   |开始时间|否|
|endTime |date   |结束时间|否|
|timeType |string   |时间类型|"create": 创建时间，"update": 更新时间|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": "提交成功！数据抓取需要5-10分钟，请提交抓取申请后到列表页面通过单号重新查询抓取结果。",
    "msg": "操作成功"
}
```
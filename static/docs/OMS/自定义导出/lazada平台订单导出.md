# lazada平台订单导出

> 作者：chenpan

## Author
chenpan

## 请求URL

- ` /oms/om/downloadCenter/add `

## 请求方式

- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|processingStatus |是  |int |状态 0待处理 1处理中 2成功 3失败 添加时传0  |
|modular |是  |String | 模板分类  平台导出PLAT_EXPORT |
|taskParameters |是  |String |任务参数  自定义导出的参数格式如下示例描述 |
|exportTemId |是  |Long |模板id |
|paramType |是  |int |  2.平台列表|
|fileName |是  |String | 模板名称加当前时间戳 |
|platformCode| 是| string |平台code 如"LZ"
## 请求示例
paramType 为2时 taskParameters参数为:
{
	"paramType": 2,
	"lzPlatOrderMainSearchDTO": {
		"firstGrabDateEnd": "2021-08-03 23:59:59",
		"firstGrabDateStart": "2021-07-03 00:00:00",
		"orderType": "",
		"platOrderStatusType": "",
		"searchContent": "",
		"searchType": "1",
		"shippingTypeInt": "1",
		"storeNameListStr": ""
	}
}
"lzPlatOrderMainSearchDTO" 为页面选择的查询条件
## 返回示例 
 ``` 
{
    "code": 200,
    "success": true,
    "data": ,
    "msg": "操作成功"
}

 ```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
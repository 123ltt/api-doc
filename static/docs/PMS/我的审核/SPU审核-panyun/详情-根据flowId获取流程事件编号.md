# 详情-根据flowId获取流程事件编号

> 作者：yun527292121@163.com

## 简要描述

- 根据flowId获取流程事件编号,用于SPU流程详情页底部审核选项的初始化

## 请求URL
- ` /blade-product/flow/getFlowCurrentEvent?flowId={#flowId}`
  
## 请求方式
- GET

## 请求示例
``` 

```

## 参数

|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|flowId |流程ID|true |String |

## 返回示例 

``` 
{
	"code": 0,
	"msg": "",
	"success": true,
	"data": {
		"flowId": "0bc22f5df66b4b8dbecc16ee65cf1c35",
		"ifCanSubmitFlow":false,
		"currentNodeDesc": "人工安全审核",
		"currentBizStatusDesc": "待人工安全审核",
		"eventList":[
		{
			"eventNo":"E0405",
			"eventName":"审核通过"
		},{
			"eventNo":"E0401",
			"eventName":"审核不通过",
			"mustField": [
				{
					"fieldCode": "planStartTime",
					"fieldName": "计划开始时间",
					"ifRequired": true,
					"ifShow": true
				},
				{
					"fieldCode": "remark",
					"fieldName": "备注",
					"ifRequired": false,
					"ifShow": true
				}
			]
		}]
	}
}
```

## 返回参数说明 data

|参数名|说明|类型|
|:-----  |:-----|-----|
|flowId |流程ID   |String |
|ifCanSubmitFlow |Boolean |是否能进行流程操作，结束环节or系统安全审核环节，不能人工操作 |
|currentNodeDesc |环节名称   | String |
|currentBizStatusDesc |环节业务状态名称   | String |
|eventList | 当前环节可进行的流程操作  |EventInfoVO[]  |
| └ eventNo | 事件编号,提交流程时传eventNo给后端即可  |String  |
| └ eventName |事件名称   | String |
| └ mustField |显示/必填字段,前端根据此字段决定提交流程时哪些字段显示or必填   | FieldVO[] |
|　└ fieldCode |字段编码   | String |
|　└ fieldName |字段显示名称   | String |
|　└ ifShow |是否显示   | Boolean |
|　└ ifRequired |是否必填   | Boolean |

## 备注
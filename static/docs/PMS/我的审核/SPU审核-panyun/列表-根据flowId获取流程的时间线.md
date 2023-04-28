# 列表-根据flowId获取流程的时间线

> 作者：yun527292121@163.com

## 简要描述

- 根据flowId获取流程的昨天今天明天
![](https://www.showdoc.com.cn/server/api/attachment/visitfile/sign/c79fa35c058a5a071e3e23e8de9f35ca?showdoc=.jpg)

## 请求URL
- ` /blade-product/flow/getFlowTimeline?flowId=#{flowId}`
  
## 请求方式
- GET

## 请求示例
```
/blade-product/flow/getFlowNodeNoAndBizStatusTree?flowNo=34e3dcc9be3242c8887fce3a0285d2d3
```

## 参数
|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|flowId |流程实例Id |true |String |

## 返回示例 

``` 
{
    "code": 0,
    "data":{
    "data": [
        {
            "eventName": "创建SPU审核流程",
            "handlerUserName": "潘韵",
            "nodeName": "START",
            "nodeType": "before",
            "updateTime": "2020-09-25 09:34:36"
        },
        {
            "nodeName": "文案信息补充",
            "nodeType": "now"
        },
        {
            "nodeName": "美工做图",
            "nodeType": "future"
        },
        {
            "nodeName": "系统安全审核",
            "nodeType": "future"
        }
    ]
},
    "msg": "",
    "success": true
}
```

## 返回参数说明 data

|参数名|说明|类型|
|:-----  |:-----|----- |
|eventName |操作结果   | String |
|handlerUserName |处理人名称   | String |
|nodeName |环节名称   | String |
|nodeType |环节类型:before-历史节点，now-当前节点,future-将来节点  | String |
|updateTime |操作时间:2020-09-25 09:34:36   | String |



## 备注
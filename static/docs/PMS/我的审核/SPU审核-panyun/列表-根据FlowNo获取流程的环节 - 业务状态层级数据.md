# 列表-根据FlowNo获取流程的环节/业务状态层级数据

> 作者：yun527292121@163.com

## 简要描述

- 根据FlowNo获取流程的环节/业务状态层级数据
![](https://www.showdoc.com.cn/server/api/attachment/visitfile/sign/ffaec3805a88eaeb90d808590b54ea76?showdoc=.jpg)

## 请求URL
- ` /blade-product/flow/node/getFlowNodeNoAndBizStatusTree?flowNo=FLOW_SPU`
  
## 请求方式
- GET

## 请求示例
```
/blade-product/flow/getFlowNodeNoAndBizStatusTree?flowNo=FLOW_SPU
```

## 参数
|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|flowNo |流程编号:FLOW_SPU-SPU/组合SKU审核,FLOW_NEW_PRODUCT-产品开发审核,FLOW_ART_DESIGNER_TASK-美工任务|true |String |

## 返回示例 

``` 
{
    "code": 0,
    "data": [
        {
            "bizStatusList": [
                {
                    "bizStatusName": "文案信息补充",
                    "bizStatusNo": "SPU_BIZ_0101"
                }
            ],
            "nodeName": "文案信息补充",
            "nodeNo": "SPU_NODE_01"
        }
    ],
    "msg": "",
    "success": true
}
```

## 返回参数说明 data

|参数名|说明|类型|
|:-----  |:-----|----- |
|nodeNo |环节编码   | String |
|nodeName |环节名称   | String |
|bizStatusList |业务状态数组   | BizStatusVO[] |
|└  bizStatusNo |环节业务状态编码   | String |
|└  bizStatusName |环节业务状态名称   | String |


## 备注 

- 更多返回错误代码请看首页的错误代码描述
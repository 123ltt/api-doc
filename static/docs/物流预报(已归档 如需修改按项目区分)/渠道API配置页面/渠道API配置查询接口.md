# 渠道API配置查询接口

> 作者：1254837494@qq.com

简要描述

    渠道API配置查询接口

请求URL

   {tms-base}/base/channelApi/list

请求方式

    GET

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|channelCode |String   |渠道编码|无
|lpId |String   |物流商id|无
|status |int   |状态 启用：1 禁用:2|无

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|id |Long   |id|无
|channelCode |String   |渠道编码|无
|channelName |String   |渠道名称|无
|strategyName |String   |策略名|无
|paramJson |String   |接口参数json|无


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": 26,
                "channelCode": "F91-06",
                "strategyName": "liTonUbi",
                "paramJson": "{\"token\":\"pcl-NIQtbmrSqncSCVPajA\",\r\n\"key\":\"F-AzArAmSI8FSBBHNjX3Jw\".\r\n\"url\":\"https://cn.etowertech.com/\"}\r\n",
                "channelName": "UBI加拿大带电",
                "lpId": 1,
                "lpName": "顺丰"
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [
            {
                "column": "create_time",
                "asc": false
            },
            {
                "column": "id",
                "asc": false
            }
        ],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
 
```
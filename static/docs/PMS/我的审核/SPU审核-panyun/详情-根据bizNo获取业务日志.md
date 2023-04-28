# 详情-根据bizNo获取业务日志

> 作者：yun527292121@163.com

## 简要描述

- 根据bizNo获取业务日志

## 请求URL
- ` /blade-product/bizlog/getBizBlogPage?bizNo=1301096982776942594&amp;entityCode=NEW_PRODUCT`
  
## 请求方式
- GET

## 参数

|参数名|说明|是否必选|类型|编号类型|
|:----    |:---|:----- |-----   |-----   |
|bizNo |业务数据编号|true |String |productSpu productSku 美工表id 新品表id|
|entityCode |实体编号|true |String |取值：NEW_PRODUCT-产品开发 / SKU / SPU / COMBINE_SKU-组合SKU/ART_DESIGNER_TASK-美工任务|


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
				"createUserName":"admin",
                "createTime": "2020-09-25 19:32:24",
				"loggerDesc":"批量备注",
                "msgBrief": "确认供应商环节,操作:通过,备注:确认供应商通过"
            }	
        ],
        "total": 10,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
```

## 返回参数说明 data.records

|参数名|类型|说明|
|:-----  |:-----|-----|
|createUserName |String   | 操作人姓名|
|createTime |String   |操作时间，2020-11-11 11:11:11|
|loggerDesc |String   |操作类型|
|msgBrief |String   |操作简要描述，用户可见，例如：人工安全审核环节，审核通过，备注：OK|

## 备注
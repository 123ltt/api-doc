# 查询SKU头程运费和采购成本

> 作者：13243718327@163.com

## 简要描述

- 根据配货单号和SKU编码查询头程运费和采购成本

## POM依赖
-   
`
        &lt;dependency>
			&lt;groupId>com.zhkj.ftms&lt;/groupId>
			&lt;artifactId>ftms-api&lt;/artifactId>
			&lt;version>1.0.0-SNAPSHOT&lt;/version>
		&lt;/dependency>
	`
 
## 请求方式
- POST 

## 请求接口
com.zhkj.ftms.feign.ISkuCostClient#findSkuCost
## 请求体内容( 支持批量查询)

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|deployNumber |是  |string |配货单号   |
|sku |是  |sku | sku编码    |

## 请求示例
``` 
[
    {
       "deployNumber": "T20211011094438001",
       "sku": "STA6K845J98"
    },
     {
       "deployNumber": "T20211011094438001",
       "sku": "STA6K845J94"
    }
]


```
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "deployNumber": "T20211011094438001",
            "sku": "STA6K845J98",
            "freightCost": "1092.413795",
            "purChaseCost": null
        },
        {
            "deployNumber": "T20211011094438001",
            "sku": "STA6K845J94",
            "freightCost": "7.662072",
            "purChaseCost": null
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8728b1634267928769100424376"
    }
}
```

## 返回参数说明 
**备注:** 状态码参照Bladex R code=200时为成功 其他都失败调用方重试

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|deployNumber |String   |配货单号  |
|sku |String   |sku编码  |
|freightCost |BigDecimal   |单个SKU头程费用  |
|purChaseCost |BigDecimal   |单个SKU采购成本  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
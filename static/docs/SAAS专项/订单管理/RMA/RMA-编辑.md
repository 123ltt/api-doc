# RMA-编辑

> 作者：wuxin

## 简要描述

- 退料审查

## 请求URL
- `/oms/orderRma/investigate`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id     |是  |long | 主键ID    |
|omOrderId     |是  |string | OMS订单号    |
|platOrderId     |是  |string | 平台订单号    |
|source     |是  |int | 来源 1-Add 2-Patch 3-PlatfromReturn 4-refund 5-multichannel    |
|tag     |是  |string | 标签    |
|tagRemark     |是  |string | 标签备注    |
|categoryId     |是  |long | 类目ID    |
|quantity     |是  |string | 数量    |
|authenticateResult     |是  |string | 鉴定结果    |
|remark     |是  |string | 备注内容    |

## 返回示例 

``` 
  {
    "code": 0,
	"msg": null,
    "data": {
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |

## 备注 

- 更多返回错误代码请看首页的错误代码描述
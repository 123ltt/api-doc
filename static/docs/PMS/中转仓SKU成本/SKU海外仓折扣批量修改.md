# SKU海外仓折扣批量修改

> 作者：wuxin

## 简要描述

- SKU海外仓折扣批量修改

## 请求URL
- `/transfer/sku/cost/batchUpdate`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |List&lt;long> |主键id   |
|purchaseCost |否  |bigdecimal | 采购成本    |
|purchaseDiscount     |否  |bigdecimal | 采购折扣    |
|firstCost |否  |bigdecimal | 头程成本    |
|firstCostDiscount     |否  |bigdecimal | 头程折扣    |


## 返回示例 

``` 
  {
    "code": 0,
    "data": {
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |


## 备注 

- 更多返回错误代码请看首页的错误代码描述
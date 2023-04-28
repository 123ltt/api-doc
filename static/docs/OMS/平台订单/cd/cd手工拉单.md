# cd手工拉单

> 作者：chenpan

## 简要描述

- cd手工拉单

## 请求URL
- ` /cdPlatOrdermain/batchGrab `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode |是  |string |店铺   |
|storeCodeList |是  |array |店铺集合   |
|beginning |否  |date | 开始时间    |
|ending     |否  |date | 结束时间    |
|timeType     |否  |string | createTime updateTime  |
|platOrderIdList     |否  |List | 订单列表    |
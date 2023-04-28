# TMS推送出库单退件信息

> 作者：shiweijie122@163.com

## 简要描述

- TMS推送出库单退件信息

## 依赖
```java
&lt;dependency>
	&lt;groupId>com.zhkj.lps&lt;/groupId>
	&lt;artifactId>lps-api&lt;/artifactId>
	&lt;version>1.0.0-SNAPSHOT&lt;/version>
&lt;/dependency>
```
## 接口方法
- `com.zhkj.lps.feign.ILogisticShipmentClient#pushReturned`

## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|code |是  |string |物流单号   |
|returnedTime |是  |date | 退件时间    |

## 返回示例 

``` 
  [
  	{
		"code":"P1001",
		"returnedTime":"2022-01-18 12:00:00"
	},
	{
		"code":"P1002",
		"returnedTime":"2022-01-18 12:00:00"
	}
  ]
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |响应代码  |
|success |boolean   |是否成功  |
|msg |string   |提示信息  |
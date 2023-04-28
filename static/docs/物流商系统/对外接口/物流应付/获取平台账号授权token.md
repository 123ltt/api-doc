# 获取平台账号授权token

> 作者：13243718327@163.com

## 简要描述

- 调用此接口获取平台物流账号对应的授权token

## API引入
```xml
&lt;dependency>
	&lt;artifactId>com.zhkj.tms&lt;/artifactId>
    &lt;groupId>ctms-system-api&lt;/groupId>
    &lt;version>2.0.1-SNAPSHOT&lt;/version>
&lt;/dependency>
```

## 调用方式
- 类：IPlatformAccountClient
- ```java
	/**
	 * 根据物流账号获取平台店铺token
	 *
	 * @param accountNo    物流账号
	 * @return
	 */
	@GetMapping(API_PREFIX + "/getTokenByAccountNo")
	R&lt;String> getTokenByAccountNo(@RequestParam(value = "accountNo") String accountNo,@RequestParam(value = "platformCode") String platformCode);
``` 

## 请求参数-订单信息

|参数名|必选|类型|说明|备注|
|:----    |:---|:----- |-----   |
|accountNo |是  |string |物流账号   |物流账号|
|platformCode |是  |string |平台编码  |平台编码|




## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "msg": "操作成功"
}
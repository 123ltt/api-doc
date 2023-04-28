# 推送SKU状态库存

> 作者：xiezhihua@zehui.com

**简要描述：** 

- 推送库存
- 参数需要签名

**请求URL：** 
- ` /client/wms/sku/push `
  
**请求方式：**
- post `text/plain` 


 **请求参数示例**

``` 
[
	{
	  "sku": "",
	  "skuNw": "",
	  "skuStatus": "",
	  "skuStatusMsg": "",
	  "sellable": 0,
	  "reserved": 0,
	}
]
```

```
// data 数据为上面的json数据
// key = V9uBAznTO0BkjX870XdxbUIcCOftq5FT
  static encryptAES放入请求体中(data, key) {
    const dataBytes = CryptoJS.enc.Utf8.parse(data);
    const keyBytes = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(dataBytes, keyBytes, {
      iv: keyBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  }
  // 将encryptAES放入请求体中
```
**Header参数：** 

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|Content-Type |true  |text/plain | 类型|

**参数：** 

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|sku |true  |string |新sku |
|skuNw |false  |string |牛蛙sku |
|skuStatus |true  |integer |sku状态 |
|skuStatusMsg |true  |integer |sku状态描述 |
|sellable |true  |integer |可用库存 |
|reserved |false  |integer |占用库存 |

 **返回示例**

``` 
{
  "code":200,
  "data":true,
  "msg":"",
  "success":true
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |
|data |boolean  |是否成功

 **备注** 

- test环境：http://test-ams-gateway.zehui.local/lms-lazada
- prod环境：https://ams-gw.izehui.com/lms-lazada
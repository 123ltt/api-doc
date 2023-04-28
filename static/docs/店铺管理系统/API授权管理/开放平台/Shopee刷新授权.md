# Shopee刷新授权

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/refreshAuthorization `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/refreshAuthorization?platformCode=SP&name=SANDBOX_BUYER.91c1eda49c7f21
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |string |平台简码   |
|name |是  |string | 店铺名称    |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platformCode": null,
                "name": "SANDBOX_BUYER.12cb859cbff911",
                "code": null,
                "siteCode": "TW",
                "result": true
            }
        ],
        "names": [
            "SANDBOX_BUYER.12cb859cbff911-TW"
        ],
        "refreshFailedNames": []
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af403a4164552948989116767"
    }
}
```


## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|records | list   | 授权记录 |
|platformCode | list   | 平台简码 |
|name | list   | 店铺名称 |
|code | list   | 店铺编码 |
|siteCode | list   | 站点 |
|result | list   | 刷新授权结果 |
|names | string   | 参与授权的店铺列表 |
|refreshFailedNames | string   | 刷新授权失败店铺列表 |
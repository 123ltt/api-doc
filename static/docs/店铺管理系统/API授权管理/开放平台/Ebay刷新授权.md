# Ebay刷新授权

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/seller-auth/ebay/refreshAuthorization `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/ebay/refreshAuthorization?platformCode=EB&amp;name=liuyerbaby
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
                "name": "Shinybaby",
                "code": null,
                "siteCode": "MY",
                "refreshSuccess": false
            },
            {
                "platformCode": null,
                "name": "Shinybaby",
                "code": null,
                "siteCode": "TH",
                "refreshSuccess": false
            },
            {
                "platformCode": null,
                "name": "Shinybaby",
                "code": null,
                "siteCode": "PH",
                "refreshSuccess": false
            },
            {
                "platformCode": null,
                "name": "Shinybaby",
                "code": null,
                "siteCode": "VN",
                "refreshSuccess": false
            },
            {
                "platformCode": null,
                "name": "Shinybaby",
                "code": null,
                "siteCode": "ID",
                "refreshSuccess": false
            },
            {
                "platformCode": null,
                "name": "Shinybaby",
                "code": null,
                "siteCode": "SG",
                "refreshSuccess": false
            }
        ],
        "failStoreName": [
            "Shinybaby-MY",
            "Shinybaby-TH",
            "Shinybaby-PH",
            "Shinybaby-VN",
            "Shinybaby-ID",
            "Shinybaby-SG"
        ],
        "successStoreName": []
    },
    "msg": "操作成功"
}
```
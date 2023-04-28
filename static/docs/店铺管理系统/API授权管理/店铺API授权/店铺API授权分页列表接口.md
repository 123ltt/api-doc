# 店铺API授权分页列表接口

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/auth/pageAuths `
  
## 请求方式

- POST 

## 参数示例

 ``` 
{
    "platform": "",
    "storeName": "",
    "storeCode": "lazada_0072",
    "status": "",
    "current": 1,
    "size": 10
}
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platform |是  |string |平台ID   |
|storeName |是  |string | 店铺名称    |
|storeCode |是  |string | 店铺编号    |
|status     |否  |string | 状态 ：1 有效，2 失效   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "current": 0,
        "size": 10,
        "pages": 1,
        "total": 6,
        "records": [
            {
                "id": "1396795120768167937",
                "createUser": -1,
                "createDept": -1,
                "createTime": "2021-05-24 19:48:03",
                "updateUser": -1,
                "updateTime": "2021-05-26 09:30:01",
                "status": 1,
                "isDeleted": 0,
                "createUserName": "",
                "updateUserName": null,
                "storeId": "1396794816152899586",
                "platformId": "1328884321398981633",
                "siteId": "1353618791724089345",
                "authStatus": "有效",
                "developAccount": "",
                "deadline": null,
                "storeCode": "lazada_0072",
                "storeName": "vitalitys",
                "siteCode": "PH",
                "platformCode": "LZ",
                "platformName": "lazada"
            },
            {
                "id": "1396795120810110978",
                "createUser": -1,
                "createDept": -1,
                "createTime": "2021-05-24 19:48:03",
                "updateUser": -1,
                "updateTime": "2021-05-26 09:30:01",
                "status": 1,
                "isDeleted": 0,
                "createUserName": "",
                "updateUserName": null,
                "storeId": "1396794816152899586",
                "platformId": "1328884321398981633",
                "siteId": "1353619094791913473",
                "authStatus": "有效",
                "developAccount": "",
                "deadline": null,
                "storeCode": "lazada_0072",
                "storeName": "vitalitys",
                "siteCode": "VN",
                "platformCode": "LZ",
                "platformName": "lazada"
            }
        ]
    },
    "msg": "操作成功"
}
```
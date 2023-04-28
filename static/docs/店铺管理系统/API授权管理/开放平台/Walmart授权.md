# Walmart授权

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/walmart/authorization`
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/walmart/authorization?storeCode=walmart_US_07ZA
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode |是  |string |walmart_US_07ZA   |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platformCode": null,
                "name": "alfansolive",
                "code": null,
                "siteCode": null,
                "result": true
            }
        ],
        "names": [
            "alfansolive"
        ],
        "authFailedNames": []
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ad1648808962310102830292"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----|              
|records | string   | 授权记录列表 |
|platformCode | string   | 平台简码 |
|code |string   |店铺编码  |
|name |string   |店铺名称  |
|result |string   |授权结果  |
|names |string   |授权的店铺-LAZADA  |
|authFailedNames |string   |授权失败店铺列表 |
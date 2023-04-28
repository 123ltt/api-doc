# 根据字典code 获取字典列表(树形)

> 作者：1254837494@qq.com

## 简要描述

- 根据字典code 获取字典列表

## 请求URL
- `http://{网关地址}/ftms/dict-biz/dictionary-tree?code={字典code}`
  
## 请求方式
- GET 

## 请求参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|code|是|string|字典代码|

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1491325827916464129",
            "parentId": "1491325652946878465",
            "code": "ftms_dict_cabinet",
            "dictKey": "FCL",
            "dictValue": "FCL",
            "sort": 0,
            "remark": "整柜",
            "isSealed": null,
            "isDeleted": null,
            "children": [
                {
                    "id": "1491325906131845121",
                    "parentId": "1491325827916464129",
                    "code": "ftms_dict_cabinet",
                    "dictKey": "20HQ",
                    "dictValue": "20HQ",
                    "sort": 0,
                    "remark": null,
                    "isSealed": null,
                    "isDeleted": null,
                    "parentName": null,
                    "hasChildren": false
                },
                {
                    "id": "1491325950285283329",
                    "parentId": "1491325827916464129",
                    "code": "ftms_dict_cabinet",
                    "dictKey": "40HQ",
                    "dictValue": "40HQ",
                    "sort": 0,
                    "remark": null,
                    "isSealed": null,
                    "isDeleted": null,
                    "parentName": null,
                    "hasChildren": false
                },
                {
                    "id": "1491325980496855042",
                    "parentId": "1491325827916464129",
                    "code": "ftms_dict_cabinet",
                    "dictKey": "40HC",
                    "dictValue": "40HC",
                    "sort": 0,
                    "remark": null,
                    "isSealed": null,
                    "isDeleted": null,
                    "parentName": null,
                    "hasChildren": false
                }
            ],
            "parentName": null,
            "hasChildren": false
        },
        {
            "id": "1491326124638306305",
            "parentId": "1491325652946878465",
            "code": "ftms_dict_cabinet",
            "dictKey": "LCL",
            "dictValue": "LCL",
            "sort": 0,
            "remark": "拼柜",
            "isSealed": null,
            "isDeleted": null,
            "parentName": null,
            "hasChildren": false
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |字典代码(唯一值)  |
|dictKey |string   |字典key  |
|dictValue |string   |字典value  即每个key对应的value  |
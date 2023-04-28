# 查询所有数据tree

> 作者：1254837494@qq.com

## 简要描述

- 查询所有数据tree

## 请求URL
- `http://{网关地址}/base/sign/list`
  
## 请求方式
- GET 

## 返回示例 

``` 
{
    "code":200,
    "success":true,
    "data":[
        {
            "id":"533",
            "parentId":"0",
            "name":"WM",
            "fullName":"walmart",
            "children":[
                {
                    "id":"534",
                    "parentId":"533",
                    "name":"USPS",
                    "fullName":"USPS",
                    "hasChildren":false
                }
            ]
        }
    ]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |long   |id  |
|parentId |long   |父级id  |
|name | string  |标记简称值  |
|fullName |  string |标记简称描述(页面展示的时候展示此值)  |

## 备注
# 店铺API授权删除接口

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/auth/delAuth `
  
## 请求方式

- POST 

## 参数示例


 ``` 
 {
  "id": 1315584170765602800
} 

 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |授权ID   |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": null,
    "msg": "API授权删除成功"
}
```
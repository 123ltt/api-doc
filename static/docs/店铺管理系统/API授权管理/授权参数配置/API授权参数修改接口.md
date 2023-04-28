# API授权参数修改接口

> 作者：luocheng

## 作者

- 李志远

## 请求URL
- ` /store/auth/updateParam `
  
## 请求方式
- POST 

## 参数示例

 ``` 
 {
  "id": 1314498464233373700,
  "platform": 1314104622689661000,
  "site": 1314109310377980000,
  "fba": true,
  "parameter": "ClientID"
} 

 ```



## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |授权参数ID   |
|platform |是  |string | 平台ID    |
|site     |否  |string | 站点ID，单选，如果选择全部请将参数设置为-1    |
|fba     |否  |string | FBA    |
|parameter     |否  |string | 参数名    |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {},
    "msg": "API授权参数修改成功"
}
```
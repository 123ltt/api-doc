# 查询sku销售价和数量

> 作者：xingzhen

## Author

zhuwenxing

## 请求URL
- ` http://test-ams-gateway.zehui.local/oms/packageMain/getPriceAndQuantity`
  
## 请求方式
- POST 

## HEADER

`Blade-Auth = access_token`


注意：授权接口请联系 AMS - 杨锐波

## 参数

|参数|类型|描述|
|:-------|:-------|:-------|
| packageCode | string| 包裹号(必传) |
| nwSku | string| 牛蛙sku(非必传) |
| tenantId | string| 租户ID(必传) |
| pmsSku | string| pmsSku(必传) |

## 请求参数示例 

``` 
 {
    "packageCode": "AM4512554545A",
    "nwSku": "xxxx",
    "tenantId":"000000"
}
```

## 返回参数说明 
|参数|类型|描述|
|:-------|:-------|:-------|
| code | number| 200 |
| success | boolean| true |
| msg | string| 操作成功 |
| - data |object  | 无 |
| price | Bigdecimal| 销售价 |
| quantity | Int| 数量 |

## 响应参数示例 
```
{
    "code":200,
    "success":true,
	"msg":"操作成功",
    "data":{
        "price": 32.2,
        "quantity":2
    }
}
```
## 备注
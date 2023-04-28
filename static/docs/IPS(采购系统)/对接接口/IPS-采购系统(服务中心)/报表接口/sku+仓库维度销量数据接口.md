# sku+仓库维度销量数据接口

> 作者：18566180654

**简要描述：**

- 备货需求明细对应的sku+仓维度销量数据

接口负责人：胡立新

**同步方式：**
POST

**接口URL：**
/reportForm/getListDataBySkuAndWarehouseId



**请求参数说明**

|参数名|类型|必填|参数说明|备注|
|:--------|:-----|:-----||
|-skuList|List| 是|sku集合 |pms系统sku|
|-warehouseIds|List| 是|仓库id集合 ||

**请求数据：**

```json
{
    "skuList": ["SPSHA0345YQ"],
    "warehouseIds": [293]
}
```
**返回示例**

```
{
    "code": 200,
    "success": true,
    "data": [
        {
            "pmsSku": "SPSHA0345YQ",
            "warehouseId": 293,
            "productNum30": 6,
            "productNum7": 0,
            "towWeeks": 0,
            "threeWeeks": 15
        }
    ],
    "msg": "操作成功"
}
```

**返回参数说明**

|参数名|类型|说明|备注|
|:-----|:-----|-----| |
|code|Integer| 状态码 |  |
|success|Boolean| 标识 |  |
|msg|String| 信息 |  |
|data|Object[data]| | | |

**data参数说明**

|参数名|类型|必填|参数说明|备注|
|:--------|:-----|:-----||
|-pmsSku|String| 是|sku ||
|-warehouseId|Long| 是|仓库id ||
|-productNum30|Long| 是|近30天商品销量 ||
|-productNum7|Long| 是|近7天商品销量 ||
|-towWeeks|Long| 是|近2周销量 ||
|-threeWeeks|Long| 是|近3周销量 ||


 **备注**

-
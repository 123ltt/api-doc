# 提供给采购更新SKU成本接口

> 作者：lijinghua@zehui.com

## 简要描述

提供给采购系统, 更新 SKU 成本接口

**POM依赖**

```json
&lt;parent>
	&lt;groupId>com.zhkj.cpms&lt;/groupId>
	&lt;artifactId>zhkj-cpms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

**依赖方法**

```java
com.zhkj.cpms.feign.PurchaseClient#updateProductCostBatch
```

**参数** 

| 参数  | 含义  |
| ------------ | ------------ |
| pmsSku  | pmsSku  |
| productCost  |  产品成本 |

**参数**
暂时不提供SPU价格信息更新

**请求示例**

```json
[
    {
        "pmsSku": "DJYRXHSC8450A",
        "productCost": 849.5874
    }
]
```

**响应信息**

```json
{
    "code": 200,
    "success": true,
    "data": true,
    "msg": "更新成功",
    "attachedMap": {
        "traceId": "0af4048a163455657750310581"
    }
}
```
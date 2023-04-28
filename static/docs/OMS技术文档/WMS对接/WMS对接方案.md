# WMS对接方案

> 作者：yun527292121@163.com

## 方案

- 能推送的条件：包裹状态 IN (待推送,推送失败)
- 定时任务：读取“待推送”状态的包裹，获取 IWmsAdapter 推送到不同wms系统，并更新 oms_package_wms 表（oms wms表的wms状态、wms单号等字段）；

- 定时任务：轮询“未发货”状态的包裹，通过 IWmsAdapter 拉取wms系统的包裹状态，更新oms_package_wms 表；

- 包裹wms表增加字段：
-- wms类型字段：wms_type int  取值:1-泽汇深圳仓库php wms,2-万邑通,3-谷仓，4-泽汇海外仓
-- wms订单号字段：wms_order_no varchar(100)  wms返回的单号
-- 推送到wms的单号字段：`push_wms_no` varchar(34) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'oms生成，推送到wms系统的唯一单号；撤单恢复重新推送wms时生成新单号;包裹号后面加数字：AM2101201031000001A1',
-- wms其它字段信息：wms_info_json，例如泽汇自建海外仓存储为:{    "is_picked": "0",    "o_logistics": "0",    "o_tracknumber": null}


- 根据仓库编码查找对应的wms_type

- 根据 wms_type 获取wms适配器 IWmsAapter
- IWmsAdapter 提供的方法有：
-- push2Wms	推送包裹到wms
-- getWmsPackageInfo  获取wms包裹状态
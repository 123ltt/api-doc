# 费用 渠道表 AND 渠道限制表

> 作者：2318309077

##费用 渠道表 : zh_optimize_logistics

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |bigint |id   |
|dwg_id |是  |varchar(32) | 发货方式组id    |
|template_type     |否  |tinyint | 规则类型 1：重量区间 2：首重续重  3：邮编分区 4：国家分区    |
|currency |是  |varchar(32) |币种   |
|start_date |是  |datetime | 开始时间    |
|end_date |是  |datetime |结束时间   |
|remarks |是  |varchar(255)  | 备注    |


##费用 渠道限制表 : zh_optimize_logistics_rules

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |bigint |id   |
|l_id |是  |bigint |父id   |
|dwg_id |是  |varchar(32) | 发货方式组id    |
|region_type |是  |tinyint |地区类型 1：国内 2：国外   |
|foreign_region |是  |varchar(2000) | 国外地区    |
|partition_name |是  |varchar(55) |分区名称   |
|coordinate |是  |int  | 坐标    |
|rule_type     |否  |tinyint | 计费类型 1：重量区间 2：首重续重     |
|template_type     |否  |tinyint | 规则类型 1：重量区间 2：首重续重  3：邮编分区 4：国家分区    |
|min_weight |是  |int |最小重量   |
|max_weight |是  |int | 最大重量    |
|postage |是  | decimal(32,6) |邮费   |
|fuel_charge |是  |decimal(32,6) | 燃油费    |
|min_freight |是  |decimal(32,6) | 最低运费    |
|first_weight |是  | decimal(32,2) |首重   |
|first_weight_price |是  |decimal(32,6) | 首重价格    |
|continuation_weight |是  |decimal(32,2)  | 续重    |
|continuation_weight_price |是  | decimal(32,6) |续重价格   |
|incidental_price |是  |decimal(32,6) | 杂费    |
|currency |是  |varchar(32) | 备注    |
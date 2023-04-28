# oms_prop

> 作者：zhouhuan

```sql
select t.prop_key, t.prop_value, t.remark from oms_prop t where t.prop_key in 
('MOCK_WISH_FLAG', 'MOCK_AMAZON_FLAG', 'mock.ebay.flag', 'mock.smt.flag', 'mock.lz.flag', 'mock.wm.flag');
```

```sql
select * from oms_prop t where t.prop_key in (
'wyt.api.url',
'zehui.hwc.api.url',
'szwms.api.url',
'oos.url',
'batch.mark.oss.url',
'pkg.batch_no.2wms.url');
```


| key  | 备注  |
| ------------ | ------------ |
|pkg.amount.templ.wm|包裹详情金额因子模板-WH|
|plat.api.url|amazon接口中转地址|
|init.last.point|初次抓单时最后时间点默认值|
|temp.file.path|手工导单缓存路径|
|am.transactions.rate|amazon平台交易费率|
|MOCK_WISH_FLAG `危险`|亚马逊标记的moke开关，1表示是测试环境， 0是正式环境|
|MOCK_AMAZON_FLAG `危险`|亚马逊标记的moke开关，1表示是测试环境， 0是正式环境|
|mock.warehouse.tree|mock的仓库树|
|wm.transactions.rate|amazon平台交易费率|
|om.order.amount.templ.am|订单管理详情金额因子模板-AM|
|pkg.amount.templ.am|包裹详情金额因子模板-AM|
|wyt.api.url  `危险`||
|wyt.username||
|wyt.password||
|wyt.token||
|wyt.client.id||
|wyt.client.secret||
|wyt.client.code||
|zehui.hwc.api.url `危险`|泽汇自建海外仓接口url，最后的斜杠一定要有哦！！|
|sm.transactions.rate|速卖通平台交易费率|
|sm.logistics.rate|速卖通运费抽成比例|
|sm.packageDelivery.fee|包装出库费|
|ebay.transactions.rate|ebay平台交易费率|
|szwms.gettoken.key|国内wms接口调用的密钥|
|szwms.api.url `危险`|国内wms接口url|
|om.order.amount.templ.sm|订单管理详情金额因子模板-SM|
|om.order.amount.templ.eb|订单管理详情金额因子模板-EB|
|pkg.amount.templ.eb|包裹详情金额因子模板-EB|
|if.sale.order.value|shopee预售订单超时天数|
|if.not.sale.order.value|shopee非预售订单超时天数|
|pkg.amount.templ.sp|包裹详情金额因子模板-SP|
|om.order.amount.templ.sp|订单管理详情金额因子模板-SP|
|lazada.grab.interval|lazada抓单时间间隔|
|lazada.plat.rate|lazada平台税|
|mock.ebay.flag `危险`|ebay标记mock|
|om.order.amount.templ.lz|订单管理详情金额因子模板-LZ|
|pkg.amount.templ.lz|包裹详情金额因子模板-LZ|
|om.order.amount.templ.wm|包裹详情金额因子模板-WM|
|order.templates||
|push.shipped.pkg.tms.time||
|pkg.amount.templ.sm|包裹详情金额因子模板-SM|
|need.filter.profit.exception.check.platform|配置不需要进行负利润拦截的平台|
|oos.url `危险`|推送牛蛙缺货包裹sku数量 url|
|oos.token||
|DEFAULT_MANAGE_RATIO|默认管理费率|
|mock.smt.flag `危险`|速卖通标记的moke开关，1表示是测试环境， 0是正式环境|
|mock.lz.flag `危险`|lazada标记开关|
|wh.transactions.rate|wish平台交易费率|
|IOSS.COUNTRY|欧盟增值税成员国key|
|eb.guest.choose.freight|eb客选物流ke|
|om.order.amount.templ.wh|订单管理详情金额因子模板-AM|
|pkg.amount.templ.wh|包裹详情金额因子模板-WH|
|pkg.shipintercept_timeout||
|sync.pkg.2.elasticsearch.intervals||
|pkg.batch_no.2wms.url `危险`||
|pkg.batch_no.2wms.token||
|sync.om.order.2.elasticsearch.intervals|订单ES索引同步区间 <span style="color:green">@李志远</span>|
|batch.mark.oss.url `危险`||
|sync.om.order.2.elasticsearch.cursor&lt;br/>:20200101000000000_22200101000000000|订单ES索引同步游标 <span style="color:green">@李志远</span>|
|sync.pkg.2.elasticsearch.cursor&lt;br/>:20200101000000000_22200101000000000|包裹ES索引同步游标|
|LZ.push.refund.2.prs.last.point|lz退款数据推送财务应收系统游标|
|LZ.push.pkg.2.prs.last.point|lz出库订单数据推送财务应收系统游标|
|WH.push.pkg.2.prs.last.point|wish出库订单数据推送财务应收系统游标|
|WH.push.refund.2.prs.last.point|wish退款数据推送财务应收系统游标|
|open.managefee.calculate|是否开启管理费计算 0:不开启 1:开启|
|no.managementFee.nwSku|不计算管理费的牛蛙sku|
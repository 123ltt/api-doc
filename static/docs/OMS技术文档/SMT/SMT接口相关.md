# SMT接口相关

> 作者：yun527292121@163.com

## 先配置映射：
- 即将奇门网关（ 87n5q**.com/router/qm ）的所有zhkj.oms.common请求转发到http://39.100.131.72:30002/order/common
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/581a1f1643cc99073a4a11cdc80e686d&showdoc=.jpg)
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/6e82558a92a1fb7f4bb548b72834dd55&showdoc=.jpg)


## 部署api-express

- http://gitlab.zehui.local/publish-and-common-group/platform-api.git 
- /order/common 接口：
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/d3575d6a6b094b5fa0c92adc2ea5bb6c&showdoc=.jpg)

- 添加新的接口要在这里加 if 判断：
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/e2379167ff747a5ef1109bc359fa968f&showdoc=.jpg)

- 发包：http://jenkins.zehui.local/job/api-aliexpress-dev/
- 将部署到这台机器： http://39.100.131.72:30002/
- 日志查询页面：http://39.100.131.72:30002/
 ![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/f6166aad281dd5adaa3386337bcdbc98&showdoc=.jpg)


## 调用示例：
- 接口文档：https://developers.aliexpress.com/doc.htm?docId=37898&docType=2
- com.zhkj.oms.svc.api.smt.proxy.ISmtApiProxy
![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/88afc4abacf1ca5be6821236371dc036&showdoc=.jpg)
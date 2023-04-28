# 异步撤销wms

> 作者：yun527292121@163.com

## 方案
- 锁订单的方法要判断此订单是否有“冻结”的包裹：即baseTask表是否有taskType='CANCEL_WMS'的TODO记录

- 撤销包裹方法：
```
cancelPkg(pkgCode){
	rslt= wmsAdapter.cancelPkg()
	com.zhkj.oms.svc.impl.pkg.push2wms.WmsStatus2OmsPkgStatusSvcImpl#wmsStatus2OmsPkgStatus
	if(rslt=="撤销成功"){
		// 修改oms包裹状态为撤销
	}else if(rslt=="撤销中"){
		// 插入baseTask表:
		// {
		// 	"taskType":"CANCEL_WMS",
		// 	"taskStatus":"TO_DO",
		//  "bizNo":"AM2222A"
		// }
		// baseTask表加一个字段 bizNo
		// bizNo记录为pkgCode
		return;
	}else if(rslt=="撤销失败"){
		// 记日志仓库不允许撤销或撤销失败
		return;
	}
}
```

- 执行 CANCEL_WMS baseTask:
```
com.zhkj.oms.svc.impl.pkg.push2wms.WmsStatus2OmsPkgStatusSvcImpl#wmsStatus2OmsPkgStatus
if (wmsAdapter.ifCancelSuccess(pushWmsNo)){
	// 如果撤销成功
	// 修改oms包裹状态为撤销
	// 修改baseTask为处理完成
}
else if(还在撤销中){
	// 啥都不用做
	return;
}
else{
	// 撤销失败
	// 记日志就行
	// 修改baseTask为处理完成
}
```
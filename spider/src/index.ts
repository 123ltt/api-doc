import path from 'node:path'
import fs from 'fs-extra'
import { spider } from './spider'
import { staticRoot } from './config'
import { isDirectory } from './util'

// 14 LMS
// 39 PMS
// 68 SCRS
// 77 物流优选(已归档、如需修改按目录区分), (335)
// 82 物流优选外部接口
// 91 OMS
// 116 AMS
// 117 OPMS
// 123 物流预报(已归档 如需修改按项目区分), (341)
// 137 LMS——Ebay
// 152 OMS技术文档
// 153 PMS技术文档
// 164 IMS(库存系统)
// 196 ERS系统
// 230 CAMS
// 235 LMS——Lazada
// 250 PSS供应商访厂记录
// 256 物流商系统
// 257 物流优选系统
// 258 物流预报系统
// 259 物流轨迹系统
// 318 CMS
// 339 IPS(采购系统)
// 340 PSS(供应商系统)
// 342 CRA
// 347 头程管理系统
// 348 lms-data
// 352 财务组
// 353 店铺管理系统
// 354 joom
// 357 LMS——Fanno
// 358 物流报表系统
// 359 刊登定价
// 370 SAAS专项
// 379 物流出库单系统
// 381 KOM-AMS
// 396 采购备货系统
// 405 物流商系统（SAAS）
// 406 ADMS

async function bootstrap () {
  const ids = [14, 39, 68, 77, 82, 91, 116, 117, 123, 137, 152, 153, 164, 196, 230, 235, 250, 256, 257, 258, 259, 318, 339, 340, 342, 347, 348, 352, 353, 354, 357, 358, 359, 370, 379, 381, 396, 405, 406]
  // const ids = [14, 39, 68, 77, 82]
  for (const id of ids) {
    await spider(id)
  }
  await updateHomeMenus()
}

async function updateHomeMenus () {
  const arr: string[] = []
  const dirs = await fs.readdir(staticRoot)
  for (const dir of dirs) {
    if (['.vitepress', 'components'].includes(dir)) continue

    if (await isDirectory(path.join(staticRoot, dir))) {
      arr.push(dir)
    }
  }

  await fs.writeJSON(path.join(staticRoot, '.vitepress/components/menu.json'), arr)
}

bootstrap()

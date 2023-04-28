import axios from 'axios'

type TPage = {
  addtime: string;
  author_uid: string;
  cat_id: string;
  page_id: string;
  page_title: string;
}

type TCatalogs = {
  addtime: string;
  cat_id: string;
  cat_name: string;
  item_id: string;
  level: string;
  /** 当前级的 子目录 */
  catalogs?: TCatalogs[];
  /** 当前级的 子菜单 */
  pages?: TPage[];
}

type TMenuData = {
  item_name: string;
  menu: {
    catalogs?: TCatalogs[];
    pages?: TPage[];
  }
}

export type TMenuItem = {
  title: string;
  pageId: string;
  /** 父级名称列表，会用作文件保存的路径 */
  parentsTitle: string[];
}

export async function getMenu (itemId: number) {
  return axios<{ data: TMenuData; error_code: number }>({
    url: 'http://showdoc.zehui.local/server/index.php?s=/api/item/info',
    method: 'post',
    data: {
      item_id: itemId,
      keyword: '',
      default_page_id: 0
    }
  }).then(res => {
    if (res.data.error_code !== 0) return []
    const systemName = res.data.data.item_name
    console.log(itemId, systemName)
    return responseHandler(res.data.data.menu, systemName)
  })
}

function responseHandler (data: TMenuData['menu'], systemName: string) {
  const menus: TMenuItem[] = []
  const recursion = (data: TMenuData['menu'], parents: string[] = []) => {
    if (Array.isArray(data.pages)) {
      data.pages.forEach(item => {
        menus.push({ title: item.page_title, pageId: item.page_id, parentsTitle: parents })
      })
    }

    if (Array.isArray(data.catalogs)) {
      data.catalogs.forEach(item => {
        recursion(item, parents.concat(item.cat_name))
      })
    }
  }

  recursion(data, [systemName])
  return menus
}

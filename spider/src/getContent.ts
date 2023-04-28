import axios from 'axios'

export type TContent = {
  addtime: string;
  attachment_count: string;
  author_uid: string;
  author_username: string;
  cat_id: string;
  is_del: string;
  item_id: string;
  page_comments: string;
  page_content: string;
  page_id: string;
  page_title: string;
}

export async function getContent (pageId: string) {
  return axios<{ data: TContent }>({
    url: 'http://showdoc.zehui.local/server/index.php?s=/api/page/info',
    method: 'post',
    data: {
      page_id: pageId
    }
  }).then(res => res.data.data)
}

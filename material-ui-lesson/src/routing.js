/**
 * Routing
 */
export const Routing =  {
    // - トップ ======================================
     Top: {
       path: "/",
       pageName: "トップ"
    },
  

    // - ブログ =====================================
    Blog: {
      List: {
        path: "/blog",
        pageName: "ブログ記事一覧"
      },
      Details: {
        path: "/blog/[id]",
        pageName: "ブログ記事詳細"
      }
    }
}

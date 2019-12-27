/*
 * @Author: liva
 * @Date: 2019-12-27 18:06:41
 * @LastEditors  : liva
 * @LastEditTime : 2019-12-27 18:23:08
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        content: "components/content",
        common: "components/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views"
      }
    }
  },
  baseUrl: "./"
};

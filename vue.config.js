/*
 * @Author: liva
 * @Date: 2019-12-27 18:06:41
 * @LastEditors  : liva
 * @LastEditTime : 2020-01-03 16:27:46
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
  baseUrl: "/mall_vue/dist/",
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  }
};

/*
 * @Author: liva
 * @Date: 2019-12-25 18:21:11
 * @LastEditors  : liva
 * @LastEditTime : 2019-12-26 15:12:02
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5, //单位转换后保留的精度
      viewportUnit: "vw", // (String) 希望使用的视口单位
      //selectorBlackList: ["ignore", "tab-bar", "tab-bar-item"], //(Array) 需要忽略的CSS选择器
      minPixelValue: 1,
      exclude: [/TabBar/] //(Array or Regexp) 忽略某些文件夹下的文件或特定文件
    }
  }
};

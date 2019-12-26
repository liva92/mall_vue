/*
 * @Author: liva
 * @Date: 2019-12-14 14:48:44
 * @LastEditors  : liva
 * @LastEditTime : 2019-12-25 16:16:18
 */
const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查看是否添加过
      const oldpayload = context.state.cartList.find(
        item => item.iid === payload.iid
      );

      // 2.+1或者新添加
      if (oldpayload) {
        //数量+1
        context.commit("addCount", oldpayload);
        resolve("当前的商品数量＋1");
      } else {
        //增加新的商品
        payload.count = 1;
        payload.checked = true;
        context.commit("addCart", payload);
        resolve("已经加入购物车");
      }
    });
  }
};

export default actions;

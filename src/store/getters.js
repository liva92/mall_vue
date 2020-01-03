/*
 * @Author: liva
 * @Date: 2019-12-14 14:48:44
 * @LastEditors  : liva
 * @LastEditTime : 2019-12-25 17:45:33
 */
const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartCount(state, getters) {
    return getters.cartList.length;
    // console.log(getters.cartList);
    // getters.cartList.reduce((sum, item) => {
    //   return sum + item.count;
    // }, 0);
  }
};

export default getters;

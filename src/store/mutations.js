const mutations = {
  addCart(state, info) {
    state.cartList.push(info);
  },
  addCount(state, info) {
    state.cartList[0].count += 1;
  }
};

export default mutations;

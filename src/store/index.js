import Vuex from 'vuex';
import Vue from 'vue';
import shop from "@/api/shop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },

  actions: { // = methods
    fetchProducts(context) {
      // make the api call
      // call setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          context.commit('setProducts', products);
          resolve();
        });
      });
    },
  },

  mutations: { // = update and set the instance
    setProducts(state, products) {
      // update products
      state.products = products
    }
  }

});

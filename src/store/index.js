import Vuex from 'vuex';
import Vue from 'vue';

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
    fetchProducts() {
      // make the api call
    }
  },

  mutations: { // = update and set the instance
    setProducts(state, products) {
      // update products
      state.products = products
    }
  }

});

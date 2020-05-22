import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    productsCount() {

    }
  },

  actions: { // = methods
    fetchProducts() {
      // make the api call
    }
  },

  mutations: { // = update and set the instance
    setProducts() {
      // update products
    }
  }

});

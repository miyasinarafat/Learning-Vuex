import shop from "@/api/shop";

export default {
  namespaced: true,

  state: {
    items: [],
  },

  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
    },

    productInStock() {
      return (product) => {
        return product.inventory > 0;
      }
    }
  },

  actions: {
    fetchProducts({commit}) {
      // make the api call
      // call setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products);
          resolve();
        });
      });
    },
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.items = products
    },

    decrementProductInventory(state, product) {
      product.inventory--
    },
  }
}

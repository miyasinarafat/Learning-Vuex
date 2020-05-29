import Vuex from 'vuex';
import Vue from 'vue';
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = data
    products: [],
    // {id, quantity}
    cart: [],
    setCheckoutStatus: null,
  },

  getters: { // = computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    },

    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(proudct => proudct.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },

    productInStock() {
      return (product) => {
        return product.inventory > 0;
      }
    }
  },

  actions: actions,

  mutations: { // = update and set the instance
    setProducts(state, products) {
      // update products
      state.products = products
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },

    decrementProductInventory(state, product) {
      product.inventory--
    },

    setCheckoutStatus(state, status) {
      state.setCheckoutStatus = status
    },

    emptyCart(state) {
      state.cart = []
    },


  }

});

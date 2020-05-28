<template>
  <div>
    <h1>Product List</h1>
    <img src="https://i.imgur.com/JfPpwOA.gif" v-if="loading">
    <ul v-else>
      <li :key="product.id" v-for="product in products">
        {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
        <button :disabled="!productInStock(product)" @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      }
    },

    methods: {
      addProductToCart(product) {
        this.$store.dispatch('addProductToCart', product);
      }
    },

    computed: {
      products() {
        return this.$store.state.products;
      },

      productInStock() {
        return this.$store.getters.productInStock;
      },
    },

    created() {
      this.loading = true
      this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false);
    }
  }
</script>

<style scoped>

</style>

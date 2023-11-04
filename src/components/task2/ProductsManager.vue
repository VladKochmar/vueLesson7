<template>
  <currency-selector />
  <products-list />
  <cart-product-list />
</template>

<script>
import { mapActions } from 'vuex'
import ProductsList from './ProductsList.vue'
import CurrencySelector from './CurrencySelector.vue'
import CartProductList from './CartProductList.vue'

export default {
  name: 'ProductsManager',
  components: { ProductsList, CurrencySelector, CartProductList },
  methods: {
    ...mapActions(['loadDataFromFile']),
  },
  created() {
    this.loadDataFromFile()
  },
}
</script>

<style lang="scss" scoped></style>

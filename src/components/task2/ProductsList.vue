<template>
  <div class="products-container">
    <h3 class="subtitle">Список товарів</h3>
    <ul class="products-list">
      <li v-for="product in getProducts" :key="product.id">
        <span>{{ product.title }}</span>
        <div>
          {{ getCurrentPrice(product.price) }} {{ getCurrencyTitle }}
          <button type="button" class="button" @click="buyProduct(product)">Купити</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductsList',

  computed: {
    ...mapGetters(['getProducts', 'getCurrencyTitle', 'getCurrentPrice']),
  },

  methods: {
    ...mapActions(['buyProduct']),
  },
}
</script>

<style lang="scss" scoped>
.products-container {
  max-width: 31.25rem;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
}
.products-list {
  display: grid;
  gap: 0.625rem 0;
  border: 0.125rem solid #fff;
  padding: 0.625rem 1.25rem;
  li {
    display: flex;
    gap: 0 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

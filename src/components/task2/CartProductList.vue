<template>
  <div v-show="getCartList.length" class="products-container">
    <h3 class="subtitle">Корзина</h3>
    <ul class="products-list">
      <li v-for="product in getCartList" :key="product.id">
        <span>{{ product.title }} x{{ product.counter }}</span>
        <div>
          {{ getCurrentPrice(product.price) }} {{ getCurrencyTitle }}
          <button type="button" class="button" @click="rejectProduct(product)">Відмовитись</button>
        </div>
      </li>
    </ul>
    <div>
      Разом до оплати {{ getTotalSum }} {{ getCurrencyTitle }} <button type="button" class="button">Оплатити</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartProductList',
  computed: {
    ...mapGetters(['getCartList', 'getCurrentPrice', 'getCurrencyTitle', 'getTotalSum']),
  },
  methods: {
    ...mapActions(['rejectProduct']),
  },
}
</script>

<style lang="scss" scoped>
.products-container {
  max-width: 31.25rem;
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
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
</style>

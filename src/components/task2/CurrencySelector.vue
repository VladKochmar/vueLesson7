<template>
  <div>
    <select v-model="currentCurrency">
      <option v-for="currency in currencyList" :key="currency.title" :value="currency.rate">
        {{ currency.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currencyList } from './settings'

export default {
  name: 'CurrencySelector',

  data() {
    return {
      currencyList: currencyList,
    }
  },

  computed: {
    ...mapGetters(['getCurrencyRate']),
    currentCurrency: {
      get() {
        return this.getCurrencyRate
      },
      set(newCurrencyRate) {
        this.setCurrencyRate(newCurrencyRate)
      },
    },
  },

  methods: {
    ...mapActions(['setCurrencyRate']),
  },
}
</script>

<style lang="scss" scoped></style>

import { createStore } from 'vuex'
import { getScoreIn5Category } from './helpers'

import students from '@/data/students'
import products from '@/data/products'

export default createStore({
  state() {
    return {
      // Task 1

      studentsList: [],
      currentCategory: null,

      // Task 2

      products: [],
      cart: [],
      currencyRate: 1,
    }
  },

  getters: {
    // Task 1

    getStudentsList: ({ studentsList }) => studentsList,

    getCurrentCategory: ({ currentCategory }) => currentCategory,

    getFilteredByStudentCategoryList: ({ studentsList, currentCategory }) =>
      !currentCategory
        ? studentsList
        : studentsList.filter(
            (student) => student.score >= currentCategory.minScore && student.score <= currentCategory.maxScore
          ),

    getStudentsListByCategory: (state, getters) => (scoreCategory) =>
      scoreCategory === 12
        ? getters.getFilteredByStudentCategoryList
        : getters.getFilteredByStudentCategoryList.map((student) => ({
            ...student,
            score: getScoreIn5Category(student.score),
          })),

    // Task 2

    getProducts: ({ products }) => products,

    getCurrencyTitle: (state) => (state.currencyRate === 1 ? '₴' : '$'),

    getCurrentPrice: (state) => (price) => (price * state.currencyRate).toFixed(2),

    getCurrencyRate: ({ currencyRate }) => currencyRate,

    getCartList: ({ cart }) => cart,

    getTotalSum: (state) =>
      (state.cart.reduce((prevSum, product) => prevSum + product.price, 0) * state.currencyRate).toFixed(2),
  },

  mutations: {
    // Task 1

    setStudentsList(state, list) {
      state.studentsList = JSON.parse(JSON.stringify(list))
    },

    setCategory(state, category) {
      state.currentCategory = category
    },

    // Task 2

    setProducts(state, list) {
      state.products = list
    },

    setCurrencyRate(state, rate) {
      state.currencyRate = rate
    },

    addProductToCartList(state, product) {
      const availableProduct = state.cart.find((item) => item.id === product.id)
      if (availableProduct) {
        availableProduct.counter++
        availableProduct.price = availableProduct.unitPrice * availableProduct.counter
      } else {
        state.cart.push({ ...product, unitPrice: product.price, counter: 1 })
      }
    },

    removeProductFromCart(state, selectedProduct) {
      selectedProduct.counter--
      selectedProduct.price = selectedProduct.unitPrice * selectedProduct.counter
      if (selectedProduct.counter < 1) state.cart = state.cart.filter((product) => product.id !== selectedProduct.id)
    },
  },

  actions: {
    // Task 1

    loadStudentsList({ commit }) {
      commit('setStudentsList', students)
    },

    setStudentCategory({ commit }, category) {
      commit('setCategory', category)
    },

    // Task 2

    loadDataFromFile({ commit }) {
      commit('setProducts', products)
    },

    setCurrencyRate({ commit }, rate) {
      commit('setCurrencyRate', rate)
    },

    buyProduct({ commit }, product) {
      commit('addProductToCartList', product)
    },

    rejectProduct({ commit }, productId) {
      commit('removeProductFromCart', productId)
    },
  },
  modules: {},
})

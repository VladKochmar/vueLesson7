<template>
  <div>
    <h3 class="subtitle">Категорія</h3>
    <select v-model="currentCategory">
      <option v-for="category in studentsCategoryList" :key="category.title" :value="category">
        {{ category.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { studentsCategoryList } from './settings'

export default {
  name: 'StudentsCategory',

  computed: {
    ...mapGetters(['getCurrentCategory']),

    currentCategory: {
      get() {
        return this.getCurrentCategory
      },
      set(newCategory) {
        this.setStudentCategory(newCategory)
      },
    },

    studentsCategoryList() {
      return studentsCategoryList
    },
  },

  methods: {
    ...mapActions(['setStudentCategory']),
  },
}
</script>

<style lang="scss" scoped></style>

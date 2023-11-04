<template>
  <score-category v-model="scoreCategory" />
  <students-category />
  <students-list :students-data="filteredStudentsList" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ScoreCategory from './ScoreCategory.vue'
import StudentsCategory from './StudentsCategory.vue'
import StudentsList from './StudentsList.vue'

export default {
  name: 'StudentsManager',
  components: {
    ScoreCategory,
    StudentsCategory,
    StudentsList,
  },
  data() {
    return {
      scoreCategory: null,
    }
  },
  computed: {
    ...mapGetters(['getStudentsList', 'getStudentsListByCategory', 'getFilteredByStudentCategoryList']),

    filteredStudentsList() {
      if (this.scoreCategory) return this.getStudentsListByCategory(this.scoreCategory)
      else return this.getFilteredByStudentCategoryList
    },
  },
  methods: {
    ...mapActions(['loadStudentsList']),
  },
  created() {
    this.loadStudentsList()
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="students-container">
    <h3 class="subtitle">Список студентів</h3>
    <div>
      <ul class="students-list">
        <li v-for="student in studentsData" :key="student.id">
          <span>{{ student.name }}</span>
          <span>{{ student.score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsList',
  props: {
    studentsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.students-container {
  max-width: 31.25rem;
}
.students-list {
  display: grid;
  gap: 0.625rem 0;
  li {
    display: flex;
    gap: 0 1.25rem;
    justify-content: space-between;
  }
}
</style>

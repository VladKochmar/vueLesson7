<template>
  <div>
    <h3 class="subtitle">Система оцінювання</h3>
    <select v-model="currentCategory">
      <option :value="5">5</option>
      <option :value="12">12</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ScoreCategory',
  props: {
    modelValue: {
      type: Number,
    },
  },
  computed: {
    currentCategory: {
      get() {
        return this.modelValue
      },
      set(newCategory) {
        this.$emit('update:modelValue', newCategory)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>

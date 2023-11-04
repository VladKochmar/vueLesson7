<template>
  <div class="main-block">
    <div class="main-block__container">
      <h1 class="main-title">Урок №7</h1>
      <section class="block">
        <h2 class="title">Завдання №1</h2>
        <div class="block__body">
          <students-manager />
        </div>
      </section>
      <section class="block">
        <h2 class="title">Завдання №2</h2>
        <div class="block__body"><products-manager /></div>
      </section>
    </div>
  </div>
</template>

<script>
import StudentsManager from '@/components/task1/StudentsManager.vue'
import ProductsManager from '@/components/task2/ProductsManager.vue'

export default {
  name: 'App',
  components: {
    StudentsManager,
    ProductsManager,
  },
}
</script>

<style lang="scss">
@import './assets/styles';
</style>

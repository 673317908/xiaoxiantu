<template>
  <div>
    <Nav />
    <header></header>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/nav/index.vue'
export default {
  name: 'layout',
  components: {
    Nav
  },
  setup () {
    return {}
  }
}
</script>

<style lang='less' scoped>
</style>

<template>
  <div>
    <Nav />
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/nav/index.vue'
import Header from '@/components/header/index.vue'
export default {
  name: 'layout',
  components: {
    Nav,
    Header
  },
  setup () {
    return {}
  }
}
</script>

<style lang='less' scoped>
</style>

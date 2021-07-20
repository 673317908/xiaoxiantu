<template>
  <div>
    <nav>
      <div class="container">
        <ul>
          <li v-for='item in navData.navList' :key='item.id'><i v-if="item.icon" :class="['iconfont',item.icon]"></i>{{ item.name }}</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup () {
    const navData = reactive({
      navList: [
        { id: 1, name: '请先登录' },
        { id: 2, name: '免费注册' },
        { id: 3, name: '我的订单' },
        { id: 4, name: '会员中心' },
        { id: 5, name: '帮助中心' },
        { id: 6, name: '在线客服' },
        { id: 7, name: '手机版', icon: 'phone' }
      ]
    })

    return { navData }
  }
}
</script>

<style lang='less' scoped>
nav {
  background: #333333;
  ul {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding: 10px 0;
    li {
      font-size: 12px;
      font-family: '微软雅黑';
      font-weight: 400;
      color:#cdcdcd;
      padding: 0 15px;
      border-right: 2px solid #666;
      cursor: pointer;
      &:last-child {
        border: none;
      }
      &:hover{
        color: @xtxColor;
      }
    }
  }
}
</style>

<template>
  <div class="app-header">
    <div class="container">
      <h1 class="logo">
        <a href="#"></a>
      </h1>
      <ul class="app-header-nav">
        <li v-for="item in headerList" :key="item.id">
          <a href="">{{ item.name }}</a>
          <div class="layer">
            <ul>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <p></p>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const headerData = reactive({
      headerList: [
        {
          id: 1,
          name: "首页",
        },
        {
          id: 2,
          name: "家居",
        },
        {
          id: 3,
          name: "美食",
        },
        {
          id: 4,
          name: "服饰",
        },
        {
          id: 5,
          name: "母婴",
        },
        {
          id: 6,
          name: "个护",
        },
        {
          id: 7,
          name: "严选",
        },
        {
          id: 8,
          name: "数码",
        },
        {
          id: 9,
          name: "运动",
        },
        {
          id: 10,
          name: "杂项",
        },
      ],
    });

    return { ...toRefs(headerData) };
  },
};
</script>

<style lang='less' scoped>
.app-header {
  background: white;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url("../../assets/images/logo.png") no-repeat center 18px /
          contain;
      }
    }
    .app-header-nav {
      width: 820px;
      display: flex;
      justify-content: space-around;
      padding-left: 40px;
      position: relative;
      z-index: 999;
      & > li > a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        &:hover {
          color: @xtxColor;
          border-bottom: 1px solid @xtxColor;
        }
      }
      & > li > .layer {
        width: 1240px;
        background-color: #fff;
        position: absolute;
        left: -200px;
        top: 56px;
        height: 0;
        overflow: hidden;
        opacity: 0;
        box-shadow: 0 0 5px #ccc;
        transition: all 0.2s 0.1s;
      }
      & > li > .layer .open {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
</style>
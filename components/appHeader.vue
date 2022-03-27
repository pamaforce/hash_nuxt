<template>
  <div class="header" :style="statue === 1 ? 'background-color: #f9be26;' : ''">
    <span>宝贝听我说</span>
    <div>
      <div class="link-div">
        <nuxt-link to="/" class="link-class">首页</nuxt-link>
        <div class="capsule" v-if="statue === 0"></div>
      </div>
      <div class="link-div">
        <nuxt-link to="/about" class="link-class">关于我们</nuxt-link>
        <div class="capsule" v-if="statue === 1"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    statue: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 55px;
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 50px;
  text-align: center;
  color: #171717;
  box-sizing: border-box;
}
.link-div {
  position: relative;
  display: inline-block;
  margin-left: 40px;
}
.link-class {
  text-decoration: none;
  color: #171717;
}
.capsule {
  width: 80%;
  height: 4px;
  background-color: #171717;
  border-radius: 2px;
  margin: 0 auto;
  margin-top: -6px;
}
</style>
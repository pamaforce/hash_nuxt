<template>
  <div class="footer">
    <underline-text class="margin-class">关注我们</underline-text>
    <div class="QRcodes">
      <div>
        <img src="~static/img/wechat.png" alt="微信二维码" />
        <p>微信</p>
      </div>
      <div>
        <img src="~static/img/official.png" alt="公众号二维码" />
        <p>公众号</p>
      </div>
    </div>
    <p class="flag">让世界因我们而有不同！</p>
    <div class="bottom">
      <p>
        © 哈希碰撞科技有限公司 版权所有
        <nuxt-link to="/user" class="link-class">用户协议</nuxt-link>
        <nuxt-link to="/privacy" class="link-class">隐私政策</nuxt-link>
        <a class="link-class" href="http://beian.miit.gov.cn/" target="_blank"
          >津ICP备2022001248号</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import underlineText from "~/components/underlineText.vue";
export default {
  components: {
    underlineText,
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 480px;
  position: relative;
}
.margin-class {
  margin-top: 30px;
}
.bottom {
  width: 100%;
  height: 40px;
  background-color: #ffe4ae;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #000000;
}
.QRcodes {
  display: flex;
  justify-content: center;
}
.QRcodes div {
  width: 150px;
  text-align: center;
  margin: 40px 60px;
  margin-bottom: 20px;
}
.QRcodes img {
  width: 100%;
}
.QRcodes p {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 60px;
  color: #171717;
}
.flag {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #f9be26;
}
.link-class {
  text-decoration: none;
  color: #171717;
  margin-left: 10px;
}
</style>
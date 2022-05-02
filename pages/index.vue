<template>
  <section class="content">
    <app-header :statue="0" />
    <p class="title-class">用你的声音伴孩子入眠</p>
    <p class="subtitle-class">故事·温馨·陪伴·我们</p>
    <div class="download">
      <a :href="iOSLink" target="_blank">App Store</a>
      <a :href="androidLink" target="_blank">Android</a>
    </div>
    <underline-text>用“最温馨的声音”讲“最动听的故事”</underline-text>
    <div class="section-1">
      <div>
        <img src="~static/img/img1.png" />
        <p>声音处理</p>
        <span
          >将父母的声音进行“降噪”、“改调”、“变速”、“剪辑”等声音处理，让每个普通的声音都可以引人入胜。
        </span>
      </div>
      <div>
        <img src="~static/img/img2.png" />
        <p>温暖定制</p>
        <span
          >专业录音员录制的声音，可以引人入胜，但无法模仿父母独有的音色，而这恰恰对孩子来说是最温暖的，最治愈的声音。
        </span>
      </div>
    </div>
    <div class="section-2">
      <div>
        <circle-text class="margin-class-1">优质故事</circle-text>
        <span
          >提供优质故事音频，专为孩子定制改编，调整背景音，添加特效音，提高沉浸式体验，把最幸福的睡前体验带给孩子。
        </span>
      </div>
      <img src="~static/img/phone1.png" />
    </div>
    <div class="section-3">
      <img src="~static/img/phone2.png" />
      <div>
        <circle-text class="margin-class-1">专属记忆</circle-text>
        <span>睡眠优质内容 ，搭配专业音乐音效， 打造动画片级录制效果 。 </span>
      </div>
    </div>
    <app-footer />
    <back-circle :id="0"></back-circle>
    <back-circle :id="1"></back-circle>
    <back-circle :id="2"></back-circle>
    <back-circle :id="3"></back-circle>
    <back-circle :id="4"></back-circle>
    <back-circle :id="5"></back-circle>
    <back-circle :id="6"></back-circle>
    <back-circle :id="7"></back-circle>
    <back-circle :id="8"></back-circle>
  </section>
</template>

<script>
import appHeader from "~/components/appHeader.vue";
import appFooter from "~/components/appFooter.vue";
import underlineText from "~/components/underlineText.vue";
import circleText from "~/components/circleText.vue";
import backCircle from "~/components/backCircle.vue";

export default {
  data: () => ({
    androidLink: "http://release.hasmash.com/2022-04-30-dev.apk",
    iOSLink: "https://testflight.apple.com/join/4lvXyMRk",
  }),
  components: {
    appHeader,
    appFooter,
    underlineText,
    circleText,
    backCircle,
  },
  created() {
    fetch("http://voice-api.hasmash.com:10085/v1/release")
      .then((res) => res.json())
      .then(({ result: { path: res } }) => {
        this.androidLink = res;
      });
  },
};
</script>

<style scope>
.content {
  width: 100vw;
  min-height: 100vh;
  background-image: url("~static/img/background.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: top;
}
.margin-class-1 {
  margin-top: 100px;
  margin-bottom: 30px;
}
.title-class {
  font-family: "Source Han Sans CN";
  font-style: normal;
  margin-top: 130px;
  font-weight: 500;
  font-size: 52px;
  line-height: 100px;
  text-align: center;
  letter-spacing: 0.4em;
  color: #ffffff;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}
.subtitle-class {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  margin-top: 30px;
  font-size: 28px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.3em;
  color: #ffffff;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.download {
  text-align: center;
  margin-top: 150px;
  margin-bottom: 350px;
}
.download div,
.download a {
  text-decoration: none;
  display: inline-block;
  height: 50px;
  padding: 0 20px;
  background: #f9be26;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  margin: 30px;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}
.section-1 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
}
.section-1 div {
  width: 300px;
  margin: 50px;
}
.section-1 img {
  width: 75px;
  height: 75px;
}
.section-1 p {
  margin: 10px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #171717;
}
.section-1 span {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #171717;
  float: left;
  text-align: left;
}
.section-2 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
}
.section-2 div {
  width: 250px;
  margin-right: 300px;
  text-align: left;
}
.section-2 img {
  width: 200px;
}
.section-2 span {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #171717;
}
.section-3 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 100px;
}
.section-3 div {
  width: 250px;
  text-align: left;
}
.section-3 img {
  width: 200px;
  margin-right: 300px;
}
.section-3 span {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #171717;
}
</style>


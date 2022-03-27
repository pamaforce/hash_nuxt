<template>
  <section>
    <app-header :statue="1" />
    <underline-text class="margin-class-2">我们是谁?</underline-text>
    <p class="text-class">
      哈希碰撞科技作为一个互联网型创业团队，成立于2021年，由在读的天大校内一批具有极强自驱力和探索精神的创业者和技术大佬共同创办，我们的主要成员来自天津大学、北京大学，具有软件工程、管理、金融、教育学等专业背景，飞书产品部、蚂蚁金服战略部、天外天互联网产品工作室、天外天新闻中心等实习背景。诞生初期就吸引了一大批投资人的关注，并且成功获得种子轮投资。
    </p>
    <p class="text-class">
      我们团队秉承创新，极致的理念，坚持为用户和为团队创造价值的价值观，致力于成为从校园内走出的一流互联网公司。
    </p>
    <p class="text-class">
      2022将是哈希碰撞跨越发展的一年，极具发展势头的哈希碰撞科技团队期待你的加入！
    </p>
    <underline-text class="margin-class-2">企业文化</underline-text>
    <p class="text-class" style="text-align: center; margin-bottom: 10px">
      对外创造价值，让孩子能够感受到父母的陪伴，让父母能够传递对孩子的关爱；
    </p>
    <p class="text-class" style="text-align: center; margin-top: 0">
      对内创造价值，让每一位成员能在创造的同时收获个人的成长。
    </p>
    <app-footer />
    <back-circle :id="9"></back-circle>
    <back-circle :id="10"></back-circle>
    <back-circle :id="11"></back-circle>
    <back-circle :id="12"></back-circle>
    <back-circle :id="13"></back-circle>
    <back-circle :id="14"></back-circle>
    <back-circle :id="15"></back-circle>
  </section>
</template>

<script>
import appHeader from "~/components/appHeader.vue";
import appFooter from "~/components/appFooter.vue";
import underlineText from "~/components/underlineText.vue";
import backCircle from "~/components/backCircle.vue";

export default {
  components: {
    appHeader,
    appFooter,
    underlineText,
    backCircle,
  },
};
</script>

<style scope>
.text-class {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #171717;
  margin: 40px 250px;
}
.margin-class-2 {
  margin-top: 50px;
}
</style>

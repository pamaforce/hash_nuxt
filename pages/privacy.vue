<template>
  <div v-html="compiledMarkdown" class="md"></div>
</template>

<script>
import { marked } from "marked";
export default {
  data() {
    return {
      input: `##  加载中……`,
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input);
    },
  },
  created() {
    fetch("https://voice-api.hasmash.com/v1/privacy")
      .then((res) => res.json())
      .then(({ result: res }) => {
        this.input = res;
      })
      .catch(() => {
        this.input = `##  非常抱歉，加载失败，请重试OvO`;
      });
  },
};
</script>

<style scoped>
.md {
  width: 100%;
  padding: 50px 200px;
}
</style>
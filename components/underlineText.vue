<template>
  <div class="underline-text">
    <div></div>
    <p><slot /></p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.underline-text {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  text-align: center;
}

.underline-text p {
  display: inline-block;
  margin: 0 6px;
  margin-bottom: 3px;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #171717;
  letter-spacing: 0.2rem;
}

.underline-text div {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 16px;
  background-color: #f9be26;
  border-radius: 8px;
  z-index: -1;
}
</style>
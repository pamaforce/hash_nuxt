<template>
  <div class="circle-text">
    <div></div>
    <p><slot /></p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.circle-text {
  position: relative;
  display: inline-block;
  text-align: left;
}

.circle-text p {
  display: inline-block;
  margin-left: 25px;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  color: #171717;
  letter-spacing: 0.2rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.circle-text div {
  background-color: #f9be26;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #f9be26;
  border-radius: 50% 50%;
  z-index: -1;
}
</style>
<template>
  <div :class="'circle circle-' + id"></div>
</template>

<script>
export default {
  props: {
    // size: {
    //   type: Number,
    //   default: 0,
    // },
    // opacity: {
    //   type: Number,
    //   default: 0,
    // },
    // position: {
    //   type: String,
    //   default: "",
    // },
    id: {
      type: Number,
      default0: 0,
    },
  },
};
</script>

<style scope>
.circle {
  border-radius: 50% 50%;
  background-color: #f9be26;
  position: absolute;
  z-index: -1;
}
.circle-0 {
  width: 400px;
  height: 400px;
  right: -220px;
  top: 600px;
  opacity: 0.2;
}
.circle-1 {
  width: 280px;
  height: 280px;
  left: -120px;
  top: 820px;
  opacity: 0.2;
}
.circle-2 {
  width: 70px;
  height: 70px;
  left: 160px;
  top: 1120px;
  opacity: 0.5;
}
.circle-3 {
  width: 300px;
  height: 300px;
  right: 330px;
  top: 1320px;
  opacity: 0.2;
}
.circle-4 {
  width: 500px;
  height: 500px;
  left: 40px;
  top: 1750px;
  opacity: 0.2;
}
.circle-5 {
  width: 30px;
  height: 30px;
  right: 210px;
  top: 2045px;
  opacity: 0.5;
}
.circle-6 {
  width: 90px;
  height: 90px;
  right: 140px;
  top: 2050px;
  opacity: 0.5;
}
.circle-7 {
  width: 80px;
  height: 80px;
  left: 240px;
  top: 2350px;
  opacity: 0.5;
}
.circle-8 {
  width: 320px;
  height: 320px;
  right: 100px;
  top: 2250px;
  opacity: 0.2;
}
.circle-9 {
  width: 80px;
  height: 80px;
  left: -15px;
  top: 100px;
  opacity: 0.5;
}
.circle-10 {
  width: 250px;
  height: 250px;
  right: -125px;
  top: 150px;
  opacity: 0.2;
}
.circle-11 {
  width: 30px;
  height: 30px;
  right: 170px;
  top: 430px;
  opacity: 0.5;
}
.circle-12 {
  width: 45px;
  height: 45px;
  right: 170px;
  top: 580px;
  opacity: 0.5;
}
.circle-13 {
  width: 70px;
  height: 70px;
  right: 130px;
  top: 600px;
  opacity: 0.5;
}
.circle-14 {
  width: 230px;
  height: 230px;
  left: -70px;
  top: 680px;
  opacity: 0.2;
}
.circle-15 {
  width: 28px;
  height: 28px;
  left: 100px;
  top: 680px;
  opacity: 0.5;
}
</style>
<template>
  <div class="home-container">
    <div class="top">
      <div class="center">
        <ul class="list">
            <li class="item">
                <div class="child"></div>
            </li>
            <li class="item">
                <div class="child"></div>
            </li>
            <li class="item">
                <div class="child"></div>
            </li>
        </ul>
      </div>
    </div>
    <div class="buttom"></div>
  </div>
</template>
<script>
export default {
  name: "home",
  layout: "case",
  data() {
    return {
    }
  },
};
</script>
<style lang="scss" scoped>
.home-container {
    width: 100%;
    .center{
        width: 1097px;
        margin: 200px auto;
    }
    .list{
        display: flex;
        justify-content: space-around;
        .item{
            width: 300px;
            height: 400px;
            padding: 2px;
            background: linear-gradient(245.22deg,#00E8D1 7.97%,#00E8D1 49.17%,#04BCFD 0,#D73494 92.1%);
            border-radius: 20px;
            box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
            .child{
                width: 100%;
                height: 100%;
                background: #fff;
                border-radius: 20px;
            }
        }
    }
}


@media screen and (max-width: 750px) {
}
</style>

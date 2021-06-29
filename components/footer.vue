<template>
  <footer>
    <div class="center">
      <div class="content">
        <div class="left">
          <img src="~/assets/images/logo-footer@2x.png"/>
          <p>{{$t("footer.Copyright")}}</p>
        </div>
        <div class="right">
          <div class="link">
            <p class="tit link-jump" id="contactUs" >{{$t("footer.link")}}</p>
            <p class="con">{{$t("footer.linkads")}}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'p-footer'
}
</script>
<style lang="scss" scoped>
footer {
  min-height: 100px;
  background:#000;
  padding:40px 0;
  .center {
    width: 1200px;
    margin: 0 auto;
    .content {
      display: flex;
      margin: 20px 0 0 80px;
      .left {
        flex: 1;
        img {
          width: 134px;
          height: 28px;
        }
        p {
          font-size: 14px;
          color: #FFFFFF;
          padding-top: 14px;
        }
      }
      .right {
        .link{
          .tit{
              opacity: 0.7;
            }
            .active{
              // color: red;
              opacity: 1;
            }
          p{
            color: #fff;
            display: inline-block;
            margin: 45px 15px 0 0px;
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
}
</style>

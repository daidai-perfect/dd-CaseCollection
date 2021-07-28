<template>
  <div class="copy">
    <img class="copy copypre" v-if="isShow" @click="handleClick()" src="~assets/images/icon_copy.png" alt="">
    <div class="copyAdress "> CopyInfo</div>
    <img class="copy success" v-if="!isShow" src="~assets/images/icon_success.png" alt="">
    <div class="copyAdress copyAdress1"> Copied</div>
  </div>
</template>
<script>

export default {
  name: 'lang-select',
  props:['copyInfo'],
  data() {
    return {
      isShow: true
    }
  },
  methods:{
      handleClick() {
      let oInput = document.createElement('input');
      oInput.value =this.copyInfo;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand('Copy'); // 执行浏览器复制命令
      // createMessage.success('复制成功');
       this.isShow = !this.isShow;
       setTimeout(() => {this.isShow = !this.isShow; }, 1000);
      oInput.remove();
    },
  }
}
</script>
<style lang="scss" scoped>
.copy{
        position: relative;
        .copy{
          width: 18px;
          height: 18px;
          position:absolute;
          top: -18px;
          right: 125px;
        }
        .copyAdress{
          width: 90px;
          height: 31px;
          background: url('~assets/images/Pop-ups.png') no-repeat;
          background-size: 100% 100%;
          font-size: 12px;
          text-align: center;
          line-height: 25px;
          display: none;
          position: absolute;
          top: -50px;
          right: 125px;
        }
        .copypre:hover+ .copyAdress{
          display: block;
        }
        .success:hover+ .copyAdress1{
          display: block;
        }
      }
</style>

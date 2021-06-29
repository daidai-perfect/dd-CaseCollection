<template>
  <div class="select-language animate__animated animate__fadeIn" @mouseover="openList" @mouseleave="closeList">
    <div class="lang">
      <span>{{localeObj[locale]}}</span>
      <img src="~/assets/images/arrow-down-nor@2x.png"/>
    </div>
    <ul class="lang-list" v-show="isShow" @click="closeList">
      <li @click="switchLang('en')">English</li>
      <li @click="switchLang('zh')">中文</li>
      <li @click="switchLang('th')">ภาษาไทย</li>
    </ul>
  </div>
</template>
<script>
import {setCookie} from '~/assets/js/cookie.js';

export default {
  name: 'lang-select',
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    localeObj() {
      return {
        'zh': '中文',
        'en': 'English',
        'th': 'ภาษาไทย'
      };
    }
  },
  methods: {
    openList() {
      this.isShow = true;
    },
    closeList() {
      this.isShow = false;
    },
    switchLang(lang) {
      setCookie('lang', lang);
      this.$store.dispatch('setLanguage', lang);
      this.$i18n.locale = lang;
    }
  },
}
</script>
<style lang="scss" scoped>
.select-language {
  position: relative;
  .lang {
    min-width: 120px;
    height: 30px;
    font-size: 14px;
    // color: #ACACAC;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    img {
      width: 14px;
      margin-left: 4px;
    }
  }
  .lang-list {
    position: absolute;
    right: 0px;
    top: 30px;
    // background: rgba( #fff,0.1);
    background: #000;
    width: 110px;
    z-index: 99999;
    li {
      height: 40px;
      line-height: 40px;
      // color:#ACACAC;
      color: #fff;
      padding: 0px 20px;
      cursor: pointer;
      font-size: 12px;
      &:hover {
        background: lighten($color: #272A38, $amount: 5);
      }
    }
  }
}
</style>

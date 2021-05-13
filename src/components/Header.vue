<template>
  <header :class="[scrolled ? 'scrolled' : null]">
    <div class="container mx-auto">
      <h1 v-if="logo.mode === 'kqs'" class="kqs">
        <router-link to="/">
          <img loading="lazy" src="../../public/kqs.logo-removebg-preview.png" alt="한국퀵서비스 로고" />
        </router-link>
      </h1>

      <h1 v-if="logo.mode === 'sqs'" class="sqs">
        <router-link to="/"
          ><img loading="lazy" src="../../public/sqs.logo-removebg-preview.png" alt="스마트퀵서비스 로고"
        /></router-link>
      </h1>
      <ul>
        <li>
          <a href="#small">소형화물</a>
        </li>
        <li>
          <a href="#medium_to_large">중·대형화물</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Logo {
  mode: string;
  kqs: string;
  sqs: string;
}

export default defineComponent({
  name: 'Header',
  data() {
    return {
      scrolled: false,
      logo: {
        mode: '',
        kqs: 'kqs.logo-removebg-preview',
        sqs: 'sqs.logo-removebg-preview',
      } as Logo,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 1) {
        this.scrolled = true;
      } else if (window.scrollY === 0) {
        this.scrolled = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    if (window.location.hostname === 'localhost') {
      this.logo.mode = 'kqs';
    }

    if (window.location.hostname === '1661-7773.com') {
      this.logo.mode = 'kqs';
    }

    if (window.location.hostname === '1661-1987.com') {
      this.logo.mode = 'sqs';
    }
  },
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  background-color: lighten($oc-indigo-3, 5%);
  color: $oc-gray-0;

  &.scrolled {
    background-color: rgba(lighten($oc-indigo-3, 5%), 0.8);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      z-index: -1;
      filter: blur(5px);
    }
  }

  div.container {
    h1 {
      float: left;
      font-size: 24px;
      line-height: 80px;
      //text-indent: -9999px;
      //background-image: url('../../public/kqs.logo.png');

      &.sqs {
        //line-height: 40px;

        @include media('<desktop') {
          margin-left: -50px;
        }

        img {
          //height: 40px;
        }
      }

      img {
        height: 80px;
      }
    }

    ul {
      float: right;
      display: inline-block;
      line-height: 80px;

      @include media('<desktop') {
        display: none;
      }

      li {
        display: inline-block;
        margin-left: 20px;
        font-size: 18px;
      }
    }
  }
}
</style>

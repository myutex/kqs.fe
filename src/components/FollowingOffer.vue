<template>
  <div class="wrap" ref="FollowingOffer" :style="{ bottom: `${bottom}px` }">
    <div class="arrow">
      <ChevronDoubleUpIcon class="up" />
    </div>
    <!--    <div class="title">-->
    <!--      <p>실시간 배차하기 <CursorClickIcon /></p>-->
    <!--    </div>-->
    <div class="call">
      <a href="tel:1661-7773">
        <img
          loading="lazy"
          src="../../public/call_w1024.png"
          alt="실시간전화연결"
          srcset="
            ../../public/call_w1024.png 1024w,
            ../../public/call_w150.png   150w,
            ../../public/call_w300.png   300w,
            ../../public/call_w768.png   768w,
            ../../public/call.png       1923w
          "
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </a>
    </div>
    <div class="web">
      <a href="https://16617773.qag.kr/main/" target="_blank">실시간 배차주문 (24시간)</a>
    </div>
    <div class="kakao">
      <a href="https://pf.kakao.com/_nPyBK" target="_blank">
        <!--        <img src="../../public/kakao.pf-3.png" alt="카카오톡 플러스친구" />-->
        카카오톡 주문하기
      </a>
    </div>
    <div class="app-link">
      <a href="https://play.google.com/store/apps/details?id=com.krquick.hmaligo">앱으로 주문하기</a>
    </div>
    <div class="arrow">
      <ChevronDoubleDownIcon class="down" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/vue/solid';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import im from 'include-media-export/dist/include-media-1.0.2.min';

interface Position {
  pc: number;
  mobile: number;
}

export default defineComponent({
  name: 'FollowingOffer',
  components: {
    ChevronDoubleUpIcon,
    ChevronDoubleDownIcon,
    // CursorClickIcon,
  },
  data() {
    return {
      bottom: 0,
      position: {
        pc: 200,
        mobile: 25,
      } as Position,
    };
  },
  methods: {
    handleScroll() {
      if (im.getActive() === 'desktop') {
        this.bottom = -document.documentElement.scrollTop + this.position.pc;
      }

      if (im.getActive() !== 'desktop') {
        this.bottom = -document.documentElement.scrollTop + this.position.mobile;
      }
    },
    handleWheel() {
      this.handleScroll();
    },
    handleKeyPress(e: KeyboardEvent) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        this.handleScroll();
        console.log('KeyPress');
      }
    },
    handleResize() {
      if (im.getActive() === 'desktop') {
        this.bottom = this.position.pc;
      }

      if (im.getActive() !== 'desktop') {
        console.log('lte tablet');
        this.bottom = this.position.mobile;
      }
    },
  },
  created() {
    if (im.getActive() === 'desktop') {
      this.bottom = this.position.pc;
    }

    if (im.getActive() !== 'desktop') {
      this.bottom = this.position.mobile;
    }

    window.addEventListener('mousewheel', this.handleWheel);
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', () => {
      if (im.getActive() !== 'desktop') {
        this.bottom = -document.documentElement.scrollTop + this.position.mobile;
      }
    });
  },
});
</script>

<style scoped lang="scss">
div.wrap {
  position: absolute;
  //bottom: 200px;
  right: 30px;
  z-index: 5;
  width: 300px;
  padding: 50px 0;
  //height: 500px;
  //border: 1px solid $oc-black;
  //color: $oc-gray-0;
  transition: bottom linear 0.3s;

  //> div {
  //  display: flex;
  //  flex-direction: column;
  //}

  @include media('<desktop') {
    right: 10px;
    width: 170px;
    padding: 0;
    opacity: 0.8;
  }

  div.arrow {
    text-align: center;

    svg {
      width: 50px;
      color: $oc-gray-7;
      vertical-align: bottom;

      @include media('<desktop') {
        width: 25px;
      }

      &.up {
        margin-bottom: 20px;

        @include media('<desktop') {
          margin-bottom: 10px;
        }
      }
      &.down {
        margin-top: 20px;

        @include media('<desktop') {
          margin-top: 10px;
        }
      }
    }
  }

  //div.title {
  //  margin-bottom: 40px;
  //  padding: 20px 0;
  //  background-color: $oc-blue-5;
  //  color: $oc-gray-0;
  //  font-weight: 900;
  //  font-size: 18px;
  //  line-height: 40px;
  //  text-align: center;
  //  letter-spacing: 0.5px;
  //
  //  p {
  //    position: relative;
  //
  //    svg {
  //      position: absolute;
  //      right: 25px;
  //      width: 50px;
  //    }
  //  }
  //}

  div.call {
    margin-bottom: 40px;

    @include media('<desktop') {
      margin-bottom: 20px;
    }

    a {
      display: block;
      height: 80px;

      @include media('<desktop') {
        height: 60px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  div.web {
    margin-bottom: 40px;
    background-color: lighten($oc-indigo-9, 5%);

    @include media('<desktop') {
      margin-bottom: 20px;
    }

    a {
      display: block;
      //height: 80px;
      font-weight: 700;
      font-size: 18px;
      color: $oc-gray-0;
      text-align: center;
      line-height: 80px;
      letter-spacing: 1px;

      @include media('<desktop') {
        font-size: 15px;
        line-height: 60px;
        letter-spacing: normal;
      }
    }
  }

  div.kakao {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background-color: #f7e600;

    @include media('<desktop') {
      margin-bottom: 20px;
    }

    a {
      //padding: 20px 30px 10px;
      font-weight: 700;
      font-size: 18px;
      color: #3a1d1d;
      line-height: 80px;
      letter-spacing: 1px;

      @include media('<desktop') {
        line-height: 60px;
      }

      //img {
      //  width: 100%;
      //}
    }
  }

  div.app-link {
    a {
      display: block;
      background-color: $oc-yellow-6;
      font-weight: 700;
      font-size: 18px;
      color: $oc-gray-8;
      line-height: 80px;
      letter-spacing: 1px;
      text-align: center;

      @include media('<desktop') {
        line-height: 60px;
      }
    }
  }
}
</style>

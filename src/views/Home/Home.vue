<template>
  <div>
    <section id="small">
      <div class="container mx-auto">
        <h2>소형화물</h2>
        <div class="wrap">
          <div class="card">
            <h3>오토바이</h3>
            <div class="image">
              <img src="../../../public/motorcycle.svg" alt="오토바이" width="163" />
            </div>
            <div class="text">
              <h4>오토바이에 적재가능한 모든 물품</h4>
              <p class="feature"><b>특징:</b> 최대 <b>40kg</b></p>
              <p><b>적재크기:</b> 가로 * 세로 * 높이의 합이 150cm 미만인 물품 권장</p>
            </div>
          </div>
          <div class="card">
            <h3>다마스</h3>
            <div class="image">
              <img src="../../../public/damas.svg" alt="다마스" width="163" />
            </div>
            <div class="text">
              <h4>소형차량에 적재가능한 모든 물품</h4>
              <p class="feature"><b>특징:</b> 최대 <b>350kg</b></p>
              <p><b>적재크기:</b> 오토바이 적재 시 위험한 물건이나 소량의 소화물 운송에 적합</p>
            </div>
          </div>
          <div class="card">
            <h3>라보</h3>
            <div class="image">
              <img src="../../../public/labo.svg" alt="라보" width="163" />
            </div>
            <div class="text">
              <h4>소형트럭에 적재가능한 모든 물품</h4>
              <p class="feature"><b>특징:</b> 최대 <b>450kg</b></p>
              <p><b>적재크기:</b> 중소량의 소화물 운송에 적합</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="medium_to_large">
      <div class="container mx-auto">
        <h2>중·대형화물</h2>
        <div class="wrap">
          <div class="card">
            <h3>1톤 ~ 5톤</h3>
            <div class="image">
              <img src="../../../public/truck-md.svg" alt="용달트럭" width="163" />
            </div>
            <div class="text">
              <h4>차량에 적재가능한 모든 물품</h4>
              <p class="feature"><b>특징:</b> <b>1000kg</b> 부터 최대 <b>5000kg</b> 까지</p>
              <p><b>적재크기:</b> 다량의 이삿짐 또는 화물 운송에 적합</p>
            </div>
          </div>
          <div class="card">
            <h3>10톤 ~</h3>
            <div class="image">
              <img src="../../../public/truck-lg.svg" alt="대형트럭" width="163" />
            </div>
            <div class="text">
              <h4>차량에 적재가능한 모든 물품</h4>
              <p class="feature"><b>특징:</b> <b>10000kg</b> 부터 ~</p>
              <p><b>적재크기:</b> 다량의 대형 화물에 적합</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 퀵서비스 - 오토바이, 다마스, 라보, 용달(1톤, 2.5톤, 5톤, 10톤, 25톤)

export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
section {
  padding: 70px 0 80px;
  //height: 500px;

  &:nth-child(even) {
    background-color: $oc-gray-1;
  }

  &#medium_to_large {
    div.wrap {
      justify-content: space-around;
    }
  }

  div.container {
    h2 {
      margin-bottom: 50px;
      font-size: 28px;

      @include media('<desktop') {
        margin-bottom: 100px;
      }
    }

    div.wrap {
      display: flex;
      justify-content: space-between;
      padding: 0 100px;

      @include media('<desktop') {
        display: block;
        width: 100%;
        padding: 0;
      }

      > div.card {
        display: flex;
        flex-direction: column;
        width: 300px;
        //height: 350px;
        //background-color: $oc-blue-5;
        //border: 1px solid $oc-gray-5;

        @include media('<desktop') {
          display: block;
          width: 100%;

          &:not(:last-child) {
            margin-bottom: 100px;
          }
        }

        > h3 {
          padding: 20px 0;
          font-size: 24px;
          font-weight: 700;
          color: $oc-gray-8;
          letter-spacing: 1px;
          text-align: center;
        }

        > div.image {
          flex-basis: 163px;
          margin-bottom: 30px;
          text-align: center;
        }

        > div.text {
          flex-basis: 120px;
          padding: 0 30px;

          > h4 {
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 18px;
            color: $oc-gray-8;
            //text-align: center;
          }

          > p {
            font-weight: 400;
            font-size: 15px;
            color: $oc-gray-7;
            line-height: 1.3;
            letter-spacing: 0.2px;
            //text-align: center;

            > b {
              font-weight: 600;
            }

            &.feature {
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

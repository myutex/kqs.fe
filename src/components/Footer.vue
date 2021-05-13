<template>
  <footer>
    <div class="container mx-auto">
      <div class="introduce-services">
        <span>서비스소개</span>
        <dl>
          <dt>소형화물</dt>
          <dd>오토바이</dd>
          <dd>다마스</dd>
          <dd>라보</dd>
        </dl>
        <dl>
          <dt>중형화물</dt>
          <dd>1톤 트럭</dd>
          <dd>2.5톤 트럭</dd>
          <dd>5톤 트럭</dd>
        </dl>
        <dl>
          <dt>대형화물</dt>
          <dd>10톤 트럭</dd>
          <dd>25톤 트럭</dd>
          <dd>50톤 트럭</dd>
        </dl>
      </div>
      <div class="company">
        <address>
          <p>한국퀵서비스</p>
          주소 : 경기도 김포시 장기동 2008-1, 김포 금광테크노밸리
          <br />
          대표이사 : OOO | 사업자등록번호: OOO-OO-OOOOO
          <br />
          통신판매번호 : 2021-OOOO-OOOOO
          <br />
          전화번호 : 1661-7773
          <br />
          전자우편주소 : id@domain.com
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
// 퀵서비스 - 오토바이, 다마스, 라보, 용달(1톤, 2.5톤, 5톤, 10톤, 25톤)
</script>

<style scoped lang="scss">
footer {
  padding: 50px 0;
  background-color: rgba($oc-gray-9, 0.9);
  color: $oc-gray-2;

  div.introduce-services {
    margin-bottom: 60px;
    vertical-align: top;

    span {
      margin-right: 100px;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 5px;

      @include media('<desktop') {
        display: block;
        margin: 0 0 50px;
      }
    }

    dl {
      display: inline-block;
      margin-right: 50px;
      vertical-align: top;

      @include media('<desktop') {
        &:nth-child(even) {
          margin-bottom: 50px;
        }
      }

      dt {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 18px;
        color: $oc-gray-3;
        letter-spacing: 3px;
      }
      dd {
        margin-bottom: 3px;
        font-weight: 300;
        color: $oc-gray-4;
        letter-spacing: 0.5px;
      }
    }
  }
  div.company {
    font-size: 14px;
    color: $oc-gray-5;

    address {
      font-style: normal;
      line-height: 1.35;
      letter-spacing: 0.5px;

      p {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        color: $oc-gray-4;
        letter-spacing: 3px;
      }
    }
  }
}
</style>

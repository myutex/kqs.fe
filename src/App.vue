<template>
  <div>
    <FollowingOffer />
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
main {
  padding-top: 80px;
}
</style>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FollowingOffer from '@/components/FollowingOffer';

export default {
  components: {
    FollowingOffer,
    Header,
    Footer,
  },
};
</script>

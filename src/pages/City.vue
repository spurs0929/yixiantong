<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script>
  import CommonHeader from 'components/Header/Common';
  import CityScrollWrapper from 'components/ScrollWrapper/City';

  export default {
    name: 'City',
    components: {
      CommonHeader,
      CityScrollWrapper
    },
    data(){
      return{
        title: '選擇城市'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!data.status">
        <no-data-tip 
          v-show="
            (!data.viewDatas || data.viewDatas.length <= 0) &&
            (!data.foodDatas || data.foodDatas.length <= 0) &&
            (!data.hotelDatas || data.hotelDatas.length <= 0) &&
            (!data.massageDatas || data.massageDatas.length <= 0) &&
            (!data.ktvDatas || data.ktvDatas.length <= 0)
        "></no-data-tip>
        <div v-if="data.viewDatas && data.viewDatas.length > 0">
          <home-title title="景點結果: "></home-title>
          <view-list
            :viewDatas="data.viewDatas"
          ></view-list>
        </div>
        <div v-if="data.foodDatas && data.foodDatas.length > 0">
          <home-title title="美食結果: "></home-title>
          <food-list
            :foodDatas="data.foodDatas"
          ></food-list>
        </div>
        <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
          <home-title title="酒店結果: "></home-title>
          <hotel-list
            :hotelDatas="data.hotelDatas"
          ></hotel-list>
        </div>
        <div v-if="data.massageDatas && data.massageDatas.length > 0">
          <home-title title="按摩結果: "></home-title>
          <massage-list
            :massageDatas="data.massageDatas"
          ></massage-list>
        </div>
        <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
          <home-title title="KTV結果: "></home-title>
          <ktv-list
            :ktvDatas="data.ktvDatas"
          ></ktv-list>
        </div>
      </div>
      <error :errorShow="data.status === -1"></error>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import HomeTitle from './Sub/HomeTitle';
  import ViewList from './ViewList/Index';
  import FoodList from './FoodList/Index';
  import HotelList from './HotelList/Index';
  import MassageList from './MassageList/Index';
  import KtvList from './KtvList/Index';
  import NoDataTip from './Sub/NoDataTip';
  import Error from './Sub/Error';

  export default {
    name: 'SearchScrollWrapper',
    components: {
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      NoDataTip,
      Error
    },
    props: {
      data: Object
    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style lang="scss" scoped>

</style>
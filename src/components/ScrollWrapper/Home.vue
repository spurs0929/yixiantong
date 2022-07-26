<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import CategoryIcons from './CategoryIcons/Index';
  import HomeTitle from './Sub/HomeTitle';
  import ViewList from './ViewList/Index';
  import FoodList from './FoodList/Index';
  import HotelList from './HotelList/Index';
  import MassageList from './MassageList/Index';
  import KtvList from './KtvList/Index';
  import Error from './Sub/Error';
  
  import { mapState } from 'vuex';
  import { IndexModel } from 'models/index';

  import tools from 'utils/tools';

  export default {
    name: 'HomeScrollWrapper',
    components: {
      CategoryIcons,
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Error
    },
    data(){
      return {
        currentCityId: 0,
        errorShow: false,
        homeTitle: {
          foodTitle: '推荐美食',
          hotelTitle: '推荐酒店',
          ktvTitle: '推荐KTV',
          massageTitle: '推荐按摩',
          viewTitle: '推荐景点'
        },
        homeDatas: {
          foodDatas: [],
          hotelDatas: [],
          ktvDatas: [],
          massageDatas: [],
          viewDatas: []
        }
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.currentCityId = this.cityId;
      this.getHomeDatas(this.cityId);
    },
    activated(){
      if(this.currentCityId !== this.cityId){
        this.currentCityId = this.cityId;
        this.getHomeDatas(this.cityId);
      }
    },
    methods: {
      getHomeDatas(cityId){
        const indexModel = new IndexModel();
        indexModel.getHomeDatas(cityId).then((resolve) => {
          
          if(resolve && resolve.status === 0){
            const data = resolve.data;
            this.errorShow = false;
            this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
            this.homeDatas.hotelDatas = data.hotelDatas;
            this.homeDatas.ktvDatas = data.ktvDatas;
            this.homeDatas.massageDatas = data.massageDatas;
            this.homeDatas.viewDatas = data.viewDatas;
          }else{
            this.errorShow = true;
            console.log({
              statusCode: resolve.status,
              errorMsg: resolve.error
            });
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
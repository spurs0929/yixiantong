<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list
          v-if="field === 'view'"
          :viewDatas="listDatas[cityId]"
        ></view-list>
        <food-list
          v-if="field === 'food'"
          :foodDatas="listDatas[cityId]"
        ></food-list>
        <hotel-list
          v-if="field === 'hotel'"
          :hotelDatas="listDatas[cityId]"
        ></hotel-list>  
        <massage-list
          v-if="field === 'massage'"
          :massageDatas="listDatas[cityId]"
        ></massage-list>
        <ktv-list
          v-if="field === 'ktv'"
          :ktvDatas="listDatas[cityId]"
        ></ktv-list>
        <loading
          :loadingShow="loadingShow"
        >
        </loading>
      </div>
      <error
        :errorShow="errorShow"
      ></error>    
    </div>
  </div> 
</template>

<script>
  import BetterScroll from 'better-scroll';
  import { mapState } from 'vuex';

  import ViewList from './ViewList/Index';
  import FoodList from './FoodList/Index';
  import HotelList from './HotelList/Index';
  import MassageList from './MassageList/Index';
  import KtvList from './KtvList/Index';
  import Loading from './Sub/Loading';
  import Error from './Sub/Error';

  import { ListModel } from 'models/list';

  import tools from 'utils/tools';

  export default {
    name: 'ListScrollWrapper',
    components: {
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Loading,
      Error
    },
    data(){
      return{
        errorShow: false,
        loadingShow: true,
        listDatas: {}
      } 
    },
    computed: {
      ...mapState(['cityId', 'field'])
    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.getListDatas(this.cityId, this.field);
    },
    methods: {
      getListDatas(cityId, field){
        if(!this.listDatas[cityId]){
          const listModel = new ListModel();

          this.loadingShow = true;

          listModel.getListDatas(cityId, field).then((resolve) => {
            if(resolve && resolve.status === 0){
              const data = tools.formatJSON(resolve.data, 'keyword');

              this.errorShow = false
              setTimeout(() => {
                this.listDatas[cityId] = data;
                this.loadingShow = false;
              }, 500);
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
    },
    watch: {
      cityId(){
        this.getListDatas(this.cityId, this.field);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="list-wrapper">
    <city-list-sub
      v-for="(item, index) of CityList"
      :cityInfo="item"
      :key="index"
    ></city-list-sub>
  </div>
</template>

<script>
  import CityListSub from './Sub';
  import cityDatas from 'data/cities';

  export default {
    name: 'CityList',
    components: {
      CityListSub
    },
    data(){
      return{
        CityList: cityDatas
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
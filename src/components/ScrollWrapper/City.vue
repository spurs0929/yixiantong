<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import CurrentCity from './CityList/CurrentCity';
  import CityList from './CityList/Index';

  export default {
    name: 'CityScrollWrapper',
    components: {
      CurrentCity,
      CityList 
    },
    mounted(){
      // BetterScroll初始化
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style>

</style>
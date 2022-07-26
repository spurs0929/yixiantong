<template>
  <div class="price-bd">
    <span class="iconfont icon-price1"></span>
    <span class="price">￥{{price || 0}}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: {
      type: Number,
      default(){
        return 0;
      }
    }
  }
} 
</script>

<style lang="scss" scoped>
  @import '~styles/variables.scss';
  .price-bd{
    display: flex;
    height: .44rem;
    padding: .03rem, .15rem, 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    line-height: .44rem;
    box-sizing: border-box;

    .icon-price1{
      font-size: .18rem;
      padding-left: .15rem;
      color: #000;
    }

    .price{
      font-size: .16rem;
      margin-left: .1rem;
      color: $defaultOrange;
    }
  }
</style>
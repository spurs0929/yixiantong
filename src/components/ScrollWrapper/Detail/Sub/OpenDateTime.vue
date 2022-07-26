<template>
  <div class="datetime-bd">
    <span class="iconfont icon-datetimepickerbt_back"></span>
    <span class="dateTime">{{openDateTime}}</span>
  </div>  
</template>

<script>
  export default {
    name: 'DetailOpenDateTime',
    props: {
      openDateTime: {
        type: String,
        default(){
          return '加載中...';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .datetime-bd{
    display: flex;
    align-items: center;
    min-height: .44rem;
    padding: .1rem .15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .icon-datetimepickerbt_back{
      font-size: .18rem;
      margin-right: .1rem;
      color: #999;
    }

    .dateTime{
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>
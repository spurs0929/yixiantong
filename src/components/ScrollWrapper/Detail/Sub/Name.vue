<template>
  <div class="name-bd">
    <span class="iconfont icon-QUEST_NAME"></span>
    <span class="name-text">{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailName',
    props: {
      name: {
        type: String,
        default(){
          return '加載中...'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .name-bd{
    display: flex;
    height: .44rem;
    padding: .03rem, .15rem, 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    line-height: .39rem;
    box-sizing: border-box;

    .icon-QUEST_NAME{
      padding-left: .1rem;
      font-size: .18rem;
      color: #000;
    }

    .name-text{
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
</style>
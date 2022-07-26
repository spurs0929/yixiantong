<template>
  <div class="recom-bd">
    <detail-title
      icon="icon-recommend"
      title="推薦菜色"
    ></detail-title>
    <div class="recom-content">{{recom}}</div>
  </div>
</template>

<script>
  import DetailTitle from './Title';
  export default {
    name: 'DetailRecom',
    components: {
      DetailTitle
    },
    props: {
      recom: {
        type: String,
        default(){
          return '加載中...';
        }
      }
    }
  }
</script>

<style lang="scss" scoped> 
  @import '~styles/mixins.scss';
  .recom-bd{
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .recom-content{
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: .18rem;
      box-sizing: border-box;
      text-indent: 2em;
    }
  }
</style>
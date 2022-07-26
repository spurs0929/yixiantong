<template>
  <div class="service-bd">
    <detail-title
      icon="icon-service"
      title="提供的服務"
    ></detail-title>
    <div class="service-content">
      <p>停車場: {{ service && service.parking ? '有' : '無' }}</p>
      <p>WIFI: {{ service && service.wifi ? '有' : '無'}}</p>
    </div>
  </div>
</template>

<script>
  import DetailTitle from './Title';
  export default {
    name: 'DetailService',
    components: {
      DetailTitle
    },
    props: {
      service: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  .service-bd{
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .service-content{
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: .18rem;
      box-sizing: border-box;
    }
  }
</style>
<template>
  <div class="stars-wrapper">
    <span :class="['iconfont icon-star-fill', { active: starNum >= 1 }]"></span>
    <span :class="['iconfont icon-star-fill', { active: starNum >= 2 }]"></span>
    <span :class="['iconfont icon-star-fill', { active: starNum >= 3 }]"></span>   
    <span :class="['iconfont icon-star-fill', { active: starNum >= 4 }]"></span>   
    <span :class="['iconfont icon-star-fill mr', { active: starNum >= 5 }]"></span>   
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/variables.scss';

  .stars-wrapper{
    color: #ccc;
    .active{
      color: $starColor
    }
    .mr{
      margin-right: .05rem;
    }
  }
</style>
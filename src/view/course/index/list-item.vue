<template>
  <div class="course-item">
      <div class="course-pic">
          <img :alt="itemData.name" :src="itemData.photo"/>
      </div>
      <p class="course-title ellipsis" :title="itemData.name">{{itemData.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~style/vars'
.course-item
  width 277px
  height 255px
  background #fff
  border 1px solid #f0f0f0
  cursor pointer
  transition all ease-in-out 0.5s
  display inline-block
  .course-title
    font-size 16px
    width 100%
    text-align center
    line-height 74px
    transition all ease-in-out 0.5s
  .course-pic
    width 100%
    height 179px
    overflow hidden
    img
      width 100%
      height 100%
      transition all ease-in-out 0.5s
      transform-origin center
  &:hover
    box-shadow 0px 0px 15px rgba(45, 50, 22, 0.2)
    img
      transform scale(1.2)
    .course-title
      color $theme-color
</style>

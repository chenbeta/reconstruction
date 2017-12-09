<template>
  <div class="content-box my-classroom" >
      <div class="classroom-nav f-l" :class="{'end':ending}">
          <div class="doing" @click="ending = false"></div>
          <div class="ending"  @click="ending = true"></div>
      </div>
      <div class="classroom-content f-l">
        <list-item-box type="1" v-show="!ending" />
        <list-item-box type="2" v-show="ending" />
      </div>
  </div>
</template>

<script>
import listItemBox from './list-item-box';

export default {
  components: {
    listItemBox
  },
  data() {
    return {
      ending: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.my-classroom
  margin 20px auto
  overflow hidden
  .classroom-nav
    width 77px
    height 269px
    background url('../../assets/img/classroom/zskt.png')
    &.end
      background url('../../assets/img/classroom/jskt.png')
    div
      cursor pointer
    .doing
      height 134px
    .ending
      height 138px
  .classroom-content
    width 1120px
    min-height 500px
    padding 30px 70px
    border 1px solid #e0e0e0
</style>

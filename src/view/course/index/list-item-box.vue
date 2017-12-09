<template>
  <div>
      <item v-for="item in data" :key="item.id" class="item" :item-data ="item"></item>
  </div>
</template>

<script>
import item from './list-item.vue';

export default {
  components: {
    item
  },
  props: {
    data: {
      type: Array
    }
  }
};
</script>

<style lang="stylus" scoped>
.item {
  margin: 0 30px 20px 0;

  &:nth-child(4n+0) {
    margin-right: 0;
  }
}
</style>

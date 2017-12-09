<template>
  <div>
      <list-item :create="true" v-if="type == '1'"></list-item>
      <list-item v-for="item in itemsData.items" :key="item.id" :data="item" :item-tpye="type"  />
      <div>
          <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange"></el-pagination>
      </div>
  </div>
</template>

<script>
import listItem from './list-item';

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  components: {
    listItem
  },
  data () {
    return {
      itemsData: {},
      queryParameter: {
        type: 1,
        pageNumber: 1,
        pageSize: 12
      }
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.queryParameter.type = this.type;
      this.queryParameter.pageSize = this.type === '1' ? 11 : 12;
      this.http({ url: 'bxg/teaching/squad/list', params: this.queryParameter })
        .then(res => {
          if (res.success) {
            this.itemsData = res.resultObject;
          }
        });
    },
    handleCurrentChange (val) {
      this.queryParameter.pageNumber = val;
      this.getData();
    }
  }
};
</script>

<template>
    <div>
        <course-item v-for="item in itemsData.items" :key="item.course_id" :item-data="item"></course-item>
        <div>
            <el-pagination layout="prev, pager, next" :total="itemsData.totalCount" @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import courseItem from './course-item.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    courseItem
  },
  props: {
    url: {
      type: String,
      default: 'bxg/user/waitCourse'
    }
  },
  computed: {
    ...mapGetters(['getUserData'])
  },
  data() {
    return {
      itemsData: {},
      queryParameter: {
        teacherId: '',
        pageNumber: 1,
        pageSize: 8
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.queryParameter.teacherId = this.getUserData.id;
      this.http({ url: this.url, params: this.queryParameter }).then(res => {
        if (res.success) {
          this.itemsData = res.resultObject;
        }
      });
    },
    handleCurrentChange(val) {
      this.queryParameter.pageNumber = val;
      this.getData();
    }
  }
};
</script>

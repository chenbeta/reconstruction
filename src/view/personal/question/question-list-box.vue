<template>
  <div>
      <ul>
        <li>
            <a href="#/ansandqus/qusdetail/12677" target="_blank" class="ques-list-title">堂播虎5.2.2 登录提示获取课程树失败，然后就未响应，，，</a>
            <div class="ques-list-tool">
                <span> 1 回复 | </span>
                <span>发布时间：2017-10-10 </span>
            </div>
        </li>
      </ul>
      <div>
          <el-pagination layout="prev, pager, next" :total="itemsData.totalCount" @current-change="handleCurrentChange">
          </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            itemsData: {},
            queryParameter: {
                title: '',
                status: null,
                pageNumber: 1,
                pageSize: 8,
                url: ''
            }
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData () {
            this.queryParameter.url = this.url;
            this.axios.get('http://yuanxiao.boxuegu.com/api/call', {params: this.queryParameter}).then(res => {
                let resData = res.data;
                if (resData.success) {
                    this.itemsData = resData.resultObject;
                }
            });
            // this.http({url: this.url, params: this.queryParameter})
            //     .then(res => {
            //         if (res.success) {
            //             this.itemsData = res.resultObject;
            //         }
            //     });
        },
        handleCurrentChange (val) {
            this.queryParameter.pageNumber = val;
            this.getData();
        }
    }
};
</script>

<style lang="stylus" scoped>

</style>

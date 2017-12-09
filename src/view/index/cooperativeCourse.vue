<template>
  <div class="home-list">
      <p class="home-list-tilte">热门合作课程</p>
      <fieldset>
        <legend>POPULAR COOPERATIVE COURSE</legend>
      </fieldset>
      <div class="home-course-box">
        <a href="#" class="home-curse-item" v-for="item in Data" :key="item.id">
          <div class="course-pic">
            <img :src="require('../../assets/img/error-pic.png')"/>
            <div class="video-shadow">
              <i class="el-icon-it-play"></i>
            </div>
          </div>
          <div class="home-course-explain">
            <p class="explain-title" :title="item.name">{{item.name}}</p>
            <div class="explain-bottom">
              <div class="f-l">
                <i class="el-icon-it-people"></i><span class="text">{{item.seq}}人合作</span>
              </div>
              <span class="f-r text-btn">课程详情</span>
            </div>
          </div>
        </a>
        <div v-if="!Data.length">暂无数据</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.http({ url: 'bxg_anon/home/topCourse' }).then(res => {
        if (res.success) {
          this.Data = res.resultObject;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import 'stylus/cooperativeCourse.styl';
</style>

<template>
  <div class="content-box">
      <div class="screen-box">
          <div class="classify-box">
              <div class="classify-title f-l">
                  课程分类
              </div>
              <div class="classify-content f-r">
                  <span class="classify-item f-l on">全部</span>
                  <span class="classify-item f-l" v-for="item in classify" :key="item.id">
                      {{item.name}}
                  </span>
              </div>
          </div>
          <div class="classify-box">
              <div class="classify-title f-l">
                  排序
              </div>
              <div class="classify-content f-r">
                  <span class="classify-item f-l on">全部</span>
                  <span class="classify-item f-l">最新</span>
                  <span class="classify-item f-l">最热</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            classify: []
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData () {
            this.http({url: 'bxg_anon/course/categoryList'})
                .then(res => {
                    this.classify = res.resultObject;
                });
        }
    }
};
</script>


<style lang="stylus" scoped>
    @import "~style/vars"
    $classify-height = 55px;
    .screen-box
        padding 0 20px
        margin 50px 0 30px 0
        background #fff
        font-size 16px
        .classify-box
            overflow hidden
            border-bottom 1px solid #f0f0f0
        .classify-title
            height $classify-height
            line-height $classify-height
            color #999
            &:after
                content ':'

        .classify-content
            width 1060px
            .classify-item
                line-height $classify-height
                display inline-block
                color #333
                min-width 80px
                margin-right 40px
                cursor pointer
                &:hover,&.on
                    color $theme-color

</style>

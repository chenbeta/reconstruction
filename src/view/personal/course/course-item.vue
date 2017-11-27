<template>
  <a class="course-item" href="#/index">
    <div class="course-overdue" v-if="itemData.status==2 && itemData.dated">已逾期</div>
    <el-card :body-style="{ padding: '0px' }">
      <img  class="course-img" :src="itemData.photo" alt="photo" >
      <div class="course-info">
        <p class="course-title ellipsis" :title="itemData.name">{{itemData.name}}</p>
        <p class="course-status" v-if="itemData.status==1">正在审核中...</p>
        <div class="course-date" v-else>
            <p class="ellipsis">合作时间：{{itemData.begin_time}}</p>
            <p class="ellipsis">逾期时间：{{itemData.end_time}}</p>
        </div>
      </div>
    </el-card>
  </a>
</template>

<script>
export default {
    props: {
        itemData: {
            type: Object,
            required: true
        }
    }
};
</script>


<style lang="stylus" scoped>
    @import "~style/vars"
    .course-item
        width 190px;
        height 250px;
        display inline-block;
        position relative;
        margin-top 30px
        margin-right 30px;
        &:nth-child(4n)
            margin-right 0;
        .course-overdue
            position absolute;
            top -4px
            right 11px;
            width 49px;
            font-size 12px;
            color #fff;
            text-align left;
            text-indent 4px;
            line-height 21px;
            height 21px;
            background-image url('../../../assets/img/cooperamode_dv.png');
        .course-img
            width 100%;
            height 140px;
        .course-info
            padding: 0 5px 10px 5px;
        .course-title
            margin-top 20px;
            font-size 16px;
            color #2f2f2f;
            max-width 100%;
            text-align center;
        .course-status
            color $theme-color;
            text-align center;
            height 40px;
            line-height 40px;
        .course-date
            p
                font-size 12px;
                color #999;
                max-width 100%;
                text-align center;
</style>

<template>
  <div class="classroom-item">
      <template v-if="create">
          <div class="create-classroom-box">
              <i class="el-icon-it-add"></i>
              <p class="title">新建课堂</p>
          </div>
      </template>
      <template v-else>
        <div class="classroom-header-box">
            <span class="classroom-title ellipsis">{{data.squad_name}}</span>
            <span class="classroom-handle-box f-r"><i class="el-icon-it-edit" v-if="itemTpye == '1'"></i><i class="el-icon-it-del1"></i></span>
        </div>
        <div class="doing-box show-box" v-if="itemTpye == '1'">
            <p><i class="el-icon-it-tongxunlu1 panel-ico"></i>{{data.studentNums}} 名</p>
            <p><i class="el-icon-it-batchimport panel-ico"></i>{{data.create_time.split(" ")[0]}} ~ {{data.end_time.split(" ")[0]}}</p>
        </div>
        <div class="end-box show-box" v-if="itemTpye == '2'">
            <p><span>结束时间:{{data.end_time}}</span></p>
            <p><span>加入课堂序列号:{{data.serial_code}}</span></p>
        </div>
        <div class="hover-box" >
            <p><span>学生人数: {{data.studentNums}} 名</span><span class="f-r">课堂序列号: <span class="matter">{{data.serial_code}}</span></span></p>
            <p><span>待批阅考试: <span class="matter">{{data.examWaitMarkCounts}}</span> 份</span><span class="f-r">待批阅作业: <span class="matter">{{data.busyWorkWaitMarkCounts}}</span> 份</span></p>
        </div>
        <div class="mark-box" v-if="itemTpye =='1' && (data.is_new || !data.is_overdue)" :class="{'new': data.is_new}">
            {{data.is_new ? "新" : "逾期"}}
        </div>
      </template>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object
        },
        itemTpye: {
            type: String
        },
        create: {
            type: Boolean,
            default: false
        }
    }
};
</script>


<style lang="stylus" scoped>
    @import "~style/vars"

    .classroom-item
        position relative
        width 303px
        height 134px
        background-color #fbfbfb
        transition .2s
        box-shadow 0 2px 2px #ccc
        padding 24px 23px 0 23px
        cursor pointer
        display inline-block
        vertical-align top
        margin 0 30px 30px 0
        &:nth-child(3n)
            margin 0
        &:hover
            transform translate(0, -2px)
            box-shadow 0 5px 5px #ccc
            background-color #f1f3f2
            .hover-box
                display block
            .show-box
                display none
            .classroom-title
                font-weight bold

        .classroom-header-box
            line-height 25px  
            font-size 18px
            margin-bottom 28px
            .classroom-title
                width 210px
                display inline-block
            i 
                padding 0 1px
                &:hover
                    color $theme-color

        .panel-ico
            font-size 16px
            margin-right 10px

        .doing-box,.end-box,.hover-box
            font-size 12px
            color #333
            line-height 20px
        .hover-box
            display none

        .matter
            color #da1920
            font-weight bold
        .mark-box
            position absolute
            left -5px
            top -1px
            width 30px
            font-weight 600
            padding-top 8px
            text-align center
            transform rotate(-45deg)
            color #fff
            font-size 12px
            &:before
                content ' '
                position absolute
                width 0
                height 0
                top -3px
                left -16px
                border-left 32px solid transparent
                border-right 32px solid transparent
                border-bottom 32px solid #c1c0c0
                z-index -1
            &.new:before
                border-bottom-color #da1920

        .create-classroom-box
            color $theme-color
            font-size 18px
            text-align center
            i
                font-size 40px
                margin-bottom 10px
</style>

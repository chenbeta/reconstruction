<template>
  <div>
      <el-tabs active-name="first">
            <el-tab-pane label="正在审核的课程" name="first" >
                <course-item-box></course-item-box>
            </el-tab-pane>
            <el-tab-pane label="合作成功的课程" name="second">
                <course-item-box url="bxg/user/passCourse"></course-item-box>
            </el-tab-pane>
       </el-tabs> 
  </div>
</template>

<script>
import courseItem from './course-item.vue';
import courseItemBox from './course-item-box.vue';

export default {
  components: {
    courseItem,
    courseItemBox
  }
};
</script>



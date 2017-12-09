<template>
    <el-tabs v-model="selectTab">
        <el-tab-pane v-for="(item, index) in tabs" :key="item.name" :label="item.title" :name="item.name">
            <question-list-box :url="item.url"></question-list-box>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import questionListBox from './question-list-box.vue';

export default {
  components: {
    questionListBox
  },
  data() {
    return {
      tabs: [
        { title: '我的提问', name: 'first', url: 'https://ask-center.boxuegu.com/ask/my/findMyQuestions' },
        { title: '我的回答', name: 'second', url: 'https://ask-center.boxuegu.com/ask/my/findMyAnswers' },
        { title: '我的关注', name: 'third', url: 'https://ask-center.boxuegu.com/ask/my/findMyCollections' }
      ],
      selectTab: 'first'
    };
  }
};
</script>

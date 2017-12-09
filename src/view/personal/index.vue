<template>
  <div class="content-box personal-content">
      <div class="personal-left-box f-l">
          <div class="personal-info">
              <div class="personal-avatar-box">
                  <img class="personal-avatar" :src="getUserData.personal_img"/>
              </div>
              <p class="personal-name ellipsis" :title="getUserData.nick_name">{{getUserData.nick_name}}</p>
              <p class="personal-status">认证教师</p>
          </div>
          <div class="personal-nav">
               <router-link :to="{name: 'user-msg'}" class="personal-nav-item" active-class="on">我的消息</router-link>
               <router-link :to="{name: 'user-data'}" class="personal-nav-item" active-class="on">个人资料</router-link>
               <router-link to="3" class="personal-nav-item" active-class="on">教师资格认证</router-link>
               <router-link :to="{name: 'user-course'}" class="personal-nav-item" active-class="on">合作课程</router-link>
               <router-link :to="{name: 'user-question'}" class="personal-nav-item" active-class="on">我的问答</router-link>
          </div>
      </div>
      <div class="personal-right-box f-l">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUserData'])
  }
};
</script>

<style lang="stylus" scoped>
@import 'index.styl'
</style>

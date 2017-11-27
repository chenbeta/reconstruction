<template>
  <div class="home-header">
      <div class="home-header-box">
          <div class="home-logo">
             <a href="" class="logo-box">
                <img :src="require('../assets/img/sy_footer_logo.png')">
				<span class="home-logo-span" title="高校教辅平台">高校教辅平台</span>
             </a>
          </div>
          <div class="home-nav" v-if="getLoginSuccess">
              <ul>
                  <li class="home-nav-li">
                      <router-link to="/classroom" active-class = "active">教学中心</router-link>
                  </li>
                  <li class="home-nav-li">
                     <router-link to="/course" active-class = "active">课程中心</router-link>
                  </li>
              </ul>
          </div>
          <div class="home-user">
              <img :src="require('../assets/img/weilie.png')" class="weilie" v-if="!getLoginSuccess">
              <el-dropdown trigger="hover" v-else>
					<span class="el-dropdown-link userinfo-inner"><img :src="getUserData.personal_img" /><i class="el-icon-caret-bottom el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><router-link to="personal">个人中心</router-link></el-dropdown-item>
						<el-dropdown-item >退出登录</el-dropdown-item>
					</el-dropdown-menu>
			  </el-dropdown>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'headerBox',
    computed: {
        ...mapGetters([
            'getUserData',
            'getLoginSuccess'
        ])
    },
    created () {
        this.setUserData();
    },
    methods: {
        ...mapActions([
            'setUserData'
        ])
    }
};
</script>

<style lang="stylus" scoped>
    @import '../style/header.styl';
</style>


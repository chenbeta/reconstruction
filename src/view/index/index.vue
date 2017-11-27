<template>
  <div>
    <div class="banner-box">
      <el-carousel trigger="click" height="500px" arrow="never">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <a :href="item.href" target="_blank" :title="item.title">
              <img :src="item.image_url" style="width: 100%;height: 100%" alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
      <div class="login-reg-box">
          <login-box></login-box>
      </div>
    </div>
    <div class="content-box"></div>
    <div class="content-box">
      <course-box></course-box>
    </div>
  </div>
</template>

<script>
import courseBox from './cooperativeCourse.vue';
import loginBox from './loginBox.vue';

export default {
    components: {
        courseBox, loginBox
    },
    data () {
        return {
            banner: []
        };
    },
    created () {
        this.getBanner();
    },
    methods: {
        getBanner () {
            this.http({method: 'GET', url: 'bxg_anon/home/banner'}).then(res => {
                this.banner = res.resultObject;
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
  .banner-box{
    position relative;
  }
  .login-reg-box{
    position: absolute;
    width: 376px;
    height: 450px;
    right: 107px;
    top: 30px;
    background: rgba(41, 47, 73, 0.5);
    border-radius: 6px;
    z-index: 10;
    overflow: hidden;
  }
</style>



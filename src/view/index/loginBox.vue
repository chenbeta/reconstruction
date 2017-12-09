<template>
  <div class="tab-box">
      <div class="tab-header">
          <div class="tab-option f-l" @click="showLogin = true" :class="{'tab-option-active':showLogin}">
              登录
          </div>
          <div class="tab-option f-l" @click="showLogin = false" :class="{'tab-option-active':!showLogin}">
              注册
          </div>
      </div>
      <div class="tab-content">
          <div class="tab-content-login" v-show="showLogin">
                <form @submit.prevent="validateLoginForm" data-vv-scope="login-form">
                    <p class="required-element">可用博学谷账号直接登录</p>
                    <div class="form-item">
                        <span class="ico-box"><i class="el-icon-it-seeuser"></i></span><input type="text" v-model.trim="loginData.username"  data-vv-name='isMobileOrEmail' data-vv-as="用户名" placeholder="请输入用户名" class="form-item-input" v-validate="'required|isMobileOrEmail'">
                        <span v-show="errors.has('login-form.isMobileOrEmail')" class="is-danger">{{ errors.first('login-form.isMobileOrEmail') }}</span>
                    </div>
                    <div class="form-item">
                        <span class="ico-box"><i class="el-icon-it-login"></i></span><input type="text" v-model.trim="loginData.password" name="password" placeholder="请输入密码" class="form-item-input" v-validate="'required'">
                        <span v-show="errors.has('login-form.password')" class="is-danger">{{ errors.first('login-form.password') }}</span>
                    </div>
                    <div class="form-item">
                        <button type="submit" class="login-btn">登录</button>
                    </div>
                    <div class="form-item">
                        <a href="#" class="f-l option-btn">自动登录</a>
                        <a href="#" class="f-r option-btn">忘记密码</a>
                    </div>
                </form>
          </div>
        
          <div class="tab-content-register" v-show="!showLogin">
            <form @submit.prevent="validateRegisterForm" data-vv-scope="register-form">
                <div class="form-item">
                    <input type="text" name="login_name" placeholder="请输入手机号/邮箱" class="form-item-input" data-vv-as="用户名" v-validate="'required|isMobileOrEmail|verifyUser'">
                    <span v-show="errors.has('register-form.login_name')" class="is-danger">{{ errors.first('register-form.login_name') }}</span>    
                </div>
                <div class="form-item">
                    <div>
                        <input type="text" name="test" placeholder="请输入验证码" class="form-item-input" data-vv-as="验证码" v-validate="'required'" style="width: 200px;">
                        <img :src="this.verifyImg" alt="" style="width: 90px;height: 36px;">
                    </div>
                    <span v-show="errors.has('register-form.test')" class="is-danger">{{ errors.first('register-form.test') }}</span>    
                </div>
                <div class="form-item">
                    <input type="text" name="nick_name" placeholder="用户名(昵称)" class="form-item-input" data-vv-as="昵称" v-validate="'required'">
                    <span v-show="errors.has('register-form.nick_name')" class="is-danger">{{ errors.first('register-form.nick_name') }}</span>    
                </div>
                <div class="form-item">
                    <input type="text" name="ckCode" placeholder="请输入验证码" class="form-item-input" data-vv-as="验证码" v-validate="'required'">
                    <span v-show="errors.has('register-form.ckCode')" class="is-danger">{{ errors.first('register-form.ckCode') }}</span>    
                </div>
                <div class="form-item">
                    <input type="text" name="password" placeholder="设置密码" class="form-item-input" data-vv-as="密码" v-validate="'required'">
                    <span v-show="errors.has('register-form.password')" class="is-danger">{{ errors.first('register-form.password') }}</span>    
                </div>
                <div class="form-item">
                    <button type="submit" class="login-btn register-btn">注册</button>
                </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import Qs from 'qs';
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      showLogin: true,
      loginData: {
        username: '13581932394',
        password: '123456'
      },
      verifyImg: ''
    };
  },
  created () {
    this.setUserData();
    this.verifyImg = this.getImgCode();
  },
  methods: {
    ...mapActions([
      'setUserData'
    ]),
    validateLoginForm () {
      this.$validator.validateAll('login-form').then((result) => {
        if (result) {
          this.axios.post(URL + '/login', Qs.stringify(this.loginData)).then(res => {
            let resData = res.data;
            console.log(res.data);
            resData = {
              'success': true,
              'errorMessage': '',
              'resultObject': null,
              'code': null
            };
            if (resData.success) {
              this.setUserData();
              this.$router.push({ name: 'user-msg' });
            } else {
              this.$message.error(resData.errorMessage);
            }
          });
        }
      });
    },
    validateRegisterForm () {
      this.verifyImg = this.getImgCode();
      console.log(this.verifyImg);
      this.$validator.validateAll('login-form').then((result) => {
        // console.log(result);
      });
    },
    getImgCode () {
      return 'http://yuanxiao.boxuegu.com/bxg_anon/common/vcode?_t=' + Math.random() * new Date();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import 'stylus/loginBox.styl';
</style>

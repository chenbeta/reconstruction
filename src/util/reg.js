import {http} from './http';

//验证登录、注册手机号
export const isMobileOrEmail = {
  messages: {
    zh_CN: (field, args) => '请输入手机号或邮箱!'
  },
  validate: value => {
    const emailReg = /^\w{1,16}([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const phoneReg = /^1(3|4|5|7|8)\d{9}$/;
    return phoneReg.test(value) || emailReg.test(value);
  }
};
//验证登录、注册手机号
export const verifyUser = {
  messages: {
    zh_CN: (field, args) => '该用户已注册'
  },
  validate: value => http({url: 'bxg_anon/user/isExists', params: {'login_name': value}})
    .then(res => {
      return !res.resultObject;
    })
};

import VeeValidate, { Validator } from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
import * as reg from './reg.js';

Validator.extend('isMobileOrEmail', reg.isMobileOrEmail);
Validator.extend('verifyUser', reg.verifyUser);
const dict = {
  zh_CN: {
    messages: {
      required: (field) => '请输入' + field
      // test1: (field) => field + 'asd'
    },
    attributes: {
      email: '邮箱',
      test1: '用户名',
      password: '密码'
    }
  }
};

Validator.addLocale(zh);
Validator.updateDictionary(dict);

export default VeeValidate;

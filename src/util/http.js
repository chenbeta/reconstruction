import axios from 'axios';

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      case 401:
        break;
      default:
        break;
      }
    } else {}
    return Promise.reject(error.response); // 返回接口返回的错误信息
  });

const URL = '/xianshang';
window.URL = URL;

const axiosType = (type, path, data) => {
  if (type.toUpperCase() === 'GET') {
    return axios({
      method: type,
      url: URL + path,
      params: data
    });
  } else if (type.toUpperCase() === 'POST') {
    return axios({
      method: type,
      url: URL + path,
      data: data
    });
  }
};
/**
 * 网站统一获取接口函数
 *
 * @param {any} {type = 'GET', path, data} 方式 路径 上传的数据
 * @returns
 */
export const http = ({method = 'GET', url, params}) => {
  return axiosType(method, url, params)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(res => {
      return res;
    });
};
/**
 * 得到用户信息请求
 *
 * @returns promise
 */
export const getUser = () => {
  return http({
    url: 'bxg_anon/user/sessionUser',
    params: {_t: new Date().getTime()}
  });
};

export default axios;

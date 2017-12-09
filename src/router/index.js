import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import template from '@/components/template';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: template,
      children: [
        {
          path: '',
          component: () => import('@/view/index/index.vue')
        },
        {
          path: '/index',
          component: () => import('@/view/index/index.vue')
        },
        {
          path: '/classroom',
          component: () => import('@/view/classroom/index.vue')
        },
        {
          path: '/course',
          component: () => import('@/view/course/index/index.vue')
        },
        {
          path: '/personal',
          component: () => import('@/view/personal/index.vue'),
          children: [
            {
              path: 'msg',
              name: 'user-msg',
              component: () => import('@/view/personal/msg/index.vue')
            },
            {
              path: 'data',
              name: 'user-data',
              component: () => import('@/view/personal/data/index.vue')
            },
            {
              path: 'course',
              name: 'user-course',
              component: () => import('@/view/personal/course/index.vue')
            },
            {
              path: 'question',
              name: 'user-question',
              component: () => import('@/view/personal/question/index.vue')
            }
          ]
        }
      ]
    }
  ]
});

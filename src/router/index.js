import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    component: () => {
      return import('@/components/404.vue')
    }
  },
  {
    path: '/',
    redirect: "/login",
  },
  // 登陆
  {
    path: '/login',
    component: () => {
      return import('@/layout/login.vue')
    },
  },
  // 首页
  {
    path: '/index',
    component: () => {
      return import('@/components/index.vue')
    },
    children: [{
        path: '/',
        component: () => import('@/components/main/index'),
        children: [
          // 后台首页
          {
            path: '/',
            component: () => import('@/components/main/index/first')
          },
          // 相册管理
          {
            path: '/image',
            component: () => import('@/components/main/index/image')
          },
        ]
      },

    ]
  },
  // 商品
  {
    path: '/shop',
    component: () => {
      return import('@/components/index.vue')
    },
    children: [{
        path: '/',
        component: () => import('@/components/main/shop'),
        redirect: "/shop/goods",
        children: [
          // 商品列表
          {
            path: 'goods',
            component: () => import('@/components/main/shop/goods')
          },
          // 分类列表
          {
            path: 'comment',
            component: () => import('@/components/main/shop/comment')
          },
          // 商品规格
          {
            path: 'category',
            component: () => import('@/components/main/shop/category')
          },
          // 商品类型
          {
            path: 'type',
            component: () => import('@/components/main/shop/type')
          },
          // 商品评论
          {
            path: 'sku',
            component: () => import('@/components/main/shop/sku')
          },
        ]
      },

    ]
  },
    // 订单
    {
      path: '/order',
      component: () => {
        return import('@/components/index.vue')
      },
      children: [{
          path: '/',
          component: () => import('@/components/main/order'),
          redirect: "/order/order",
          children: [
            // 订单管理
            {
              path: 'order',
              component: () => import('@/components/main/order/order')
            },
            // 发票管理
            {
              path: 'invoice',
              component: () => import('@/components/main/order/invoice')
            },
            // 售后服务
            {
              path: 'after-sale',
              component: () => import('@/components/main/order/after-sale')
            },
          ]
        },
  
      ]
    },
      // 会员
      {
        path: '/user',
        component: () => {
          return import('@/components/index.vue')
        },
        children: [{
            path: '/',
            component: () => import('@/components/main/user'),
            redirect: "/user/user-list",
            children: [
              // 会员列表
              {
                path: 'user-list',
                component: () => import('@/components/main/user/user-list')
              },
              // 会员等级
              {
                path: 'user-level',
                component: () => import('@/components/main/user/user-level')
              },
            ]
          },
    
        ]
      },
        // 设置
        {
          path: '/set',
          component: () => {
            return import('@/components/index.vue')
          },
          children: [{
              path: '/',
              component: () => import('@/components/main/set'),
              redirect: "/set/base",
              children: [
                // 基础设置
                {
                  path: 'base',
                  component: () => import('@/components/main/set/base')
                },
                // 物流设置
                {
                  path: 'express',
                  component: () => import('@/components/main/set/express')
                },
                // 管理员设置
                {
                  path: 'manager',
                  component: () => import('@/components/main/set/manager')
                },
                // 交易设置
                {
                  path: 'payment',
                  component: () => import('@/components/main/set/payment')
                },
              ]
            },
      
          ]
        },

]

const router = new VueRouter({
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/bang',
      name: 'bang',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Bang.vue')
    },
    {
      path: '/community',
      name: 'community',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup1',
      name: 'signup1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/signup/SignUpView.vue')
    },
    {
      path: '/signup2/:email',
      name: 'signup2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/signup/SignUpEmailView.vue')
    },
    {
      path: '/signup3',
      name: 'signup3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/signup/SignUpFinView.vue')
    },
    {
      path: '/cultivation',
      name: 'cultivation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/CultivationView.vue')
    },
    {
      path: '/reviews/cultivation',
      name: 'review-cultivation',
      component: () => import('../reviews/CultivationView.vue')
    },
    {
      path: '/reviews/promise',
      name: 'review-promise',
      component: () => import('../reviews/Promise.vue')
    },
    {
      path: '/meditcolor',
      name: 'meditcolor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/MEditColor.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/booking/BookingInfoView.vue')
    },
    {
      path: '/bookingCalendar',
      name: 'booking-calendar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/booking/BookingView.vue')
    },
    {
      path: '/kakaomap',
      name: 'kakaomap',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../components/KakaoMap.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../views/MainView.vuevisited.
      component: () => import('../views/test.vue')
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router

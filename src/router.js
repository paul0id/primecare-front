import Vue from 'vue'
import Router from 'vue-router'
import Urgentrequests from './views/Urgentrequests.vue'
import Urgentrequest from './views/Urgentrequest.vue'
import Partners from './views/Partners.vue'
import Partner from './views/Partner.vue'
import Volunteers from './views/Volunteers.vue'
import Volunteer from './views/Volunteer.vue'
import ServiceReqs from './views/ServiceReqs.vue'
import ServiceReq from './views/ServiceReq.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Urgentrequests',
      component: Urgentrequests
    },
    {
      name: 'Urgentrequest',
      path: '/urgentrequests/:id',
      component: Urgentrequest,
      props: true
    },
    {
      name: 'Partners',
      path: '/partners',
      component: Partners
    },
    {
      name: 'Partner',
      path: '/partners/:id',
      component: Partner,
      props: true
    },
    {
      name: 'Volunteers',
      path: '/volunteers',
      component: Volunteers
    },
    {
      name: 'Volunteer',
      path: '/volunteers/:id',
      component: Volunteer,
      props: true
    },
    {
      name: 'ServiceReqs',
      path: '/servicerequests',
      component: ServiceReqs
    },
    {
      name: 'ServiceReq',
      path: '/servicerequests/:id',
      component: ServiceReq,
      props: true
    },
    {
      name: 'Users',
      path: '/users',
      component: Users
    },
    {
      name: 'User',
      path: '/users/:id',
      component: User,
      props: true
    }
  ]
})

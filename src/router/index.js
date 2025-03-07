import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RegisterView from "@/views/RegisterView.vue";
import LoginView from '@/views/LoginView.vue';
import TeamsView from '@/views/TeamsView.vue';
import TeamsDetailsView from '@/views/TeamsDetailsView.vue';
import CalendarView from '@/views/CalendarView.vue';
import NewsView from "@/views/NewsView.vue";
import NewsDetailsView from '@/views/NewsDetailsView.vue';
import MerchandiseView from '@/views/MerchandiseView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path:'/register',
    name: 'register',
    component: RegisterView
  },

  {
    path:'/login',
    name: 'login',
    component: LoginView
  },

  {
    path:'/teams',
    name: 'teams',
    component: TeamsView

  },

  {
    path: "/team/:id",
    name: "team-details",
    component: TeamsDetailsView,
    props: true,
  },

  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView
  },

  { 

    path: "/news", 
    name: "news", 
    component: NewsView 
  
  },

  { 

    path: '/news/:id', 
    name: 'news-details', 
    component: NewsDetailsView, 
    props: true 
    
  },

  {

    path: '/merch',
    name: 'merch',
    component: MerchandiseView

  }

  ];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

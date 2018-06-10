import Home from './components/Home.vue'
import Users from './components/Users';
import User from './components/User'

export const routes = [
  {path: '/', component: Home},
  {path: '/patient', component: Users},
  {path: '/user', component: User}
];
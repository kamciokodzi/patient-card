import Home from './components/Home.vue'
import Users from './components/Users';

export const routes = [
  {path: '/', component: Home},
  {path: '/patient', component: Users}
];
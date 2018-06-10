import Home from './components/Home.vue'
import User from './components/User'
import UserDetails from './components/UserDetails.vue'
import UserObservations from './components/UserObservations.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/user', component: User},
  {path: '/user/:id/detail', component: UserDetails},
  {path: '/user/:id/observations', component: UserObservations}
];
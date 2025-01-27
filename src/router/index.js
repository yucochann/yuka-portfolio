import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutMeDetail from '@/views/AboutMe/AboutMeDetail.vue';
import JoitogetherPage from '@/views/ProjectGallery/components/JoitogetherPage.vue';
import PicturingPage from '@/views/ProjectGallery/components/PicturingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMeDetail,
    },
    {
      path: '/project/joitogether',
      name: 'joitogether',
      component: JoitogetherPage,
    },
    {
      path: '/project/picturing',
      name: 'picturing',
      component: PicturingPage,
    },
  ],
});

export default router;

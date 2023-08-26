import { createRouter, createWebHistory } from "vue-router";

import IndexPage from '@/views/IndexPage.vue'
import ItemListComponent from '@/components/ItemListComponent.vue'

const routes = [
  {
    path: "/",
    component: IndexPage,
    children: [
      {
        path: "professionals/:type",
        name: "professionals",
        props: true,
        components: {
          professionals: ItemListComponent,
        },
      },
      {
        path: "devices/:type",
        name: "devices",
        props: true,
        components: {
          devices: ItemListComponent,
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

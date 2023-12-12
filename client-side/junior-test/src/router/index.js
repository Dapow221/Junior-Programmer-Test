import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import FormAddEdit from "../components/FormAddEdit.vue";
import EditProducts from "../components/EditProducts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: LandingPage,
    },
    {
      path: "/add-product",
      name: "AddPage",
      component: FormAddEdit,
    },
    {
      path: "/edit-product/:id",
      name: "EditPage",
      component: EditProducts,
    },
  ],
});

export default router;

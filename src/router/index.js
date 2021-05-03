import { createRouter, createWebHistory } from "vue-router";
import { RouterView } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PageNotFound from "../views/PageNotFound.vue";
import i18n from "../i18n";

const routes = [
    {
      path: '/',
      name: "root",
      redirect: {
        "name": "Home",
        params:{
          "locale" : "en"
        }
      }
    },
    {
      path: '/:locale(en|tc|sc)',
      component: RouterView,
      children:[
        {
          path:"",
          name: "index",
          redirect: {
            "name": "Home"
          }
        },
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path:"about",
          name: "About",
          component: About
        }
      ]
    },
    {
      path: "/:catchAll(.*)",
      name: "PageNotFound",
      component: PageNotFound
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale;
  i18n.setLocale(locale);
  console.log(to.params.locale);
  next();
});

export default router;

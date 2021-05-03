<template>
  <div class="py-3 fixed z-50 w-full bg-white bg-opacity-70">
    <Container>
      <div class="flex justify-between items-center">
        <div>
          <a href="#">
            <img src="../assets/logo.png" class="w-10" />
          </a>
        </div>
        <div class="flex">
          <div class="flex text-gray-900 uppercase">
            <div class="flex items-center cursor-pointer hover:text-blue-500">
              <router-link :to="{ name: 'Home', params: { locale: language } }">
                {{ $t("home") }}
              </router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 292.362 292.362"
              >
                <path
                  d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
                />
              </svg>
            </div>
          </div>
          <div class="flex text-gray-900 uppercase ml-6">
            <div class="flex items-center cursor-pointer hover:text-blue-500">
              <router-link
                :to="{ name: 'About', params: { locale: language } }"
                >{{ $t("about") }}</router-link
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 292.362 292.362"
              >
                <path
                  d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
                />
              </svg>
            </div>
          </div>

          <div class="ml-6 relative group">
            <svg
              class="w-6 h-6 mr-1 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <div class="pt-2 fixed">
              <ul
                class="bg-gray-900 text-white bg-opacity-30 hidden group-hover:block w-28"
              >
                <li>
                  <div
                    v-on:click="changeLocale('en')"
                    class="block px-2 py-1 hover:bg-blue-500 cursor-pointer"
                  >
                    Eng
                  </div>
                </li>
                <li>
                  <div
                    v-on:click="changeLocale('zh')"
                    class="block px-2 py-1 hover:bg-blue-500 cursor-pointer"
                  >
                    繁體
                  </div>
                </li>
                <li>
                  <div
                    v-on:click="changeLocale('zh')"
                    class="block px-2 py-1 hover:bg-blue-500 cursor-pointer"
                  >
                    简体
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { ref } from "vue";
import Container from "./Container.vue";
import i18n from "../i18n";
import { useRoute } from "vue-router";

export default {
  name: "Header",
  components: {
    Container,
  },
  setup() {
    const locale = i18n.getLocale();
    const language = ref(locale);
    const route = useRoute();

    console.log(route);

    const changeLocale = (locale) => {
      // i18n.setLocale(locale);
      // route.push(to:)
    };

    return {
      language,
      changeLocale,
    };
  },
};
</script>
<template>
  <div class="service-catalog my-[53px] mx-auto">
    <div class="md:flex justify-between">
      <div class="text-32 font-bold">Service Hub</div>
      <div class="grid grid-cols-2 gap-6">
        <search-text-field
          v-model="searchQuery"
          class="sm:w-[209px]"
        ></search-text-field>

        <button
          class="relative text-16 bg-[#07A88D] hover:bg-[#07A88D]/90 focus:outline-none focus:ring-1 focus:ring-[#07A88D]/90 focus:ring-offset-1 focus:ring-offset-slate-50 text-white font-semibold py-[12px] pr-[24px] pl-[44px] rounded-full w-full items-center justify-center sm:w-auto"
        >
          <img
            :src="plusIconSrc"
            class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            alt="Search Icon"
          />
          <p class="hidden sm:block">Service Package</p>
        </button>
      </div>
    </div>

    <div class="text-16/24 mt-4">
      Organize services, manage and track versioning and API service
      documentation. <a href="#">Learn more</a>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="mt-6">
      <service-catalog-list-loading
        :items-per-page="itemsPerPage"
      ></service-catalog-list-loading>
    </div>

    <!-- No data -->
    <div
      v-else-if="services.length < 1"
      class="flex flex-col justify-center items-center bg-white rounded-sm mt-12 py-12 opacity-80 text-14/24"
    >
      <img
        :src="searchIconSrc"
        class="pointer-events-none w-8 h-8 mb-5"
        alt="No items icon"
      />
      No Items Found !
    </div>

    <!-- One or more services -->
    <service-catalog-list
      v-else
      :services="services"
      class="mt-6"
    ></service-catalog-list>

    <pagination
      v-if="services.length"
      :pagination="pagination"
      @goBack="handleGoBack"
      @goForward="handleGoForward"
    ></pagination>
    <!-- <input v-model="searchQuery" class="search-input" placeholder="Search services"> -->
    <!-- <ul class="catalog">
      <li v-for="service in services" :key="service.id" class="service">
        <div>
          <p>
            {{ service.name }}
          </p>
          <p>{{ service.description }}</p>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

// components
import ServiceCatalogList from "./ServiceCatalogList.vue";
import ServiceCatalogListLoading from "./ServiceCatalogListLoading.vue";
import SearchTextField from "@/components/_shared/SearchTextField.vue";
import Pagination from "@/components/_shared/Pagination.vue";

// assets
import plusIconSrc from "@/assets/plus.svg";
import searchIconSrc from "@/assets/search.svg";

// composables
import useServicesApi from "@/composables/useServicesApi";

// export default defineComponent({
//   name: "ServiceCatalog",
//   components: {
//     ServiceCatalogList,
//     SearchTextField,
//   },
//   setup() {
//     // Import services from the composable
//     const { services, loading } = useServicesApi();

//     // Set the search string to a Vue ref
//     const searchQuery = ref("");

//     return {
//       plusIconSrc,
//       services,
//       searchQuery,
//     };
//   },
// });

const currentPage = ref(1);
const itemsPerPage = ref(9);
const searchQuery = ref("");

const router = useRouter();
const route = useRoute();

watch(
  () => route.params.page,
  async (newId) => {
    if (!newId) return;
    const urlPage = parseInt(newId.toString());
    if (currentPage.value !== urlPage) currentPage.value = urlPage;
  },
  {
    immediate: true,
  }
);

const { services, loading, loadServices, ...paginationValues } = useServicesApi(
  currentPage,
  itemsPerPage,
  searchQuery
);

const pagination = ref(paginationValues);

const handleGoBack = () => {
  router.push({
    path: `/${currentPage.value - 1}`,
  });
};

const handleGoForward = () => {
  router.push({
    path: `/${currentPage.value + 1}`,
  });
};

onBeforeMount(async (): Promise<void> => {
  // Fetch services from the API
  loadServices();
});
</script>

<style lang="scss">
.service-catalog {
  max-width: 1366px;
  padding: 0 20px;
}
</style>

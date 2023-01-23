<template>
  <div class="service-catalog my-[53px] mx-auto">
    <div class="md:flex justify-between">
      <div class="text-32 font-bold">Service Hub</div>
      <div class="grid grid-cols-2 gap-6">
        <search-text-field class="sm:w-[209px]"></search-text-field>

        <input v-model="searchQuery" />

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

    canGoBack: {{ paginationValues.canGoBack }} <br />
    canGoForward:
    {{ paginationValues.canGoForward }}

    <service-catalog-list
      :services="services"
      class="mt-6"
    ></service-catalog-list>
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
import { ref, onBeforeMount, computed } from "vue";

// components
import ServiceCatalogList from "./ServiceCatalogList.vue";
import SearchTextField from "@/components/_shared/SearchTextField.vue";

// assets
import plusIconSrc from "@/assets/plus.svg";

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
const rowsPerPage = ref(9);
const searchQuery = ref("");

// watchEffect(() => {
//   const { services, loading, loadServices, ...paginationValues } =
//     useServicesApi(currentPage, rowsPerPage, searchQuery);
// });

// const { services, loading, loadServices, ...paginationValues } = computed(() =>
//   useServicesApi(currentPage, rowsPerPage, searchQuery)
// );

const { services, loading, loadServices, ...paginationValues } = useServicesApi(
  currentPage,
  rowsPerPage,
  searchQuery
);

// watch(
//   [currentPage, rowsPerPage, searchQuery],
//   ([currentPage, rowsPerPage, searchQuery]) => {
//     const { services, loading, loadServices, ...paginationValues } =
//       useServicesApi(currentPage, rowsPerPage, searchQuery);
//   }
// );

onBeforeMount(async (): Promise<void> => {
  // Fetch services from the API
  loadServices();
});
</script>

<style lang="scss">
.service-catalog {
  max-width: 1366px;
  // margin: 2rem auto;
  padding: 0 20px;
}

// .catalog {
//   display: flex;
//   flex-wrap: wrap;
//   margin: 20px 0 0 0;
//   list-style: none;
// }

// .service {
//   width: 200px;
//   margin: 6px;
//   border: 1px solid #999;
//   border-radius: 10px;
//   padding: 8px 16px;

//   p:first-of-type {
//     color: #333;
//     font-weight: 700;
//   }

//   p {
//     color: #666;
//   }
// }

// input {
//   padding: 8px 4px;
// }
</style>

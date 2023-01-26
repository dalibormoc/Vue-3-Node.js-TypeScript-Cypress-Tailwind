<template>
  <div class="my-[53px]">
    <div class="md:flex justify-between">
      <div class="text-32 font-bold">Service Hub</div>
      <div class="grid grid-cols-2 gap-6 mt-4 md:mt-0">
        <search-text-field
          v-model="searchQuery"
          class="search-input sm:w-[209px]"
        ></search-text-field>

        <button
          @click="handleOpenCloseCreateModal(true)"
          class="relative justify-self-end w-fit sm:w-full text-16 bg-[#07A88D] hover:bg-[#07A88D]/90 focus:outline-none focus:ring-1 focus:ring-[#07A88D]/90 focus:ring-offset-1 focus:ring-offset-slate-50 text-white font-semibold py-3 px-3 sm:pr-[24px] pl-[44px] rounded-full items-center justify-center"
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
      documentation. <a href="#" class="text-[#1456CB]">Learn more</a>
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
      @open-details="handleOpenDetailsModal"
      class="mt-6"
    ></service-catalog-list>

    <pagination
      v-if="services.length"
      :pagination="pagination"
      @goBack="handleGoBack"
      @goForward="handleGoForward"
    ></pagination>
  </div>

  <!-- Create a new service modal -->
  <modal v-if="showCreateModal" @close="handleOpenCloseCreateModal">
    Not implemented
  </modal>

  <!-- Service details modal -->
  <modal v-if="showDetailsModal" @close="handleCloseDetailsModal">
    <service-catalog-details-modal
      :service="dataForDetailsModal"
    ></service-catalog-details-modal>
  </modal>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

// components
import ServiceCatalogList from "./ServiceCatalogList.vue";
import ServiceCatalogListLoading from "./ServiceCatalogListLoading.vue";
import SearchTextField from "@/components/_shared/SearchTextField.vue";
import ServiceCatalogDetailsModal from "./service_catalog_details_modal/ServiceCatalogDetailsModal.vue";
import Pagination from "@/components/_shared/Pagination.vue";
import Modal from "@/components/_shared/Modal.vue";

// assets
import plusIconSrc from "@/assets/plus.svg";
import searchIconSrc from "@/assets/search.svg";

// composables
import useServicesApi from "@/composables/useServicesApi";

// Types
import Service from "@/types/Service";

// Service catalog list
const currentPage = ref(1);
const itemsPerPage = ref(9);
const searchQuery = ref("");

const { services, loading, loadServices, ...paginationValues } = useServicesApi(
  currentPage,
  itemsPerPage,
  searchQuery
);

// Router
const router = useRouter();
const route = useRoute();

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

// Modals
const showCreateModal = ref(false);
const showDetailsModal = ref(false);
const dataForDetailsModal = ref<Service>();

const handleOpenCloseCreateModal = (open: boolean): void => {
  showCreateModal.value = open;
};

const handleOpenDetailsModal = (data: Service): void => {
  if (!data.versions.length) return;
  dataForDetailsModal.value = data;
  showDetailsModal.value = true;
};
const handleCloseDetailsModal = (): void => {
  showDetailsModal.value = false;
};
</script>

<style lang="scss"></style>

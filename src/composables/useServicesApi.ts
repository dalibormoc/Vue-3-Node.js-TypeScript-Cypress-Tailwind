import { ref, Ref, watch } from "vue";
import axios from "axios";

import { usePagination } from "./usePagination";

const URL = "/api/services";

import Service from "@/types/Service";

export default function useServicesApi(
  currentPage: Ref<number>,
  searchQuery: Ref<string>,
  itemsPerPage?: Ref<number>
) {
  const services: Ref<Service[]> = ref([]);

  const loading = ref(false);

  // // Full-text search in services (client-side)
  // const filteredData = computed(() => {
  //   // Skip search if no search query or search query contains less than 3 characters
  //   if (!searchQuery?.value || searchQuery?.value.trim().length < 3)
  //     return services.value;

  //   const queryArray = searchQuery.value.trim().split(" ");
  //   return services.value.filter((item: Service) => {
  //     return queryArray.every((word) => {
  //       // Search case insensitive
  //       const wordLower = word.toLowerCase();
  //       return (
  //         // Search query in name, description, and type
  //         item.name.toLowerCase().includes(wordLower) ||
  //         item.description.toLowerCase().includes(wordLower) ||
  //         item.type.toLowerCase().includes(wordLower)
  //       );
  //     });
  //   });
  // });

  // Divide data into pages
  const { paginatedArray, totalCount, from, to, canGoBack, canGoForward } =
    usePagination<Service>({
      itemsPerPage,
      currentPage,
      arrayToPaginate: services,
    });

  watch(searchQuery, (newVal, oldVal): void => {
    if (newVal !== oldVal) {
      const query = searchQuery.value.trim();
      // Load all services when no search query
      if (!query) loadServices();

      // Filter services when search query contains more than 2 characters
      if (query.length > 2) {
        loadServices(searchQuery.value);
        currentPage.value = 1;
      }
    }
  });

  const loadServices = async (searchQuery: string = ""): Promise<void> => {
    // Initialize loading state
    loading.value = true;
    try {
      let result;

      // Fetch data from the API
      if (!searchQuery) result = await axios.get(URL);
      else result = await axios.get(`${URL}?q=${searchQuery}`);

      // Store data in Vue ref
      services.value = result.data;
    } catch (err) {
      //
      console.log(err);
    } finally {
      // Artificially delayed loading
      function delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      await delay(1000);

      // Reset loading state
      loading.value = false;
    }
  };

  return {
    // Return paginated services when data is loaded
    services: paginatedArray,
    loading,

    // Returning this func for loading services from components
    loadServices,

    // For pagination component
    totalCount,
    from,
    to,
    canGoBack,
    canGoForward,
  };
}

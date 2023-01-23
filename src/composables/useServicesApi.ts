// import { ref, onBeforeMount } from 'vue'
// import axios from 'axios'

// // This composable is a simplified example for the exercise.
// // Feel free to leave as-is, modify, or remove this file (and any others) as desired.
// // https://vuejs.org/guide/reusability/composables.html

// export default function useServices(): any {
//   const services = ref<any[]>([])
//   const loading = ref<any>(false)

//   const getServices = async (): Promise<any> => {
//     // Initialize loading state
//     loading.value = true

//     // Fetch data from the API
//     const result = await axios.get('/api/services')

//     // Store data in Vue ref
//     services.value = result.data

//     // Reset loading state
//     loading.value = false
//   }

//   onBeforeMount(async (): Promise<void> => {
//     // Fetch services from the API
//     await getServices()
//   })

//   // Return stateful data
//   return {
//     services,
//     loading,
//   }
// }

import { ref, Ref, computed } from "vue";
import axios from "axios";

import { usePagination } from "./usePagination";

const URL = "/api/services";

import Service from "@/types/Service";

export default function useServicesApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>,
  searchQuery?: Ref<string>
) {
  const services: Ref<Service[]> = ref([]);

  const loading = ref(false);

  // Fulltext search in services
  const filteredData = computed(() => {
    // Skip search if no search query or search query contains less than 3 characters
    if (!searchQuery?.value || searchQuery?.value.length < 3)
      return services.value;

    const queryArray = searchQuery.value.split(" ");
    return services.value.filter((item: Service) => {
      return queryArray.every((word) => {
        // Search case insensitive
        const wordLower = word.toLowerCase();
        return (
          // Search query in name, description, and type
          item.name.toLowerCase().includes(wordLower) ||
          item.description.toLowerCase().includes(wordLower) ||
          item.type.toLowerCase().includes(wordLower)
        );
      });
    });
  });

  // Divide data into pages
  const { paginatedArray, numberOfPages, canGoBack, canGoForward } =
    usePagination<Service>({
      rowsPerPage,
      currentPage,
      arrayToPaginate: filteredData as Ref<Service[]>,
    });

  const loadServices = async () => {
    // Initialize loading state
    loading.value = true;
    try {
      // Fetch data from the API
      const result = await axios.get(URL);

      // Store data in Vue ref
      services.value = result.data;
    } catch (err) {
      //
      console.log(err);
    } finally {
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
    numberOfPages,
    canGoBack,
    canGoForward,
  };
}

import { computed, ref } from "vue";

import PaginationConfig from "@/types/PaginationConfig";

export function usePagination<T>(config: PaginationConfig<T>) {
  const itemsPerPage = config.itemsPerPage || ref(10);

  const numberOfPages = computed(() =>
    Math.ceil((config.arrayToPaginate.value.length || 0) / itemsPerPage.value)
  );

  // // Prevents current page from going out of range
  const currentPage = computed(() => {
    if (!config.currentPage.value || config.currentPage.value < 1) return 1;
    if (config.currentPage.value > numberOfPages.value)
      return numberOfPages.value;

    return config.currentPage.value;
  });

  // Creates one page of items
  const paginatedArray = computed(() =>
    config.arrayToPaginate.value.slice(
      (currentPage.value - 1) * itemsPerPage.value,
      currentPage.value * itemsPerPage.value
    )
  );

  // For pagination component
  const canGoBack = computed(() => currentPage.value > 1);
  const canGoForward = computed(() => currentPage.value < numberOfPages.value);
  const totalCount = computed(() => config.arrayToPaginate.value.length);

  const from = computed(() => {
    if (!paginatedArray.value.length) return 0;
    return currentPage.value * itemsPerPage.value - itemsPerPage.value + 1;
  });

  const to = computed(() => {
    const to = currentPage.value * itemsPerPage.value;
    if (to > totalCount.value) return totalCount.value;
    return to;
  });
  // const from = computed(() => {
  //   const arrayLength: number = paginatedArray.value.length;

  //   if (!arrayLength) return 0;

  //   const itemsOnPage: number =
  //     arrayLength < itemsPerPage.value ? arrayLength : itemsPerPage.value;

  //   return to.value - itemsOnPage + 1;
  // });

  return {
    paginatedArray,
    totalCount,
    from,
    to,
    canGoBack,
    canGoForward,
  };
}

import { Ref } from "vue";

interface PaginationConfig<T> {
  itemsPerPage?: Ref<number>;
  arrayToPaginate: Ref<T[]>;
  currentPage: Ref<number>;
}

export default PaginationConfig;

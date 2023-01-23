import { Ref } from "vue";

interface PaginationConfig<T> {
  rowsPerPage?: Ref<number>;
  arrayToPaginate: Ref<T[]>;
  currentPage: Ref<number>;
}

export default PaginationConfig;

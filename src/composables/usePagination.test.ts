import { expect, test } from "vitest";
import { ref } from "vue";

import { usePagination } from "./usePagination";

test("usePagination", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const testInputObject = {
    itemsPerPage: ref(3),
    currentPage: ref(3),
    arrayToPaginate: ref(array),
  };

  const { paginatedArray, totalCount, from, to, canGoBack, canGoForward } =
    usePagination(testInputObject);

  expect(paginatedArray.value).toStrictEqual([7, 8, 9]);
  expect(totalCount.value).toBe(9);
  expect(from.value).toBe(7);
  expect(to.value).toBe(9);
  expect(canGoBack.value).toBe(true);
  expect(canGoForward.value).toBe(false);
});

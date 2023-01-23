// export function useDebounce<T>(func: T, wait: number) {
//   let timer: ReturnType<typeof setTimeout>;
//   return (event: Event) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       if (typeof func === "function") {
//         func(event);
//       }
//     }, wait);
//   };
// }

export function useDebounce<T>(func: any, delay: number, immediate: boolean) {
  let timer: ReturnType<typeof setTimeout>;
  let initial: boolean = false;
  const debouncedFn = (...args: any) => {
    const callNow = (resolve: any) => {
      resolve(func(...args));
    };

    if (!timer && immediate && !initial) {
      return new Promise((resolve) => {
        initial = true;
        callNow(resolve);
      });
    }

    clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => callNow(resolve), delay);
    });
  };

  return debouncedFn;
}

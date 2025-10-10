export function createDebouncedFunction(fn, delay = 200) {
  if (typeof fn !== 'function') {
    throw new TypeError('createDebouncedFunction expects a function as the first argument');
  }

  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = undefined;
      fn(...args);
    }, delay);
  };
}

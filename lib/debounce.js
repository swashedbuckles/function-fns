/**
 * 
 * @param {function} fn 
 * @param {number} delay milliseconds
 * @return {function}
 */
export function debounce(fn, delay) {
  let handle = null;
  return function(...args) {
    clearTimeout(handle);

    handle = setTimeout((...args) => {
      handle = null;
      fn.apply(this, args); 
    }, delay, ...args)
  }
}

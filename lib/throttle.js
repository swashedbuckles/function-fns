/**
 * 
 * @param {function} fn 
 * @param {number} delay milliseconds
 * @return {function}
 */
export function throttle(fn, delay) {
  let handle = null;
  return function(...args) {
    if(handle) {
      return;
    }

    handle = setTimeout((...args) => {
      handle = null;
      fn.apply(this, args); 
    }, delay, ...args)
  }
}

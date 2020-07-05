/**
 * 
 * @param {function} fn 
 * @param {number} delay milliseconds
 * @return {function}
 */
export function throttle(fn, delay) {
  let throttled = false;
  return function(...args) {
    if(throttled) {
      return;
    }

    fn.apply(this, args); 
    throttled = true;

    handle = setTimeout(() => {
      throttled = false;
    }, delay)
  }
}

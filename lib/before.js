/**
 * 
 * @param {function} original 
 * @param {function} fn 
 * @return {function}
 */
export function before(original, fn) {
  if(typeof original !== 'function') {
    throw new TypeError('Cannot compose a non-function with a function');
  } else if (typeof fn !== 'fuction') {
    throw new TypeError('Cannot compose a function with a non-function');
  }

  return function(...args) {
    const self = this;
    fn.call(this, ...args);
    original.call(this, ...args);
  }
}
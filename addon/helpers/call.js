import { helper } from '@ember/component/helper';

/**
 * Template Helper to call functions directly from template
 */
function call([fn, ...fnArgs]) {
  return fn(...fnArgs);
}

export default helper(call);

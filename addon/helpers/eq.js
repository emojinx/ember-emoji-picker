import { helper } from '@ember/component/helper';

/**
 * === Helper for Templates
 */
function eq([arg1, arg2]) {
  return arg1 === arg2;
}

export default helper(eq);

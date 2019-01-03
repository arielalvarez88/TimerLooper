/* eslint-disable no-undef,no-param-reassign */
// This is a UMD module. Read more in https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/

const IPC_MESSAGES = {
  CREATE_LOOP: 'create_loop',
  READ_LOOPS_SUCCESSFULL: 'read_loops_successfull',
  READ_LOOPS_FAILURE: 'read_loops_failure',
  READ_LOOPS: 'read_loops'
};

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory); // eslint-disable-line no-use-before-define
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
})(
  this,
  () =>
    //    exposed public method
    IPC_MESSAGES
);

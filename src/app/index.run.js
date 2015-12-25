(function() {
  'use strict';

  angular
    .module('wenufree')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

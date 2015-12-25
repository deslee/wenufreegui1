(function() {
  'use strict';

  angular
    .module('wenufree')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, newMeetingDialogOptions) {
    var vm = this;

    vm.showNewMeeting = function(ev) {
      $mdDialog.show(angular.extend({
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        escapeToClose: false,
        fullscreen: true
      }, newMeetingDialogOptions))
    }
  }
})();

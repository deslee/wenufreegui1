(function() {
  'use strict';

  angular
    .module('wenufree.dialog.newMeeting', [])
    .constant('newMeetingDialogOptions', newMeetingDialogOptions())
    .controller('NewMeetingController', NewMeetingController);

  /** @ngInject */
  function NewMeetingController($mdDialog, moment) {
    var vm = this;

    vm.today = moment().startOf('day').toDate();
    vm.cancel = function() {
      $mdDialog.hide();
    }
  }

  function newMeetingDialogOptions() {
    return {
      controller: 'NewMeetingController',
      controllerAs: 'newMeeting',
      templateUrl: 'app/components/new-meeting-dialog/new-meeting-dialog.html'
    }
  }
})();

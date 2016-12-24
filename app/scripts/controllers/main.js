'use strict';

/**
 * @ngdoc function
 * @name untitledApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the untitledApp
 */
angular.module('untitledApp')
  .controller('MainCtrl', function ($scope) {

    $scope.totals = {
      km: 0,
      fucks: 0,
    };


    $scope.newPartner = {};

    $scope.partners = [];

    $scope.addPartner = function () {
      $scope.partners.unshift($scope.newPartner);

      $scope.calculate();
      $scope.newPartner = {};
    };

    $scope.removePartner = function (item) {
      var index = $scope.partners.indexOf(item);
      $scope.partners.splice(index, 1);
      $scope.calculate();
    };

    $scope.$watch('partners', function () {

    });

    $scope.calculate = function () {

      var kmToSquash = [];

      angular.forEach($scope.partners, function (partner) {

        var a = moment(partner.from);
        var b = moment(partner.to);

        var weeks = b.diff(a, 'weeks');

        var centsForFuck = partner.length * 57;

        var cm = partner.fucks * weeks * centsForFuck;

        partner.taken = cm / 100000;

        kmToSquash.push(cm / 100000);

      });

      $scope.totals.km = _.sum(kmToSquash);

      console.log($scope.partners)
    }


  });

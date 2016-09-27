(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        // Array clean up function, which removes meaningless elements such as "" and " "
        function clean_array(arr) {
            var ind = arr.indexOf(" ");
            if (ind >= 0) {
                arr.splice(ind, 1);
            };

            ind = arr.indexOf("");
            if (ind >= 0) {
                arr.splice(ind, 1);
            }
        }

        $scope.checkIt = function () {
            var input = $scope.lunch;
            if (input == null || input == "") {
                $scope.comment = "Please enter data first";
            } else {
                var splt = input.split(',');
                clean_array(splt);
                var length = splt.length;
                if (length >= 4) {
                    $scope.comment = "Too much!";
                }
                else {
                    $scope.comment = "Enjoy!";
                }
            }
        };
    }

})();

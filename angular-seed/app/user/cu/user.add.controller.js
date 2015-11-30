angular.module('app.user').controller('UserAddController', ['$scope', 'userService', function($scope, userService){
    var vm = this;
    vm.isSubmitting = false;


    vm.userName = null;
    vm.realName = null;
    vm.password = null;
    vm.passwordConfirm = null;


    vm.add = function(){
        vm.isSubmitting = true;

        userService.add(vm.userName, vm.fullName, vm.password).success(function(response){
            vm.isSubmitting = false;
            
            $scope.$state.go('^');
            
        });
    };
}]);


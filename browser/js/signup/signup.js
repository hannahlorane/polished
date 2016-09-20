app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, AuthService, $state) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendSignup = function (signupInfo) {

        $scope.error = null;

        AuthService.signup(signupInfo).then(function () {
            $state.go('login');
        }).catch(function () {
            $scope.error = 'A user with that info already exists.';
        });

    };

});

app.directive('passwordVerify', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                var origin = scope.$eval(attrs['passwordVerify']);
                if (origin !== viewValue){
                    ctrl.$setValidity('passwordVerify', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('passwordVerify', true);
                    return viewValue;
                }
            });

        }
    };
});

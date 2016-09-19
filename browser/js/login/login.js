app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function (user) {
            if (user.savedCart) {
                var savedCart = JSON.parse(user.savedCart);
                for (var key in savedCart) {
                    if (key.toString().length > 0) {
                        localStorage[key] = savedCart[key];
                    }
                }
            }

            if (user.expiredPassword) {
                $state.go('profilepage', {userId: user.id});
            } else {
                $state.go('home');
            }
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});

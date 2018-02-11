// Ionic Starter App

(function () {
    var app = angular.module( 'quiz', [ 'ionic' ] );

    /**
     * $stateProvider allow us to define news states.
     *
     */
    app.config(function ( $stateProvider, $urlRouterProvider ) {

        $stateProvider.state('list', {
            url: '/list',
            templateUrl: 'list.html',
            controller: 'ListQuizCtrl'
        });

        $urlRouterProvider.otherwise('list');
    });
    
    app.controller('ListQuizCtrl', function ( $scope ) {
       $scope.quizzes = [
           {
               id: 0,
               subject: 'Matemática',
               level: 'hard'
           },
           {
               id: 1,
               subject: 'Geografia',
               level: 'medium',
           },
           {
               id: 2,
               subject: 'Física',
               level: 'easy'
           }
       ];

        $scope.selectQuiz = function(quiz) {
            alert('O quiz selecionado foi: ' + quiz.subject);
        }
    });

    app.run( function ( $ionicPlatform, $rootScope ) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            console.log("stateChangeError:");
            console.log(arguments);
        });


        $ionicPlatform.ready( function () {
            if ( window.cordova && window.cordova.plugins.Keyboard ) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );

                cordova.plugins.Keyboard.disableScroll( true );
            }
            if ( window.StatusBar ) {
                StatusBar.styleDefault();
            }
        } )
    } );
}());
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
               level: 'hard',
               done: true
           },
           {
               id: 1,
               subject: 'Geografia',
               level: 'medium',
               done: false
           },
           {
               id: 2,
               subject: 'Física',
               level: 'easy',
               done: false
           }
       ];

        $scope.selectQuiz = function(quiz) {
            alert('O quiz selecionado foi: ' + quiz.subject);
        }
    });

    app.run( function ( $ionicPlatform, $rootScope ) {
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
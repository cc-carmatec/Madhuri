 var app = angular.module('app', ['ngMessages']);
 
 app.controller('passwordController', ['$scope', function( $scope ){
  
   // Set the default value of inputType
  $scope.inputType = 'password';
  $scope.passwordpattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  
   // Hide & show password function
   $scope.hideShowPassword = function(){
     if ($scope.inputType == 'password')
       $scope.inputType = 'text';
     else
       $scope.inputType = 'password';
  };
  
 }]);
 app.controller('phoneController', ['$scope', function ($scope) {
        $scope.re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    }]);

 app.controller('emailController', ['$scope', function ($scope) {
    $scope.emailpattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
     }]);

// app.directive('validFile',function(){
//   return {
//     require:'ngModel',
//     link:function(scope,el,attrs,ngModel){
//       //change event is fired when file is selected
//       el.bind('change',function(){
//         scope.$apply(function(){
//           ngModel.$setViewValue(el.val());
//           ngModel.$render();
//         })
//       })
//     }
//   }
// })


app.controller('Controller', ['$scope', function($scope) {

// $scope.myDate = new Date();

//   $scope.minDate = new Date(
//       $scope.myDate.getFullYear(),
//       $scope.myDate.getMonth() - 2,
//       $scope.myDate.getDate());

//   $scope.maxDate = new Date(
//       $scope.myDate.getFullYear(),
//       $scope.myDate.getMonth() + 2,
//       $scope.myDate.getDate());

//   $scope.onlyWeekendsPredicate = function(date) {
//     var day = date.getDay();
//     return day === 0 || day === 6;
//   };

    $scope.checkBoxes = [
        {label: 'Option 1', isChecked: true},
        {label: 'Option 2', isChecked: false},
        {label: 'Option 3', isChecked: false},
        {label: 'Option 4', isChecked: false},
        {label: 'Option 5', isChecked: false}
    ]; 
    
    
    $scope.isChecked = function() {
        for(var e in $scope.checkBoxes) {
             var checkBox = $scope.checkBoxes[e];
            if(checkBox.isChecked)
                return true;
             
        }
        return false;
      
    };
    $scope.country = {};
    $scope.state = {};
    $scope.city = {};
    var allCountries = [{
        Id: 1,
        CountryName: "USA"
    }, {
        Id: 2,
        CountryName: "Australia"
    }];
    var allStates = [{
        Id: 1,
        StateName: "Washington",
        CountryId: 1
    }, {
        Id: 2,
        StateName: "New York",
        CountryId: 1
    }, {
        Id: 3,
        StateName: "Queensland",
        CountryId: 2
    }];
    var allCities = [{
        Id: 1,
        CityName: "Washington DC",
        StateId: 1
    }, {
        Id: 2,
        CityName: "New York City",
        StateId: 2
    }, {
        Id: 3,
        CityName: "Brisbane",
        StateId: 3
    } ];

    $scope.countries = allCountries;

    $scope.$watch('country', function () {
        $scope.states = allStates.filter(function (s) {
            return s.CountryId == $scope.country.Id;
        });
        $scope.city = {};
        $scope.state = {};
        $scope.cities = [];
    });

    $scope.$watch('state', function () {
        $scope.cities = allCities.filter(function (c) {
            return c.StateId == $scope.state.Id;
        });
        $scope.city = {};
    });
 
    $scope.selected = 'red';
    $scope.options = ['red', 'blue', 'yellow', 'green'];
    
    $scope.submitForm = function() {

      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        alert('All the details are valid!!!');
      }

    };
   

}]);



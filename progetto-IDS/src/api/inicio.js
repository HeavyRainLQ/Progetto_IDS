'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the prototipoApp
 */

angular.module('prototipoApp')
  .controller('InicioCtrl', function ($scope,$modal,$http,$rootScope) {

    





$(document).ready(function() {
 
    setTimeout(function(){
        $('#loading').fadeOut('slow');
  $('body').delay(5).css({'overflow':'visible'});
    }, 3000);
 
});

 

$scope.nuevo=function() 
{


$scope.nuevoMiembro={};
    var modalInstance = $modal.open({
      templateUrl: 'views/modificar_usuario.html',
      controller:'HolaCtrl',
      resolve: {
                    nuevoMiembro: function() {
                        return $scope.nuevoMiembro;
                    }
                }
            });





};

/*-------------------------------------------*/


$scope.loguear=function()
{

  var user=$('#user').val();
  var pass=$('#pass').val();

if (user!="" && pass!="") {

  $http.get("../app/mis_php/login.php?user="+user+"&pass="+pass+"")
   .success(function (response) {
    
    $scope.result = response.records;
    //console.log($scope.result[0].ini);
    var a=$scope.result[0].ini;
    if (a=="true") 
    {
     
     confirm(" Bienvenido   !!!!");
        $rootScope.mod = false;


      if ($scope.result[0].estado=="1") 
        {    

          if ($scope.result[0].tipo=="1") 
            {
                
                $rootScope.user = true;
                console.log($rootScope.user);
                location.href='#/main';       
            }
            else
            {
              
              $rootScope.user = false;
               location.href='#/main';

            }

        }
        else
        {
            alert("Usted se encuentra deshabilitado");
           
        }
        
        

    }
    else
    {
        alert("Usuario o Contraseña incorrecto");
        




    };

      
  });  




}


};//fin de la funcion loguear


    
  })


     



.controller('HolaCtrl', function ($http,$scope,$modalInstance,$modal) 
{
        
       

      


     $scope.cancel =function()
     {
         $modalInstance.dismiss('cancel');
     };


});


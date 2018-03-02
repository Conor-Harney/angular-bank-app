"use strict";

(function() {

    var AccountController =  function(accountService, $log) {
        
    	$log.log("Account controller created");
    	var vm = this;
        
        vm.isHidden = false;
       
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() { 
        	$log.log(vm.fName);
        	accountService.getAccounts().then(function (results) 
        	{//on message 200
        		$log.log("Account init get accounts");
        		vm.accounts = results;
        		$log.log("In the account controller the value of the result promise is ");
        		$log.log(JSON.stringify(vm.accounts));
            }, 
            function (error) 
            {//on error
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();//call this as soon as the script is loaded into memory 
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log', AccountController]);
}());
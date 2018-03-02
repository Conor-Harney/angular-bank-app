"use strict";

(function() {

    var RemoveAccountController =  function(accountService, $log) {
        
    	$log.log("Account controller created");
    	var vm = this;
    	
        vm.accountNumber = "";
        
        vm.isHidden = false;
        
        vm.removeAccount = function()
        {
        	var jsonString = '{"firstName": "'+ vm.fName +'","secondName": "'+ vm.lName +'","accountNumber": "'+ vm.accountNumber +'","transactions": []}'
        	accountService.postAccount(jsonString);
        };
        
        function init() { 
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

    angular.module('accountApp').controller('removeAccountController', ['accountService','$log', RemoveAccountController]);
}());
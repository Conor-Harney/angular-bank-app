"use strict";

(function() {

    var AddAccountController =  function(accountService, $log) {
        
    	$log.log("Account controller created");
    	var vm = this;
    	
    	vm.fName = "";
        vm.lName = "";
        vm.accountNumber = "";
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        vm.logVal = function()
        {
        	$log.log("log is");
        	$log.log(vm.fName);
        };
        
        vm.postDetails = function()
        {
        	var jsonString = '{"firstName": "'+ vm.fName +'","secondName": "'+ vm.lName +'","accountNumber": "'+ vm.accountNumber +'","transactions": []}'
        	//var jsonString = '{"firstName": "'+ vm.fName +'","secondName": "'+ vm.lName +'","accountNumber": "'+ vm.accountNumber +'","transactions": [{"transactionName": "Asda","transactionNumber": "12"}]}';
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

    angular.module('accountApp').controller('addAccountController', ['accountService','$log', AddAccountController]);
}());
"use strict";

(function() {

    var AddAccountController =  function(accountService, $log, $state) {
        
    	$log.log("Account controller AddAccountController created");
    	var vm = this;
    	
    	vm.fName = "";
        vm.lName = "";
        vm.accountNumber = "";
        
        vm.isHidden = false;
        
        vm.postDetails = function()
        {
        	var jsonString = '{"firstName": "'+ vm.fName +'","secondName": "'+ vm.lName +'","accountNumber": "'+ vm.accountNumber +'","transactions": []}'
        	accountService.postAccount(jsonString);
        	alert("Account added.");
        };
            
    };

    angular.module('accountApp').controller('addAccountController', ['accountService','$log', '$state', AddAccountController]);
}());
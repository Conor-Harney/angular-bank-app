"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
        
    	$log.log("controller AccountController created");
    	var vm = this;
        
        vm.isHidden = false;
        
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        vm.selectAccountToDelete = function(id ,fName, lName, accNum)
        {
        	$log.log("In select account to delete, state params = ", {selectedID: id, selectedFName: fName, selectedLName: lName, selectedAccNum: accNum});
        	$state.go('removeAccount',{selectedID: id, selectedFName: fName, selectedLName: lName, selectedAccNum: accNum});
        }
        
        
        vm.selectAccountToUpdate = function(id ,fName, lName, accNum)
        {
        	$log.log("In select account to update, state params = ", {selectedID: id, selectedFName: fName, selectedLName: lName, selectedAccNum: accNum});
        	$state.go('updateAccount',{selectedID: id, selectedFName: fName, selectedLName: lName, selectedAccNum: accNum});
        }
        
        function init() { 
        	$log.log(vm.fName);
        	accountService.getAccounts().then(function (results) 
        	{//on message 200
        		$log.log("In account-controller.js - inside getAccounts().then ");
        		vm.accounts = results;
        		$log.log(JSON.stringify(vm.accounts));
            }, 
            function (error) 
            {//on error
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       init();    
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log', '$state', AccountController]);
}());
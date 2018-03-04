"use strict";

(function() {
    var UpdateAccountController =  function(accountService, $log, $stateParams, $state) {
        
    	$log.log("Account controller created for update ");
    	$log.log("State params = ", $stateParams);
    	var vm = this;
        
        vm.updateAccount = function()
        {
        	var updatedAccount = '{"firstName": "'+ vm.fName +'","secondName": "'+ vm.lName +'","accountNumber": "'+ vm.accountNumber +'","transactions": []}'
        	$log.log("send following to account service update account - ", $stateParams.selectedID, updatedAccount);
        	accountService.updateAccount($stateParams.selectedID, JSON.parse(updatedAccount));
        	alert("Account Updated.");
        	$state.go('account');
        };
        
        function init() 
        {
        	vm.accountID = $stateParams.selectedID;
            vm.fName = $stateParams.selectedFName;
            vm.lName = $stateParams.selectedLName;
            vm.accountNumber = $stateParams.selectedAccNum;
        }
        init();   
    };

    angular.module('accountApp').controller('updateAccountController', ['accountService','$log', '$stateParams', '$state', UpdateAccountController]);
}());
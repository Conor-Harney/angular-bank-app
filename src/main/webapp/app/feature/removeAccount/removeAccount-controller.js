"use strict";

(function() {

    var RemoveAccountController =  function(accountService, $log, $stateParams, $state) {
        
    	$log.log("Account controller created");
    	var vm = this;
    	
        vm.accountNumber = "";
        
        vm.isHidden = false;
        
        vm.removeAccount = function()
        {
        	$log.log("removing account with id: ", $stateParams.selectedID);
        	accountService.deleteAccount($stateParams.selectedID);
        	alert("Account removed.");
        	$state.go('account');
        };
        
        function init() {
        	vm.accountID = $stateParams.selectedID;
            vm.fName = $stateParams.selectedFName;
            vm.lName = $stateParams.selectedLName;
            vm.accountNumber = $stateParams.selectedAccNum;
       }
       init();//call this as soon as the script is loaded into memory     
    };

    angular.module('accountApp').controller('removeAccountController', ['accountService','$log', '$stateParams', '$state', RemoveAccountController]);
}());
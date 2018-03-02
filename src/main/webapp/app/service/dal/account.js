"use strict";

(function () {

    function AccountDal ($log, dal) {

        this.getAccounts = function () {
        	$log.log("AccountDal getAccounts");
            return dal.http.GET("rest/account/json");
        };

        this.saveAccount = function (accountToSave) {
        	$log.log("Account service account save account");
        	$log.log(accountToSave);
        	$log.log(this.getAccounts());
            return dal.http.POST("rest/account/json", accountToSave);
            $log.log(this.getAccounts());
        };

        this.updateAccount = function (accountToUpdate) {
            return dal.http.PUT("rest/account/json/", accountToUpdate);
        };

        this.deleteAccount = function (accountToDelete) {
            return dal.http.DELETE("/rest/account/json/", accountToDelete);
        };
    }
    
    angular.module("accountApp").service("accountDal", ['$log', "dal", AccountDal]);
}());
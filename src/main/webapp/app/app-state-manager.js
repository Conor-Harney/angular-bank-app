"use strict";

(function() {

	angular.module('accountApp').config(
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise("/dashboard");

				$stateProvider.state("dashboard", {
					url : "/dashboard",
					templateUrl : "app/feature/dashboard/dashboard.html"
				}).state("account", {
					url : "/account",
					reloadOnSearch: true,
					templateUrl : "app/feature/account/account.html"
				}).state("addAccount", {
					url : "/addAccount",
					templateUrl : "app/feature/addAccount/addAccount.html"
				}).state("removeAccount", {
					url : "/removeAccount",
					templateUrl : "app/feature/removeAccount/removeAccount.html",
					params: 
					{
						selectedID: null,
						selectedFName: null,
						selectedLName: null,
						selectedAccNum: null
					}
				}).state("updateAccount", {
					url : "/updateAccount",
					templateUrl : "app/feature/updateAccount/updateAccount.html",
					params: 
					{
						selectedID: null,
						selectedFName: null,
						selectedLName: null,
						selectedAccNum: null
					}
				})
			});
}());
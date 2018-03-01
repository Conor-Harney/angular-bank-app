"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        })
        .state("transaction", {
                url: "/transaction",
                templateUrl: "app/feature/transaction/transaction.html"
        })
        .state("transactionDetails", {
                url: "/transactionDetails",
                params: {
                    accountId: null,
                    transactionId: null
                },
                templateUrl: "app/feature/transactionDetails/transactionDetails.html"
        })
    });
}());
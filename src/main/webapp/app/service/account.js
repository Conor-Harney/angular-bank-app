"use strict";

(function() {

	function AccountService($log, accountDal) {

		this.getAccounts = function() {
			$log.log("Account service get accounts");
			return accountDal.getAccounts();
		};

		this.postAccount = function(accountToSave) {

			$log.log("Account service post accounts");
			var obj = JSON.parse(accountToSave);
			$log.log("object =", obj);
			return accountDal.saveAccount(obj);
		};

		this.deleteAccount = function(accountIDToDelete) {
			accs = accountDal.getAccounts();

			for (account in accs) {
				if(account.accountNumber === accountIDToDelete)
				{
					accountDal.deleteAccount(account);
				}
			}

			return accountDal.deleteAccount(accountToDelete);
		};

	}

	angular.module("accountApp").service("accountService",
			[ '$log', 'accountDal', AccountService ]);

}());
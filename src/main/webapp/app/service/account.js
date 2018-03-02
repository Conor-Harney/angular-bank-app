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
			
			var ret = "file not found";
			accountDal.getAccounts().then(function (results){//on message 200
        		$log.log("delete account then results ");
        		
        		
        		for(var curAcc in results)
        		{
        			$log.log("chccked account", results[curAcc]);
        			$log.log("chccked account id", results[curAcc].accountNumber);
        			if(results[curAcc].accountNumber === accountIDToDelete)
    				{
            			ret = results[curAcc];
            			$log.log("normal result:" , ret);
            			ret = JSON.stringify(ret);
            			$log.log("jsoned result:" , ret);
    				}
        		}
        		
            }, 
            function (error) 
            {//on error
            	$log.log("Oh god, errors are everywhere becase you did something wrong.");
            });
			
			
			/*$log.log("in account service, all accounts =");
			$log.log(accs);
			var ret = "file not found";

			for (var curAccount in accs) {
				$log.log("chccked account", accs[curAccount]);
				if(curAccount.accountNumber === accountIDToDelete)
				{
					$log.log("correct account =", account);
					ret = accountDal.deleteAccount(account);
				}
			}*/

			return ret;
		};

	}

	angular.module("accountApp").service("accountService",
			[ '$log', 'accountDal', AccountService ]);

}());
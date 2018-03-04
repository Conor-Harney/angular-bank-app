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
			$log.log("made it to account.js with acount id ", accountIDToDelete, " to delete");
			var ret = "file not found";
			accountDal.getAccounts().then(function (results){//on message 200
        		
        		for(var curAcc in results)
        		{
        			$log.log("chccked account", results[curAcc]);
        			$log.log("chccked account id", results[curAcc].accountNumber);
        			if(results[curAcc].id == accountIDToDelete)
    				{
            			ret = results[curAcc];
            			$log.log("normal result:" , ret);
            			accountDal.deleteAccount(ret);
            			ret = JSON.stringify(ret);
            			$log.log("jsoned result:" , ret);
            			
    				}
        		}
        		
            }, 
            function (error) 
            {//on error
            	$log.log("Oh god, errors are everywhere becase you did something wrong.");
            });

			return ret;
		};
		
		this.updateAccount = function(accountIDToUpdate, updatedAccount) 
		{
			$log.log("made it to account.js with: ", accountIDToUpdate, " and " , updatedAccount);
			$log.log("updated account first name bracket ", updatedAccount["firstName"]);
			$log.log("updated account first name dot ", updatedAccount.firstName);
			
			var ret = "file not found";
			accountDal.getAccounts().then(function (results)
			{//on message 200
				$log.log("inside the get accounts in update account account.js");
	    		for(var curAcc in results)
	    		{
	    			$log.log("checking: ", results[curAcc].id, " against: ", accountIDToUpdate);
	    			if(results[curAcc].id == accountIDToUpdate)
					{
	    				$log.log("match found: ", results[curAcc]);
	        			ret = results[curAcc];
	        			$log.log("ret= ", ret);
	        			ret.firstName = updatedAccount.firstName;
	        			ret.secondName = updatedAccount.secondName;
	        			ret.accountNumber = updatedAccount.accountNumber;
	        			
	        			$log.log("before parse: ", ret);
	        			ret = accountDal.updateAccount(ret);
					}
	    		}
	    		
	        }, 
	        function (error) 
	        {//on error
	        	$log.log("Oh god, errors are everywhere becase you did something wrong.");
	        });

			return ret;
		};

	}

	angular.module("accountApp").service("accountService",
			[ '$log', 'accountDal', AccountService ]);

}());
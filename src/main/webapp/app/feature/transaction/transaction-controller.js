(function() {

    var TransactionController =  function($state) {
        
    	var vm = this;
    	
    	vm.selectedName = "";
    	vm.accountId;
    	vm.transactionId;
    	
    	
    	vm.accounts = [{
    		'indexAcc':'0',
    		'firstName': 'Declan',
    		'secondName': 'Cordial',
    		'accountNumber': '1234',
    		'transactions': [{
    				'transactionID': '1',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '2',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '3',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '4',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '5',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'1',
    		'firstName': 'Niall',
    		'secondName': 'Mulready',
    		'accountNumber': '1235',
    		'transactions': [{
    				'transactionID': '6',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '7',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '8',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '9',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '10',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'2',
    		'firstName': 'Ian',
    		'secondName': 'Cunningham',
    		'accountNumber': '1236',
    		'transactions': [{
    				'transactionID': '11',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '12',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '13',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '14',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '15',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'3',
    		'firstName': 'Brendan',
    		'secondName': 'Greene',
    		'accountNumber': '1237',
    		'transactions': [{
    				'transactionID': '16',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '17',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '18',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '19',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '20',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'4',
    		'firstName': 'Nicholas',
    		'secondName': 'Tsang',
    		'accountNumber': '1238',
    		'transactions': [{
    				'transactionID': '21',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '22',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '23',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '24',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '25',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'5',
    		'firstName': 'Sean',
    		'secondName': 'McGee',
    		'accountNumber': '1239',
    		'transactions': [{
    				'transactionID': '26',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '27',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '28',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '29',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '30',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'6',
    		'firstName': 'Anthony',
    		'secondName': 'Shannon',
    		'accountNumber': '1240',
    		'transactions': [{
    				'transactionID': '31',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '32',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '33',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '34',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '35',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'7',
    		'firstName': 'Conor',
    		'secondName': 'Harney',
    		'accountNumber': '1241',
    		'transactions': [{
    				'transactionID': '36',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '37',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '38',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '39',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '40',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'8',
    		'firstName': 'Decland',
    		'secondName': 'Horlick',
    		'accountNumber': '1242',
    		'transactions': [{
    				'transactionID': '41',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '42',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '43',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '44',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '45',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'9',
    		'firstName': 'Joshua',
    		'secondName': 'Sherwood',
    		'accountNumber': '1243',
    		'transactions': [{
    				'transactionID': '46',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '47',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '48',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '49',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '50',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'10',
    		'firstName': 'Bau',
    		'secondName': 'Nguyen',
    		'accountNumber': '1243',
    		'transactions': [{
    				'transactionID': '51',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '52',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '53',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '54',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '55',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'11',
    		'firstName': 'Kennedy',
    		'secondName': 'Bowers',
    		'accountNumber': '1243',
    		'transactions': [{
    				'transactionID': '56',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '57',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '58',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '59',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '60',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'12',
    		'firstName': 'Daleel',
    		'secondName': 'Ramjan',
    		'accountNumber': '1243',
    		'transactions': [{
    				'transactionID': '61',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '62',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '63',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '64',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '65',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	},
    	{
    		'indexAcc':'13',
    		'firstName': 'Ismael',
    		'secondName': 'Omar',
    		'accountNumber': '1243',
    		'transactions': [{
    				'transactionID': '66',
    				'tranactionName': 'EvertonTicket',
    				'transactionLocation': 'GoodisonPark',
    				'transactionAmount': '40.00',
    				'transactionDate': '01/03/2018'
    			},
    			{
    				'transactionID': '67',
    				'tranactionName': 'TescoGroceries',
    				'transactionLocation': 'London',
    				'transactionAmount': '72.58',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '68',
    				'tranactionName': 'Dominos',
    				'transactionLocation': 'Salford',
    				'transactionAmount': '20.00',
    				'transactionDate': '27/02/2018'
    			},
    			{
    				'transactionID': '69',
    				'tranactionName': 'Petrol',
    				'transactionLocation': 'London',
    				'transactionAmount': '60.67',
    				'transactionDate': '25/02/2018'
    			},
    			{
    				'transactionID': '70',
    				'tranactionName': 'Primrk',
    				'transactionLocation': 'Liverpool',
    				'transactionAmount': '40.50',
    				'transactionDate': '29/02/2018'
    			}
    		]
    	}
    ];
    	
   vm.goto= function(myAccount,myTransaction){
	   $state.go('transactionDetails',{accountId:myAccount,transactionId:myTransaction});
	   
   }
            
    };

    angular.module('accountApp').controller('transactionController', ['$state',TransactionController]);
}());
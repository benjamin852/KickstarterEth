'use strict';

//define routes  with tokens (i.e. are loaded with specific data for a specific page)
//exports navegation helpers allowing components to navigate users around app 


var routes = require('next-routes')();

//Arg1= the pattern we're looking for Arg2= Which component to show when user is on first arg's route 
routes.add('/campaigns/new', '/campaigns/new') //if someone goes to X URL then show them X component
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFHQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGtCQUM2QyxBQUQ3QztDQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxtQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekMsNkJBSUssQUFKTCxJQUlTLEFBSlQsb0NBSTZDLEFBSjdDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JlbndlaW5iZXJnL0Rlc2t0b3AvV29yay9FdGhlcmV1bS9VZGVteS9HcmlkZXJDb3Vyc2Uva2lja3N0YXJ0MiJ9
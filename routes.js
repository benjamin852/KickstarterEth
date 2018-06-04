//define routes  with tokens (i.e. are loaded with specific data for a specific page)
//exports navegation helpers allowing components to navigate users around app 


const routes = require('next-routes')();

//Arg1= the pattern we're looking for Arg2= Which component to show when user is on first arg's route 
routes
    .add('/campaigns/new', '/campaigns/new') //if someone goes to X URL then show them X component
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new'); 

module.exports = routes;






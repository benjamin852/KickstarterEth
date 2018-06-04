'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //1. we are in the browser    2. meta mask is running and injected web3
    web3 = new _web2.default(window.web3.currentProvider); //hijack meta mask provider. use for our own instance of web3 
} else {
    //1. we are on the server     2. meta mask is not running
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/03WO3yxO6A8iYyifxvNj'); //new provider for rinkeby
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RDtBQUV4RDtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBRjhDLEFBRXJFLEFBQU8sQUFBcUIsaUJBRnlDLEFBQ3JFLENBQzZDLEFBQ2hEO0FBSEQsT0FHTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFGakMsQUFFSCxBQUFpQixBQUFnQyxtREFBbUQsQUFDcEc7V0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQUdEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JlbndlaW5iZXJnL0Rlc2t0b3AvV29yay9FdGhlcmV1bS9VZGVteS9HcmlkZXJDb3Vyc2Uva2lja3N0YXJ0MiJ9
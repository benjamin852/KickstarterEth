import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //1. we are in the browser    2. meta mask is running and injected web3
    web3 = new Web3(window.web3.currentProvider) //hijack meta mask provider. use for our own instance of web3 
} else {
    //1. we are on the server     2. meta mask is not running
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/03WO3yxO6A8iYyifxvNj'); //new provider for rinkeby
    web3 = new Web3(provider);
}


export default web3;
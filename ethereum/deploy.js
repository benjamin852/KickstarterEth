
const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require ('web3'); //1.0.0
const compiledFactory = require('./build/CampaignFactory.json');


//the HDWalletProvider connects us to a network and unlocks an account
const provider = new HDWalletProvider ( //meta mask web0.2 provider
	'trash carpet corn marble milk vicious test until kiwi metal vote void',//account
	'https://rinkeby.infura.io/03WO3yxO6A8iYyifxvNj'//network
);

const web3 = new Web3(provider); //web3 instance with the new provider passed in

const deploy = async () => { //we make this function just to give us the ability to use the async await syntax

    const accounts = await web3.eth.getAccounts(); //mneumonic gives us more than one account
    
    console.log('Attempting to deploy from account', accounts[0]);
    
	const result = await new web3.eth.Contract(  //contract deployment statement <-
        JSON.parse(compiledFactory.interface)
	)
		.deploy({data: compiledFactory.bytecode })
		.send ({gas: '1000000', from :accounts[0]});


	console.log('Contract deployed to', result.options.address); //tells us what address deployed to
};
deploy();

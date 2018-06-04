import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
    //return an instance of campaign by passing in an address
    
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface), 
        address
    );
};
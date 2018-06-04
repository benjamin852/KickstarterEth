import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7093B8Ea2841bf24Cf32c25bD6e317A73aEFd830'
);

export default instance;
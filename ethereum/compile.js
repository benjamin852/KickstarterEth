const path = require ('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source, 1).contracts; //grab contracts folder

fs.ensureDirSync(buildPath); //re-create build folder


//write each contract to different file in build directory
for (let contract in output) {
    console.log(output);
    //output the two contracts in json
    fs.outputJsonSync (
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
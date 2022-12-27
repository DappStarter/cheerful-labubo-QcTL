require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember method give prison orange gaze'; 
let testAccounts = [
"0xe711d04a174cc3548720e09744b5a02a3cbdbb9adbe3c3fe32ab7d134ee4c573",
"0xfa1c77939d0eafe2ea5a551c0b4c265c14e6805ee4e742137f7766f01e7826ce",
"0x90fba89943ed2957737e992c8081299b3cf82398a9a30ad49328ba36d8c8152f",
"0x712f588899e393d28f581f78032d6d05e9b01b7d25ea1c02a8b425eb78784454",
"0xe0596d1c10c6e020a7aca1d4c28bb080f9ccb97fb91c99d99fff2e3a38db4980",
"0x676c440a07b4ccfec8ad6d5ae04f6ec7615565be372f9fb05236a893777f746c",
"0x3eaafec7acd96a3e7da7e35eb3af7b1e3f651104bcc125c60c738686f4fc198f",
"0xdea8bbe064cc77b245cdee1d02ce9f3aa255c6a9754254c35c545c084028449b",
"0xab2b102ff1f027a0d17ce712f17065b6fac449d8647d1d1f9695bb3c7b736f91",
"0x2c5027f1b16228425991f77096fc5995ffcb67775d2af412e4509365522dc3d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


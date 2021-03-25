require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth shift protect imitate problem system tribe'; 
let testAccounts = [
"0xec264ea12c09cb434d58e0872b8b4e55230fc389b46c6696413d3777033f2762",
"0x927e4d229ce2b18f6e7d6762433e781a99b51f22bd9c262ba866b24f83d9dd05",
"0x1ee09ab817793bf0fe78c89713831fe998267ac20802b91d6228ea11992f0b47",
"0xd711f9090dde83335c6ac3fc285ec15fe7145299031a40514e19ed05e08d0bc7",
"0x3910750421541ae593a0bcdee30e2d5625cda9953686c24941d08a66233c2001",
"0xcdeefda413492be2776942327ac22b84886c4f0a7c620c4ac5f900604b769735",
"0xccdd24b057deec4bbd4f631b9487d204dcfcd6896278bc27be3605e5189aefb8",
"0x1cbb26fd7a9d7eac07cff9bbcf0a2645c9f73f048962688f247e24a94fc54992",
"0x88c65e1e2b59127b9cd072729df22ae6df6dfc4604074f17185bd6bb017ff3ec",
"0x1dc12e893be52a4f5cecc4b3acab5389e49c32bd8abb4a86cb7104d6a5769ceb"
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
            version: '^0.5.11'
        }
    }
};

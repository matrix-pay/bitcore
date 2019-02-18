const bitcore = require('./index');
var PrivateKey = bitcore.PrivateKey;
var Network = bitcore.Networks;
var Address = bitcore.Address;
// privkey.toWIF().should.equal(wifLivenet);
var privateKey = new PrivateKey('Kz21uDXrgR3KbWSQc4UBZRDkYwc2itojVFFaxciFok9upmNGdKmE', Network.livenet);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log(exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('Kz21uDXrgR3KbWSQc4UBZRDkYwc2itojVFFaxciFok9upmNGdKmE');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
var error = PrivateKey.getValidationError('NJMv3Gxm7pFGnx5xqAJqHK4nQrfrKWNgq5WAtaSfhYw7gZbo8nrF', Network.livenet);
if (error) {
    // handle the error
    console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey();
var pk2s = new PrivateKey(pk2, Network.livenet);
var pb2 = pk2s.toPublicKey();
var pk3 = new PrivateKey();
var pk3s = new PrivateKey(pk3, Network.livenet);
var pb3 = pk3s.toPublicKey();
var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);

console.log("#=====================================================================================#");
// privkey.toWIF().should.equal(wifLivenet);
var privateKey = new PrivateKey('7R14wNDWwWzY3FqQzV9uLDW6MwsdVNu49o59rHfuMzxRhBmLVHoh', Network.testnet);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log('TOWIF: ' + exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('7R14wNDWwWzY3FqQzV9uLDW6MwsdVNu49o59rHfuMzxRhBmLVHoh');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
console.log(publicKey.point.x.toString('hex'));
console.log(publicKey.point.y.toString('hex'));
var error = PrivateKey.getValidationError('7R14wNDWwWzY3FqQzV9uLDW6MwsdVNu49o59rHfuMzxRhBmLVHoh', Network.testnet);
if (error) {
  // handle the error
  console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey('7SzsMVvLzsPWtNU231MLHJkUpsQ5gKLb5j5mdc7Ko2RrGDhnpczy',Network.testnet);
console.log(pk2);
var exported = pk2.toWIF();
console.log('TOWIF: ' + exported);
var pb2 = pk2.toPublicKey();
var address = pk2.toAddress();
console.log(address);
console.log(address.toLegacyAddress());

var pk3 = new PrivateKey('7S4URD61UPcFUcjpdYqMjZ1Lj8vShVLuoN1mFzREmVF5VmK7cmuq',Network.testnet);
console.log(pk3);
var exported = pk3.toWIF();
console.log('TOWIF: ' + exported);
var pb3 = pk3.toPublicKey();

var address = pk3.toAddress();
console.log(address);
console.log(address.toLegacyAddress());

var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());

var address = Address.fromString('matrixbit:yrlkd07g0xhry6twpfr6365x6pyjxfcd65vmjn0c0f','livenet','pubkeyhash');


console.log(address.toLegacyAddress());
/*
<PrivateKey: fbf1a955d03eea18f445af10e04b83baff971953465ecd5060891c86894e6d33, network: livenet>
NJMv3Gxm7pFGnx5xqAJqHK4nQrfrKWNgq5WAtaSfhYw7gZbo8nrF
<PrivateKey: fbf1a955d03eea18f445af10e04b83baff971953465ecd5060891c86894e6d33, network: livenet>
<PublicKey: 026e07bc22acd26b788fd76d8880079846904c558881ee7d6fd241150fb2aff2f7>
<Address: matrixbit:yqwjylxe7c0g63rwx4gfh97trrhkg2hhwqgpqgxe3a, type: pubkeyhash, network: livenet>
MAZD9Ev5VbQqnC4xjw1JQrfGMnj6YoqNc6
<Address: matrixbit:peqtw5chcpl8ksdhlzts5czjhze6zvaxtglcxhapuu, type: scripthash, network: livenet>
#=====================================================================================#
<PrivateKey: 5b8be48bd77835acd74271a66ddfd87a8cbd2e619a185f9180e0dc5f6312dc26, network: testnet>
TOWIF: 7R14wNDWwWzY3FqQzV9uLDW6MwsdVNu49o59rHfuMzxRhBmLVHoh
<PrivateKey: 5b8be48bd77835acd74271a66ddfd87a8cbd2e619a185f9180e0dc5f6312dc26, network: testnet>
<PublicKey: 025d0ba19ff4698c7e73fb93d2f3814061dfaa5852fdc281031868e5e429501510>
<Address: mxtest:yq7544hv70u8v4760ukayw7kg5uttyhyvc5nhe5uv3, type: pubkeyhash, network: testnet>
VGFJoFGqYg7iPHmmujtXtniiw1cdNc1qCK
TOWIF: 7SzsMVvLzsPWtNU231MLHJkUpsQ5gKLb5j5mdc7Ko2RrGDhnpczy
<Address: mxtest:yp0asnnhdkvhs97nlnah4m59df3c32f3x5kjr9452c, type: pubkeyhash, network: testnet>
VKQ1F4kxsZE3WekQdbeU4Sfp4mefHY2oDb
TOWIF: 7S4URD61UPcFUcjpdYqMjZ1Lj8vShVLuoN1mFzREmVF5VmK7cmuq
<Address: mxtest:yzjmzjzsl2skwaswfat7lqyu07cw8hmassuzu3cfrz, type: pubkeyhash, network: testnet>
VRmKo4G1n7nozKmCqWBw8Jkr6tUoAuXEsZ
<Address: mxtest:pculan0fffj6muxc6jujthsqxnvc5ec4hg89sr7kt6, type: scripthash, network: testnet>
6KgVZTo29HnsonsTX5sjdrkgnh62maKH3H




*/

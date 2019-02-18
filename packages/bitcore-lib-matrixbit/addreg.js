const bitcore = require('./index');
var PrivateKey = bitcore.PrivateKey;
var Network = bitcore.Networks;
var Address = bitcore.Address;
// privkey.toWIF().should.equal(wifLivenet);
var privateKey = new PrivateKey('cVbv6G1hXrd9Jy8nrePbUxCLmx2evxSCUB3s3TGGYts3TpJWb7Zn', Network.regtest);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log(exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('cVbv6G1hXrd9Jy8nrePbUxCLmx2evxSCUB3s3TGGYts3TpJWb7Zn');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
var error = PrivateKey.getValidationError('cVbv6G1hXrd9Jy8nrePbUxCLmx2evxSCUB3s3TGGYts3TpJWb7Zn', Network.regtest);
if (error) {
    // handle the error
    console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress()); //PayToScriptHash
var pk2 = new PrivateKey();
var pk2s = new PrivateKey(pk2, Network.testnet);
var pb2 = pk2s.toPublicKey();
var pk3 = new PrivateKey();
var pk3s = new PrivateKey(pk3, Network.testnet);
var pb3 = pk3s.toPublicKey();
var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());

console.log("#=====================================================================================#");

var privateKey = new PrivateKey('cPyaYPtdjG8axJdEGMBNLRtRMeykv5MJmfHTzNFfo9zS4RfdAeRo', Network.regtest);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log(exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('cPyaYPtdjG8axJdEGMBNLRtRMeykv5MJmfHTzNFfo9zS4RfdAeRo');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
var error = PrivateKey.getValidationError('cPyaYPtdjG8axJdEGMBNLRtRMeykv5MJmfHTzNFfo9zS4RfdAeRo', Network.regtest);
if (error) {
  // handle the error
  console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey();
var pk2s = new PrivateKey(pk2, Network.testnet);
var pb2 = pk2s.toPublicKey();
var pk3 = new PrivateKey();
var pk3s = new PrivateKey(pk3, Network.testnet);
var pb3 = pk3s.toPublicKey();
var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());

console.log("#=====================================================================================#");

var privateKey = new PrivateKey('cVH9bFubPmaZqoZoeiPNYAkqTxC4U3miHnBCKCUFLWHh8c3S4JAn', Network.regtest);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log(exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('cVH9bFubPmaZqoZoeiPNYAkqTxC4U3miHnBCKCUFLWHh8c3S4JAn');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
var error = PrivateKey.getValidationError('cVH9bFubPmaZqoZoeiPNYAkqTxC4U3miHnBCKCUFLWHh8c3S4JAn', Network.regtest);
if (error) {
  // handle the error
  console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey();
var pk2s = new PrivateKey(pk2, Network.testnet);
var pb2 = pk2s.toPublicKey();
var pk3 = new PrivateKey();
var pk3s = new PrivateKey(pk3, Network.testnet);
var pb3 = pk3s.toPublicKey();
var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());

console.log("#=====================================================================================#");

var privateKey = new PrivateKey('cPVejEGSZNShVU152f4Pz4MTFSo3Ja6udnaEEaYWuKR2C6xecGrq', Network.regtest);
console.log(privateKey);
var exported = privateKey.toWIF();
console.log(exported);
// 7TuP128JuHkqQ7b5E96enwSxJM5cWMmkkrrv3Qe1cDjf3MKz6x14
var imported = PrivateKey.fromWIF('cPVejEGSZNShVU152f4Pz4MTFSo3Ja6udnaEEaYWuKR2C6xecGrq');
console.log(imported);
var publicKey = privateKey.toPublicKey();
console.log(publicKey);
var error = PrivateKey.getValidationError('cPVejEGSZNShVU152f4Pz4MTFSo3Ja6udnaEEaYWuKR2C6xecGrq', Network.regtest);
if (error) {
  // handle the error
  console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey();
var pk2s = new PrivateKey(pk2, Network.testnet);
var pb2 = pk2s.toPublicKey();
var pk3 = new PrivateKey();
var pk3s = new PrivateKey(pk3, Network.testnet);
var pb3 = pk3s.toPublicKey();
var p2shAddress = new Address([publicKey, pb2, pb3], 2);
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());
/*
<PrivateKey: f2c6debd45db78dcb8137cb22e85cabfb7b46a57f6cfd690ec77ed0a930439c9, network: livenet>
NJ46Ve491DsHZWDRHzu6HdNKmSXoJ7wfSmE3AEg4JceNpf7yRFgQ
<PrivateKey: f2c6debd45db78dcb8137cb22e85cabfb7b46a57f6cfd690ec77ed0a930439c9, network: livenet>
<PublicKey: 0310772ab990da9e5a99a2454ebdbc4a1591af4ff584b20359e3e706db7ff95f5f>
<Address: matrixbit:ype63fyj9zx06dvxnxk4pfq3emdwama74g4de5zs86, type: pubkeyhash, network: livenet>
MJShy13vsyCGhZr7Gbb22n6ckin2WHW19e
<Address: matrixbit:pmd9c33m40z0svdnw44xm8mk6rm7e75kkge9adxnkg, type: scripthash, network: livenet>
#=====================================================================================#
<PrivateKey: c7d9b3f41e1c538b113bdb4433208d5300e16d9e971011aa8566666fb4541a0e, network: livenet>
NGcen7apcPx2GYSUfkJsuna2mCCXtQV14na17zEq4PKRturFvaBL
<PrivateKey: c7d9b3f41e1c538b113bdb4433208d5300e16d9e971011aa8566666fb4541a0e, network: livenet>
<PublicKey: 0268f05058870433a429d7770060022c7cbb9edaa3b5cd2d6266cff662b0efc5f3>
<Address: matrixbit:yzyf7vsw7hn3t5n0t2scwhjvmxd04svhd5tl904m4v, type: pubkeyhash, network: livenet>
MLMYqcsHTrzn4YVp4RLBHBCHPQ4DCo2oD6
<Address: matrixbit:pc33v6ylzluly2gjzth98m9576rftt99xseq5wlwzt, type: scripthash, network: livenet>
#=====================================================================================#
<PrivateKey: 0135b63e377ea967ad1d7f7cdd4d80c51148fe8e2d26ca9897d766be4ef976ca, network: livenet>
N9xXAFeZgUECjt8Fe5rP9YnmbuQrPTgkVvMafarCuXsAjXHNrUpT
<PrivateKey: 0135b63e377ea967ad1d7f7cdd4d80c51148fe8e2d26ca9897d766be4ef976ca, network: livenet>
<PublicKey: 02504235278be0b09e4aaea05ac2c88032c9c3a216b7df19ae3c1fc08f28ce0f6a>
<Address: matrixbit:ypswrwmkwu95a9e5gwtw49yx0hmtntpgpsngxd3n0t, type: pubkeyhash, network: livenet>
MGjRWzvM3CKNCZT3hdzraji7dpYgamLHcC
<Address: matrixbit:pegyy40w8cv8we5daq3nf04en3jaw5v40yjww94dxf, type: scripthash, network: livenet>
#=====================================================================================#
<PrivateKey: 5b59ec6b541318a4a6de886845a8fb9e44c833a7fdd861ef38a509776eada8df, network: livenet>
NCyk77CsMGhFUhLHvBbBfTJBvimReRq14AZnx6MX1WGTR4LkSrwx
<PrivateKey: 5b59ec6b541318a4a6de886845a8fb9e44c833a7fdd861ef38a509776eada8df, network: livenet>
<PublicKey: 02672650d78b6f282ee1089256b190e24ac87c26868b6630773dba4b30ea688967>
<Address: matrixbit:yrtgxlk59zj0d0jhc5mzqp6lraw963vn9gxcq0qyp9, type: pubkeyhash, network: livenet>
MTTQMwiVTXDhjhYACHKkERb6bUGyoLrELE
<Address: matrixbit:pmqup60qr3y8r7ymykjj4c0w83vhsgzftcaddfuzch, type: scripthash, network: livenet>

 */

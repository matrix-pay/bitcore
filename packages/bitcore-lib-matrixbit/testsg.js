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
var error = PrivateKey.getValidationError('Kz21uDXrgR3KbWSQc4UBZRDkYwc2itojVFFaxciFok9upmNGdKmE', Network.livenet);
if (error) {
  // handle the error
  console.log('ERROR');
}
var address = privateKey.toAddress();
console.log(address);
console.log(address.toLegacyAddress());
var pk2 = new PrivateKey('L3bDv1CGpsb3Q5vcQVuU1P7q5odLbdMxRcZMHFaVtgGbQ1sggZd3', Network.livenet);
var pk2s = new PrivateKey(pk2, Network.livenet);
var pb2 = pk2s.toPublicKey();
console.log(pb2);
var pk3 = new PrivateKey('L5j6kc7D6cWp5kcCCU5GmAx4v68qVyjj3BLoBrcykydS7tRnndqG', Network.livenet);
var pk3s = new PrivateKey(pk3, Network.livenet);
var pb3 = pk3s.toPublicKey();
console.log(pb3);
var p2shAddress = new Address(['030d41e8a1f9cab4fcbf7aaf27c992dd9985233dec81a8ce14f40427ec2c75a636', '03d2f6c76ac72102654dfff3f5e381252e5dba6abb2248261554b5bc4d405bc463',
  '0232ac7c2d3651152bfa637232245bfb4ce61abbc3a6f681000873be6c56df02ee'], Network.livenet, 'a9140a685a822b4aac085571d94f657a16a5a80a576c87');
console.log(p2shAddress);
console.log(p2shAddress.toLegacyAddress());

'use strict';

var chai = chai || require('chai');
var bitcore = require('..');
var expect = chai.expect;
var Networks = bitcore.Networks;
var should = chai.should();
var URI = bitcore.URI;

describe('URI', function() {
  /* jshint maxstatements: 30 */

  // TODO: Split this and explain tests
  it('parses uri strings correctly (test vector)', function() {
    var uri;

    URI.parse.bind(URI, 'badURI').should.throw(TypeError);

    uri = URI.parse('matrixbit:');
    expect(uri.address).to.be.equal(undefined);
    expect(uri.amount).to.be.equal(undefined);
    expect(uri.otherParam).to.be.equal(undefined);


    uri = URI.parse('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    uri.address.should.equal('qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    expect(uri.amount).to.be.equal(undefined);
    expect(uri.otherParam).to.be.equal(undefined);

    uri = URI.parse('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=123.22');
    uri.address.should.equal('qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    uri.amount.should.equal('123.22');
    expect(uri.otherParam).to.be.equal(undefined);

    uri = URI.parse('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=123.22' +
                    '&other-param=something&req-extra=param');
    uri.address.should.equal('qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    uri.amount.should.equal('123.22');
    uri['other-param'].should.equal('something');
    uri['req-extra'].should.equal('param');
  });

  // TODO: Split this and explain tests
  it('parses uri strings correctly for testnet network (test vector)', function() {
    var uri;

    URI.parse.bind(URI, 'badURI').should.throw(TypeError);

    uri = URI.parse('mbxtest:');
    expect(uri.address).to.be.equal(undefined);
    expect(uri.amount).to.be.equal(undefined);
    expect(uri.otherParam).to.be.equal(undefined);

    uri = URI.parse('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
    uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
    expect(uri.amount).to.be.equal(undefined);
    expect(uri.otherParam).to.be.equal(undefined);

    uri = URI.parse('mbxtest:qrgktfajuvxclwwxmstp58xxyr3nczkunqmx5zwqcd?amount=123.22');
    uri.address.should.equal('qrgktfajuvxclwwxmstp58xxyr3nczkunqmx5zwqcd');
    uri.amount.should.equal('123.22');
    expect(uri.otherParam).to.be.equal(undefined);

    uri = URI.parse('mbxtest:qr8ff2ealfd696fxf83ucwzlvhv36evftqmuvyes0h?amount=123.22' +
                    '&other-param=something&req-extra=param');
    uri.address.should.equal('qr8ff2ealfd696fxf83ucwzlvhv36evftqmuvyes0h');
    uri.amount.should.equal('123.22');
    uri['other-param'].should.equal('something');
    uri['req-extra'].should.equal('param');
  });

  it('Should return error if try to use an invalid bitcoin URI', function() {
    var uri;

    try {
      uri = URI.parse('badprefix:qqkj609un9sl896yezxj0j5hxagk7h7pnyyzaz887x');
    } catch (e) {
        expect(e.message).to.equal('Invalid bitcoin URI');
    }
  });

  describe('cashaddr', function() {
    URI.parse.bind(URI, 'badURI').should.throw(TypeError);

    // cashaddr
    it('address only', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      expect(uri.amount).to.be.equal(undefined);
      expect(uri.otherParam).to.be.equal(undefined);
      URI.isValid(str).should.equal(true);
    });

    it('address +amount', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      expect(uri.otherParam).to.be.equal(undefined);
      URI.isValid(str).should.equal(true);
    });


    it('address +amount + opts', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22' +
                    '&other-param=something&req-extra=param';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      uri['other-param'].should.equal('something');
      uri['req-extra'].should.equal('param');

      URI.isValid(str).should.equal(false);
    });


    it('address +amount + opts', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22' +
                    '&other-param=something&req-extra=param';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      uri['other-param'].should.equal('something');
      uri['req-extra'].should.equal('param');

      // becase other-; req-* was not supplied to validator
      URI.isValid(str).should.equal(false);
    });

    it('address +amount + opts', function() {
      var uri;
      var str = 'matrixbit:pq9xsk5z9d92czz4w8v57et6z6j6szjhds6qkwu2f6?amount=123.22' +
                    '&message=Donation%20for%20project%20xyz&label=myLabel';
      uri = URI.parse(str);
      uri.address.should.equal('pq9xsk5z9d92czz4w8v57et6z6j6szjhds6qkwu2f6');
      uri.amount.should.equal('123.22');
      uri.label.should.equal('myLabel');
      uri.message.should.equal('Donation for project xyz');

      // becase other-; req-* was not supplied to validator
      URI.isValid(str).should.equal(true);
    });
  });

  describe('cashaddr for testnet', function() {
    URI.parse.bind(URI, 'badURI').should.throw(TypeError);

    // cashaddr
    it('address only', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      expect(uri.amount).to.be.equal(undefined);
      expect(uri.otherParam).to.be.equal(undefined);
      URI.isValid(str).should.equal(true);
    });

    it('address +amount', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      expect(uri.otherParam).to.be.equal(undefined);
      URI.isValid(str).should.equal(true);
    });


    it('address +amount + opts', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22' +
                    '&other-param=something&req-extra=param';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      uri['other-param'].should.equal('something');
      uri['req-extra'].should.equal('param');

      URI.isValid(str).should.equal(false);
    });

    it('address +amount + opts', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22' +
                    '&other-param=something&req-extra=param';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      uri['other-param'].should.equal('something');
      uri['req-extra'].should.equal('param');

      // becase other-; req-* was not supplied to validator
      URI.isValid(str).should.equal(false);
    });

    it('address +amount + opts', function() {
      var uri;
      var str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22' +
                    '&message=Donation%20for%20project%20xyz&label=myLabel';
      uri = URI.parse(str);
      uri.address.should.equal('qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal('123.22');
      uri.label.should.equal('myLabel');
      uri.message.should.equal('Donation for project xyz');

      // becase other-; req-* was not supplied to validator
      URI.isValid(str).should.equal(true);
    });

  });



  // TODO: Split this and explain tests
  it('URIs can be validated statically (test vector)', function() {
    URI.isValid('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq').should.equal(true);

    URI.isValid('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2')
                .should.equal(true);
    URI.isValid('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2&other=param')
                .should.equal(true);
    URI.isValid('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2&req-other=param',
                ['req-other']).should.equal(true);
    URI.isValid('matrixbit:mpMee8XVXFNgX6KTzHnyqMuE5BiiJyFCD7?amount=0.1&' +
                'r=https%3A%2F%2Ftest.bitpay.com%2Fi%2F6DKgf8cnJC388irbXk5hHu').should.equal(true);

    URI.isValid('matrixbit:').should.equal(false);
    URI.isValid('matrixbit:badUri').should.equal(false);
    URI.isValid('matrixbit:1DP69gMMvSuYhbnxsi4EJEFufUAbDrEQfk?amount=bad').should.equal(false);
    URI.isValid('matrixbit:1DP69gMMvSuYhbnxsi4EJEFufUAbDrEQfk?amount=1.2&req-other=param')
                .should.equal(false);
    URI.isValid('matrixbit:?r=https%3A%2F%2Ftest.bitpay.com%2Fi%2F6DKgf8cnJC388irbXk5hHu')
                .should.equal(false);
  });

  // TODO: Split this and explain tests
  it('URIs can be validated statically (test vector)', function() {
    URI.isValid('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5').should.equal(true);

    URI.isValid('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2')
                .should.equal(true);
    URI.isValid('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2&other=param')
                .should.equal(true);
    URI.isValid('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2&req-other=param',
                ['req-other']).should.equal(true);
    URI.isValid('mbxtest:mzMFbGX16oMTS7b8Egf86JwP5k13UcPW8Q?amount=0.1&' +
                'r=https%3A%2F%2Ftest.bitpay.com%2Fi%2F6DKgf8cnJC388irbXk5hHu').should.equal(true);

    URI.isValid('mbxtest:').should.equal(false);
    URI.isValid('mbxtest:badUri').should.equal(false);
    URI.isValid('mbxtest:1DP69gMMvSuYhbnxsi4EJEFufUAbDrEQfk?amount=bad').should.equal(false);
    URI.isValid('mbxtest:1DP69gMMvSuYhbnxsi4EJEFufUAbDrEQfk?amount=1.2&req-other=param')
                .should.equal(false);
    URI.isValid('mbxtest:?r=https%3A%2F%2Ftest.bitpay.com%2Fi%2F6DKgf8cnJC388irbXk5hHu')
                .should.equal(false);
  });

  it('fails on creation with no params', function() {
    (function(){
      return new URI();
    }).should.throw(TypeError);
  });

  it('do not need new keyword', function() {
    var uri = URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    uri.should.be.instanceof(URI);
  });

  it('do not need new keyword for testnet', function() {
    var uri = URI('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
    uri.should.be.instanceof(URI);
  });

  describe('instantiation from bitcoin uri', function() {
    /* jshint maxstatements: 25 */
    var uri;

    it('parses address', function() {
      uri = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
      uri.address.should.be.instanceof(bitcore.Address);
      uri.network.should.equal(Networks.livenet);
    });

    it('parses amount', function() {
      uri = URI.fromString('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=123.22');
      uri.address.toString().should.equal('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
      uri.amount.should.equal(12322000000);
      expect(uri.otherParam).to.be.equal(undefined);
    });

    it('stores unknown parameters as "extras"', function() {
      uri = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2&other=param');
      uri.address.should.be.instanceof(bitcore.Address);
      expect(uri.other).to.be.equal(undefined);
      uri.extras.other.should.equal('param');
    });

    it('throws error when a required feature is not supported', function() {
      (function() {
        return new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2&other=param&req-required=param');
      }).should.throw(Error);
    });

    it('has no false negative when checking supported features', function() {
      uri = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.2&other=param&' +
                    'req-required=param', ['req-required']);
      uri.address.should.be.instanceof(bitcore.Address);
      uri.amount.should.equal(120000000);
      uri.extras.other.should.equal('param');
      uri.extras['req-required'].should.equal('param');
    });
  });

  describe('instantiation from bitcoin uri for testnet', function() {
    /* jshint maxstatements: 25 */
    var uri;

    it('parses a testnet address', function() {
      uri = new URI('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.address.should.be.instanceof(bitcore.Address);
      uri.network.should.equal(Networks.testnet);
    });

    it('parses amount', function() {
      uri = URI.fromString('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=123.22');
      uri.address.toString().should.equal('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
      uri.amount.should.equal(12322000000);
      expect(uri.otherParam).to.be.equal(undefined);
    });

    it('stores unknown parameters as "extras"', function() {
      uri = new URI('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2&other=param');
      uri.address.should.be.instanceof(bitcore.Address);
      expect(uri.other).to.be.equal(undefined);
      uri.extras.other.should.equal('param');
    });

    it('throws error when a required feature is not supported', function() {
      (function() {
        return new URI('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2&other=param&req-required=param');
      }).should.throw(Error);
    });

    it('has no false negative when checking supported features', function() {
      uri = new URI('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?amount=1.2&other=param&' +
                    'req-required=param', ['req-required']);
      uri.address.should.be.instanceof(bitcore.Address);
      uri.amount.should.equal(120000000);
      uri.extras.other.should.equal('param');
      uri.extras['req-required'].should.equal('param');
    });
  });

  // TODO: Split this and explain tests
  it('should create instance from object', function() {
    /* jshint maxstatements: 25 */
    var uri;

    uri = new URI({
      address: 'qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq'
    });
    uri.address.should.be.instanceof(bitcore.Address);
    uri.network.should.equal(Networks.livenet);

    uri = new URI({
      address: 'qr8ff2ealfd696fxf83ucwzlvhv36evftqmuvyes0h'
    });
    uri.address.should.be.instanceof(bitcore.Address);
    uri.network.should.equal(Networks.testnet);

    uri = new URI({
      address: 'qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq',
      amount: 120000000,
      other: 'param'
    });
    uri.address.should.be.instanceof(bitcore.Address);
    uri.amount.should.equal(120000000);
    expect(uri.other).to.be.equal(undefined);
    uri.extras.other.should.equal('param');

    (function() {
      return new URI({
        address: 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq',
        'req-required': 'param'
      });
    }).should.throw(Error);

    uri = new URI({
      address: 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq',
      amount: 120000000,
      other: 'param',
      'req-required': 'param'
    }, ['req-required']);
    uri.address.should.be.instanceof(bitcore.Address);
    uri.amount.should.equal(120000000);
    uri.extras.other.should.equal('param');
    uri.extras['req-required'].should.equal('param');
  });

  it('should support double slash scheme', function() {
    var uri = new URI('matrixbit://qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    uri.address.toString().should.equal('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');

    uri = new URI('mbxtest://qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
    uri.address.toString().should.equal('mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5');
  });

  it('should input/output String', function() {
    var str = 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?' +
              'message=Donation%20for%20project%20xyz&label=myLabel&other=xD';
    URI.fromString(str).toString().should.equal(str);

    str = 'mbxtest:qp77nf332zlztxt52zrm44lplmumj645xvhsm7xkj5?' +
              'message=Donation%20for%20project%20xyz&label=myLabel&other=xD';
    URI.fromString(str).toString().should.equal(str);
  });

  it('should input/output JSON', function() {
    var json = JSON.stringify({
      address: 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq',
      message: 'Donation for project xyz',
      label: 'myLabel',
      other: 'xD'
    });
    JSON.stringify(URI.fromObject(JSON.parse(json))).should.equal(json);
  });

  it('should support numeric amounts', function() {
    var uri = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=12.10001');
    expect(uri.amount).to.be.equal(1210001000);
  });

  it('should support extra arguments', function() {
    var uri = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?' +
                      'message=Donation%20for%20project%20xyz&label=myLabel&other=xD');

    should.exist(uri.message);
    uri.message.should.equal('Donation for project xyz');

    should.exist(uri.label);
    uri.label.should.equal('myLabel');

    should.exist(uri.extras.other);
    uri.extras.other.should.equal('xD');
  });

  it('should generate a valid URI', function() {
    new URI({
      address: 'MXsuixj3ahmXYnbdDXCx83FvWYJdgKLpNr',
    }).toString().should.equal(
      'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq'
    );

    new URI({
      address: 'MXsuixj3ahmXYnbdDXCx83FvWYJdgKLpNr',
      amount: 110001000,
      message: 'Hello World',
      something: 'else'
    }).toString().should.equal(
      'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=1.10001&message=Hello%20World&something=else'
    );

  });

  it('should be case insensitive to protocol', function() {
    var uri1 = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');
    var uri2 = new URI('matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq');

    uri1.address.toString().should.equal(uri2.address.toString());
  });

  it('writes correctly the "r" parameter on string serialization', function() {
    var originalString = 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq?amount=0.1&' +
                         'r=https%3A%2F%2Ftest.bitpay.com%2Fi%2F6DKgf8cnJC388irbXk5hHu';
    var uri = new URI(originalString);
    uri.toString().should.equal(originalString);
  });

  it('displays nicely on the console (#inspect)', function() {
    var uri = 'matrixbit:qqrsvl0mxgmedtnzgu7hwwerjy680j2m3y0apfgyuq';
    var instance = new URI(uri);
    instance.inspect().should.equal('<URI: ' + uri + '>');
  });

  it('fails early when fromString isn\'t provided a string', function() {
    expect(function() {
      return URI.fromString(1);
    }).to.throw();
  });

  it('fails early when fromJSON isn\'t provided a valid JSON string', function() {
    expect(function() {
      return URI.fromJSON('¹');
    }).to.throw();
  });
});

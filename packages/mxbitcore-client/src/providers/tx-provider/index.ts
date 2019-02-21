import { BTCTxProvider } from './btc'
import { BCHTxProvider } from './bch';
import { MXBITTxProvider } from './mxbit';
const providers = {
  BTC: new BTCTxProvider(),
  BCH: new BCHTxProvider(),
  MXBIT: new MXBITTxProvider(),
};

export class TxProvider {
  get({ chain }) {
    return providers[chain];
  }

  create(params) {
    return this.get(params).create(params);
  }

  sign(params) {
    return this.get(params).sign(params);
  }

  getSigningAddresses(params) {
    return this.get(params).getSigningAddresses(params);
  }
}

export default new TxProvider();

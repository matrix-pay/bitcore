module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  MXBIT: {
    lib: require('bitcore-lib-matrixbit'),
    p2p: require('bitcore-p2p-matrixbit'),
  },
}

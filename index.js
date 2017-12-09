var Bitcore = require('bitcore-lib')
var QRCode = require('react-qr')
var React = require('react')

var BitcoinQRCode = ({ address, amount, message, label }) => {
  if (!address) {
      return (<div className='react-bitcoin-qr react-bitcoin-qr-no-address'></div>)
  }

  var uri = new Bitcore.URI({
      address: address,
      amount: amount,
      message: message,
      label: label
  })

  return (<div className='react-bitcoin-qr'><a href={uri.toString()} target='_blank'><QRCode text={uri.toString()} /></a></div>)
}

module.exports = BitcoinQRCode

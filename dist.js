'use strict';

var Bitcore = require('bitcore-lib');
var QRCode = require('react-qr');
var React = require('react');

var BitcoinQRCode = function BitcoinQRCode(_ref) {
    var address = _ref.address,
        amount = _ref.amount,
        message = _ref.message,
        label = _ref.label;

    if (!address) {
        return React.createElement('div', { className: 'react-bitcoin-qr react-bitcoin-qr-no-address' });
    }

    var uri = new Bitcore.URI({
        address: address,
        amount: amount,
        message: message,
        label: label
    });

    return React.createElement(
        'div',
        { className: 'react-bitcoin-qr' },
        React.createElement(
            'a',
            { href: uri.toString(), target: '_blank' },
            React.createElement(QRCode, { text: uri.toString() })
        )
    );
};

module.exports = BitcoinQRCode;


var Bitcore = require('bitcore-lib')
var QRCode = require('react-qr')
var React = require('react')

var BitcoinQRCode = React.createClass({
    render: function () {
        var uri = new Bitcore.URI({
            address: this.props.address,
            amount: this.props.amount,
            message: this.props.message,
            label: this.props.label
        })
        
        return (<a href={uri.toString()} target='_blank'><QRCode text={uri.toString()} /></a>)
    }
})

module.exports = BitcoinQRCode

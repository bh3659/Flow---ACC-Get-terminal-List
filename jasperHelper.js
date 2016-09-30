

var soap = require('soap');

module.exports = {
	createClient1: function(url, options, callback){
		soap.createClient(url,options, function(err, client) {
            callback(err, client);
        });
	},
	createWSSecurity1: function(username, password){
		return new soap.WSSecurity(username, password);
	},
	initArgs1: function(args, msg){
		return {
        	messageId : 'id',
        	version : '1.0',
        	licenseKey : msg.apiLicenseKey || args.apiLicenseKey
		};
	},
	parseError1: function(err){
		try{
			return JSON.stringify(err.root.Envelope.Body.Fault.detail);
		}
		catch(ex){
			return err;
		}
	},
	handleError1: function(node, err, msg) {
	    node.error(err);
        console.log(err);
	    //msg.error = err;
	    if (msg) {node.send(msg)};
	}
}


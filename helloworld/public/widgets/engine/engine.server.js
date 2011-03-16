jojo.ns("hellojojo");
var sys = require("sys");

hellojojo.engine = jojo.widget.create({
	name: "hellojojo.engine",
	path: "widgets/engine/",
	prototype: {
		initialize: function($super, options) {
			$super(options);
		},
		doSomething: jojo.widget.serverMethod(function(client, arg1, arg2) {
			var x = jojo.logger;

			var y = {
				foo: 5,
				bar: "biz"
			};
    			if( jojo.logger ) {
    				jojo.logger.log("=-=-=-=-=");
    				jojo.logger.log(" serverside hello ");
				jojo.logger.log("   " + arg1 + " == " + arg2 );
				jojo.logger.log(JSON.stringify(y));
				jojo.logger.log(client.name);
				jojo.logger.flush();
			}    	
			return({
				msg: 'Hello jojo World!',
				clientArg1: arg1,
				clientArg2: arg2
			});
    		})
	}		
});

jojo.ns("hellojojo");

hellojojo.engine = jojo.widget.create({
	name: "hellojojo.engine",
	path: "widgets/engine/",
	prototype: {
		initialize: function($super, options) {
			$super(options);
		},
    doSomething: jojo.widget.serverMethod(function(client, arg1, arg2) {
    	
    	if( jojo.logger ) {
    		jojo.logger.log("=-=-=-=-=");
    		jojo.logger.log(" serverside hello ");
		}    	
    	//jojo.logger.log(JSON.stringify(jojo.req.session));
      //return {
      //  clientArg1: arg1,
      //  clientArg2: arg2
      //};
    })
	}		
});
